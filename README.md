# My Games

gomoorae의 웹 게임 모음입니다. 어두운 아케이드 테마의 메인 페이지에서 게임을 선택하면 바로 이동합니다. NEON TERRITORY를 상단에 소개하고 기존 세 게임은 아래 카드로 제공합니다.

| 게임 | 경로 |
|---|---|
| NEON TERRITORY · 10스테이지 땅따먹기 | [게임](games/neon_territory/index.html) · [규칙과 조작](games/neon_territory/README.md) |
| 매치3 퍼즐 | [게임](games/match3_puzzle/index.html) |
| Brick Breaker | [게임](games/brick_breaker/index.html) |
| 바이크 칼치기 | [게임](games/bike_game/index.html) |

각 게임의 메인으로/게임 목록으로 링크로 돌아올 수 있습니다.

## 파일 구성

- `index.html`: 메인 페이지
- `styles.css`: 메인 페이지 디자인과 작은 화면 대응
- `app.js`: 게임 카드 표시
- `games.json`: 게임 목록과 표시 정보
- `games/`: 개별 게임
- `thumbs/`: 게임 썸네일
- `.nojekyll`: GitHub Pages 정적 파일 제공

## 로컬에서 열기

메인 페이지는 게임 목록을 불러오기 때문에 정적 서버가 필요합니다. 아래는 직접 실행할 때 사용할 수 있는 예시입니다.

```bash
python -m http.server 5500
```

브라우저에서 `http://localhost:5500`을 엽니다. NEON TERRITORY 자체는 `games/neon_territory/index.html`을 더블클릭해도 플레이할 수 있습니다.

## GitHub Pages

기존 GitHub Pages 설정을 유지합니다. 처음 설정한다면 저장소 Settings → Pages에서 Deploy from a branch, main, / (root)를 선택합니다.

프로젝트 주소: https://gomoorae.github.io/My_web_games/

## 게임 추가

1. `games/새게임폴더/`에 게임 파일을 넣습니다.
2. `thumbs/`에 썸네일을 넣습니다.
3. `games.json`에 항목을 추가합니다.

```json
{
  "title": "My New Game",
  "description": "게임 설명",
  "thumbnail": "thumbs/my_new_game.png",
  "url": "games/my_new_game/index.html",
  "category": "ARCADE"
}
```

목록 순서대로 표시됩니다. 선택 항목인 `category`는 장르, `detail`은 상단 카드의 부가 정보입니다. 첫 게임에 `"featured": true`를 지정하면 큰 소개 카드로 표시됩니다. 소개 게임은 하나만 지정하세요.
