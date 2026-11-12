# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 저장소의 코드를 다룰 때 참고할 지침을 담고 있습니다.

## 개요

프로젝트 매니저 민두성의 한국어 단일 페이지 프로필/포트폴리오 사이트. 빌드 도구, 패키지 매니저, 테스트, 린터가 없는 순수 정적 사이트(`index.html` + `script.js` + `style.css`)다.

## 실행

- `index.html`을 브라우저에서 바로 열거나, 로컬 서버로 확인: `python -m http.server 8000` → http://localhost:8000
- 원격: `origin` = https://github.com/DsWideCool/DS_Profile (`main` 브랜치). GitHub Pages로 배포하는 것을 전제로 한다.

## 구조와 동작 방식

**콘텐츠는 `script.js` 상단 상수에서 관리한다.** HTML을 직접 고치지 말고 아래 배열을 수정한다.
- `ROLES` — Hero 타이핑 효과 문구
- `CAREER` — 소개 섹션 `#career-summary`(소속·직급·역할·입사·근속)와 프로필 카드 `#profile-company`·`#profile-field`에 렌더링. 근속기간은 `joinDate` 기준으로 접속 시점에 자동 계산된다.
- `SKILLS` — `#skills-grid`에 카드로 렌더링
- `PROJECTS` — `#projects-grid`에 카드로 렌더링. 필터 버튼은 각 항목의 고유한 `type` 값에서 자동 생성되며("전체" 포함), `url`이 비어 있으면 "사이트 방문" 버튼을 생략한다. `kind`(SI/SM/TF)·`role`은 카드 배지로, `period`(`end`가 비면 "현재")는 제목 아래에 표시된다. `gradient`는 Tailwind 클래스 문자열이다.
  - 카드에는 `PROJECTS` 순서(최신순) 기준 번호(`No. 01`~)가 붙고, 필터 옆 `#project-count`에 건수가 표시된다. 번호는 필터를 걸어도 바뀌지 않는다.
- **`project-details.md`** — 카드 "자세히 보기" 모달(`#project-modal`, `<dialog>`)의 목표·한 일·성과를 여기서 작성한다. `script.js`가 런타임에 fetch해서 파싱하며, `## 번호. 제목`의 제목이 `PROJECTS[].title`과 일치해야 연결된다(번호는 무시, 불일치 시 콘솔 경고). 내용이 있는 프로젝트에만 "자세히 보기"가 생긴다. fetch를 쓰므로 `file://`로 열면 상세 내용이 안 보이고 로컬 서버가 필요하다. GitHub Pages(Jekyll)가 md를 HTML로 변환하지 않도록 루트에 `.nojekyll`을 둔다.

**스타일링은 두 층으로 나뉜다.**
- Tailwind는 **Play CDN**(`cdn.tailwindcss.com`)으로 런타임에 동작한다. 그래서 JS 템플릿 문자열 안의 클래스도 별도 설정 없이 적용된다. 커스텀 `navy` 색상 팔레트와 Pretendard 폰트는 `index.html` `<head>`의 인라인 `tailwind.config`에 정의되어 있다.
- `style.css`는 Tailwind로 표현하기 어려운 것만 담는다(글래스모피즘 `.glass`/`.glass-nav`/`.btn-glass`/`.btn-primary`, 애니메이션, `.reveal`, `.show`). 여기에는 navy 색상이 hex/rgb로 하드코딩되어 있으므로, 팔레트를 바꾸면 두 곳을 함께 맞춰야 한다.

**다크모드**: Tailwind `darkMode: 'class'` 방식. `<head>`의 인라인 스크립트가 렌더링 전에 `localStorage.theme`(없으면 시스템 설정)을 읽어 `<html>`에 `dark` 클래스를 붙여 깜빡임을 막고, `script.js`의 `#theme-toggle`이 토글과 저장을 담당한다. `style.css`의 다크 스타일은 `.dark ...` 선택자를 사용한다.

**주의할 연결 지점**
- `.reveal` 요소는 `opacity: 0`에서 시작하고, IntersectionObserver가 `.visible`을 붙여야 보인다. Observer는 스크립트 실행 시점에 한 번만 대상을 수집하므로, 나중에 동적으로 다시 렌더링되는 요소(예: 필터링되는 프로젝트 카드)에는 `.reveal`을 붙이지 않는다.
- 네비 활성 표시는 `main section[id]`를 관찰해 `.nav-link`의 `href="#id"`와 매칭한다. 섹션을 추가하면 데스크톱 메뉴와 모바일 메뉴(`#mobile-menu`) 양쪽에 링크를 추가한다.
- `#to-top`, `#toast`는 공용 `.show` 클래스(`!important`)로 표시/숨김을 전환한다.
- 이메일 주소는 `index.html`의 프로필 카드, `mailto:` 링크, `#copy-email`의 `data-email` 세 곳에 중복되어 있다.
- `prefers-reduced-motion`을 존중한다(CSS 애니메이션 비활성화, 타이핑 효과 대신 첫 문구 고정).
- 코드 주석과 UI 텍스트는 한국어로 작성한다.
