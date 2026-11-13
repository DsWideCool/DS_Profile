# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 저장소의 코드를 다룰 때 참고할 지침을 담고 있습니다.

## 개요

프로젝트 매니저 민두성의 한국어 단일 페이지 프로필/포트폴리오 사이트. 빌드 도구, 패키지 매니저, 테스트, 린터가 없는 순수 정적 사이트(`index.html` + `script.js` + `style.css`)다. 임원·인사팀이 읽는 시니어 PM 프로필이라는 톤을 유지한다(이모지·글래스모피즘·과한 애니메이션 지양, 흰 카드 + 가는 테두리 + 남색 포인트).

## 실행

- 로컬 서버: `node .claude/serve.js . 8000` → http://localhost:8000 (이 PC에는 Python이 없다). VS Code의 Ctrl+Alt+P(Local Preview 확장)는 `.vscode/settings.json`의 `localPreview.port`(8000)로 브라우저만 열고 서버는 띄우지 않는다.
- 원격: `origin` = https://github.com/DsWideCool/DS_Profile (`main` 브랜치). GitHub Pages로 배포하는 것을 전제로 한다.

## 구조와 동작 방식

섹션 순서: Hero(`#home`, 핵심 수치 포함) → 소개(`#about`, 경력 흐름 포함) → 핵심 성과(`#highlights`) → 역량(`#skills`) → 프로젝트(`#projects`) → 논문(`#publications`) → 연락처(`#contact`).

**콘텐츠는 `script.js` 상단 상수에서 관리한다.** HTML을 직접 고치지 말고 아래 배열을 수정한다.
- `ROLES` — Hero 이름 아래 `#hero-roles`에 " · "로 이어 붙인 정적 문구
- `CAREER` — 소개 섹션 `#career-summary`(소속·직급·역할·입사·근속)와 프로필 카드 `#profile-company`·`#profile-field`에 렌더링. 근속기간은 `joinDate` 기준으로 접속 시점에 자동 계산되며, Hero 문구의 `#hero-years`와 핵심 수치에도 쓰인다.
- Hero 핵심 수치 `#hero-metrics` — 별도 상수 없이 `CAREER`·`PROJECTS`에서 계산한다(경력 연수, 프로젝트 건수, `role`이 PM·총괄인 건수, 수행한 `kind`).
- `CAREER_PHASES` — 소개 섹션 "경력 흐름" 타임라인 `#career-timeline`. `projects`에 `PROJECTS[].title`을 나열하면 기간·건수가 해당 프로젝트 `period`로 자동 계산된다(불일치 시 콘솔 경고).
- `HIGHLIGHTS` — "핵심 성과" 섹션 `#highlights-grid`에 카드로 렌더링(역량 키워드·큰 숫자·문제/해결/결과). `project` 값이 `PROJECTS[].title`과 일치해야 "사례 자세히 보기"가 해당 프로젝트 상세 모달로 연결된다(불일치 시 콘솔 경고).
- `SKILLS` — 역량 섹션 `#skills-grid`에 카드로 렌더링. `icon`은 `script.js`의 `ICONS`(인라인 SVG 선 아이콘) 키 이름이다. 새 아이콘이 필요하면 `ICONS`에 24×24 stroke 경로를 추가한다.
- `PROJECTS` — `#projects-grid`에 카드로 렌더링. 필터 버튼은 각 항목의 고유한 `type` 값에서 자동 생성되며("전체" 포함), `url`이 비어 있으면 "사이트" 버튼을 생략한다. 카드 왼쪽에는 번호와 `kind`(SI/SM/TF), 본문 위에는 `type`·`role`, 오른쪽에는 `period`(`end`가 비면 "현재")가 표시된다.
  - 번호(`No. 01`~)는 `PROJECTS` 순서(최신순) 기준이라 필터를 걸어도 바뀌지 않고, 필터 옆 `#project-count`에 건수가 표시된다.
- `PUBLICATIONS` — 프로젝트 아래 "논문" 섹션 `#publications-list`에 카드로 렌더링(연도·제목·저자·학회·한국어 요약, 원문 초록은 `<details>`로 접어서 표시, IEEE·DOI 링크). `authors` 중 `me`와 같은 이름은 굵게 표시된다.
- **`project-details.md`** — 카드 "자세히 보기" 모달(`#project-modal`, `<dialog>`)의 문제 상황·해결·성과·배운 점을 여기서 작성한다(예전 제목인 목표·한 일은 각각 문제 상황·해결로 읽힌다). 성과의 첫 줄은 프로젝트 카드에도 한 줄로 표시된다. `script.js`가 런타임에 fetch해서 파싱하며, `## 번호. 제목`의 제목이 `PROJECTS[].title`과 일치해야 연결된다(번호는 무시, 불일치 시 콘솔 경고). 내용이 있는 프로젝트에만 "자세히 보기"가 생긴다. fetch를 쓰므로 `file://`로 열면 상세 내용이 안 보이고 로컬 서버가 필요하다. GitHub Pages(Jekyll)가 md를 HTML로 변환하지 않도록 루트에 `.nojekyll`을 둔다.

**스타일링은 두 층으로 나뉜다.**
- Tailwind는 **Play CDN**(`cdn.tailwindcss.com`)으로 런타임에 동작한다. 그래서 JS 템플릿 문자열 안의 클래스도 별도 설정 없이 적용된다. 커스텀 `navy` 색상 팔레트(포인트 색)와 Pretendard 폰트는 `index.html` `<head>`의 인라인 `tailwind.config`에 정의되어 있고, 중립색은 Tailwind `slate`를 쓴다.
- `style.css`는 Tailwind로 표현하기 어려운 것만 담는다(카드 `.card`/`.card-hover`, 모달 `.modal-surface`, 네비 `.nav-surface`/`.nav-link`, 버튼 `.btn-primary`/`.btn-outline`(필터 선택 상태는 `aria-pressed`), 섹션 머리말 `.eyebrow`/`.section-title`, `.reveal`, `.show`). 여기에는 navy·slate 색상과 다크 배경(`#0b1120`, 카드 `#111a2e`)이 hex/rgb로 하드코딩되어 있으므로, 팔레트를 바꾸면 `index.html`·`script.js`의 같은 값과 함께 맞춰야 한다.

**다크모드**: Tailwind `darkMode: 'class'` 방식. `<head>`의 인라인 스크립트가 렌더링 전에 `localStorage.theme`(없으면 시스템 설정)을 읽어 `<html>`에 `dark` 클래스를 붙여 깜빡임을 막고, `script.js`의 `#theme-toggle`이 토글과 저장을 담당한다. `style.css`의 다크 스타일은 `.dark ...` 선택자를 사용한다.

**주의할 연결 지점**
- `.reveal` 요소는 `opacity: 0`에서 시작하고, IntersectionObserver가 `.visible`을 붙여야 보인다. Observer는 스크립트 실행 시점에 한 번만 대상을 수집하므로, 나중에 동적으로 다시 렌더링되는 요소(예: 필터링되는 프로젝트 카드)에는 `.reveal`을 붙이지 않는다.
- 네비 활성 표시는 `main section[id]`를 관찰해 `.nav-link`의 `href="#id"`와 매칭한다. 섹션을 추가하면 데스크톱 메뉴와 모바일 메뉴(`#mobile-menu`, `md` 미만에서 사용) 양쪽에 링크를 추가한다.
- 접속 시 항상 상단에서 시작한다: `<head>`에서 `history.scrollRestoration = 'manual'`, `script.js` 끝에서 주소의 `#앵커`를 지우고 `scrollTo(0, 0)`(`pageshow` 때도 반복).
- 방문자 카운터는 푸터 `#visitor-counter`에 hits.sh 배지 이미지로 표시되며, `github.io` 호스트에서만 로드·집계된다(키: `VISITOR_COUNTER_KEY`).
- `#to-top`, `#toast`는 공용 `.show` 클래스(`!important`)로 표시/숨김을 전환한다.
- 이메일 주소는 `index.html`의 프로필 카드, `mailto:` 링크, `#copy-email`의 `data-email` 세 곳에 중복되어 있다.
- `prefers-reduced-motion`을 존중한다(`.reveal`·모달 애니메이션 비활성화).
- 코드 주석과 UI 텍스트는 한국어로 작성한다.
