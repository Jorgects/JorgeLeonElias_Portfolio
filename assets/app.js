const views={home:document.querySelector('#home'),work:document.querySelector('#work'),project:document.querySelector('#project'),about:document.querySelector('#about'),contact:document.querySelector('#contact')};
const backdrop=document.querySelector('.backdrop-image');
const preview=document.querySelector('.work-preview');
const cursor=document.querySelector('.project-cursor');
const previewImage=document.querySelector('#work-preview-image');
const transition=document.querySelector('.transition');

const projectData={
 lotf2:{
  title:'Lords of the Fallen II',
  kicker:'CI Games',
  role:'Technical Game Designer · Unreal Engine 5',
  year:'2025 - CURRENT',
  image:'images/projects/lotf2_top.jpg',
  caption:'Lords of the Fallen II — official gameplay imagery',
  statement:'Technical design at the point where systems, implementation and player experience meet.',
  body:'I joined Lords of the Fallen II during mid-development as a Technical Game Designer, working as part of a large multidisciplinary team on a new entry in the Lords of the Fallen series. My work spans a broad range of gameplay systems, with a particular focus on the game’s Umbral experience.\n\nAs part of the Umbral team, I work closely with design and other disciplines to take gameplay ideas from early concepts through prototyping, implementation and iteration. This includes designing and balancing systems, prototyping new features in Unreal Engine, working on AI and player progression, and supporting onboarding, tutorials and the game’s trial experience.\n\nAlongside feature development, I contribute to the implementation and iteration of player items, progression and other gameplay systems, as well as extensive debugging and polish across gameplay, AI, quests, UI and audiovisual features.',
  highlightTitle:'RESHAPING THE UMBRAL EXPERIENCE',
  highlightBody:'One of the central design challenges I have worked on is the role of Umbral in the player’s overall experience. Following the previous game, we wanted to make engaging with Umbral feel more like a meaningful gameplay choice rather than something players simply wanted to leave as quickly as possible.\n\nAs one of the main designers working on the Umbral experience, I have been responsible for designing, prototyping and iterating on features intended to improve this relationship. Much of this work involves exploring how systems can create incentives for players to engage with Umbral while maintaining the tension and risk that make the experience distinctive.\n\nWorking directly in Unreal Engine, I take these ideas from early prototypes through implementation and repeated iteration, collaborating with the wider team to evaluate how they affect the overall player experience. The result is an ongoing process of tuning Umbral so that it becomes a more deliberate part of how players approach the game rather than simply another state they pass through.',
  highlightKicker:'SIGNATURE CONTRIBUTION',
  video:'https://www.youtube.com/embed/7ncv_eS96lw',
  steam:'4767480',
  gallery:[{src:'images/projects/lotf2_top.jpg',position:'top'},{src:'images/projects/lotf2_bottomleft.jpg',position:'bottom-left'},{src:'images/projects/lotf2_bottomright.jpg',position:'bottom-right'}]
 },
 survive:{
  title:'Project Survive',
  kicker:'CI Games',
  role:'Systems Game Designer · Unreal Engine 5',
  year:'2023 - 2025',
  image:'images/survive.jpg',
  caption:'Unannounced survival project',
  statement:'Designing the systems behind a survival game — and building the prototypes that prove they work.',
  body:'I joined Project Survive during the early stages of development, working as a Systems Game Designer on an unannounced first-person survival game. As part of a large multidisciplinary team, my work focused on turning the game’s early concepts into playable systems and establishing the player’s initial experience.\n\nMy responsibilities covered onboarding and early-game progression, gameplay systems, combat, AI and implementation. I designed and implemented quests and the first stages of the player experience, while also working on weapon systems, enemy behaviours and the progression of features through the game’s early gameplay.\n\nA significant part of the work involved prototyping directly in Unreal Engine, using Blueprints and Data Assets to iterate quickly and validate systems before they were developed further. I also worked across narrative presentation and the structure of the early vertical-slice experience, collaborating with other disciplines to make the different systems come together as a coherent first experience.',
  highlightTitle:'BUILDING THE FIRST PLAYABLE EXPERIENCE',
  highlightBody:'One of the main challenges was establishing how the different systems of the game would be introduced to the player without overwhelming them. I worked on the onboarding flow and early quests, defining when new mechanics and features became available and how the player was introduced to them through gameplay.\n\nThis involved connecting several systems together (quests, progression, combat, AI and narrative beats) while iterating directly in-engine. Rather than treating onboarding as a sequence of tutorials, the goal was to make the early game itself demonstrate how the different systems worked and gradually expand the player’s possibilities.',
  highlightKicker:'SIGNATURE CONTRIBUTION',
  gallery:[]
 },
 rewilders:{
  title:'Wilderings: The Lost Spring',
  kicker:'Herobeat Studios',
  role:'Principal Game Designer · Unreal Engine 5',
  year:'2022 — 2023',
  image:'images/projects/rewilders_top.jpg',
  caption:'Wilderings: The Lost Spring — early project development',
  statement:'Defining a combat-focused game from its earliest concepts while keeping its ecological themes at the heart of the experience.',
  body:'I joined Wilderings: The Lost Spring at the very beginning of development, working closely with creative direction to establish the concept and core gameplay of the studio’s first combat-focused project. As Principal Game Designer within a two-person design team, I worked across the game’s structure, core loops, progression, combat and moment-to-moment gameplay, taking the project from early concepts into playable prototypes.\n\nMy work covered a broad range of systems during this phase, including combat design and balancing, AI design and implementation, traversal abilities and level blockouts. Much of the development process was centred around prototyping in Unreal Engine, using Blueprints and Data Assets to quickly test and iterate on the game’s core mechanics.',
  highlightTitle:'TURNING THE GAME’S THEMES INTO GAMEPLAY',
  highlightBody:'One of the key design challenges was reconciling the game’s eco-conscious themes with a combat-focused experience. We wanted the player to interact with nature as an important part of the gameplay without making those interactions feel like conventional, disconnected resource collection.\n\nI designed the nectar-gathering system around the player’s existing combat verbs instead of introducing a separate interaction button. Attacks could interact with nearby plants, with different attacks producing different gathering patterns. For example, a light attack collecting from plants directly in front of the player, while a jump attack could gather nectar across an area.\n\nWorking with creative direction, animation and VFX, we shaped these interactions so that they felt less like attacking plants and more like the character moving and interacting naturally with them. This allowed a resource-gathering mechanic to become part of the game’s existing movement and combat language, while also giving players small decisions about how they gathered resources.',
  highlightKicker:'SIGNATURE CONTRIBUTION',
  gallery:[{src:'images/projects/rewilders_top.jpg',position:'top'},{src:'images/projects/rewilders_bottomleft.jpg',position:'bottom-left'},{src:'images/projects/rewilders_bottomright.jpg',position:'bottom-right'}],
  video:'https://www.youtube.com/embed/xGlxub_wJDU',
  steam:'2217470'
 },
 endling:{
  title:'Endling: Extinction Is Forever',
  kicker:'Herobeat Studios',
  role:'Technical Game Designer · Unreal Engine 4',
  year:'2021 — 2022',
  image:'images/projects/endling_top.jpg',
  caption:'Endling: Extinction Is Forever',
  statement:'Taking gameplay ideas from design intent to working implementation.',
  body:'I joined Endling: Extinction Is Forever during mid-development, working as part of a multidisciplinary team on the game’s technical and systems design. My work covered a broad range of gameplay and authored experiences, from survival balancing and player progression to cinematic design and implementation.\n\nA major part of my work involved the game’s visual storytelling. Endling was built around a “show, don’t tell” philosophy, with no dialogue or traditional text-driven storytelling. I worked closely with direction and art to design and implement bespoke camera sequences and cinematic moments, using camera movement and composition to communicate what was happening without words.\n\nAlongside this, I worked across survival balancing, enemy placement, UX and gameplay systems, including how resources and the environment changed as the fox’s habitat was progressively consumed by human expansion.',
  highlightTitle:'GIVING THE PLAYER CONTROL OVER THE THREAT',
  highlightBody:'One of the systems I designed and implemented was a side-quest system built around the Furrier, one of the game’s main antagonists. The publisher wanted to give players more reasons to explore the world on nights when there was no main scent to follow, but I wanted the system to serve a gameplay purpose beyond simply adding optional content.\n\nThe system allowed players to discover specific locations where they could lure the Furrier. Marking a location caused him to focus his attention there, reducing the chance of encountering him elsewhere in the world. If the player ignored the opportunity, he remained free to roam and could potentially encounter the fox at other locations.\n\nI designed and implemented the system across the quest logic, AI behaviour, spawning and movement, while also using the locations to naturally guide players towards areas where other events were taking place. This connected the side quest to the game’s existing structure: players were given an optional activity, but completing it also allowed them to actively manage one of the threats affecting their survival.',
  highlightKicker:'SIGNATURE CONTRIBUTION',
  gallery:[{src:'images/projects/endling_top.jpg',position:'top'},{src:'images/projects/endling_bottomleft.jpg',position:'bottom-left'},{src:'images/projects/endling_bottomright.jpg',position:'bottom-right'}],
  video:'https://www.youtube.com/embed/kiM2_XB_HZE',
  steam:'898890'
 },
 experiments:{
  title:'Bandit Trail',
  kicker:'Personal / University Project',
  role:'Game Design · Programming · Audio  · Unreal Engine 4',
  year:'2020',
  image:'images/projects/bandit_trail.jpg',
  caption:'Bandit Trail — university prototype',
  statement:'A one-week vertical slice built by a two-person team from concept to playable prototype.',
  body:'Bandit Trail was a small endless-runner prototype developed as part of my university course. Built by a two-person team over roughly one week, the project was designed as a rapid vertical slice for a potential mobile game.\n\nWith such a small team and a very short development window, I worked across the project rather than within a single discipline: designing the gameplay, programming the systems, integrating third-party art assets, and creating the game’s sound and music. I also recorded the music used in the prototype.',
  video:'https://www.youtube.com/embed/gjWX0_mF_vU',
  gallery:[]
 }
};

const bgMap={home:'images/bg.jpg',lotf2:'images/projects/lotf2_top.jpg',survive:'images/survive.jpg',rewilders:'images/projects/rewilders_top.jpg',endling:'images/projects/endling_top.jpg',experiments:'images/Endling4.jpg',about:'images/bg.jpg',contact:'images/bg.jpg'};
function setBackground(key){backdrop.style.backgroundImage=`url("${bgMap[key]||bgMap.home}")`;backdrop.style.transform='scale(1.05)';setTimeout(()=>backdrop.style.transform='scale(1.03)',30)}
function resetCursor(){if(!cursor)return;cursor.classList.remove('visible');cursor.style.left='-100px';cursor.style.top='-100px'}
function activate(id,animate=true){const target=views[id]||views.home;resetCursor();document.querySelectorAll('[data-view]').forEach(v=>v.classList.remove('active'));target.classList.add('active');document.body.classList.toggle('content-active',id==='project');document.body.classList.toggle('about-active',id==='about');setBackground(id);if(animate){transition.classList.remove('run');void transition.offsetWidth;transition.classList.add('run')}target.scrollTop=0;}
function route(id,project){if(project){fillProject(project);activate('project');history.pushState({id:'project',project},'',`#project/${project}`)}else{activate(id);history.pushState({id},'',`#${id}`)}}
function fillProject(key){
 const d=projectData[key]||projectData.endling;
 document.querySelector('#project-kicker').textContent=d.kicker;
 document.querySelector('#project-title').textContent=d.title;
 document.querySelector('#project-role').textContent=d.role;
 document.querySelector('#project-year').textContent=d.year;
 const topGalleryItem=Array.isArray(d.gallery)?d.gallery.find(item=>typeof item==='object'&&item.position==='top'):null;
 const heroSrc=topGalleryItem?topGalleryItem.src:d.image;
 const img=document.querySelector('#project-image');
 const imageWrap=document.querySelector('.project-image');
 if(heroSrc){img.src=heroSrc;img.alt=d.title;imageWrap.style.display='flex';document.querySelector('#project-image-caption').textContent=d.caption||'';}
 else{img.removeAttribute('src');img.alt='';document.querySelector('#project-image-caption').textContent='';imageWrap.style.display='none';}
 document.querySelector('#project-statement').textContent=d.statement;
 document.querySelector('#project-body').innerHTML=d.body.split('\n\n').map(p=>`<p>${p}</p>`).join('') + (d.highlightBody ? `<div class="project-highlight"><div class="project-highlight-kicker">${d.highlightKicker||'SIGNATURE CONTRIBUTION'}</div><h3>${d.highlightTitle}</h3>${d.highlightBody.split('\n\n').map(p=>`<p>${p}</p>`).join('')}</div>` : '');
 const media=document.querySelector('#project-media');
 let mediaHtml='';
 if(d.video){mediaHtml+=`<div class="project-media-block"><div class="media-label">VIDEO</div><div class="project-video"><iframe src="${d.video}" title="${d.title} video" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></div>`}
 if(d.steam){mediaHtml+=`<div class="project-media-block steam-block"><div class="media-label">AVAILABLE ON STEAM</div><div class="project-steam"><iframe src="https://store.steampowered.com/widget/${d.steam}/" title="${d.title} on Steam" loading="lazy" frameborder="0"></iframe></div></div>`}
 media.innerHTML=mediaHtml;
 document.querySelector('#project-gallery').innerHTML=d.gallery.filter(item=>!(typeof item==='object'&&item.position==='top')).map(item=>{const src=typeof item==='string'?item:item.src;const position=typeof item==='string'?'':` ${item.position||''}`;return `<img class="gallery-image${position}" src="${src}" alt="${d.title} project image" loading="lazy">`}).join('');
 setBackground(key)
}

document.querySelectorAll('[data-route]').forEach(el=>el.addEventListener('click',()=>route(el.dataset.route)));
function showCursor(){cursor.classList.add('visible')}
function hideCursor(){cursor.classList.remove('visible')}
document.querySelectorAll('.cursor-target').forEach(el=>{el.addEventListener('mouseenter',showCursor);el.addEventListener('mouseleave',hideCursor)});
document.querySelectorAll('.work-item').forEach(item=>{item.addEventListener('mouseenter',()=>{showCursor();const key=item.dataset.project;const d=projectData[key];if(preview&&d){const src=(Array.isArray(d.gallery)?(d.gallery.find(x=>typeof x==='object'&&x.position==='top')||{}).src:d.image)||d.image;preview.style.backgroundImage=`url("${src}")`;const label=preview.querySelector('.preview-label span');if(label)label.textContent=item.querySelector('.work-number')?.textContent||'';}});item.addEventListener('mouseleave',()=>{hideCursor()});item.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});item.addEventListener('click',()=>route('project',item.dataset.project))});
document.addEventListener('mousemove',e=>{if(cursor.classList.contains('visible')){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'}});
window.addEventListener('popstate',()=>parseHash(false));
function parseHash(animate=true){const h=location.hash.replace('#','')||'home';if(h.startsWith('project/')){const key=h.split('/')[1];fillProject(key);activate('project',animate)}else if(views[h])activate(h,animate);else activate('home',false)}
parseHash(false);
