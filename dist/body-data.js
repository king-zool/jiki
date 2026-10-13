export const systems={
 skeletal:{name:'Skeleton',ha:'Ƙasusuwa',color:'#dfd4b1',en:'Supports the body and protects organs.',text:'Yana tallafa wa jiki, yana kare gaɓoɓi.'},
 muscular:{name:'Muscles',ha:'Tsokoki',color:'#c37f70',en:'Produces movement.',text:'Suna samar da motsi.'},
 arterial:{name:'Arteries',ha:'Arteries',color:'#cb6056',en:'Carry blood away from the heart.',text:'Suna ɗaukar jini daga zuciya.'},
 venous:{name:'Veins',ha:'Veins',color:'#749bbb',en:'Carry blood toward the heart.',text:'Suna kawo jini zuwa zuciya.'},
 nervous:{name:'Nervous tissue',ha:'Jijiyoyin saƙo',color:'#d6b765',en:'Carries and processes signals.',text:'Yana ɗauka da sarrafa saƙonni.'},
 respiratory:{name:'Respiratory',ha:'Numfashi',color:'#b996ad',en:'Enables breathing and gas exchange.',text:'Yana taimaka wa numfashi da musayar iskar gas.'},
 digestive:{name:'Digestive',ha:'Narkar da abinci',color:'#c59b71',en:'Processes food and absorbs nutrients.',text:'Yana narkar da abinci da tsotse sinadaransa.'},
 sensory:{name:'Special senses',ha:'Gaɓoɓin ji',color:'#99baba',en:'Includes structures for specialised senses.',text:'Ya ƙunshi gaɓoɓin ji na musamman.'},
 connective:{name:'Connective tissues',ha:'Kyallen haɗin jiki',color:'#b6c2a7',en:'Supports and connects structures.',text:'Yana haɗa sassan jiki da tallafa musu.'},
 cardiac:{name:'Heart',ha:'Zuciya',color:'#d08a80',en:'Pumps blood.',text:'Tana tura jini.'},
 reproductive:{name:'Male reproductive',ha:'Haihuwa na namiji',color:'#bda3ce',en:'Supports sperm production and transport.',text:'Yana taimaka wa samarwa da jigilar maniyyi.'},
 urinary:{name:'Urinary',ha:'Fitsari',color:'#b68c69',en:'Forms, transports and removes urine.',text:'Yana samarwa, jigila da fitar da fitsari.'},
 integumentary:{name:'Skin & hair',ha:'Fata da gashi',color:'#c6a787',en:'Forms the external covering.',text:'Yana rufe jiki daga waje.'},
 endocrine:{name:'Endocrine',ha:'Glandunan hormones',color:'#cab27e',en:'Releases hormones.',text:'Yana sakin hormones.'},
 lymphatic:{name:'Lymphatic reference',ha:'Lymphatic',color:'#8fa885',en:'Contributes to immune defence.',text:'Yana taimaka wa kariyar jiki.'}
};
export const presets={overview:['skeletal','respiratory','digestive','cardiac','urinary','reproductive','endocrine','lymphatic','sensory'],skeleton:['skeletal'],muscles:['skeletal','muscular'],organs:['respiratory','digestive','cardiac','urinary','reproductive','endocrine','lymphatic'],vessels:['arterial','venous','cardiac'],nerves:['nervous','sensory'],all:Object.keys(systems)};
export const tour=[
{title:'Orient yourself',ha:'Gane inda sassan jiki suke',preset:'overview',find:'Urinary bladder',instruction:'Rotate from front to back. In the front view, the model’s left side is on your right. Select the urinary bladder to locate the pelvis.',task:'I can distinguish the model’s left and right.'},
{title:'Find the framework',ha:'Duba ƙasusuwan jiki',preset:'skeleton',find:'Left femur',instruction:'Find the left femur. Isolate it, then restore the skeleton to see its relationship to the pelvis and knee.',task:'I located and isolated the left femur.'},
{title:'Look beneath the muscles',ha:'Duba abin da ke ƙarƙashin tsokoki',preset:'muscles',find:'Left biceps brachii',instruction:'Explore the muscles. Select a muscle and hide it. Use Undo hide to bring it back; try separating the parts.',task:'I used hide, undo and the separation control.'},
{title:'Explore the breathing structures',ha:'Duba sassan numfashi',preset:'organs',find:'Trachea',instruction:'Find the trachea, then switch on only the respiratory group. Rotate the model and follow its branching structures.',task:'I explored the respiratory group in 3D.'},
{title:'Trace the urinary structures',ha:'Duba sassan fitsari',preset:'organs',find:'Left kidney',instruction:'Choose the urinary group only. Locate a kidney, its ureter, the urinary bladder and the urethra. Click each name to focus it.',task:'I located the kidney, ureter, bladder and urethra.'},
{title:'Explore male reproductive anatomy',ha:'Duba sassan haihuwa na namiji',preset:'organs',find:'Prostate',instruction:'Choose the male reproductive group only. Locate the prostate, a testis, an epididymis and a deferent duct. Add the urinary group to inspect their spatial relationships.',task:'I located the main modelled male reproductive structures.'}
];
export function searchParts(parts,query,system='all',systemDefs=systems) {const words=query.toLowerCase().trim().split(/\s+/).filter(Boolean);return parts.filter(p=>(system==='all'||p.system===system)&&words.every(w=>(p.name+' '+p.id+' '+p.conceptId+' '+p.system+' '+systemDefs[p.system].name+' '+systemDefs[p.system].ha).toLowerCase().includes(w)))}
export function presetSet(key){return new Set(presets[key]||presets.overview)}
