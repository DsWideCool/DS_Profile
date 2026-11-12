// =====================================================
// ✏️ 내용 수정은 여기서! (HTML을 건드릴 필요 없음)
// =====================================================

// Hero 타이핑 효과에 순서대로 표시될 문구
const ROLES = ['프로젝트 매니저', '금융·유통 IT 전문가', 'SI·SM 사업 리더'];

// 경력 요약: 소개 섹션에 표시. 근속기간은 joinDate 기준으로 자동 계산됩니다
const CAREER = {
  company: '농협정보시스템',
  role: 'PM',
  position: '책임',
  joinDate: '2011-02-10',
  field: '금융·유통 IT',
};

// 기술 스택: 카테고리별로 항목을 추가/삭제하세요
const SKILLS = [
  { category: '프로젝트 관리', icon: '📋', items: ['일정·범위 관리', '요구사항 분석', '이해관계자 커뮤니케이션', '리스크 관리', '사업 제안', 'TF 운영'] },
  { category: 'AI·협업 트렌드', icon: '🤖', items: ['AI 활용', 'AX 전략', 'Claude Code', 'MCP', 'Git', 'Slack'] },
  { category: '금융 IT', icon: '🏦', items: ['인터넷뱅킹', '모바일웹 상품가입', '비대면채널 모니터링', '웹 접근성'] },
  { category: '유통·물류 IT', icon: '📦', items: ['WMS(창고관리)', '물류센터 자동화', 'POG·진열관리', '자동수발주', 'POP', '물류 BPR'] },
  { category: '시스템 운영 (SM)', icon: '🛠️', items: ['운영·유지보수', '인터페이스(IF) 연계', '전자세금계산서', '회계·사무관리', 'KMS', 'CMS', 'CRM'] },
  { category: '프론트엔드', icon: '🎨', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite', '반응형 웹'] },
  { category: 'UI 플랫폼', icon: '🖥️', items: ['엑스플랫폼(XPLATFORM)', '마이플랫폼(MiPlatform)', 'xFrame5'] },
  { category: '백엔드', icon: '⚙️', items: ['Java', 'Spring', 'Node.js', 'C', 'Pro*C', '.NET', 'Delphi', 'SQL', 'REST API'] },
  { category: '미들웨어·연계', icon: '🔗', items: ['Tmax', 'WebtoB', 'MCI', 'MFT', 'FOS(NAS 파일관리)'] },
];

// 프로젝트: 항목 하나 = 카드 하나. type 값이 필터 버튼이 됩니다 (최신순으로 작성)
// kind = 사업 구분(SI/SM/TF), role = 담당 역할, period = 수행 기간(end가 비어 있으면 "현재")
// gradient = 카드 상단 배경색 (Tailwind 클래스)
// 카드의 "자세히 보기" 상세 내용(목표·한 일·성과)은 project-details.md 에서 작성합니다 (제목으로 연결)
const PROJECTS = [
  {
    title: 'NH저축은행 비대면채널 모니터링 및 고객접근성 확대 구축',
    description: '비대면채널 고객 접근이력 대시보드 개발 및 모바일 여신서비스 고도화 사업 총괄',
    type: '금융', kind: 'SI', role: 'PM',
    period: { start: '2026.10', end: '' },
    tags: ['비대면채널', '대시보드', '여신', '저축은행'],
    url: '',
    icon: '📡',
    gradient: 'from-navy-400 to-sky-300',
  },
  {
    title: 'NH저축은행 인터넷뱅킹 고도화',
    description: 'NH저축은행 인터넷뱅킹 서비스 고도화 사업 총괄',
    type: '금융', kind: 'SI', role: 'PM',
    period: { start: '2026.03', end: '2026.09' },
    tags: ['인터넷뱅킹', '고도화', '저축은행'],
    url: 'https://www.nhsavingsbank.co.kr',
    icon: '🏦',
    gradient: 'from-navy-400 to-sky-300',
  },
  {
    title: 'NH저축은행 모바일웹 상품가입 시스템 구축',
    description: '모바일 환경에서 금융상품에 가입할 수 있는 상품가입 시스템 구축 사업 총괄',
    type: '금융', kind: 'SI', role: 'PM',
    period: { start: '2025.05', end: '2025.10' },
    tags: ['모바일웹', '상품가입', '저축은행'],
    url: 'https://m.nhsavingsbank.co.kr',
    icon: '📱',
    gradient: 'from-sky-400 to-teal-300',
  },
  {
    title: '농협물류 NH-WMS TF 총괄 / IF 연계 업무지원',
    description: '창고관리시스템(NH-WMS) TF 총괄 및 인터페이스 연계 업무 지원',
    type: '유통·물류', kind: 'TF', role: '총괄',
    period: { start: '2024.08', end: '2025.01' },
    tags: ['WMS', '인터페이스', 'TF'],
    url: '',
    icon: '🚚',
    gradient: 'from-teal-400 to-emerald-300',
  },
  {
    title: '차세대 경제유통 구축 – 유통공통',
    description: '차세대 경제유통 시스템 구축 사업에서 유통공통 영역 리딩',
    type: '유통·물류', kind: 'SI', role: 'PL',
    period: { start: '2022.04', end: '2024.07' },
    tags: ['차세대', '경제유통', '유통공통'],
    url: '',
    icon: '🏗️',
    gradient: 'from-emerald-400 to-teal-300',
  },
  {
    title: '차세대 경제유통 구축 TF 및 구축사업 제안',
    description: '차세대 경제유통 구축 TF 참여 및 구축 사업 제안',
    type: '유통·물류', kind: 'SI', role: 'TF·제안',
    period: { start: '2021.05', end: '2022.03' },
    tags: ['차세대', 'TF', '사업제안'],
    url: '',
    icon: '📝',
    gradient: 'from-emerald-400 to-teal-300',
  },
  {
    title: '하나로유통 지능형 물류센터 추진 전산개발',
    description: '지능형 물류센터 추진에 따른 전산 개발 사업 총괄',
    type: '유통·물류', kind: 'SI', role: 'PM',
    period: { start: '2020.07', end: '2021.01' },
    tags: ['물류센터', '자동화', '하나로유통'],
    url: '',
    icon: '🤖',
    gradient: 'from-teal-400 to-sky-300',
  },
  {
    title: '유통일부 위탁업무 (생활물자/농산물물류)',
    description: '생활물자·농산물 물류 위탁업무 시스템 운영 총괄',
    type: '유통·물류', kind: 'SM', role: 'PM',
    period: { start: '2020.02', end: '2021.04' },
    tags: ['생활물자', '농산물물류', '운영'],
    url: '',
    icon: '🥬',
    gradient: 'from-lime-300 to-emerald-400',
  },
  {
    title: 'NH-eBill 전자(세금)계산서 고도화 구축',
    description: '전자(세금)계산서 시스템 NH-eBill 고도화 사업 총괄',
    type: '경영지원', kind: 'SI', role: 'PM',
    period: { start: '2018.11', end: '2019.03' },
    tags: ['전자세금계산서', '고도화', 'NH-eBill'],
    url: '',
    icon: '🧾',
    gradient: 'from-indigo-300 to-navy-400',
  },
  {
    title: 'POG(진열관리) 자동생성 시스템 도입',
    description: '매장 진열계획(POG) 자동생성 시스템 도입 사업 총괄',
    type: '유통·물류', kind: 'SI', role: 'PM',
    period: { start: '2018.06', end: '2018.11' },
    tags: ['POG', '진열관리', '자동화'],
    url: '',
    icon: '🛒',
    gradient: 'from-teal-400 to-emerald-300',
  },
  {
    title: '농협물류 BPR 통합물류시스템',
    description: 'BPR 기반 통합물류시스템 운영 총괄',
    type: '유통·물류', kind: 'SM', role: 'PM',
    period: { start: '2016.01', end: '2019.12' },
    tags: ['BPR', '통합물류', '운영'],
    url: '',
    icon: '📦',
    gradient: 'from-emerald-400 to-teal-300',
  },
  {
    title: '진열표준화 운영시스템 개선',
    description: '매장 진열표준화 운영시스템 개선 사업 총괄',
    type: '유통·물류', kind: 'SI', role: 'PM',
    period: { start: '2014.11', end: '2015.01' },
    tags: ['진열표준화', '시스템개선'],
    url: '',
    icon: '🗂️',
    gradient: 'from-teal-400 to-sky-300',
  },
  {
    title: '하나로유통 전산시스템 (진열관리/자동수발주/POP)',
    description: '진열관리·자동수발주·POP 등 하나로유통 전산시스템 운영 총괄',
    type: '유통·물류', kind: 'SM', role: 'PM',
    period: { start: '2014.02', end: '2020.01' },
    tags: ['진열관리', '자동수발주', 'POP', '운영'],
    url: '',
    icon: '🏪',
    gradient: 'from-emerald-400 to-teal-300',
  },
  {
    title: '신통합사무관리 (공통/회계) 업무 운영',
    description: '통합사무관리 시스템의 공통·회계 업무 운영',
    type: '경영지원', kind: 'SM', role: '운영',
    period: { start: '2011.03', end: '2014.01' },
    tags: ['사무관리', '회계', '운영'],
    url: '',
    icon: '🗃️',
    gradient: 'from-indigo-300 to-navy-400',
  },
];

// =====================================================

const $ = (sel) => document.querySelector(sel);

// ----- 경력 요약 렌더링 -----
function getTenure(joinDate) {
  const join = new Date(joinDate);
  const now = new Date();
  let months = (now.getFullYear() - join.getFullYear()) * 12 + (now.getMonth() - join.getMonth());
  if (now.getDate() < join.getDate()) months -= 1;
  return `${Math.floor(months / 12)}년 ${months % 12}개월`;
}

const [joinYear, joinMonth] = CAREER.joinDate.split('-');
const careerItems = [
  { label: '소속', value: CAREER.company },
  { label: '직급 · 역할', value: `${CAREER.position} · ${CAREER.role}` },
  { label: '입사', value: `${joinYear}년 ${Number(joinMonth)}월` },
  { label: '근속', value: getTenure(CAREER.joinDate) },
];
$('#career-summary').innerHTML = careerItems.map((c) => `
  <div class="rounded-2xl border border-white/60 bg-white/40 p-5 dark:border-white/10 dark:bg-white/5">
    <dt class="text-xs text-navy-500 dark:text-navy-300">${c.label}</dt>
    <dd class="mt-1 font-semibold">${c.value}</dd>
  </div>
`).join('');
$('#profile-field').textContent = CAREER.field;
$('#profile-company').textContent = CAREER.company;

// ----- 기술 스택 렌더링 -----
$('#skills-grid').innerHTML = SKILLS.map((s) => `
  <div class="glass glass-hover reveal rounded-2xl p-6">
    <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-white/70 bg-white/50 text-2xl shadow-sm dark:border-white/15 dark:bg-white/10">${s.icon}</div>
    <h3 class="mt-4 text-lg font-bold">${s.category}</h3>
    <ul class="mt-4 flex flex-wrap gap-2">
      ${s.items.map((i) => `<li class="rounded-full border border-white/70 bg-white/50 px-3 py-1 text-sm text-navy-700 dark:border-white/10 dark:bg-white/5 dark:text-navy-100">${i}</li>`).join('')}
    </ul>
  </div>
`).join('');

// ----- 프로젝트 렌더링 + 필터 -----
function renderProjects(filter) {
  const list = filter === '전체' ? PROJECTS : PROJECTS.filter((p) => p.type === filter);
  // 건수 표시: 필터를 걸면 해당 분야 건수와 전체 건수를 함께 보여줌
  $('#project-count').innerHTML = filter === '전체'
    ? `총 <strong class="text-navy-700 dark:text-white">${PROJECTS.length}</strong>건`
    : `${filter} <strong class="text-navy-700 dark:text-white">${list.length}</strong>건 · 전체 ${PROJECTS.length}건`;
  $('#projects-grid').innerHTML = list.map((p) => {
    const index = PROJECTS.indexOf(p);
    // 번호는 PROJECTS 순서(최신순) 기준이라 필터를 걸어도 바뀌지 않음
    const no = String(index + 1).padStart(2, '0');
    return `
    <article ${p.detail ? `data-project="${index}"` : ''} class="glass glass-hover group flex flex-col overflow-hidden rounded-2xl ${p.detail ? 'cursor-pointer' : ''}">
      <div class="relative h-44 overflow-hidden bg-gradient-to-br ${p.gradient}">
        <span class="absolute left-4 top-4 rounded-full border border-white/60 bg-white/60 px-3 py-1 text-xs font-bold text-navy-700 shadow-sm backdrop-blur-md">No. ${no}</span>
        <div class="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-white/40 blur-2xl transition duration-500 group-hover:scale-125"></div>
        <div class="absolute -bottom-12 left-2 h-32 w-32 rounded-full bg-white/25 blur-2xl"></div>
        <span class="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/60 bg-white/30 text-3xl shadow-lg backdrop-blur-md transition duration-300 group-hover:scale-110">${p.icon}</span>
      </div>
      <div class="flex flex-1 flex-col p-6">
        <div class="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span class="uppercase tracking-wider text-navy-500 dark:text-sky-300">${p.type}</span>
          <span class="rounded-full bg-navy-500/10 px-2 py-0.5 text-navy-600 dark:bg-white/10 dark:text-navy-100">${p.kind} · ${p.role}</span>
        </div>
        <h3 class="mt-2 text-lg font-bold leading-snug">${p.title}</h3>
        <p class="mt-1 text-xs text-navy-500 dark:text-navy-300">${p.period.start} ~ ${p.period.end || '현재'}</p>
        <p class="mt-3 text-sm leading-relaxed text-navy-700/80 dark:text-navy-200/80">${p.description}</p>
        <ul class="mt-4 flex flex-wrap gap-2">
          ${p.tags.map((t) => `<li class="rounded-md bg-white/50 px-2 py-1 text-xs text-navy-700 dark:bg-white/10 dark:text-navy-100">#${t}</li>`).join('')}
        </ul>
        ${p.detail || p.url ? `
        <div class="mt-auto flex flex-wrap gap-2 pt-6">
          ${p.detail ? `
          <button type="button" data-open-detail class="btn-primary inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold">
            자세히 보기 <span aria-hidden="true">+</span>
          </button>` : ''}
          ${p.url ? `
          <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn-glass inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold">
            사이트 방문 <span aria-hidden="true">→</span>
          </a>` : ''}
        </div>` : ''}
      </div>
    </article>
  `;
  }).join('');
}

const types = ['전체', ...new Set(PROJECTS.map((p) => p.type))];
const filterBox = $('#project-filters');
let activeFilter = '전체';

function renderFilters() {
  filterBox.innerHTML = types.map((t) => `
    <button data-filter="${t}" aria-pressed="${t === activeFilter}"
      class="${t === activeFilter ? 'btn-primary' : 'btn-glass'} rounded-full px-4 py-2 text-sm font-medium">${t}</button>
  `).join('');
}

filterBox.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-filter]');
  if (!btn) return;
  activeFilter = btn.dataset.filter;
  renderFilters();
  renderProjects(activeFilter);
});

renderFilters();
renderProjects(activeFilter);

// ----- 프로젝트 상세 내용 불러오기 (project-details.md) -----
// "## 번호. 제목" 으로 프로젝트를 구분하고, "### 목표/한 일/성과" 아래 내용을 읽는다
const DETAIL_FILE = 'project-details.md';
const DETAIL_SECTIONS = [['목표', 'goal'], ['한일', 'tasks'], ['수행', 'tasks'], ['성과', 'achievements']];
const normalizeTitle = (s) => s.replace(/\s+/g, ' ').trim();

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

function parseProjectDetails(md) {
  const details = new Map();
  let current = null;
  let key = null;
  md.replace(/<!--[\s\S]*?-->/g, '').split(/\r?\n/).forEach((raw) => {
    const line = raw.trim();
    if (line.startsWith('## ')) {
      current = { goal: '', tasks: [], achievements: [] };
      key = null;
      details.set(normalizeTitle(line.slice(3).replace(/^\d+\.\s*/, '')), current);
    } else if (line.startsWith('### ')) {
      const name = line.slice(4).replace(/\s/g, '');
      key = DETAIL_SECTIONS.find(([word]) => name.includes(word))?.[1] ?? null;
    } else if (current && key) {
      const text = line.replace(/^[-*]\s*/, '').trim();
      if (!text) return;
      if (key === 'goal') current.goal += (current.goal ? ' ' : '') + text;
      else current[key].push(text);
    }
  });
  return details;
}

fetch(DETAIL_FILE, { cache: 'no-cache' })
  .then((res) => (res.ok ? res.text() : Promise.reject(new Error(`HTTP ${res.status}`))))
  .then((md) => {
    const details = parseProjectDetails(md);
    const titles = new Set(PROJECTS.map((p) => normalizeTitle(p.title)));
    details.forEach((_, title) => {
      if (!titles.has(title)) console.warn(`[${DETAIL_FILE}] 일치하는 프로젝트 제목이 없습니다: ${title}`);
    });
    PROJECTS.forEach((p) => {
      const d = details.get(normalizeTitle(p.title));
      if (d && (d.goal || d.tasks.length || d.achievements.length)) p.detail = d;
    });
    renderProjects(activeFilter);
  })
  .catch((err) => console.warn(`${DETAIL_FILE}을(를) 불러오지 못했습니다. 로컬 서버로 열었는지 확인하세요.`, err));

// ----- 프로젝트 상세 모달 -----
const modal = $('#project-modal');

function renderDetailList(items, marker) {
  return items.map((t) => `
    <li class="flex gap-3"><span aria-hidden="true" class="mt-0.5 shrink-0 text-navy-400 dark:text-sky-300">${marker}</span><span>${escapeHtml(t)}</span></li>
  `).join('');
}

function renderDetailSection(title, body) {
  return `
    <section class="mt-8">
      <h4 class="text-sm font-bold text-navy-500 dark:text-sky-300">${title}</h4>
      ${body}
    </section>`;
}

function openProjectDetail(p) {
  const d = p.detail;
  $('#project-modal-body').innerHTML = `
    <div class="flex flex-wrap items-center gap-2 text-xs font-semibold">
      <span class="uppercase tracking-wider text-navy-500 dark:text-sky-300">${p.type}</span>
      <span class="rounded-full bg-navy-500/10 px-2 py-0.5 text-navy-600 dark:bg-white/10 dark:text-navy-100">${p.kind} · ${p.role}</span>
      <span class="text-navy-500 dark:text-navy-300">${p.period.start} ~ ${p.period.end || '현재'}</span>
    </div>
    <h3 id="project-modal-title" class="mt-3 pr-10 text-xl font-bold leading-snug sm:text-2xl">${p.icon} ${p.title}</h3>
    ${d.goal ? renderDetailSection('🎯 프로젝트 목표', `<p class="mt-3 leading-relaxed">${escapeHtml(d.goal)}</p>`) : ''}
    ${d.tasks.length ? renderDetailSection('🛠️ 수행 업무', `<ul class="mt-3 space-y-2 leading-relaxed">${renderDetailList(d.tasks, '•')}</ul>`) : ''}
    ${d.achievements.length ? renderDetailSection('🏆 주요 성과', `<ul class="mt-3 space-y-2 leading-relaxed">${renderDetailList(d.achievements, '✓')}</ul>`) : ''}
  `;
  modal.showModal();
  document.documentElement.classList.add('overflow-hidden');
}

// 카드 어디를 눌러도 열리되, "사이트 방문" 링크는 그대로 동작
$('#projects-grid').addEventListener('click', (e) => {
  if (e.target.closest('a')) return;
  const card = e.target.closest('[data-project]');
  if (card) openProjectDetail(PROJECTS[Number(card.dataset.project)]);
});

$('#project-modal-close').addEventListener('click', () => modal.close());
// 바깥(배경) 클릭 시 닫기
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.close();
});
modal.addEventListener('close', () => document.documentElement.classList.remove('overflow-hidden'));

// ----- 다크모드 -----
$('#theme-toggle').addEventListener('click', () => {
  const dark = document.documentElement.classList.toggle('dark');
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
});

// ----- 모바일 메뉴 -----
const menu = $('#mobile-menu');
const menuBtn = $('#menu-toggle');
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('hidden') === false;
  menuBtn.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  menu.classList.add('hidden');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

// ----- 스크롤 효과 (네비 배경, 맨 위로 버튼) -----
const navbar = $('#navbar');
const toTop = $('#to-top');
function onScroll() {
  navbar.classList.toggle('scrolled', scrollY > 20);
  toTop.classList.toggle('show', scrollY > 500);
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();
toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

// ----- 등장 애니메이션 -----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) {
      en.target.classList.add('visible');
      revealObserver.unobserve(en.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ----- 현재 섹션 네비에 표시 -----
const navLinks = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) {
      navLinks.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === `#${en.target.id}`));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach((s) => sectionObserver.observe(s));

// ----- 타이핑 효과 -----
const typingEl = $('#typing');
let roleIdx = 0, charIdx = 0, deleting = false;
function type() {
  const word = ROLES[roleIdx];
  typingEl.textContent = word.slice(0, charIdx);
  if (!deleting && charIdx < word.length) { charIdx++; setTimeout(type, 110); }
  else if (!deleting) { deleting = true; setTimeout(type, 1800); }
  else if (charIdx > 0) { charIdx--; setTimeout(type, 50); }
  else { deleting = false; roleIdx = (roleIdx + 1) % ROLES.length; setTimeout(type, 300); }
}
if (matchMedia('(prefers-reduced-motion: reduce)').matches) typingEl.textContent = ROLES[0];
else type();

// ----- 이메일 복사 + 토스트 -----
const toast = $('#toast');
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
}
$('#copy-email').addEventListener('click', async (e) => {
  try {
    await navigator.clipboard.writeText(e.currentTarget.dataset.email);
    showToast('이메일 주소가 복사되었어요 ✉️');
  } catch {
    showToast('복사에 실패했어요. 직접 선택해 복사해 주세요.');
  }
});

$('#year').textContent = new Date().getFullYear();
