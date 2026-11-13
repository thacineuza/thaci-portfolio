(() => {
  'use strict';
  const data = window.PORTFOLIO_DATA;
  if (!data) { console.error('PORTFOLIO_DATA não encontrado. Verifique data/portfolio-data.js.'); return; }

  const categoryOrder = ['all', 'modeling', 'animation', 'vr', 'concept'];
  const categoryLabels = {
    pt: { all:'Todos',modeling:'Modelagem',animation:'Animação',sculpting:'Escultura',vr:'VR',characters:'Personagens',concept:'Concept Art' },
    en: { all:'All',modeling:'Modeling',animation:'Animation',sculpting:'Sculpting',vr:'VR',characters:'Characters',concept:'Concept Art' }
  };
  const i18n = {
    pt: {
      'skip':'Pular para projetos','backToTop':'Voltar ao topo',
      'nav.projects':'Projetos','nav.about':'Sobre mim','nav.journey':'Trajetória','nav.contact':'Contato',
      'photo.label':'ESPAÇO PARA FOTO','photo.portrait':'Seu retrato aqui','photo.about':'Uma foto minha por aqui',
      'hero.artLabel':'ESPAÇO PARA ARTE 3D','hero.artCaption':'Uma composição dos meus personagens e criaturas',
      'projects.showAll':'Ver todos os projetos','projects.showLess':'Mostrar apenas os destaques',
      'awards.prev':'Selo anterior','awards.next':'Próximo selo','awards.counter':'Selo',
      'hero.eyebrow':'QUE BOM TER VOCÊ AQUI!',
      'hero.intro':'Oi, eu sou a Thaci. Sou generalista 3D e trabalho com concept art, modelagem, texturização e animação, com foco em jogos.',
      'hero.title1':'Bem-vindo à minha','hero.title2':'vitrine criativa!',
      'hero.cta':'Conheça meus projetos',
      'sections.projects.kicker':'PORTFÓLIO','sections.projects.title':'Meus projetos<span class="title-dot">.</span>',
      'sections.projects.subtitle':'Uma coleção de ideias que viraram pixels, polígonos e histórias.',
      'sections.about.kicker':'POR TRÁS DOS POLÍGONOS','sections.about.title':'Oi, eu sou a <span class="accent">Thaci!</span>',
      'about.p1':'Sou artista 3D generalista, apaixonada por transformar ideias em personagens, criaturas e mundos que ganham vida nos jogos.',
      'about.p2':'Meu trabalho passa por diferentes etapas do processo criativo, desde concept art e modelagem até texturização, rigging e animação. Gosto especialmente de explorar formas, expressões e personalidades através da escultura digital.',
      'about.p3':'Mas minha criatividade não fica só na tela!',
      'about.p4':'Nas horas vagas, adoro experimentar outras formas de arte, como esculturas em porcelana fria, bordado russo e pinturas em aquarela e acrílica. Também gosto de passear com meus cachorros e aproveitar um bom dia de praia.',
      'about.p5':'Acredito que cada experiência, material e técnica traz uma nova maneira de enxergar o mundo e acaba inspirando também o que crio em 3D.',
      'hobbies.title':'Quando não estou criando polígonos...','hobbies.note':'PEQUENAS ALEGRIAS FORA DA TELA',
      'tools.title':'Minha caixa de ferramentas','tools.note':'ONDE A MÁGICA ACONTECE',
      'sections.journey.kicker':'EXPERIÊNCIAS','sections.journey.title':'Meu caminho até aqui<span class="title-dot">.</span>',
      'sections.journey.subtitle':'Clique ou toque nas cartas para descobrir o outro lado.',
      'career.instruction':'Toque nas cartas para virar. No celular, deslize para ver as cinco.',
      'sections.education.kicker':'APRENDIZADO CONTÍNUO','sections.education.title':'Sempre aprendendo<span class="title-dot">.</span>',
      'awards.title':'Destaques &amp; Prêmios','awards.note':'MOMENTOS ESPECIAIS',
      'sections.contact.kicker':'CONTATO','contact.title1':'Tem uma ideia maluca?','contact.title2':'Vamos dar vida a ela!',
      'contact.subtitle':'Curtiu meu trabalho? Vamos conversar sobre um projeto, uma colaboração ou uma ideia nova.',
      'footer.made':'Feito com carinho e muitos polígonos.',
      'cover.pending':'Capa em preparação','cover.open':'Abrir projeto',
      'project.empty':'Ainda não há projetos cadastrados nessa categoria.',
      'career.image':'Imagem em breve','career.period':'Período a preencher','career.role':'Cargo a preencher','career.placeholder':'Experiência',
      'career.flip':'CLIQUE PARA VIRAR ↗','career.back':'Atividades e responsabilidades serão adicionadas aqui.',
      'education.academic':'Formação acadêmica','education.courses':'Cursos',
      'education.academicEmpty':'Espaço reservado para instituição, curso e período.',
      'education.coursesEmpty':'Espaço reservado para cursos, certificados e especializações.',
      'awards.seal':'SELO EM BREVE','awards.desc':'Descrição e selo serão adicionados aqui.',
      'contact.talk':'Vamos conversar','contact.setup':'Botão de contato disponível após adicionar o e-mail',
      'contact.pending':'Em breve','contact.resume':'Currículo em PDF','contact.email':'E-mail',
      'detail.back':'Voltar aos projetos','detail.number':'PROJETO',
      'detail.summary':'Descrição do projeto em preparação. Em breve você poderá conhecer o processo criativo e os detalhes desta peça.',
      'detail.role':'Meu papel','detail.software':'Ferramentas utilizadas','detail.infoPending':'Informação em preparação',
      'detail.gallery':'Por dentro do projeto','detail.galleryEmptyTitle':'Galeria em preparação',
      'detail.galleryEmptyText':'Renders, imagens de processo, wireframes, texturas, vídeos e outros materiais serão adicionados aqui, um abaixo do outro.'
    },
    en: {
      'skip':'Skip to projects','backToTop':'Back to top',
      'nav.projects':'Projects','nav.about':'About me','nav.journey':'Experience','nav.contact':'Contact',
      'photo.label':'PHOTO SPACE','photo.portrait':'Your portrait here','photo.about':'A photo of me goes here',
      'hero.artLabel':'3D ARTWORK SPACE','hero.artCaption':'A composition of my characters and creatures',
      'projects.showAll':'View all projects','projects.showLess':'Show featured projects only',
      'awards.prev':'Previous badge','awards.next':'Next badge','awards.counter':'Badge',
      'hero.eyebrow':'SO GLAD YOU ARE HERE!',
      'hero.intro':"Hi, I'm Thaci, a 3D generalist focused on games, working across concept art, modeling, texturing, and animation.",
      'hero.title1':'Welcome to my','hero.title2':'creative showcase!',
      'hero.cta':'Explore my projects',
      'sections.projects.kicker':'PORTFOLIO','sections.projects.title':'My projects<span class="title-dot">.</span>',
      'sections.projects.subtitle':'A collection of ideas turned into pixels, polygons and stories.',
      'sections.about.kicker':'BEHIND THE POLYGONS','sections.about.title':'Hi, I’m <span class="accent">Thaci!</span>',
      'about.p1':"I'm a 3D generalist artist who loves turning ideas into characters, creatures and worlds that come to life in games.",
      'about.p2':'My work spans the creative process, from concept art and modeling to texturing, rigging and animation. I especially enjoy exploring shapes, expressions and personality through digital sculpting.',
      'about.p3':'But my creativity goes beyond the screen!',
      'about.p4':'In my free time, I love experimenting with other art forms, such as cold porcelain sculptures, punch needle embroidery, watercolor and acrylic painting. I also enjoy walking my dogs and spending a sunny day at the beach.',
      'about.p5':'I believe every experience, material and technique offers a new perspective on the world — and ultimately inspires my 3D work too.',
      'hobbies.title':"When I'm not making polygons...",'hobbies.note':'LITTLE JOYS BEYOND THE SCREEN',
      'tools.title':'My creative toolbox','tools.note':'WHERE THE MAGIC HAPPENS',
      'sections.journey.kicker':'EXPERIENCE','sections.journey.title':'My journey so far<span class="title-dot">.</span>',
      'sections.journey.subtitle':'Click or tap the cards to see the other side.',
      'career.instruction':'Tap to flip the cards. On mobile, swipe to see all five.',
      'sections.education.kicker':'ALWAYS LEARNING','sections.education.title':'Always learning<span class="title-dot">.</span>',
      'awards.title':'Highlights &amp; Awards','awards.note':'SPECIAL MOMENTS',
      'sections.contact.kicker':'CONTACT','contact.title1':'Got a wild idea?','contact.title2':"Let’s bring it to life!",
      'contact.subtitle':'Like my work? Let’s talk about a project, collaboration or a new idea.',
      'footer.made':'Made with love and plenty of polygons.',
      'cover.pending':'Cover coming soon','cover.open':'Open project',
      'project.empty':'No projects have been added to this category yet.',
      'career.image':'Image coming soon','career.period':'Dates to be added','career.role':'Role to be added','career.placeholder':'Experience',
      'career.flip':'CLICK TO FLIP ↗','career.back':'Activities and responsibilities will be added here.',
      'education.academic':'Academic education','education.courses':'Courses',
      'education.academicEmpty':'Space for school, degree and dates.',
      'education.coursesEmpty':'Space for courses, certificates and specializations.',
      'awards.seal':'BADGE COMING SOON','awards.desc':'Description and award badge will be added here.',
      'contact.talk':"Let’s talk",'contact.setup':'Contact button available after adding an email address',
      'contact.pending':'Coming soon','contact.resume':'PDF resume','contact.email':'Email',
      'detail.back':'Back to projects','detail.number':'PROJECT',
      'detail.summary':'Project description coming soon. You will be able to explore the creative process and details of this piece here.',
      'detail.role':'My role','detail.software':'Tools used','detail.infoPending':'Details coming soon',
      'detail.gallery':'Inside the project','detail.galleryEmptyTitle':'Gallery coming soon',
      'detail.galleryEmptyText':'Renders, process images, wireframes, textures, videos and other materials will appear here, one below the other.'
    }
  };
  function getStoredLanguage() { try { return localStorage.getItem('thaci-language') === 'en' ? 'en' : 'pt'; } catch (_) { return 'pt'; } }
  function storeLanguage(lang) { try { localStorage.setItem('thaci-language',lang); } catch (_) {} }
  let language = getStoredLanguage();
  let activeCategory = 'all';
  let showAllProjects = false;
  const awardSlideIndices = new Map();
  const t = key => i18n[language][key] || key;
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const localized = value => typeof value === 'string' ? value : (value?.[language] || value?.pt || value?.en || '');
  const safeAsset = value => typeof value === 'string' && /^(?:\.?\.?\/)?(?:assets\/|https:\/\/)/.test(value) && !/["'<>]/.test(value) ? value : '';
  const safeUrl = value => { try { let url = new URL(value); return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : ''; } catch (_) { return ''; } };
  const $ = id => document.getElementById(id);
  function imgTag(source, alt, cls='', lazy=true) { const src = safeAsset(source); return src ? `<img ${lazy ? 'loading="lazy" decoding="async"' : 'fetchpriority="high"'} src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" ${cls ? `class="${escapeHtml(cls)}"` : ''}>` : ''; }
  function categoryTags(project) { return (project.categories || []).map(tag => `<span class="project-category">${escapeHtml(categoryLabels[language][tag] || tag)}</span>`).join(''); }

  function renderStaticText() {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => { const translation = i18n[language][el.dataset.i18n]; if (translation !== undefined) el.innerHTML = translation; });
    $('lang-toggle').setAttribute('aria-label', language === 'pt' ? 'Switch language to English' : 'Mudar idioma para português');
    $('lang-toggle').title = language === 'pt' ? 'Switch language to English' : 'Mudar para português';
    $('language-pt').classList.toggle('lang-current', language === 'pt');
    $('language-en').classList.toggle('lang-current', language === 'en');
    $('menu-toggle').setAttribute('aria-label', language === 'pt' ? 'Abrir menu' : 'Open menu');
    $('back-to-top').setAttribute('aria-label', t('backToTop'));
    $('back-to-top').title = t('backToTop');
    document.title = language === 'pt' ? 'THACI — Vitrine Criativa | Artista 3D' : 'THACI — Creative Showcase | 3D Artist';
  }
  function renderPhotos() {
    [['about-photo',data.profile?.aboutPhoto]].forEach(([id,source])=>{
      const slot=$(id),src=safeAsset(source);
      slot.querySelectorAll(':scope > img.profile-photo-image').forEach(img=>img.remove());
      const contents=slot.querySelector('.slot-inner');
      if(src){ const img=document.createElement('img');img.className='profile-photo-image';img.src=src;img.alt=language==='pt'?'Retrato de Thaci':'Portrait of Thaci';img.decoding='async';slot.appendChild(img); if(contents) contents.hidden=true;img.addEventListener('error',()=>{img.remove();if(contents)contents.hidden=false;}); }
      else if(contents && !slot.querySelector('.hero-collage')) contents.hidden=false;
    });
  }
  function renderFilters() {
    $('project-filters').setAttribute('aria-label', language === 'pt' ? 'Filtrar projetos' : 'Filter projects');
    $('project-filters').innerHTML = categoryOrder.map(cat => `<button class="filter-button" type="button" data-category="${cat}" aria-pressed="${cat === activeCategory}">${escapeHtml(categoryLabels[language][cat])}</button>`).join('');
    $('project-filters').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{activeCategory=b.dataset.category;renderFilters();renderProjects();}));
  }
  function renderProjects() {
    const allProjects = data.projects.filter(project => activeCategory==='all' || (project.categories||[]).includes(activeCategory));
    const featuredOrder = Array.isArray(data.featuredProjects) ? data.featuredProjects : [];
    const featured = featuredOrder.map(slug => allProjects.find(project => project.slug === slug)).filter(Boolean);
    const featuredIds = new Set(featured.map(project => project.slug));
    const projects = activeCategory==='all' ? (showAllProjects ? [...featured,...allProjects.filter(p => !featuredIds.has(p.slug))] : (featured.length ? featured : allProjects.slice(0,6))) : allProjects;
    const moreButton = $('project-more-toggle');
    moreButton.hidden = activeCategory !== 'all' || allProjects.length <= Math.max(featured.length,6);
    moreButton.setAttribute('aria-expanded',String(showAllProjects));
    moreButton.textContent = t(showAllProjects ? 'projects.showLess' : 'projects.showAll') + (showAllProjects ? ' ↑' : ` (${allProjects.length}) ↓`);
    $('project-grid').innerHTML = projects.map(project => {
      const index = data.projects.indexOf(project) + 1, title=localized(project.title);
      const cover = imgTag(project.cover,title,'cover-image');
      return `<article class="project-card"><a class="project-card-link" href="#project/${encodeURIComponent(project.slug)}" aria-label="${escapeHtml(t('cover.open'))}: ${escapeHtml(title)}">
        <div class="project-cover" style="--cover-bg:${escapeHtml(project.color || '#F9E4C6')}">
          ${cover || `<div class="project-cover-label"><span class="cover-index">THACI / ${String(index).padStart(2,'0')}</span><div class="cover-placeholder-content"><span class="placeholder-graphic" aria-hidden="true"></span><small>${escapeHtml(t('cover.pending'))}</small></div><span class="cover-corner" aria-hidden="true">↗</span></div>`}
        </div><div class="project-card-info"><h3>${escapeHtml(title)}</h3><div class="project-categories">${categoryTags(project)}</div></div>
        </a></article>`;
    }).join('');
    $('project-empty').textContent = t('project.empty'); $('project-empty').hidden=projects.length>0;
  }
  function renderHobbies() {
    const colors=['#E9D4C7','#D9EACD','#F4D9B6','#F7C4B4','#D5DDEB','#D8E7D4'];
    $('hobbies-grid').innerHTML = data.hobbies.map((h,i)=>`<article class="hobby-card" style="--tilt:${[-2,2,-1.5,2.5,-2,1.6,-1.2][i%7]}deg;--hobby-color:${colors[i%7]}">
      <div class="hobby-photo ${h.name?.pt==='Pintura acrílica'?'hobby-photo--acrylic':''} ${h.name?.pt==='Aquarela'?'hobby-photo--center-watercolor':''} ${h.name?.pt==='Passeios com meus cachorros'?'hobby-photo--center-dogs':''}">${imgTag(h.image,localized(h.subject)||localized(h.name))}</div><h4>${escapeHtml(localized(h.name))}</h4>${h.subject?`<p class="hobby-description">${escapeHtml(localized(h.subject))}</p>`:''}</article>`).join('');
  }
  function renderSoftware() {
    $('software-grid').innerHTML=data.software.map(tool=>`<div class="software-tile"><span class="software-icon-shell"><span class="software-icon-backup" aria-hidden="true">${escapeHtml(tool.name==='Blender'?'Bl':tool.name==='Unreal Engine'?'UE':'')}</span>${imgTag(tool.icon,`Logo ${tool.name}`,tool.name==='Adobe Photoshop'?'software-icon-monochrome':'')}</span><span>${escapeHtml(tool.name)}</span></div>`).join('');
    $('software-grid').querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{ img.remove(); }));
  }
  function renderCareer() {
    const previouslyFlipped=new Set(Array.from(document.querySelectorAll('.career-card[aria-pressed="true"]')).map(x=>Number(x.dataset.index)));
    $('career-grid').innerHTML = data.careers.map((c,i)=>{
      const name=c.company || `${t('career.placeholder')} ${String(i+1).padStart(2,'0')}`;
      const desc=localized(c.description)||t('career.back');
      return `<button type="button" class="career-card" data-index="${i}" aria-pressed="${previouslyFlipped.has(i)}" aria-label="${escapeHtml(name)}: ${language==='pt'?'virar carta':'flip card'}">
        <span class="career-card-inner"><span class="career-face career-front">
          <span class="career-image">${imgTag(c.image,`${name} — experiência`,'',true)||escapeHtml(t('career.image'))}</span>
          ${c.active?'<span class="career-status" aria-hidden="true"></span>':''}
          <span class="career-label">${escapeHtml(name)}</span>
          <span class="career-role">${escapeHtml(localized(c.role)||t('career.role'))}</span>
          <span class="career-period">${escapeHtml(localized(c.period) || t('career.period'))}</span>
          <span class="career-flip-hint">${escapeHtml(t('career.flip'))}</span>
        </span><span class="career-face career-back"><span class="career-label">${escapeHtml(name)}</span><span class="career-back-desc">${escapeHtml(desc)}</span></span></span></button>`;
    }).join('');
    $('career-grid').querySelectorAll('.career-card').forEach(card=>card.addEventListener('click',()=>{
      const flipped=card.getAttribute('aria-pressed')==='true';card.setAttribute('aria-pressed',String(!flipped));
    }));
  }
  function renderEducation() {
    const entries=(items,empty)=>items.length?`<div class="education-entries">${items.map(item=>`<div class="education-entry"><strong>${escapeHtml(localized(item.course))}</strong><span>${escapeHtml(item.institution||'')}</span><em>${escapeHtml(localized(item.period||''))}</em></div>`).join('')}</div>`:`<p class="education-empty">${escapeHtml(empty)}</p>`;
    const academic=`<article class="education-box education-box--academic"><h3>${escapeHtml(t('education.academic'))}</h3>${entries(data.education.academic,t('education.academicEmpty'))}</article>`;
    const courses=`<details class="education-box education-box--courses"><summary class="education-disclosure"><h3>${escapeHtml(t('education.courses'))}</h3><span class="education-toggle" aria-hidden="true"></span></summary>${entries(data.education.courses,t('education.coursesEmpty'))}</details>`;
    $('education-grid').innerHTML=academic+courses;
  }
  function renderAwards() {
    $('awards-grid').innerHTML=data.awards.map((award,awardIndex)=>{
      const seals=(award.seals || (award.seal?[award.seal]:[])).filter(Boolean);
      const active=(awardSlideIndices.get(awardIndex)||0)%Math.max(seals.length,1);
      const name=localized(award.name);
      const sealLabel=localized((award.sealNames||[])[active]) || `${name} — ${t('awards.counter')} ${active+1}`;
      const image=imgTag(seals[active],sealLabel,'award-slide-image');
      const controls=seals.length>1?`<div class="award-nav" role="group" aria-label="${escapeHtml(name)}"><button type="button" class="award-arrow" data-award="${awardIndex}" data-delta="-1" aria-label="${escapeHtml(t('awards.prev'))}: ${escapeHtml(name)}" title="${escapeHtml(t('awards.prev'))}">←</button><span class="award-counter" aria-live="polite">${active+1} / ${seals.length}</span><button type="button" class="award-arrow" data-award="${awardIndex}" data-delta="1" aria-label="${escapeHtml(t('awards.next'))}: ${escapeHtml(name)}" title="${escapeHtml(t('awards.next'))}">→</button></div>`:'';
      return `<article class="award-card"><div class="award-media"><div class="award-seal">${image||escapeHtml(t('awards.seal'))}</div>${controls}</div><div class="award-copy"><h3>${escapeHtml(name)}</h3><p>${escapeHtml(localized(award.description)||t('awards.desc'))}</p></div></article>`;
    }).join('');
    $('awards-grid').querySelectorAll('.award-arrow').forEach(button=>button.addEventListener('click',()=>{
      const awardIndex=Number(button.dataset.award);
      const seals=(data.awards[awardIndex]?.seals || []);
      if(!seals.length)return;
      const next=((awardSlideIndices.get(awardIndex)||0)+Number(button.dataset.delta)+seals.length)%seals.length;
      awardSlideIndices.set(awardIndex,next);
      // Update only the clicked seal so buttons retain keyboard focus.
      const media=button.closest('.award-media');
      const src=seals[next];
      const alt=localized((data.awards[awardIndex].sealNames||[])[next]) || `${localized(data.awards[awardIndex].name)} — ${t('awards.counter')} ${next+1}`;
      media.querySelector('.award-seal').innerHTML=imgTag(src,alt,'award-slide-image');
      media.querySelector('.award-counter').textContent=`${next+1} / ${seals.length}`;
    }));
  }
  function renderContact() {
    const email=typeof data.contact?.email==='string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact.email) ? data.contact.email : '';
    $('contact-cta').innerHTML=email?`<a class="contact-button" href="mailto:${encodeURIComponent(email)}"><span>${escapeHtml(t('contact.talk'))}</span><span class="button-arrow" aria-hidden="true">↗</span></a>`:`<span class="contact-button-disabled" title="${escapeHtml(t('contact.setup'))}" aria-disabled="true">${escapeHtml(t('contact.talk'))} <span aria-hidden="true">↗</span></span>`;
    const resume=safeAsset(data.contact?.resume);
    const socials=[
      {label:'ArtStation',link:safeUrl(data.contact?.artstation),icon:'<img src="assets/social/artstation.webp" alt="" class="social-logo social-logo--artstation">'},
      {label:'Instagram',link:safeUrl(data.contact?.instagram),icon:'<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="5" width="38" height="38" rx="11" fill="#202020"/><rect x="13" y="13" width="22" height="22" rx="7" fill="none" stroke="white" stroke-width="3"/><circle cx="24" cy="24" r="5.2" fill="none" stroke="white" stroke-width="3"/><circle cx="32" cy="16.5" r="2" fill="white"/></svg>'},
      {label:'LinkedIn',link:safeUrl(data.contact?.linkedin),icon:'<img src="assets/social/linkedin.webp" alt="" class="social-logo social-logo--linkedin">'}
    ].filter(item=>item.link);
    $('social-links').innerHTML=socials.map(({label,link,icon})=>`<a class="social-link" href="${escapeHtml(link)}" target="_blank" rel="noopener noreferrer"><span class="social-icon">${icon}</span><span class="social-label">${escapeHtml(label)} <span aria-hidden="true">↗</span></span></a>`).join('');
    const links=[
      [email?`${t('contact.email')}: ${email}`:t('contact.email'),email?`mailto:${encodeURIComponent(email)}`:''],
      [t('contact.resume'),resume]
    ];
    $('contact-links').innerHTML=links.map(([label,link])=>link?`<a class="contact-link" href="${escapeHtml(link)}" ${link.startsWith('http')?'target="_blank" rel="noopener noreferrer"':''}>${escapeHtml(label)} ↗</a>`:`<span class="contact-missing">${escapeHtml(label)} · ${escapeHtml(t('contact.pending'))}</span>`).join('');
  }
  function mediaItem(item) {
    const src=safeAsset(item.src),title=localized(item.caption);
    if(item.type==='embed'){
      const id=String(item.videoId||'');
      const embedUrl=item.provider==='youtube'&&/^[\w-]{11}$/.test(id)?`https://www.youtube-nocookie.com/embed/${id}`:item.provider==='vimeo'&&/^\d+$/.test(id)?`https://player.vimeo.com/video/${id}${/^[a-f\d]{10}$/i.test(item.hash||'')?`?h=${item.hash}`:''}`:'';
      if(!embedUrl)return '';
      return `<figure class="media-item"><iframe class="media-embed" src="${embedUrl}" title="${escapeHtml(title||'Project video')}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; gyroscope; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>${title?`<figcaption>${escapeHtml(title)}</figcaption>`:''}</figure>`;
    }
    if(!src)return '';
    const figureClass=`media-item${item.compact?' media-item--compact':''}`;
    if(item.type==='video'){
      const playback=item.viewerOnly?'class="viewer-only-video" autoplay muted loop playsinline preload="auto" controlslist="nodownload" disablepictureinpicture':'controls playsinline preload="metadata"';
      return `<figure class="${figureClass}"><video ${playback} ${safeAsset(item.poster)?`poster="${escapeHtml(safeAsset(item.poster))}"`:''}><source src="${escapeHtml(src)}" type="video/mp4"></video>${title?`<figcaption>${escapeHtml(title)}</figcaption>`:''}</figure>`;
    }
    if(item.type==='image')return `<figure class="${figureClass}">${imgTag(src,localized(item.alt)||'Project image')}${title?`<figcaption>${escapeHtml(title)}</figcaption>`:''}</figure>`;
    return '';
  }
  function renderMediaGallery(items) {
    const rendered=[];
    for(let i=0;i<items.length;i++){
      const group=items[i].pair||items[i].group;
      if(group){
        const grouped=[items[i]];
        while(items[i+1]&&(items[i+1].pair||items[i+1].group)===group)grouped.push(items[++i]);
        rendered.push(`<div class="media-pair media-pair--${Math.min(grouped.length,3)}">${grouped.map(mediaItem).join('')}</div>`);
      } else rendered.push(mediaItem(items[i]));
    }
    return rendered.join('');
  }
  function renderProjectSections(sections) {
    if(!Array.isArray(sections)||!sections.length)return '';
    return `<div class="project-content-sections">${sections.map((section,index)=>{
      const title=localized(section.heading), paragraphs=(section.paragraphs?.[language]||section.paragraphs?.pt||[]).map(text=>`<p>${escapeHtml(text)}</p>`).join('');
      const points=(section.points?.[language]||section.points?.pt||[]).map(text=>`<li>${escapeHtml(text)}</li>`).join('');
      const media=renderMediaGallery(section.media||[]);
      const presentation=section.layout==='yaguarete-views'
        ?`${section.turntable?`<div class="caiman-turntable">${mediaItem(section.turntable)}</div>`:''}<div class="caiman-views-stack"><div class="caiman-board caiman-board--pair">${(section.media||[]).slice(1).map(mediaItem).join('')}${safeAsset(section.logo)?`<img class="caiman-board-logo" src="${escapeHtml(safeAsset(section.logo))}" alt="Yaguareté: The Game">`:''}</div><div class="caiman-board caiman-board--feature">${mediaItem((section.media||[])[0]||{})}${safeAsset(section.logo)?`<img class="caiman-board-logo" src="${escapeHtml(safeAsset(section.logo))}" alt="Yaguareté: The Game">`:''}</div></div>`
        :media;
      const people=(section.people||[]).map(name=>`<li>${escapeHtml(name)}</li>`).join('');
      const closing=localized(section.closing);
      const content=[
        section.mediaFirst?presentation:'',
        paragraphs,
        points?`<ol class="project-role-list">${points}</ol>`:'',
        !section.mediaFirst&&!section.mediaLast?presentation:'',
        closing?`<p class="project-closing">${escapeHtml(closing)}</p>`:'',
        people?`<ul class="project-credits-list">${people}</ul>`:'',
        section.mediaLast?presentation:''
      ].join('');
      return `<section class="project-content-section" aria-labelledby="project-content-heading-${index}">${title?`<h2 class="detail-gallery-title" id="project-content-heading-${index}">${escapeHtml(title)}</h2>`:''}${content}</section>`;
    }).join('')}</div>`;
  }
  function renderProjectDetail(project) {
    const index=data.projects.indexOf(project)+1, title=localized(project.title);
    const summary=localized(project.summary)||t('detail.summary');
    const role=localized(project.role)||t('detail.infoPending');
    const tools=(project.software||[]).filter(Boolean).join(' · ')||t('detail.infoPending');
    const cover=imgTag(project.cover,title,'detail-cover-img');
    const gallery=renderMediaGallery(project.media||[]);
    const contentSections=renderProjectSections(project.sections);
    $('project-detail-content').innerHTML=`<article>
      <header class="detail-header"><div><p class="section-number">${escapeHtml(t('detail.number'))} / ${String(index).padStart(2,'0')}</p><h1 id="detail-title">${escapeHtml(title)}</h1><div class="project-categories">${categoryTags(project)}</div></div><span class="detail-project-number">${String(index).padStart(2,'0')}</span></header>
      <div class="detail-hero-image" style="--cover-bg:${escapeHtml(project.color||'#F9E4C6')}">${cover||`<div class="cover-placeholder-content"><span class="placeholder-graphic" aria-hidden="true"></span><small>${escapeHtml(t('cover.pending'))}</small></div>`}</div>
      ${project.hideSummary?'':`<p class="detail-description">${escapeHtml(summary)}</p>`}
      ${project.hideMeta?'':`<div class="detail-meta">${project.hideRole?'':`<div><span class="meta-label">${escapeHtml(t('detail.role'))}</span><span class="meta-value">${escapeHtml(role)}</span></div>`}${project.hideSoftware?'':`<div><span class="meta-label">${escapeHtml(t('detail.software'))}</span><span class="meta-value">${escapeHtml(tools)}</span></div>`}</div>`}
      ${contentSections||`<section aria-labelledby="detail-gallery-heading"><h2 class="detail-gallery-title" id="detail-gallery-heading">${escapeHtml(t('detail.gallery'))}</h2>
      <div class="media-stack">${gallery||`<div class="media-empty"><h3>${escapeHtml(t('detail.galleryEmptyTitle'))}</h3><p>${escapeHtml(t('detail.galleryEmptyText'))}</p></div>`}</div>
      </section>`}</article>`;
    $('project-detail-content').querySelectorAll('.viewer-only-video').forEach(video=>video.addEventListener('contextmenu',event=>event.preventDefault()));
  }
  function navigate() {
    const hash=decodeURIComponent(location.hash.replace(/^#/,''));
    const detailMatch=hash.match(/^project\/([\w-]+)$/);
    const project=detailMatch?data.projects.find(p=>p.slug===detailMatch[1]):null;
    if(project){
      $('site-main').hidden=true;$('project-page').hidden=false;renderProjectDetail(project);
      window.scrollTo({top:0,behavior:'instant'});
    } else {
      $('site-main').hidden=false;$('project-page').hidden=true;
      if(hash && $(hash)){requestAnimationFrame(()=>$(hash).scrollIntoView({block:'start',behavior:'instant'}));}
    }
    closeMenu();
  }
  function closeMenu() {
    $('main-nav').classList.remove('open');$('menu-toggle').setAttribute('aria-expanded','false');
  }
  function renderAll() {
    renderStaticText();renderPhotos();renderFilters();renderProjects();renderHobbies();renderSoftware();renderCareer();renderEducation();renderAwards();renderContact();navigate();
  }
  $('project-more-toggle').addEventListener('click',()=>{
    showAllProjects=!showAllProjects;
    renderProjects();
    if(!showAllProjects) $('projects-title').scrollIntoView({block:'start',behavior:'smooth'});
  });
  $('lang-toggle').addEventListener('click',()=>{
    language=language==='pt'?'en':'pt';
    storeLanguage(language);
    renderAll();
    // Keep the language switch in view after translated content is rendered.
    requestAnimationFrame(()=>window.scrollTo({top:0,behavior:'instant'}));
  });
  const backToTop = $('back-to-top');
  function updateBackToTop() { backToTop.hidden = window.scrollY < 360; }
  window.addEventListener('scroll',updateBackToTop,{passive:true});
  backToTop.addEventListener('click',()=>{
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({top:0,behavior:reduceMotion?'instant':'smooth'});
  });
  updateBackToTop();
  $('menu-toggle').addEventListener('click',()=>{
    const expanded=$('menu-toggle').getAttribute('aria-expanded')==='true';
    $('menu-toggle').setAttribute('aria-expanded',String(!expanded));
    $('main-nav').classList.toggle('open',!expanded);
  });
  document.querySelectorAll('.main-nav a').forEach(link=>link.addEventListener('click',closeMenu));
  $('back-to-projects').addEventListener('click',()=>location.hash='projetos');
  $('back-bottom').addEventListener('click',()=>location.hash='projetos');
  window.addEventListener('hashchange',navigate);
  window.addEventListener('keydown',event=>{ if(event.key==='Escape')closeMenu(); });
  renderAll();
})();
