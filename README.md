# BEYOND THE FRAME — 2026 시각디자인과 졸업전시 웹사이트

한국폴리텍대학 정수캠퍼스 시각디자인과 2026 졸업작품 온라인 전시 페이지입니다.
React 같은 빌드 도구 없이 **HTML + CSS + JavaScript** 로만 만든 정적 사이트라서, 이 폴더를 그대로 GitHub Pages에 올리면 바로 배포됩니다.

## 폴더 구조

```
beyond-the-frame/
├── index.html            # 페이지 구조 (HTML)
├── css/
│   └── style.css         # 모든 스타일
├── js/
│   └── main.js           # 인트로 애니메이션, 전시실 이동, 3D 석고상, 작가 목록 등 모든 동작
├── assets/
│   ├── images/           # 배경·포스터·티켓 이미지
│   │   ├── street.jpg        인트로 길거리 배경
│   │   ├── poster.webp       길거리 포스터
│   │   ├── ticket.png        티켓
│   │   ├── ticket-torn.png   뜯긴 티켓
│   │   ├── arch-bg.jpg       로비 배경
│   │   ├── frames.webp       로비 액자
│   │   ├── gallery-bg.jpg    전시실 배경
│   │   └── pedestals.webp    전시실 좌대
│   └── models/           # 학생별 석고상 3D 파일 (.glb)
│       └── 01.glb ~ 15.glb
├── .nojekyll             # GitHub Pages가 파일을 그대로 쓰도록 하는 빈 파일
└── README.md
```

### 3D 파일 번호 ↔ 학생

| 번호 | 이름 | 번호 | 이름 | 번호 | 이름 |
|---|---|---|---|---|---|
| 01 | 조민영 | 06 | 박호성 | 11 | 조예빈 |
| 02 | 민하도 | 07 | 김예일 | 12 | 송예준 |
| 03 | 천승현 | 08 | 오수한 | 13 | 김준서 |
| 04 | 박재연 | 09 | 박수빈 | 14 | 손예진 |
| 05 | 김수연 | 10 | 김우선 | 15 | 하태랑 |

(파일 이름에 한글이 있으면 서버에 따라 주소가 깨질 수 있어서 번호로만 저장했습니다.)

## 외부 링크 (CDN)

설치할 것은 없고, 아래 두 가지를 인터넷에서 불러옵니다.

- 글꼴: Google Fonts — Noto Sans KR, Noto Serif KR (`index.html` 9번째 줄)
- 3D: [three.js 0.160.0](https://cdn.jsdelivr.net/npm/three@0.160.0/) — jsDelivr CDN (`index.html`의 `importmap`)

## 내용 수정하는 곳

| 바꾸고 싶은 것 | 위치 |
|---|---|
| 학생 이름 / 작품 설명 / 포트폴리오 링크 | `js/main.js` 맨 위 `STUDENTS` 목록 (`portfolio: ''` 칸에 주소 넣기) |
| 이미지·3D 파일 경로 | `js/main.js` 맨 위 `ASSETS` |
| 인트로 방식 | `js/main.js`의 `INTRO_MODE` — `'combo'`(티켓→포스터→액자, 현재), `'ticket'`, `'frame'` |
| 색·글꼴·레이아웃 | `css/style.css` 맨 위 `:root` 변수 |

주소 끝에 `#lobby`, `#list`, `#gallery-1` ~ `#gallery-3` 를 붙이면 인트로 없이 해당 화면으로 바로 갑니다.

## 내 컴퓨터에서 실행하기

`index.html`을 더블클릭해서 열면 3D 석고상이 **안 나옵니다** (브라우저 보안 때문에 `file://` 에서는 3D 파일을 못 읽음).
아래 방법 중 하나로 로컬 서버를 켜서 열어 주세요.

- **VS Code**: Live Server 확장 설치 → `index.html` 우클릭 → *Open with Live Server*
- **Python**: 이 폴더에서 `python -m http.server 8000` → 브라우저에서 http://localhost:8000
- **Node.js**: 이 폴더에서 `npx serve` → 안내된 주소로 접속

## GitHub Pages 배포

1. 이 폴더 **안의 내용 전체**(index.html, css, js, assets, .nojekyll, README.md)를 저장소 최상위에 올립니다.
2. 저장소 **Settings → Pages → Build and deployment** 에서 Source: *Deploy from a branch*, Branch: `main` / `/ (root)` 선택 후 Save.
3. 1~2분 뒤 `https://<아이디>.github.io/<저장소이름>/` 에서 확인합니다.

모든 경로가 상대 경로라서 저장소 이름이 무엇이든 그대로 동작합니다.

## 브라우저 지원

최신 Chrome, Edge, Safari, Firefox (데스크톱·모바일). `importmap`을 쓰기 때문에 아주 오래된 브라우저에서는 3D가 나오지 않습니다.
