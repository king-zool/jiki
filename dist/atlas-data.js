export const descriptions={
'Right atrium':['Chambers','Receives venous blood from the body and the coronary sinus.','Yana karɓar jinin da ya dawo daga jiki da kuma daga coronary sinus.'],
'Left atrium':['Chambers','Receives blood returning from the lungs.','Yana karɓar jinin da ya dawo daga huhu.'],
'Right ventricle':['Chambers','Sends blood into the pulmonary circulation.','Yana tura jini zuwa zagayar jini ta huhu.'],
'Left ventricle':['Chambers','Drives blood through the systemic circulation.','Yana tura jini zuwa sassan jiki.'],
'Mitral valve':['Valves','The two-leaflet valve between the left atrium and ventricle.','Bawul mai ƙofofi biyu tsakanin left atrium da left ventricle.'],
'Tricuspid valve':['Valves','The three-leaflet valve between the right atrium and ventricle.','Bawul mai ƙofofi uku tsakanin right atrium da right ventricle.'],
'Aortic valve':['Valves','Guards the outlet from the left ventricle to the aorta.','Yana kula da hanyar fita daga left ventricle zuwa aorta.'],
'Pulmonary valve':['Valves','Guards the outlet from the right ventricle to the pulmonary trunk.','Yana kula da hanyar fita daga right ventricle zuwa pulmonary trunk.'],
'Interventricular septum':['Internal supports','The wall separating the ventricles.','Bangon da yake raba ɗakunan ƙasa na zuciya.'],
'Papillary muscles':['Internal supports','Anchor the chordae tendineae, supporting the atrioventricular valves during contraction.','Suna riƙe chordae tendineae domin tallafa wa bawulolin tsakanin atria da ventricles lokacin matsewar zuciya.'],
'Aorta':['Great vessels','The main arterial route from the left ventricle to the body.','Babbar hanyar jini daga left ventricle zuwa sassan jiki.'],
'Vena cava':['Great vessels','Returns systemic venous blood to the right atrium.','Tana dawo da jini daga jiki zuwa right atrium.'],
'Pulmonary arteries':['Great vessels','Carry blood from the right ventricle toward the lungs.','Suna ɗaukar jini daga right ventricle zuwa huhu.'],
'Pulmonary veins':['Great vessels','Return blood from the lungs to the left atrium.','Suna dawo da jini daga huhu zuwa left atrium.'],
'Coronary arteries':['Coronary circulation','Supply the heart muscle itself.','Suna kai jini ga tsokar zuciya kanta.'],
'Cardiac veins':['Coronary circulation','Drain the heart muscle; most return through the coronary sinus.','Suna karɓar jini daga tsokar zuciya; mafi yawansu suna bi ta coronary sinus.'],
'Coronary sinus':['Coronary circulation','Collects much of the heart’s venous drainage and opens into the right atrium.','Yana tara yawancin jinin da ya dawo daga tsokar zuciya, sannan ya shiga right atrium.'],
'Epicardium':['Wall layers','The outer heart-wall layer, also called visceral serous pericardium.','Shafin waje na bangon zuciya; ana kuma kiransa visceral serous pericardium.'],
'Myocardium':['Wall layers','The muscular middle layer responsible for contraction.','Tsokar da ke tsakiyar bangon zuciya, wadda take matsewa.'],
'Endocardium':['Wall layers','The inner lining of the chambers and valve surfaces.','Shafin cikin ɗakunan zuciya da saman bawuloli.'],
'Pericardial sac':['Wall layers','The surrounding protective sac. The diagram separates it from the heart wall.','Jakar da ke kewaye da zuciya tana kare ta. An nuna ta dabam da bangon zuciya a wannan zane.'],
'Pericardial cavity':['Wall layers','A potential space containing lubricating fluid between the serous pericardial layers.','Sarari mai ruwan rage gogayya tsakanin shafukan serous pericardium.']
};
export const hraNames={VH_M_left_cardiac_atrium:'Left atrium',VH_M_right_cardiac_atrium:'Right atrium',VH_M_heart_right_ventricle:'Right ventricle',VH_M_heart_left_ventricle:'Left ventricle',VH_M_interventricular_septum:'Interventricular septum',VH_M_mitral_valve:'Mitral valve',VH_M_tricuspid_valve:'Tricuspid valve',VH_M_aortic_valve:'Aortic valve',VH_M_pulmonary_valve:'Pulmonary valve',VH_M_papillary_muscle_of_heart_anterior:'Anterior papillary muscle',VH_M_papillary_muscle_of_heart_anterolateral:'Anterolateral papillary muscle',VH_M_papillary_muscle_of_heart_medial:'Medial papillary muscle',VH_M_papillary_muscle_of_heart_posterior:'Posterior papillary muscle',VH_M_papillary_muscle_of_heart_posteromedial:'Posteromedial papillary muscle'};
export function describe(name){if(descriptions[name])return descriptions[name];if(/papillary/i.test(name))return descriptions['Papillary muscles'];if(/cavity of (right|left) (atrium|ventricle)/i.test(name))return descriptions[name.replace('Cavity of ','').replace(/^./,c=>c.toUpperCase())];if(/aorta/i.test(name))return descriptions.Aorta;if(/vena cava/i.test(name))return descriptions['Vena cava'];if(/pulmonary.*vein/i.test(name))return descriptions['Pulmonary veins'];if(/pulmonary/i.test(name))return descriptions['Pulmonary arteries'];if(/coronary sinus/i.test(name))return descriptions['Coronary sinus'];if(/coronary|diagonal|LAD/i.test(name))return descriptions['Coronary arteries'];if(/vein/i.test(name))return descriptions['Cardiac veins'];return ['Heart wall','The muscular wall surrounding the heart chambers.','Bangon tsoka da yake kewaye da ɗakunan zuciya.'];}
