from pathlib import Path
import json,urllib.parse
root=Path(__file__).resolve().parent.parent
models={k:json.loads((root/f'dist/models/{k}/atlas.json').read_text())['parts'] for k in ['body','female']}
overrides={'Left biceps brachii':'Long head of left biceps brachii','Left deltoid':'Acromial part of left deltoid','Left infraspinatus':'Left infraspinatus muscle'}
paths={'Skeleton':'skeletal/','Muscles':'muscular/','Nervous system':'nervous/organization/cns.html','Special senses':'https://www.nei.nih.gov/learn-about-eye-health/healthy-vision/how-eyes-work','Respiratory':'respiratory/passages/','Heart & circulation':'cardiovascular/heart/structure.html','Digestive':'digestive/regions/','Urinary':'urinary/components/','Male reproductive':'reproductive/male/','Female reproductive':'reproductive/female/','Endocrine & lymphatic':'endocrine/'}
questions=[];structures=[]
for i,line in enumerate((root/'scripts/question-facts.txt').read_text().splitlines()):
 name,model,topic,location,function,relation,feature,extra=line.split('|');custom,answer=extra.split('~')
 target=overrides.get(name,name)
 if model in models:
  part=next(p for p in models[model] if p['name']==target)
  url=f'{model}.html?'+urllib.parse.urlencode({'part':part['id']})
 else:url='index.html?'+urllib.parse.urlencode({'model':'layers' if model=='layers' else 'internal','part':target})
 source=paths[topic];source=source if source.startswith('https') else 'https://training.seer.cancer.gov/anatomy/'+source
 if name=='Spleen':source='https://training.seer.cancer.gov/anatomy/lymphatic/components/spleen.html'
 if 'thymus' in name:source='https://training.seer.cancer.gov/anatomy/lymphatic/components/thymus.html'
 note=('This is a teaching schematic of heart-wall layers, not an anatomically shaped heart.' if model=='layers' else f'The model selects {target}, a component of the structure discussed.' if target!=name else f'The 3D view selects {target}.')
 facts=[('Location',f'Where is the {name.lower()} located?',location,relation+'. '+feature+'.'),('Function',f'What is a main function of the {name.lower()}?',function,location+'. '+feature+'.'),('Relationships',f'Describe an important anatomical relationship of the {name.lower()}.',relation,location+'. '+function+'.'),('Structure',f'What structural feature helps you recognise the {name.lower()}?',feature,relation+'. '+function+'.'),('Recall',f'{name}: {custom}',answer,feature+'. '+relation+'.')]
 structures.append({'name':name,'model':model,'target':target,'url':url,'topic':topic})
 for j,(kind,prompt,ans,explanation) in enumerate(facts):
  qid=f'Q{i*5+j+1:03}'
  questions.append({'id':qid,'topic':topic,'structure':name,'kind':kind,'prompt':prompt,'answer':ans.rstrip('.')+'.','explanation':explanation,'source':source,'sourceName':'National Eye Institute · Eye anatomy' if topic=='Special senses' else 'NCI SEER · Anatomy & Physiology','model':model,'target':target,'modelNote':note,'url':url+'&question='+qid})
assert len(questions)==500
assert len({q['prompt'] for q in questions})==500
(root/'dist/questions.json').write_text(json.dumps({'version':1,'reviewStatus':'Original study questions; educator review pending. Not an official examination question bank.','questions':questions},ensure_ascii=False,separators=(',',':')))
(root/'dist/question-structures.json').write_text(json.dumps(structures,ensure_ascii=False))
print(f'Built {len(questions)} questions across {len(structures)} structures and {len(paths)} topics; every model target resolved.')
