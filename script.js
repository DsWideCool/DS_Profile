// =====================================================
// ✏️ 내용 수정은 여기서! (HTML을 건드릴 필요 없음)
// =====================================================

// Hero 타이핑 효과에 순서대로 표시될 문구
const ROLES = ['프로젝트 매니저', '풀스택 개발자', '금융 IT 전문가'];

// 기술 스택: 카테고리별로 항목을 추가/삭제하세요
const SKILLS = [
  { category: '프로젝트 관리', icon: '📋', items: ['일정·범위 관리', '요구사항 분석', '이해관계자 커뮤니케이션', '리스크 관리'] },
  { category: '프론트엔드', icon: '🎨', items: ['HTML', 'CSS', 'JavaScript', '반응형 웹'] },
  { category: '백엔드', icon: '⚙️', items: ['Java', 'Spring', 'SQL', 'REST API'] },
];

// 프로젝트: 항목 하나 = 카드 하나. type 값이 필터 버튼이 됩니다
// gradient = 카드 상단 배경색 (Tailwind 클래스)
const PROJECTS = [
  {
    title: 'NH저축은행 인터넷뱅킹 재구축',
    description: 'NH저축은행 인터넷뱅킹 서비스 재구축 프로젝트',
    type: '웹',
    tags: ['인터넷뱅킹', '금융', 'PC웹'],
    url: 'https://www.nhsavingsbank.co.kr',
    icon: '🏦',
    gradient: 'from-navy-400 to-sky-300',
  },
  {
    title: 'NH저축은행 모바일웹 상품가입시스템 구축',
    description: '모바일 환경에서 금융상품에 가입할 수 있는 상품가입시스템 구축 프로젝트',
    type: '모바일',
    tags: ['모바일웹', '상품가입', '금융'],
    url: 'https://m.nhsavingsbank.co.kr',
    icon: '📱',
    gradient: 'from-sky-400 to-teal-300',
  },
  {
    // ✏️ 세 번째 자리: 실제 프로젝트가 생기면 이 항목을 바꿔주세요
    title: '다음 프로젝트',
    description: '최고의 프로젝트 매니저와 함께할 다음 프로젝트를 기다리고 있어요.',
    type: '준비 중',
    tags: ['Coming Soon'],
    url: '',
    icon: '✨',
    gradient: 'from-indigo-300 to-navy-400',
  },
];

// =====================================================

const $ = (sel) => document.querySelector(sel);

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
  $('#projects-grid').innerHTML = list.map((p) => `
    <article class="glass glass-hover group flex flex-col overflow-hidden rounded-2xl">
      <div class="relative h-44 overflow-hidden bg-gradient-to-br ${p.gradient}">
        <div class="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-white/40 blur-2xl transition duration-500 group-hover:scale-125"></div>
        <div class="absolute -bottom-12 left-2 h-32 w-32 rounded-full bg-white/25 blur-2xl"></div>
        <span class="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/60 bg-white/30 text-3xl shadow-lg backdrop-blur-md transition duration-300 group-hover:scale-110">${p.icon}</span>
      </div>
      <div class="flex flex-1 flex-col p-6">
        <span class="text-xs font-semibold uppercase tracking-wider text-navy-500 dark:text-sky-300">${p.type}</span>
        <h3 class="mt-2 text-lg font-bold leading-snug">${p.title}</h3>
        <p class="mt-3 text-sm leading-relaxed text-navy-700/80 dark:text-navy-200/80">${p.description}</p>
        <ul class="mt-4 flex flex-wrap gap-2">
          ${p.tags.map((t) => `<li class="rounded-md bg-white/50 px-2 py-1 text-xs text-navy-700 dark:bg-white/10 dark:text-navy-100">#${t}</li>`).join('')}
        </ul>
        <div class="mt-auto pt-6">
          ${p.url ? `
          <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn-glass inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold">
            사이트 방문 <span aria-hidden="true">→</span>
          </a>` : `<span class="inline-flex rounded-full border border-dashed border-navy-300 px-4 py-2 text-sm text-navy-500 dark:border-navy-400/50 dark:text-navy-300">곧 공개됩니다</span>`}
        </div>
      </div>
    </article>
  `).join('');
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
