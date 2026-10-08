# My Games

gomoorae의 웹 게임 모음입니다. 어두운 아케이드 테마의 메인 페이지에서 게임을 선택하면 바로 이동합니다. 별냠을 상단에 소개하고 NEON TERRITORY, 월하무쌍과 기존 게임은 아래 카드로 제공합니다.

| 게임 | 경로 |
|---|---|
| 별냠 · 별 수집 도약 게임 | [게임](games/star-munch/index.html) · [규칙과 소스 안내](games/star-munch/README.md) |
| NEON TERRITORY · 10스테이지 땅따먹기 | [게임](games/neon_territory/index.html) · [규칙과 조작](games/neon_territory/README.md) |
| 월하무쌍 · 세 전장의 무협 생존 액션 | [게임과 조작 안내](games/moonfall/index.html) |
| 매치3 퍼즐 | [게임](games/match3_puzzle/index.html) |
| Brick Breaker | [게임](games/brick_breaker/index.html) |
| 바이크 칼치기 | [게임](games/bike_game/index.html) |

각 게임의 메인으로/게임 목록으로 링크로 돌아올 수 있습니다.

## 별냠

별 하나를 먹고 크게 도약해 다음 별로 건너가는 상승 게임입니다. 부스트를 얻으면 같은 하늘을 빠르게 올라가며, 좌우로 직접 별줄에 진입해 연속 수집합니다. 높이에 따라 먹구름이 늘고 움직이기 시작합니다.

**[별냠 플레이](https://gomoorae.github.io/My_web_games/games/star-munch/)** — A/D 또는 방향키로 이동, Space로 충전 도약, Esc로 일시정지, R로 다시 시작합니다. 휴대폰은 왼쪽 조이스틱을 좌우로 살짝 밀어 이동하고 오른쪽 버튼으로 도약합니다. 현재 버전은 **0.3.1**입니다.

`games/star-munch/`에 게임 소스, 그림, 빌드·검사 스크립트를 함께 보관합니다. 해당 폴더에서 `node scripts/build.cjs`를 실행하면 오프라인 실행용 단일 HTML을 만들 수 있습니다.

## 월하무쌍

자동으로 공격하는 무사를 움직여 6분을 버틴 뒤 마지막 고수를 쓰러뜨리는 무협 생존 게임입니다. 월하정원·청죽림·적염관의 서로 다른 지형, 권법·각법을 포함한 여덟 기본 무공과 아홉 합성 비기, 각 공격의 전용 그림 효과를 제공합니다. 모든 전장은 처음부터 선택할 수 있습니다.

**[PC 브라우저판](https://gomoorae.github.io/My_web_games/games/moonfall/)은 키보드 중심으로 조작합니다.** 이동은 WASD/방향키, 경공은 Space/우클릭, 절기는 E/좌클릭, 일시정지는 Esc, 합성 비급은 Tab입니다. 자세한 조작은 게임 아래 안내에서 볼 수 있습니다.

휴대폰에는 별도의 **[모바일 시험판](https://gomoorae.github.io/My_web_games/games/moonfall-mobile/)**을 제공합니다. 휴대폰을 가로로 돌려 플레이하며, 왼쪽 원형 패드로 이동하고 오른쪽 경공·절기 버튼과 메뉴를 터치합니다. 이동 패드는 입력한 방향으로 항상 최대 속도로 움직입니다.

PC 게임 페이지에서 **PC에서 시작**을 누르면 Godot 웹 빌드를 불러옵니다. **모바일판 시작**으로 모바일 시험판을 열 수도 있습니다. 첫 다운로드는 연결 속도에 따라 시간이 걸릴 수 있습니다. 화면이 멈추면 **다시 불러오기**를 이용하세요. 진행 중인 전투의 이어 하기는 지원하지 않습니다. 전체 화면 버튼으로 플레이 화면을 넓힐 수 있습니다.

- `games/moonfall/index.html`: 시작 화면, 전체 화면, 조작 안내
- `games/moonfall/game/`: Godot 웹 내보내기 파일. `index.html`과 함께 생성된 파일을 같은 위치에 유지합니다.

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

브라우저에서 `http://localhost:5500`을 엽니다. 월하무쌍은 `http://localhost:5500/games/moonfall/`에서 실행하며, 파일을 더블클릭하는 방식으로는 실행할 수 없습니다. NEON TERRITORY 자체는 `games/neon_territory/index.html`을 더블클릭해도 플레이할 수 있습니다.

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
