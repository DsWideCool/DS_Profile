// =====================================================
// ✏️ 내용 수정은 여기서! (HTML을 건드릴 필요 없음)
// =====================================================

// Hero 이름 아래에 " · "로 이어서 표시될 역할 문구
const ROLES = ['프로젝트 매니저', '금융·유통 IT 전문가', 'SI·SM 사업 리더'];

// 경력 요약: 소개 섹션과 Hero 핵심 수치에 표시. 근속기간은 joinDate 기준으로 자동 계산됩니다
const CAREER = {
  company: '농협정보시스템',
  role: 'PM',
  position: '책임',
  joinDate: '2011-02-10',
  field: '금융·유통 IT',
};

// 경력 흐름: 소개 섹션 타임라인 (최신순)
// projects = 이 시기에 속한 PROJECTS 의 title. 기간과 건수는 해당 프로젝트들의 period 로 자동 계산됩니다
// summary 안의 \n 은 PC에서만 줄바꿈됩니다 (모바일은 띄어쓰기 단위로 자동 줄바꿈)
const CAREER_PHASES = [
  {
    title: '금융 채널 사업 PM',
    summary: 'NH저축은행 모바일웹·인터넷뱅킹·비대면채널 구축 사업 총괄',
    projects: [
      'NH저축은행 비대면채널 모니터링 및 고객접근성 확대 구축',
      'NH저축은행 인터넷뱅킹 고도화',
      'NH저축은행 모바일웹 상품가입 시스템 구축',
    ],
  },
  {
    title: '차세대 경제유통 · TF',
    summary: '차세대 사업 제안부터 유통공통 PL, 구축 이후 WMS 연계 TF 총괄까지',
    projects: [
      '농협물류 NH-WMS TF 총괄 / IF 연계 업무지원',
      '차세대 경제유통 구축 – 유통공통',
      '차세대 경제유통 구축 TF 및 구축사업 제안',
    ],
  },
  {
    title: '유통·물류 IT PM',
    summary: '하나로유통·농협물류 시스템 구축·운영 총괄\n(진열·수발주·물류센터 자동화, 전자세금계산서)',
    projects: [
      '하나로유통 지능형 물류센터 추진 전산개발',
      '유통일부 위탁업무 (생활물자/농산물물류)',
      'NH-eBill 전자(세금)계산서 고도화 구축',
      'POG(진열관리) 자동생성 시스템 도입',
      '농협물류 BPR 통합물류시스템',
      '진열표준화 운영시스템 개선',
      '하나로유통 전산시스템 (진열관리/자동수발주/POP)',
    ],
  },
  {
    title: '경영지원 시스템 운영',
    summary: '통합사무관리(공통·회계) 시스템 운영으로 커리어 시작',
    projects: ['신통합사무관리 (공통/회계) 업무 운영'],
  },
];

// 핵심 성과: "핵심 성과" 섹션 카드 (임원이 3초 안에 볼 대표 사례 3~4개 권장)
// metric = 크게 보일 숫자, theme = 역량 키워드, project = PROJECTS의 title과 똑같이 (상세 창 연결용)
// problem/solution/result = 문제·해결·결과 한두 문장
const HIGHLIGHTS = [
  {
    theme: '변화관리 · 협업',
    metric: '2주',
    metricLabel: '오픈 일정 단축',
    title: '인터넷뱅킹 고도화',
    project: 'NH저축은행 인터넷뱅킹 고도화',
    problem: '300개가 넘는 메뉴를 6개월 안에 재구성해야 했고, 현업(선릉)과 IT조직(의왕)이 떨어져 있어 의사결정 지연 위험이 컸습니다.',
    solution: '애자일 스프린트를 도입하고 기획·디자인·개발을 Figma 하나로 묶었으며, 전용 개발공간을 열어 소통 체계를 일원화했습니다.',
    result: '계획 대비 오픈을 2주 앞당기고, 요구사항 확정과 의사결정 리드타임을 줄였습니다.',
  },
  {
    theme: '리스크 관리 · 사업 성과',
    metric: '2.5배↑',
    metricLabel: '상품가입 신청·실행률',
    title: '모바일웹 상품가입 시스템 구축',
    project: 'NH저축은행 모바일웹 상품가입 시스템 구축',
    problem: 'React·Spring Boot 신기술 전환과 함께, 과거 사업에서 겪은 불분명한 요구사항·소통 문제가 재발할 위험이 있었습니다.',
    solution: '경쟁사 4곳을 제치고 수주한 뒤, 이전 사업의 교훈을 반영한 보수적 WBS로 개발·테스트 기간을 확보하고 아키텍처를 직접 수립했습니다.',
    result: '기존 사이트 대비 상품가입 신청·실행률을 2.5배 이상 끌어올렸습니다.',
  },
  {
    theme: '위기 대응 · 리더십',
    metric: '1,000본',
    metricLabel: '지연 업무 화면 개발 지원',
    title: '차세대 경제유통 구축 – 유통공통',
    project: '차세대 경제유통 구축 – 유통공통',
    problem: '약 20개 업무단위가 공통 기준정보·인터페이스에 의존하는 대형 차세대 사업에서, 일부 업무에 일정 리스크가 발생했습니다.',
    solution: '공통 표준·모듈·개발 가이드를 먼저 만들어 전 팀에 전파하고, 자체 과업을 조기 완료한 뒤 지연 업무에 팀을 투입했습니다.',
    result: '가장 먼저 테스트를 완료하고 조회 화면 약 1,000본을 지원해 전체 오픈 일정을 지켰으며, 야근 없는 팀 운영을 실현했습니다.',
  },
];

// 역량(기술 스택): 카테고리별로 항목을 추가/삭제하세요. icon = 아래 ICONS 의 이름
const SKILLS = [
  { category: '프로젝트 관리', icon: 'briefcase', items: ['일정·범위 관리', '요구사항 분석', '요구사항 설계', 'DB 모델링', '컨설팅', '이해관계자 커뮤니케이션', '리스크 관리', '사업 제안', 'TF 운영'] },
  { category: 'AI·협업 트렌드', icon: 'sparkles', items: ['AI 활용', 'AX 전략', 'Claude Code', 'MCP', 'Git', 'Slack'] },
  { category: '금융 IT', icon: 'bank', items: ['인터넷뱅킹', '모바일웹 상품가입', '비대면채널 모니터링', '웹 접근성'] },
  { category: '유통·물류 IT', icon: 'truck', items: ['WMS(창고관리)', '물류센터 자동화', 'POG·진열관리', '자동수발주', 'POP', '물류 BPR'] },
  { category: '시스템 운영 (SM)', icon: 'wrench', items: ['운영·유지보수', '인터페이스(IF) 연계', '전자세금계산서', '회계·사무관리', 'KMS', 'CMS', 'CRM'] },
  { category: '프론트엔드', icon: 'layout', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite', '반응형 웹'] },
  { category: 'UI 플랫폼', icon: 'monitor', items: ['엑스플랫폼(XPLATFORM)', '마이플랫폼(MiPlatform)', 'xFrame5'] },
  { category: '백엔드', icon: 'server', items: ['Java', 'Spring', 'Node.js', 'C', 'Pro*C', '.NET', 'Delphi', 'SQL', 'REST API'] },
  { category: '미들웨어·연계', icon: 'link', items: ['Tmax', 'WebtoB', 'MCI', 'MFT', 'FOS(NAS 파일관리)'] },
];

// 프로젝트: 항목 하나 = 카드 하나. type 값이 필터 버튼이 됩니다 (최신순으로 작성)
// kind = 사업 구분(SI/SM/TF), role = 담당 역할, period = 수행 기간(end가 비어 있으면 "현재")
// 카드의 "자세히 보기" 상세 내용(문제 상황·해결·성과·배운 점)은 project-details.md 에서 작성합니다 (제목으로 연결)
const PROJECTS = [
  {
    title: 'NH저축은행 비대면채널 모니터링 및 고객접근성 확대 구축',
    description: '비대면채널 고객 접근이력 대시보드 개발 및 모바일 여신서비스 고도화 사업 총괄',
    type: '금융', kind: 'SI', role: 'PM',
    period: { start: '2026.10', end: '' },
    tags: ['비대면채널', '대시보드', '여신', '저축은행'],
    url: '',
  },
  {
    title: 'NH저축은행 인터넷뱅킹 고도화',
    description: 'NH저축은행 인터넷뱅킹 서비스 고도화 사업 총괄',
    type: '금융', kind: 'SI', role: 'PM',
    period: { start: '2026.03', end: '2026.09' },
    tags: ['인터넷뱅킹', '고도화', '저축은행'],
    url: 'https://www.nhsavingsbank.co.kr',
  },
  {
    title: 'NH저축은행 모바일웹 상품가입 시스템 구축',
    description: '모바일 환경에서 금융상품에 가입할 수 있는 상품가입 시스템 구축 사업 총괄',
    type: '금융', kind: 'SI', role: 'PM',
    period: { start: '2025.05', end: '2025.10' },
    tags: ['모바일웹', '상품가입', '저축은행'],
    url: 'https://m.nhsavingsbank.co.kr',
  },
  {
    title: '농협물류 NH-WMS TF 총괄 / IF 연계 업무지원',
    description: '창고관리시스템(NH-WMS) TF 총괄 및 인터페이스 연계 업무 지원',
    type: '유통·물류', kind: 'TF', role: '총괄',
    period: { start: '2024.08', end: '2025.01' },
    tags: ['WMS', '인터페이스', 'TF'],
    url: '',
  },
  {
    title: '차세대 경제유통 구축 – 유통공통',
    description: '차세대 경제유통 시스템 구축 사업에서 유통공통 영역 리딩',
    type: '유통·물류', kind: 'SI', role: 'PL',
    period: { start: '2022.04', end: '2024.07' },
    tags: ['차세대', '경제유통', '유통공통'],
    url: '',
  },
  {
    title: '차세대 경제유통 구축 TF 및 구축사업 제안',
    description: '차세대 경제유통 구축 TF 참여 및 구축 사업 제안',
    type: '유통·물류', kind: 'SI', role: 'TF·제안',
    period: { start: '2021.05', end: '2022.03' },
    tags: ['차세대', 'TF', '사업제안'],
    url: '',
  },
  {
    title: '하나로유통 지능형 물류센터 추진 전산개발',
    description: '지능형 물류센터 추진에 따른 전산 개발 사업 총괄',
    type: '유통·물류', kind: 'SI', role: 'PM',
    period: { start: '2020.07', end: '2021.01' },
    tags: ['물류센터', '자동화', '하나로유통'],
    url: '',
  },
  {
    title: '유통일부 위탁업무 (생활물자/농산물물류)',
    description: '생활물자·농산물 물류 위탁업무 시스템 운영 총괄',
    type: '유통·물류', kind: 'SM', role: 'PM',
    period: { start: '2020.02', end: '2021.04' },
    tags: ['생활물자', '농산물물류', '운영'],
    url: '',
  },
  {
    title: 'NH-eBill 전자(세금)계산서 고도화 구축',
    description: '전자(세금)계산서 시스템 NH-eBill 고도화 사업 총괄',
    type: '경영지원', kind: 'SI', role: 'PM',
    period: { start: '2018.11', end: '2019.03' },
    tags: ['전자세금계산서', '고도화', 'NH-eBill'],
    url: '',
  },
  {
    title: 'POG(진열관리) 자동생성 시스템 도입',
    description: '매장 진열계획(POG) 자동생성 시스템 도입 사업 총괄',
    type: '유통·물류', kind: 'SI', role: 'PM',
    period: { start: '2018.06', end: '2018.11' },
    tags: ['POG', '진열관리', '자동화'],
    url: '',
  },
  {
    title: '농협물류 BPR 통합물류시스템',
    description: 'BPR 기반 통합물류시스템 운영 총괄',
    type: '유통·물류', kind: 'SM', role: 'PM',
    period: { start: '2016.01', end: '2019.12' },
    tags: ['BPR', '통합물류', '운영'],
    url: '',
  },
  {
    title: '진열표준화 운영시스템 개선',
    description: '매장 진열표준화 운영시스템 개선 사업 총괄',
    type: '유통·물류', kind: 'SI', role: 'PM',
    period: { start: '2014.11', end: '2015.01' },
    tags: ['진열표준화', '시스템개선'],
    url: '',
  },
  {
    title: '하나로유통 전산시스템 (진열관리/자동수발주/POP)',
    description: '진열관리·자동수발주·POP 등 하나로유통 전산시스템 운영 총괄',
    type: '유통·물류', kind: 'SM', role: 'PM',
    period: { start: '2014.02', end: '2020.01' },
    tags: ['진열관리', '자동수발주', 'POP', '운영'],
    url: '',
  },
  {
    title: '신통합사무관리 (공통/회계) 업무 운영',
    description: '통합사무관리 시스템의 공통·회계 업무 운영',
    type: '경영지원', kind: 'SM', role: '운영',
    period: { start: '2011.03', end: '2014.01' },
    tags: ['사무관리', '회계', '운영'],
    url: '',
  },
];

// 논문: 프로젝트 아래 "논문" 섹션 (최신순)
// authors 중 me 와 같은 이름은 굵게 표시, summary = 한국어 한 줄 요약, abstract = 원문 초록(접어서 표시)
const PUBLICATIONS = [
  {
    year: 2010,
    title: 'Dynamic service management technique for various context information',
    authors: ['민두성', '민홍기'],
    me: '민두성',
    venue: 'ICEIE 2010, Vol. 2, pp. V2-305',
    publisher: 'IEEE',
    doi: '10.1109/ICEIE.2010.5559787',
    url: 'https://ieeexplore.ieee.org/document/5559787',
    summary: '유비쿼터스 환경에서 다양한 상황 정보에 따라 서비스를 동적으로 추가·삭제하는 상황인지 서비스 관리 기법(DSM) 제안',
    abstract: 'With the emergence of ubiquitous era, it has become increasingly important for context-aware computing which takes full advantage of proactive services to support user environment. Many kinds of studies on context-aware services for supporting user-centric services have been performed. Recently related researches are concentrated on only service acquisition. Therefore most studies of them have not designed to provide a dynamic service while it has focused on executing services. In this paper, we present dynamic service management technique for various context-information. Firstly, we analyze previous researches out supporting context-aware services and draw its requirements from the dynamic context-aware services. Secondly, we propose DSM which provides dynamic situation considering context-domain\'s management and both service add and delete. We introduce service implementation based on the user interesting area in smart spaces. Finally, our approach is illustrated as a manifestation of the benefits of the introduced technique.',
  },
];

// =====================================================

const $ = (sel) => document.querySelector(sel);

// ----- 선 아이콘 (24x24 stroke) -----
const ICONS = {
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20"/>',
  sparkles: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15v4M17 17h4"/>',
  bank: '<path d="M3 21h18M5 21V11M9.5 21V11M14.5 21V11M19 21V11M12 3l9 5H3z"/>',
  truck: '<path d="M2 5h12v11H2zM14 9h4l4 4v3h-8"/><circle cx="6.5" cy="18" r="2"/><circle cx="17.5" cy="18" r="2"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
  layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  server: '<rect x="3" y="3" width="18" height="7" rx="1.5"/><rect x="3" y="14" width="18" height="7" rx="1.5"/><path d="M7 6.5h.01M7 17.5h.01"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
};

function icon(name, cls = 'h-5 w-5') {
  return `<svg class="${cls}" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] ?? ''}</svg>`;
}

// ----- 경력 요약 렌더링 -----
function getTenureMonths(joinDate) {
  const join = new Date(joinDate);
  const now = new Date();
  let months = (now.getFullYear() - join.getFullYear()) * 12 + (now.getMonth() - join.getMonth());
  if (now.getDate() < join.getDate()) months -= 1;
  return months;
}
const tenureMonths = getTenureMonths(CAREER.joinDate);
const tenureYears = Math.floor(tenureMonths / 12);

const [joinYear, joinMonth] = CAREER.joinDate.split('-');
const careerItems = [
  { label: '소속', value: CAREER.company },
  { label: '직급 · 역할', value: `${CAREER.position} · ${CAREER.role}` },
  { label: '입사', value: `${joinYear}년 ${Number(joinMonth)}월` },
  { label: '근속', value: `${tenureYears}년 ${tenureMonths % 12}개월` },
];
$('#career-summary').innerHTML = careerItems.map((c) => `
  <div class="bg-white px-5 py-4 dark:bg-[#111a2e]">
    <dt class="text-xs text-slate-500 dark:text-slate-400">${c.label}</dt>
    <dd class="mt-1 font-semibold text-navy-950 dark:text-white">${c.value}</dd>
  </div>
`).join('');
$('#profile-field').textContent = CAREER.field;
$('#profile-company').textContent = CAREER.company;

// ----- Hero: 역할 문구 + 핵심 수치 -----
$('#hero-roles').innerHTML = ROLES.join('<span aria-hidden="true" class="mx-2 text-slate-300 dark:text-slate-600">·</span>');
$('#hero-years').textContent = tenureYears;

const heroMetrics = [
  { value: `${tenureYears}년+`, label: `${CAREER.field} 경력` },
  { value: `${PROJECTS.length}건`, label: '수행 프로젝트' },
  { value: `${PROJECTS.filter((p) => ['PM', '총괄'].includes(p.role)).length}건`, label: 'PM·총괄 수행' },
  // 라벨 순서(구축·운영·TF)에 맞춰 SI → SM → TF 순으로, 실제 수행한 구분만 표시
  { value: ['SI', 'SM', 'TF'].filter((k) => PROJECTS.some((p) => p.kind === k)).join(' · '), label: '구축 · 운영 · TF 전 영역' },
];
$('#hero-metrics').innerHTML = heroMetrics.map((m) => `
  <div class="bg-white px-6 py-6 dark:bg-[#111a2e]">
    <dt class="text-sm text-slate-500 dark:text-slate-400">${m.label}</dt>
    <dd class="mt-1 text-2xl font-extrabold tracking-tight text-navy-900 dark:text-white sm:text-3xl">${m.value}</dd>
  </div>
`).join('');

// ----- 경력 흐름 (타임라인) -----
// 기간 문자열(YYYY.MM)은 사전순 비교가 곧 시간순 비교
function getPhaseRange(titles) {
  const list = PROJECTS.filter((p) => titles.includes(p.title));
  if (!list.length) return { range: '', count: 0 };
  const start = list.map((p) => p.period.start).sort()[0];
  const ongoing = list.some((p) => !p.period.end);
  const end = ongoing ? '현재' : list.map((p) => p.period.end).sort().at(-1);
  return { range: `${start} ~ ${end}`, count: list.length };
}
$('#career-timeline').innerHTML = CAREER_PHASES.map((phase, i) => {
  const { range, count } = getPhaseRange(phase.projects);
  phase.projects.forEach((t) => {
    if (!PROJECTS.some((p) => p.title === t)) console.warn(`[CAREER_PHASES] 일치하는 프로젝트 제목이 없습니다: ${t}`);
  });
  return `
  <li class="relative pb-8 pl-6 last:pb-0">
    <span class="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${i === 0 ? 'bg-navy-700 ring-4 ring-navy-100 dark:bg-sky-300 dark:ring-sky-300/20' : 'bg-slate-300 dark:bg-slate-600'}"></span>
    <p class="text-xs font-semibold tracking-wide text-navy-700 dark:text-sky-300">${range}</p>
    <h4 class="mt-1 font-bold text-navy-950 dark:text-white">${phase.title}</h4>
    <p class="mt-1 text-balance text-sm leading-relaxed text-slate-600 dark:text-slate-400">${phase.summary.replace(/\n/g, '<br class="hidden lg:inline" /> ')}</p>
    <p class="mt-1.5 text-xs text-slate-400 dark:text-slate-500">프로젝트 ${count}건</p>
  </li>`;
}).join('');

// ----- 핵심 성과 렌더링 -----
// 한 번만 렌더링하므로 .reveal 사용 가능 (프로젝트 카드처럼 다시 그리지 않음)
const highlightRows = [
  ['문제', 'problem', 'text-slate-500 dark:text-slate-400', ''],
  ['해결', 'solution', 'text-slate-500 dark:text-slate-400', ''],
  ['결과', 'result', 'text-navy-700 dark:text-sky-300', 'font-medium text-navy-950 dark:text-white'],
];
$('#highlights-grid').innerHTML = HIGHLIGHTS.map((h, i) => `
  <article class="card card-hover reveal flex flex-col rounded-xl p-6 sm:p-7">
    <p class="text-xs font-bold uppercase tracking-wider text-navy-600 dark:text-sky-300">${h.theme}</p>
    <p class="mt-4 text-4xl font-extrabold tracking-tight text-navy-900 dark:text-white">${h.metric}</p>
    <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">${h.metricLabel}</p>
    <h3 class="mt-5 border-t border-slate-200 pt-5 font-bold leading-snug text-navy-950 dark:border-white/10 dark:text-white">${h.title}</h3>
    <dl class="mt-4 flex-1 space-y-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
      ${highlightRows.map(([label, key, labelColor, textStyle]) => `
      <div>
        <dt class="text-xs font-semibold ${labelColor}">${label}</dt>
        <dd class="mt-0.5 ${textStyle}">${h[key]}</dd>
      </div>`).join('')}
    </dl>
    <button type="button" data-highlight="${i}" class="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-navy-700 hover:underline dark:text-sky-300">
      사례 자세히 보기 ${icon('arrowRight', 'h-4 w-4')}
    </button>
  </article>
`).join('');
HIGHLIGHTS.forEach((h) => {
  if (!PROJECTS.some((p) => p.title === h.project)) console.warn(`[HIGHLIGHTS] 일치하는 프로젝트 제목이 없습니다: ${h.project}`);
});

// ----- 역량(기술 스택) 렌더링 -----
$('#skills-grid').innerHTML = SKILLS.map((s) => `
  <div class="card reveal rounded-xl p-6">
    <div class="flex items-center gap-3">
      <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700 dark:bg-white/5 dark:text-sky-300">${icon(s.icon)}</span>
      <h3 class="font-bold text-navy-950 dark:text-white">${s.category}</h3>
    </div>
    <ul class="mt-5 flex flex-wrap gap-1.5">
      ${s.items.map((i) => `<li class="rounded-md border border-slate-200 px-2.5 py-1 text-sm text-slate-700 dark:border-white/10 dark:text-slate-300">${i}</li>`).join('')}
    </ul>
  </div>
`).join('');

// ----- 논문 렌더링 -----
// 한 번만 렌더링하므로 .reveal 사용 가능
$('#publications-list').innerHTML = PUBLICATIONS.map((pub) => `
  <article class="card reveal rounded-xl p-6 sm:p-8">
    <div class="flex flex-wrap items-center gap-2 text-xs font-semibold">
      <span class="text-navy-600 dark:text-sky-300">${pub.year}</span>
      <span class="text-slate-300 dark:text-slate-600">|</span>
      <span class="text-slate-500 dark:text-slate-400">${pub.publisher} · 학술대회 논문</span>
    </div>
    <h3 class="mt-2 text-lg font-bold leading-snug text-navy-950 dark:text-white sm:text-xl">${pub.title}</h3>
    <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
      ${pub.authors.map((a) => (a === pub.me ? `<strong class="font-semibold text-navy-900 dark:text-white">${a}</strong>` : a)).join(', ')}
      <span class="text-slate-300 dark:text-slate-600">·</span> ${pub.venue}
    </p>
    ${pub.summary ? `
    <p class="mt-4 flex gap-1.5 text-sm font-medium text-navy-800 dark:text-sky-200">
      ${icon('check', 'mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400')}<span>${pub.summary}</span>
    </p>` : ''}
    ${pub.abstract ? `
    <details class="group mt-4 border-t border-slate-200 pt-4 dark:border-white/10">
      <summary class="cursor-pointer select-none text-sm font-semibold text-navy-700 hover:underline dark:text-sky-300">Abstract 보기</summary>
      <p lang="en" class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">${escapeHtml(pub.abstract)}</p>
    </details>` : ''}
    <div class="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
      ${pub.url ? `<a href="${pub.url}" target="_blank" rel="noopener noreferrer" class="btn-outline rounded-lg px-3.5 py-2 text-xs font-semibold">${pub.publisher} Xplore ↗</a>` : ''}
      ${pub.doi ? `<a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener noreferrer" class="text-xs text-slate-500 hover:underline dark:text-slate-400">DOI ${pub.doi}</a>` : ''}
    </div>
  </article>
`).join('');

// ----- 프로젝트 렌더링 + 필터 -----
// 수행 기간(개월) 계산: 시작월과 종료월을 모두 포함, end가 비어 있으면 이번 달까지
function getDurationMonths({ start, end }) {
  const [sy, sm] = start.split('.').map(Number);
  const now = new Date();
  const [ey, em] = end ? end.split('.').map(Number) : [now.getFullYear(), now.getMonth() + 1];
  return (ey - sy) * 12 + (em - sm) + 1;
}

// 12개월 미만은 "N개월", 이상은 "N년 M개월"
function formatDuration(period) {
  const months = getDurationMonths(period);
  if (months < 12) return `${months}개월`;
  const years = Math.floor(months / 12);
  return months % 12 ? `${years}년 ${months % 12}개월` : `${years}년`;
}

function renderProjects(filter) {
  const list = filter === '전체' ? PROJECTS : PROJECTS.filter((p) => p.type === filter);
  // 건수 표시: 필터를 걸면 해당 분야 건수와 전체 건수를 함께 보여줌
  $('#project-count').innerHTML = filter === '전체'
    ? `총 <strong class="text-navy-900 dark:text-white">${PROJECTS.length}</strong>건`
    : `${filter} <strong class="text-navy-900 dark:text-white">${list.length}</strong>건 · 전체 ${PROJECTS.length}건`;
  $('#projects-grid').innerHTML = list.map((p) => {
    const index = PROJECTS.indexOf(p);
    // 번호는 PROJECTS 순서(최신순) 기준이라 필터를 걸어도 바뀌지 않음
    const no = String(index + 1).padStart(2, '0');
    const ongoing = !p.period.end;
    const topAchievement = p.detail?.achievements[0];
    // 가로형 목록 카드: [번호·사업구분] [분야·제목·설명·성과·태그] [기간·버튼]
    return `
    <article ${p.detail ? `data-project="${index}"` : ''} class="card card-hover flex flex-col overflow-hidden rounded-xl sm:flex-row ${p.detail ? 'cursor-pointer' : ''}">
      <div class="flex shrink-0 items-center gap-3 border-b border-slate-200 bg-slate-50 px-5 py-3 dark:border-white/10 dark:bg-white/[0.03] sm:w-24 sm:flex-col sm:justify-center sm:gap-1 sm:border-b-0 sm:border-r sm:px-0">
        <span class="text-xs font-semibold text-slate-400">No. ${no}</span>
        <span class="text-lg font-extrabold tracking-tight text-navy-800 dark:text-white">${p.kind}</span>
      </div>
      <div class="flex flex-1 flex-col gap-4 p-5 sm:p-6 md:flex-row md:items-center md:gap-8">
        <div class="min-w-0 flex-1">
          <div class="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span class="text-navy-600 dark:text-sky-300">${p.type}</span>
            <span class="text-slate-300 dark:text-slate-600">|</span>
            <span class="text-slate-500 dark:text-slate-400">${p.role}</span>
          </div>
          <h3 class="mt-1.5 text-lg font-bold leading-snug text-navy-950 dark:text-white">${p.title}</h3>
          <p class="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">${p.description}</p>
          ${topAchievement ? `
          <p class="mt-2 flex gap-1.5 text-sm font-medium text-navy-800 dark:text-sky-200">
            ${icon('check', 'mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400')}<span class="line-clamp-2">${formatDetailText(topAchievement)}</span>
          </p>` : ''}
          <p class="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400 dark:text-slate-500">
            ${p.tags.map((t) => `<span>#${t}</span>`).join('')}
          </p>
        </div>
        <div class="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4 dark:border-white/10 md:w-44 md:flex-col md:items-end md:justify-center md:border-l md:border-t-0 md:pl-6 md:pt-0">
          <div class="md:text-right">
            <p class="text-sm font-semibold text-navy-900 dark:text-slate-100">${p.period.start} ~ ${p.period.end || '현재'}</p>
            <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">${ongoing ? '<span class="font-semibold text-emerald-600 dark:text-emerald-400">진행 중</span> · ' : ''}${formatDuration(p.period)}</p>
          </div>
          ${p.detail || p.url ? `
          <div class="flex flex-wrap gap-2 md:justify-end">
            ${p.detail ? `
            <button type="button" data-open-detail class="btn-primary rounded-lg px-3.5 py-2 text-xs font-semibold">자세히 보기</button>` : ''}
            ${p.url ? `
            <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn-outline rounded-lg px-3.5 py-2 text-xs font-semibold">사이트 ↗</a>` : ''}
          </div>` : ''}
        </div>
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
      class="btn-outline rounded-lg px-3.5 py-1.5 text-sm font-medium">${t}</button>
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
// "## 번호. 제목" 으로 프로젝트를 구분하고, "### 문제 상황/해결/성과/배운 점" 아래 내용을 읽는다
// 예전 형식("### 목표/한 일")도 각각 문제 상황/해결로 읽는다
const DETAIL_FILE = 'project-details.md';
const DETAIL_SECTIONS = [
  ['문제', 'problem'], ['목표', 'problem'],
  ['해결', 'solution'], ['한일', 'solution'], ['수행', 'solution'],
  ['성과', 'achievements'], ['배운', 'lessons'],
];
const normalizeTitle = (s) => s.replace(/\s+/g, ' ').trim();

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

// md 본문 → HTML: 이스케이프 후 **굵게** 만 지원
function formatDetailText(s) {
  return escapeHtml(s).replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-navy-950 dark:text-white">$1</strong>');
}

function parseProjectDetails(md) {
  const details = new Map();
  let current = null;
  let key = null;
  md.replace(/<!--[\s\S]*?-->/g, '').split(/\r?\n/).forEach((raw) => {
    const line = raw.trim();
    if (line.startsWith('## ')) {
      current = { problem: '', solution: [], achievements: [], lessons: [] };
      key = null;
      details.set(normalizeTitle(line.slice(3).replace(/^\d+\.\s*/, '')), current);
    } else if (line.startsWith('### ')) {
      const name = line.slice(4).replace(/\s/g, '');
      key = DETAIL_SECTIONS.find(([word]) => name.includes(word))?.[1] ?? null;
    } else if (current && key) {
      const text = line.replace(/^[-*]\s*/, '').trim();
      if (!text) return;
      if (key === 'problem') current.problem += (current.problem ? ' ' : '') + text;
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
      if (d && (d.problem || d.solution.length || d.achievements.length || d.lessons.length)) p.detail = d;
    });
    renderProjects(activeFilter);
  })
  .catch((err) => console.warn(`${DETAIL_FILE}을(를) 불러오지 못했습니다. 로컬 서버로 열었는지 확인하세요.`, err));

// ----- 프로젝트 상세 모달 -----
const modal = $('#project-modal');

function renderDetailList(items, marker) {
  return items.map((t) => `
    <li class="flex gap-3"><span aria-hidden="true" class="mt-0.5 shrink-0 text-navy-400 dark:text-sky-300">${marker}</span><span>${formatDetailText(t)}</span></li>
  `).join('');
}

function renderDetailSection(title, body) {
  return `
    <section class="mt-8">
      <h4 class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-700 dark:text-sky-300">
        <span aria-hidden="true" class="h-3 w-1 rounded-full bg-navy-700 dark:bg-sky-300"></span>${title}
      </h4>
      ${body}
    </section>`;
}

function openProjectDetail(p) {
  const d = p.detail;
  $('#project-modal-body').innerHTML = `
    <div class="flex flex-wrap items-center gap-2 text-xs font-semibold">
      <span class="text-navy-600 dark:text-sky-300">${p.type}</span>
      <span class="text-slate-300 dark:text-slate-600">|</span>
      <span class="text-slate-500 dark:text-slate-400">${p.kind} · ${p.role}</span>
      <span class="text-slate-300 dark:text-slate-600">|</span>
      <span class="text-slate-500 dark:text-slate-400">${p.period.start} ~ ${p.period.end || '현재'} (${formatDuration(p.period)})</span>
    </div>
    <h3 id="project-modal-title" class="mt-3 pr-10 text-xl font-bold leading-snug text-navy-950 dark:text-white sm:text-2xl">${p.title}</h3>
    <div class="leading-relaxed text-slate-700 dark:text-slate-300">
      ${d.problem ? renderDetailSection('문제 상황', `<p class="mt-3">${formatDetailText(d.problem)}</p>`) : ''}
      ${d.solution.length ? renderDetailSection('해결', `<ul class="mt-3 space-y-2">${renderDetailList(d.solution, '•')}</ul>`) : ''}
      ${d.achievements.length ? renderDetailSection('성과', `<ul class="mt-3 space-y-2">${renderDetailList(d.achievements, '✓')}</ul>`) : ''}
      ${d.lessons.length ? renderDetailSection('배운 점', `<ul class="mt-3 space-y-2">${renderDetailList(d.lessons, '–')}</ul>`) : ''}
    </div>
  `;
  modal.showModal();
  document.documentElement.classList.add('overflow-hidden');
}

// 카드 어디를 눌러도 열리되, "사이트" 링크는 그대로 동작
$('#projects-grid').addEventListener('click', (e) => {
  if (e.target.closest('a')) return;
  const card = e.target.closest('[data-project]');
  if (card) openProjectDetail(PROJECTS[Number(card.dataset.project)]);
});

// 핵심 성과 카드 → 연결된 프로젝트 상세 창
$('#highlights-grid').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-highlight]');
  if (!btn) return;
  const p = PROJECTS.find((x) => x.title === HIGHLIGHTS[Number(btn.dataset.highlight)].project);
  if (p?.detail) openProjectDetail(p);
  else showToast('상세 내용을 불러오지 못했습니다. 프로젝트 목록에서 확인해 주세요.');
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

// ----- 스크롤 효과 (네비 테두리, 맨 위로 버튼) -----
const navbar = $('#navbar');
const toTop = $('#to-top');
function onScroll() {
  navbar.classList.toggle('scrolled', scrollY > 10);
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
    showToast('이메일 주소가 복사되었습니다.');
  } catch {
    showToast('복사에 실패했습니다. 직접 선택해 복사해 주세요.');
  }
});

$('#year').textContent = new Date().getFullYear();

// ----- 방문자 카운터 (hits.sh 배지) -----
// 배포 주소(github.io)에서만 표시·집계한다. 키를 고정해 /DS_Profile/ 와 /index.html 접속을 한 숫자로 합친다
const VISITOR_COUNTER_KEY = 'dswidecool.github.io/DS_Profile';
if (location.hostname.endsWith('github.io')) {
  const counter = $('#visitor-counter');
  const params = new URLSearchParams({ style: 'flat-square', label: 'visitors', color: '4d6fc6', labelColor: '24335e' });
  counter.innerHTML = `<img src="https://hits.sh/${VISITOR_COUNTER_KEY}.svg?${params}" alt="누적 방문자 수" height="20" class="h-5 opacity-70 transition hover:opacity-100" />`;
  counter.classList.remove('hidden');
}

// ----- 접속 시 항상 상단에서 시작 -----
// 주소의 #앵커(예: #contact)나 브라우저 스크롤 복원 때문에 하단으로 열리는 것을 막는다
// html의 scroll-smooth 때문에 애니메이션되지 않도록 behavior: 'instant' 사용
function scrollToTopNow() {
  if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  scrollTo({ top: 0, left: 0, behavior: 'instant' });
}
scrollToTopNow();
// 이미지·폰트 로딩 후 레이아웃이 바뀌거나 뒤로가기(bfcache)로 돌아온 경우에도 한 번 더 맞춘다
addEventListener('pageshow', scrollToTopNow);
