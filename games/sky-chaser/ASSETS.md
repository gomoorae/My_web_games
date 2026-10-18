# 에셋 제작 정보


## 0.5.0 홍련의 조선소 · 2026-10-16

내장 imagegen 도구로 PNG 3장을 생성해 원본 그대로 복사했습니다. 이미지 후처리 없이 게임 실행 중 Canvas에서 부품 영역을 준비합니다. 볼칸은 폭 2/3 지점을 경계로 본체와 포대를 분리합니다. 이그니스는 생성 결과의 실제 배치에 맞춰 상단 행을 폭 34% 지점에서 분리하고, 하단 행은 2등분합니다.

### foundry

- 최종 경로: /Users/jeongsu/GAME/sky-chaser/dist/assets/crimson-foundry-v050.png
- 용도: 공중 조선소의 세로 반복 배경

최종 생성 프롬프트:

Use case: stylized-concept. Asset type: finished vertical scrolling background painting for a directly top-down fantasy arcade shooting game, exact tall portrait 1:3 aspect ratio. Create 'Crimson Sky Foundry', an immense steampunk airship construction yard floating above smoky midnight-blue clouds. Rich hand painted anime adventure-game environment with precise painterly architecture, navy iron, warm copper, aged ivory stone and muted terracotta-red industrial structures. Straight overhead camera at identical altitude throughout, NO horizon. Keep the central 55 percent broad, low-contrast and mostly open dark smoky sky for readable combat. Along both outer edges: suspended dry docks, unfinished airship hull frames, giant brass gears, overhead cranes, thick furnace pipes, small contained orange furnace openings and thin molten-metal channels far below. Lower third dock entrance, middle third furnace workshops and gantries, upper third enormous shipyard assembly cradles and foundry platforms. Painted light and material detail match a premium Japanese fantasy arcade shooter. Center stays subdued desaturated slate, tiny warm highlights restricted to the edge architecture. Top and bottom both end in comparable smoky blue-grey open sky with industrial edge fragments suitable for a loop with a short feathered overlap. Opaque background. No characters, no fighting ships, no monsters, no bullets, no foreground fireballs, no readable text, no symbols, no labels, no UI, no watermark.

### vulcan

- 최종 경로: /Users/jeongsu/GAME/sky-chaser/dist/assets/vulcan-parts-v050.png
- 용도: 화로거북 본체와 독립 박격포 포대

최종 생성 프롬프트:

Use case: stylized-concept. Asset type: production boss-parts sprite atlas, genuine transparent alpha background, exact 3:1 horizontal canvas. Two completely separate painted objects: LEFT TWO THIRDS of canvas contain a wide central hull, RIGHT THIRD contains one tall detached mortar pod. Leave a clear transparent vertical gutter at exactly two thirds of the total width. Object 1: VULCAN, a heavy flying furnace turtle midboss for a fantasy top-down shooter. Only the central hull, without side gunpods. Broad squat octagonal turtle-shell silhouette, riveted dark charcoal steel, aged brass ribs, weathered rust-red and ivory ceramic armor, a central furnace grate glowing warm orange inside the object, small downward-facing turtle-like armored mechanical head at the bottom, empty circular mounting sockets near left and right edges. No legs, wheels, side pods or wings attached. Hull centered at one third of the total canvas width, width about56% of whole canvas, height75% of canvas. Object 2: one detachable vertical mortar boiler pod centered at five sixths of canvas width, width about17% of canvas and height75%; thick copper pressure vessel, dark iron bands, ivory heat shield, short broad downward-facing mortar mouth and a small orange window near its top. This pod is drawn twice beside the hull and can be destroyed independently. Directly overhead camera, all fronts and weapon mouths point DOWN. Polished detailed hand-painted anime arcade sprites with hard material highlights, crisp silhouettes, small scratches and brass fittings. Consistent camera and lighting, truly transparent empty space, generous margins, no background wash, no shadow plane, no exhaust, no cast glow outside objects, no labels, no letters, no grid lines, no watermark.

### ignis

- 최종 경로: /Users/jeongsu/GAME/sky-chaser/dist/assets/ignis-parts-v050.png
- 용도: 봉인 장갑, 각성한 기계룡, 포대, 용광로 심장

최종 생성 프롬프트:

Use case: stylized-concept. Asset type: production sprite atlas for IGNIS the Crimson Furnace Dragon, exactly SQUARE canvas and strict 2x2 equal square cells with transparent gutters. Truly transparent alpha background. Detailed hand-painted anime fantasy arcade sprites, directly overhead camera, front and weapon direction always DOWN. Consistent palette: charcoal navy iron, antique brass joints, rust-red armor and worn ivory ceramic plates, contained amber-orange furnace light. TOP LEFT cell: complete SEALED armored flying furnace in a broad dragon-shaped silhouette, plated head toward bottom, layered folded mechanical wings tight around body, a long armored spine and tiny tucked tail to top, compact symmetric fortress-like mass, no open wing span. TOP RIGHT cell: complete AWAKENED mechanical DRAGON, same machine opened out, huge symmetrical segmented brass-and-ivory wings spread wide left/right, detailed dark red central torso, armored dragon head at lower center pointing down, small articulated claws, tail upward, distinct wing silhouette; full entire dragon including both wings fits inside this cell with transparent margins, no fire breath. BOTTOM LEFT cell: one isolated tall detachable heat-sink cannon pod, vertical body, twin downward-facing short brass barrels, ivory shield plates and orange vent windows. BOTTOM RIGHT cell: one isolated luminous orange furnace heart encased in a brass hexagonal cage with ivory ceramic clasps, compact circular object, orange luminosity only within object. All four objects centered in their own cells, 8% clear transparent margin in every cell, do not cross into neighboring cells. No scenery, background haze, projectile effects, shadow plane, colored rectangle, lettering, grid lines, UI or watermark. Clean alpha around every object. Existing illustration style is richly painted 1990s-inspired Japanese steampunk adventure shooter, not pixel art, not flat vector, not photoreal.




## 0.4.0 뇌운의 협곡 · 2026-10-15

내장 imagegen 도구로 새 PNG 3장을 생성했습니다. 원본을 수정 없이 복사하고, Canvas가 실행 중 각 보스 부품의 영역과 투명 경계를 읽습니다. 제미니의 실제 아틀라스는 폭 67.5% 지점의 빈 공간을 경계로 분리합니다. 템페스트는 2×2 부품 아틀라스입니다.

### canyon

- 저장 경로: /Users/jeongsu/GAME/sky-chaser/dist/assets/thunder-canyon-v040.png
- 용도: 세로 반복 협곡 배경

최종 생성 프롬프트:

Use case: stylized-concept. Asset type: finished vertical scrolling background painting for a top-down fantasy arcade shoot-em-up, exact aspect ratio 1:3, tall portrait. Primary request: Thundercloud Canyon, the second stage of Sky Chaser. A continuous aerial view straight down into a deep blue-grey rocky canyon, swirling slate and indigo storm clouds below the flight altitude, cliffs and elegant old brass electrical transmission towers clinging to the LEFT AND RIGHT edges, a few tiny pale turquoise insulators and power cables far below. Broad readable open misty center 55% wide for gameplay. Lower third canyon entrance, middle third more brass transmission outposts, upper third distant circular fortress foundations built into cliffs, all seen from identical directly overhead camera. Rich hand painted anime adventure game environment, brushwork and material detail, atmospheric depth, muted dark blue, teal shadows, desaturated brass accents, subtle soft ambient light. No horizon, no vanishing point, no ships or characters, no projectiles, no lightning bolts, no text, no labels, no interface, no watermark. Top and bottom edge must both end in similar blue-grey mist and cliff textures so the artwork can be vertically looped with a short feathered overlap. Keep bright detail at the edges; center low contrast. Opaque background.

### gemini

- 저장 경로: /Users/jeongsu/GAME/sky-chaser/dist/assets/gemini-parts-v040.png
- 용도: 제미니 본체와 독립 포대

최종 생성 프롬프트:

Use case: stylized-concept. Asset type: production game sprite atlas with genuine alpha transparency, exact 2:1 landscape, TWO equal SQUARE cells left to right, no grid lines. Primary request: original steampunk fantasy midboss GEMINI for a top-down vertical arcade shooter. Hand painted high quality anime arcade sprite, navy steel armor, weathered ivory plates, antique brass trim and vivid small cyan electrical crystals; crisp silhouette and highlights, camera directly overhead, nose and weapons pointing DOWN. LEFT CELL: only the wide angular central gunship hull without side gunpods, broad symmetrical manta-like wing mounts with empty sockets on left and right, cobalt armored cockpit, golden central spine, two small cylindrical engines embedded in hull, substantial detailed armor, width about 85% of cell, centered. RIGHT CELL: one detachable vertical electrical cannon pod, cyan coil near top, heavy navy-and-brass body, ivory armor plates, barrel aimed straight DOWN, plug connector on inner side, width about45% of cell and height75%, centered. The pod will be drawn twice independently beside the central hull. Separate parts must have no connecting artwork between cells; 8% transparent margin on every cell. Fully opaque painted objects with soft antialiased contour on truly TRANSPARENT EMPTY background. No shadow plane, no colored background, no checkerboard paint, no exhaust trail, no lightning, no lettering, no watermark.

### tempest

- 저장 경로: /Users/jeongsu/GAME/sky-chaser/dist/assets/tempest-parts-v040.png
- 용도: 요새 장갑, 회전 고리, 포대, 동력핵

최종 생성 프롬프트:

Use case: stylized-concept. Asset type: production decomposed BOSS sprite atlas, genuine alpha transparent background, SQUARE canvas with FOUR equal SQUARE cells in a precise2x2 grid. Primary request: TEMPEST, an original huge circular steampunk airborne thunder fortress for a top-down fantasy vertical shooter. Consistent directly overhead camera, hand painted polished anime arcade game art, extremely detailed dark navy gunmetal, warm antique brass fittings, pale ivory armor, small bright cyan crystal lights. TOP LEFT CELL: fortress central armored hull ONLY, a broad octagonal round flying citadel with mechanical battlements and a round dark empty reactor socket in center, no external ring, no side turrets, 80% cell width, symmetric. TOP RIGHT CELL: one complete open-centered thick mechanical annular ring ONLY, diameter85%cell, eight heavy navy/ivory armor segments, brass rails and small cyan capacitors; large genuinely transparent central hole about58%outerdiameter; ring will rotate independently around fortress. BOTTOM LEFT CELL: one detachable cannon tower ONLY, tall vertical navy and ivory bastion turret, brass twin barrels pointing straight DOWN, glowing cyan coils,80%cell height; used on left/right sides of fortress. BOTTOM RIGHT CELL: exposed reactor ONLY, luminous turquoise crystal sphere encased in intricate brass gimbal, navy machinery and a small hexagonal floating armor crown, no outer ring, diameter65%cell. Each part isolated centered in own cell with generous at least7% transparent margins. Identical consistent style and lighting allfourparts. No text, no grid lines, no background haze, no shadow plane, no exhaust, no bolts, no projectile effects, no watermark. Empty pixels and ringhole truly transparent, objects painted opaque.



- 제작일: 2026-10-15
- 내장 imagegen 도구 사용. API/CLI 대체 생성은 사용하지 않았습니다.
- 게임용 원본: dist/assets/lumi-key-art.png
- 역할: 출격 화면과 루미 인물 소개. 생성 결과를 수정 없이 복사했습니다.
- 실제 게임 캐릭터·일반 적·보스·항구·구름은 dist/render.mjs의 Canvas 그림입니다.
- 음악과 효과음은 dist/audio.mjs의 원본 합성음입니다.

## 일러스트 최종 프롬프트

Use case: stylized-concept. Asset type: original key illustration for Sky Chaser, a bright vertical arcade shooter. A heroic young adult female rune gunner with warm brown bobbed hair, brass goggles on her head, a long vivid orange scarf, ivory flight jacket with teal trim, gloves and boots, and a beautiful compact mechanical wing backpack with turquoise glowing runes. Full body, clearly visible arms and legs, dynamic soaring pose, holding a small elegant brass rune rifle, looking toward the viewer with confident joyful expression. She is flying above a sunlit Mediterranean harbor city on floating islands, with turquoise sea, cream clouds, little orange tile roofs, a distant colossal pirate airship. Premium Japanese 1990s arcade game cover illustration with precise ink contours and expressive hand-painted cel shading, original character design, polished detailed illustration. Portrait composition 2:3, protagonist placed in the center, broad wings span image, readable silhouette, lots of sky surrounding. Color direction: warm ivory, deep navy, turquoise sea, sunset orange accents. No writing, no letters, no logos, no UI, no watermark. This image is the game's title screen and pilot portrait; create a complete immersive composition.


## 0.2.0 전투 그래픽 · 2026-10-15

내장 imagegen으로 제작했습니다. PNG 원본을 수정 없이 사용하며, 게임 실행 중 Canvas에서 투명 경계를 읽고 스프라이트 영역·그림자·피격 섬광을 준비합니다. 기존 0.1 출격 일러스트를 디자인 참조로 사용했습니다.

최종 런타임 그림은 dist/assets/ 아래 있습니다.

| 런타임 파일 | 생성 결과 파일 |
| --- | --- |
| lumi-flight-v2.png | exec-ec82e127-ed66-4371-a9b1-588bfa84029f.png |
| pirate-fleet-v2.png | exec-630e03bb-e98b-4222-b08a-c03cc4594e95.png |
| iron-raven-airship-v2.png | exec-5bacd55f-b97f-4204-ba55-5c0b84ce7ea7.png |
| iron-raven-awakened-v2.png | exec-d6d1ba2d-77e8-4f71-af75-0c94677242ce.png |
| harbor-painted-v2.png | exec-bc50dbba-df21-4fba-a26a-5be365a5bcfa.png |

게임 목록 그림은 art-source/sky-chaser-library-v2.png 입니다. 폐기한 중간 시트는 런타임에 포함하지 않았습니다.

### 최초 제작 프롬프트

#### lumi

Original production art for Sky Chaser, a premium colorful 2D arcade vertical shooter. Match the supplied illustration's anime hand-painted ivory brass teal and orange fantasy-steampunk art direction. Rich painted material detail, crisp ink contour, readable silhouette, intricate brass hardware, highlights and shadow planes. NOT simple geometric vector art, not a photoreal 3D render. No text, labels, logos, UI, frames, watermark, ground plane, or cast ground shadow. Create a GAMEPLAY SPRITE SHEET, landscape 3:1 aspect, three exact equal square cells in one row. Real transparent background. Each cell is fully isolated and padded by at least 40 pixels. Same flying adult rune gunner Lumi from the reference: brown bob haircut, goggles, orange scarf, ivory jacket, visible arms legs and brown boots, ornate brass mechanical feather wings with turquoise rune inlays. Viewed from HIGH ABOVE AND BEHIND as she flies UPWARD toward the top of the screen; head at top, boots pointing bottom. She holds a forward-pointing rune rifle. Entire compact full body and both wings visible. The wingspan occupies 75 percent of each square cell. Cell 1 neutral centered level flight. Cell 2 same character banking to her left, left wing lowered, scarf streaming. Cell 3 banking to her right, right wing lowered. Consistent identical scale, pivot and character identity in all cells. Painted cel-shaded sprite suitable for display at about 90 pixels wide. These are distinct gameplay animation poses, not a cover illustration.

#### fleet

Original production art for Sky Chaser, a premium colorful 2D arcade vertical shooter. Match the supplied illustration's anime hand-painted ivory brass teal and orange fantasy-steampunk art direction. Rich painted material detail, crisp ink contour, readable silhouette, intricate brass hardware, highlights and shadow planes. NOT simple geometric vector art, not a photoreal 3D render. No text, labels, logos, UI, frames, watermark, ground plane, or cast ground shadow. Create a GAMEPLAY ENEMY ATLAS: landscape 3:2 aspect, EXACT 3 equal columns and 2 equal rows, six isolated sprites, one centered within each cell with generous transparent padding. Real transparent background. Every aircraft points DOWNWARD toward bottom of image, pure high overhead near-orthographic view. Top-left cell: small crimson and brass pirate scout plane with twin wings, propeller hub, turquoise cockpit. Top-middle: sleek navy-blue bat-wing interceptor with ivory fins, orange engine vents. Top-right: floating octagonal armored anti-air turret with a long barrel pointing down, riveted metal and hazard chevrons. Bottom-left: heavy burgundy bomber, two chunky brass engines and rotating propeller hubs, four exhaust pipes. Bottom-middle: spherical clockwork naval mine with eight brass spikes, segmented navy armor, glowing orange center. Bottom-right: large iron patrol cruiser mini-boss, broad navy and ivory armored wings, twin large brass cannon pods and a cyan reactor. All belong to the same pirate navy with navy metal, weathered ivory armor, brass details, small crimson insignia; handcrafted detailed sprite art. No human characters. No objects crossing cell boundaries. No labels or numbers. Include complete objects with no cropping.

#### boss

Original production art for Sky Chaser, a premium colorful 2D arcade vertical shooter. Match the supplied illustration's anime hand-painted ivory brass teal and orange fantasy-steampunk art direction. Rich painted material detail, crisp ink contour, readable silhouette, intricate brass hardware, highlights and shadow planes. NOT simple geometric vector art, not a photoreal 3D render. No text, labels, logos, UI, frames, watermark, ground plane, or cast ground shadow. Create a TWO-CELL BOSS SPRITE ATLAS, landscape 2:1 aspect, two exact equal square cells side by side, real transparent background, each entire sprite contained within its cell with wide padding. Both are the same enormous pirate war machine viewed from high overhead, facing DOWN toward bottom of screen. Left cell: IRON RAVEN form 1, a magnificent imperial armored fantasy airship, elongated ivory-and-brass central hull with burgundy spine and navy raven crest, paired broad navy mechanical wing nacelles, large twin propeller engines and forward brass cannons, intricate rivets and segmented armor plates. Right cell: IRON RAVEN form 2, a fierce unfolded raven automaton: distinct armored raven head at top with small orange eyes, compact central torso with a bright amber circular reactor, two huge symmetrical navy mechanical feather wings extending horizontally, two cannon arms beneath the wings and two articulated brass talon legs at bottom. Ivory armor panels and brass articulations connect both forms visually. The raven torso must occupy the center third of its cell, and spread wings occupy the side thirds; this is important for runtime animation. Compelling layered armor and metallic shading, lavish high-end 2D boss sprite illustration. Entire silhouette visible, no missing parts, no extra characters, no action background.

#### harbor

Original production art for Sky Chaser, a premium colorful 2D arcade vertical shooter. Match the supplied illustration's anime hand-painted ivory brass teal and orange fantasy-steampunk art direction. Rich painted material detail, crisp ink contour, readable silhouette, intricate brass hardware, highlights and shadow planes. NOT simple geometric vector art, not a photoreal 3D render. No text, labels, logos, UI, frames, watermark, ground plane, or cast ground shadow. Create a tall scrolling GAMEPLAY BACKGROUND MAP for a vertical shooter, portrait 1:3 aspect ratio. Absolutely no characters, enemies, bullets or UI. True aerial top-down map view with only a slight illustrative tilt, no horizon, no sky. A magnificent Mediterranean fantasy harbor archipelago seen from high above: turquoise water channels, curved ivory sea walls, densely varied cream stone buildings with terracotta and pale teal rooftops, tree-lined plazas, a round domed guild tower, piers, tiny moored sailboats, warehouses, cranes, stone bridges, cliff islands with deep layered shadow below their edges. Bottom third is a beautiful port entrance with breakwaters. Middle third is the richly detailed harbor district spread across left and right islands with an open turquoise navigable channel through center. Top third opens into deeper blue sea with a few little rocky islands. Flow from bottom to top, coherent landscape, broad quiet blue water space in the middle for readable enemy bullets. Painted anime background art matching reference, soft atmospheric depth, warm afternoon sunlight, finely detailed but slightly desaturated ground. Top and bottom edges should be mostly uninterrupted blue water so scrolling blends gently. No borders, no text. Fill the whole canvas.

### 최종 수정 프롬프트

#### lumi_final

Re-layout this exact three-pose gameplay sprite sheet for production use. Preserve Lumi's character design, ivory clothing, orange scarf, brass teal wings and all three poses. Real transparent alpha background. Landscape 3:1 canvas, three equal square cells in one row. CRITICAL: shrink each entire character to no more than 58 percent of its own cell width and height, put each exactly at its cell center. Leave very generous transparent empty gutters between all characters, at least 15 percent of cell width on every side of each sprite. NO overlap and NO part may cross its cell boundary. Show each entire rifle, wings, scarf, boots. No labels, no guides. Same crisp hand-painted detailed art, simply correct layout and spacing.

#### fleet_final

Use case: background-extraction. Remove ALL the brown, grey and black background and glow surrounding these SIX enemy aircraft sprites. Output a real transparent alpha background, fully transparent empty pixels between every object and within gaps between their wings. Keep exactly these six complete sprites, their positions in three columns and two rows, original design, colors, hardware, scale and shading. No opaque gradient backdrop, no checkerboard painted into image, no floor shadow, no rectangular tiles. Clean antialiased sprite edges. No text or extra artwork. Ensure complete objects do not touch each other.

#### airship_final

Use case: precise-object-edit. Isolate ONLY the LEFT armored pirate airship from this reference as ONE complete standalone game sprite. Completely remove the raven robot on the right, reconstruct any small edge it overlapped. Preserve the exact ivory/brass/navy/burgundy airship design, tall central armor, engraved gold raven crest, side engines, cannons and rear flags. High overhead view, nose/cannons pointing DOWN. Center the entire intact airship on a square transparent canvas with 12 percent empty padding on every edge. Real transparent alpha background, no scene, no frame, no other sprite, no labels. Keep painted intricate metal material and clean sprite contour.

#### raven_final

Use case: precise-object-edit. Isolate ONLY the RIGHT spread-wing raven automaton from this reference as ONE complete standalone game sprite. Completely remove the airship on the left, reconstruct any small edge it overlapped. Preserve exact navy and ivory armored mechanical feather wings with brass hinges, fierce raven head and glowing orange eyes, amber circular core, two cannon arms and two talon legs. Spread wings symmetrically; torso in central third, wings in side thirds. Facing DOWN toward player in high-angle overhead gameplay view. Center entire intact boss on a square transparent canvas with 12 percent empty padding on every edge, nothing cropped. Real transparent alpha background, no scene, no frame, no other sprite, no labels. Keep painted detailed metal surfaces.

### 게임 목록 그림 최종 프롬프트

Create an original landscape 16:9 game-library thumbnail for SKY CHASER. Use the attached character illustration and raven airship as design references. Same premium anime painted ivory/brass/teal/orange fantasy steampunk style. Composition: Lumi the brown-haired adult flying rune gunner with brass goggles, orange scarf and mechanical ivory teal wings in dynamic close-up on left half, the enormous navy and gold pirate airship on the right, turquoise harbor cliffs and cloud wisps underneath. Keep her face prominent and fully visible. Clear graphic composition readable as a small thumbnail. Large bold stylish ivory and warm gold arcade title text 'SKY CHASER' across the bottom center with a subtle dark navy shadow, no other text. Bright adventurous mood, detailed painted sprites, clean silhouette, no UI, no border or watermark.

## 0.3.1 루미 몸체 레이어 · 2026-10-15

- 내장 imagegen으로 기존 그림의 긴 목도리 끝부분만 제거한 몸체 레이어를 제작했습니다.
- 저장 위치: dist/assets/lumi-body-v031.png
- 원본 비행 그림: dist/assets/lumi-flight-v2.png. 폭탄 연출에 그대로 사용합니다.
- 실제 비행에서는 render.mjs에서 따로 그리는 목도리를 몸체에 연결하고, 시간과 기울기에 따라 끝부분이 펄럭이게 합니다.
- 생성 결과 원본 파일: exec-9a4d4c43-f655-4f6a-aa0c-6099fa30f6c4.png

### 최종 수정 프롬프트

Use case: precise-object-edit. Edit target: the supplied transparent three-pose Lumi gameplay sprite sheet. Make ONE small production edit: REMOVE ONLY the long loose orange scarf tails that extend away from the neck in all three poses. Keep the short orange scarf wrapped around the neck and a very small knot at the collar. The long tails will be animated separately by the game. Reconstruct any small areas of the ivory jacket or brass wing mechanism previously covered by those loose tails. Preserve EVERYTHING ELSE exactly: same character identity, brown hair, goggles, rifle, ivory clothes, boots, intricate ivory/brass/teal mechanical wings, colors, shading, camera angle, all three flight poses, scale and cell centers. Preserve the 3:1 landscape sheet with three equal square cells in a row and generous transparent gutters. Keep the genuine transparent alpha background, no matte, no shadows, no glow, no added propulsion effects. No labels, no text, no guides. Do not redesign the character, do not add any new fabric tails. This is a clean-body animation layer for the existing sprite.


## 0.4.1 레이저와 동력핵 파괴 연출

신규 비트맵 없이 Canvas 연출을 개선했습니다. `dist/laser-fx.mjs`가 충전 링·조준 표시·광선의 광원과 흐름을 게임 시간으로 그립니다. 기존 템페스트 동력핵 그림을 파편으로 사용하며 이전 장갑 그림으로 교체하지 않습니다.


## 0.8.0 이야기 일러스트 · 2026-10-18

제작 경로: 기본 내장 `image_gen` 도구. 기존 루미와 이그니스 그림을 참조해 새 장면을 생성하고, 도난·귀환 장면은 같은 도구로 중앙 구도를 수정했습니다. 선정 원본을 JPEG로만 변환했습니다. 수작업 합성·재도색·자르기는 하지 않았습니다. 기존 게임 그림 14개는 변경하지 않았습니다.

### theft

- 최종 파일: `dist/assets/story/theft.jpg`
- 크기: 1536×1024, 664,117 bytes
- SHA-256: `47af84bd80d2bc5652ba28b729b3ecbf813408df192c5f5d12285f106c6649b5`
- 참조 그림: `dist/assets/lumi-key-art.png`

생성 프롬프트:

```text
Use case: illustration-story, character-identity-preserving scene transformation.
Asset type: polished landscape game story cutscene, approximately 3:2 aspect ratio.
Reference image 1 supplies Lumi's exact character identity and the established visual style: adult young woman with short tousled warm brown hair, amber eyes, brass goggles resting on her head, ivory flight clothes over a dark vest, brown leather gloves and boots, long flowing orange scarf, articulated brass-and-ivory mechanical wings with luminous turquoise rune panels, compact brass rune pistol. Retain her outfit, recognizable face, and mechanical wings. Keep the warm painterly anime-steampunk rendering, detailed brushwork, luminous skies and believable brass surfaces.
Recurring story prop: the Wind Heart is one undamaged, faceted, elongated turquoise crystal, hand-to-forearm sized, suspended inside two crossing brass gyroscope rings. Make this shape clearly recognizable; it is NOT a red reactor.
Format and constraints: no words, captions, lettering, interface, logos, watermarks, borders, multiple panels, or duplicated characters. One finished illustration. Keep Lumi and the central story action within the central 55 percent of the frame so portrait cropping remains legible. Do not reproduce the reference's original pose or composition; transform it into this new story scene.
Scene: The theft at the harbor. A bright high-altitude Mediterranean steampunk harbor with white cliffside buildings, orange roofs, blue water, sailing boats and floating rocky islands, matching the reference world. Its tall ivory rune lighthouse has just gone dark: the central lamp socket is visibly empty and the tower's turquoise channels unlit. A dark wooden pirate airship with black sails is escaping upward behind the lighthouse, its brass cargo crane visibly lifting the glowing turquoise Wind Heart in its paired brass rings. Lumi appears near the foreground center in three-quarter view, startled but determined, turning toward the departing ship and spreading her rune wings to give chase. Her orange scarf catches the wind. Use the lighthouse, stolen crystal, pirate ship, and her eyeline to make the theft instantly readable. Emphasize adventure and sudden urgency, not devastation. Soft ivory clouds, vivid teal water, late-afternoon gold sunlight; turquoise light shines strongly only from the stolen crystal and Lumi's rune wings.
```

선정본 수정 프롬프트:

```text
Use case: precise-object-edit / composition adjustment. Edit this finished 3:2 landscape game story illustration only to make its key story action safe for a centered square crop. Preserve the existing painterly anime steampunk style, exact Lumi identity and clothes, orange scarf, turquoise rune wings, harbor, pirate ship, sunlight and palette. Keep landscape 3:2 dimensions.
Recompose the existing characters and story objects together: move Lumi slightly right so her face is around 43% of image width, and move the stolen turquoise crystal in its brass gyroscope rings and the extinguished lighthouse left so both sit around 68% of image width. The pirate ship can remain behind these central subjects, with its cargo crane naturally holding that same single crystal above the empty lighthouse lantern. Critical: the entire glowing crystal and the empty lighthouse lamp chamber must fit inside the middle 70% of the image, never near the outer edge; preserve plenty of scenery around the edges. Make the newly central objects convincingly part of the same original scene with coherent scale and perspective. Keep exactly one Lumi, one stolen crystal and one lighthouse, no duplicate objects. No added lettering, UI, borders or watermark.
```
### recovery

- 최종 파일: `dist/assets/story/recovery.jpg`
- 크기: 1536×1024, 633,138 bytes
- SHA-256: `5b889dc1b36e758ce843f540b38b7df526accff61ab54ab87e6582c8c1482b19`
- 참조 그림: `dist/assets/lumi-key-art.png`, `dist/assets/ignis-parts-v050.png`

생성 프롬프트:

```text
Use case: illustration-story, character-identity-preserving scene transformation.
Asset type: polished landscape game story cutscene, approximately 3:2 aspect ratio.
Reference image 1 supplies Lumi's exact character identity and the established visual style: adult young woman with short tousled warm brown hair, amber eyes, brass goggles resting on her head, ivory flight clothes over a dark vest, brown leather gloves and boots, long flowing orange scarf, articulated brass-and-ivory mechanical wings with luminous turquoise rune panels, compact brass rune pistol. Retain her outfit, recognizable face, and mechanical wings. Keep the warm painterly anime-steampunk rendering, detailed brushwork, luminous skies and believable brass surfaces.
Recurring story prop: the Wind Heart is one undamaged, faceted, elongated turquoise crystal, hand-to-forearm sized, suspended inside two crossing brass gyroscope rings. Make this shape clearly recognizable; it is NOT a red reactor.
Format and constraints: no words, captions, lettering, interface, logos, watermarks, borders, multiple panels, or duplicated characters. One finished illustration. Keep Lumi and the central story action within the central 55 percent of the frame so portrait cropping remains legible. Do not reproduce the reference's original pose or composition; transform it into this new story scene.
Reference image 2 supplies the defeated mechanical dragon Ignis: red rust-colored armored scales, brass ribs and mechanisms, ivory rigid wing panels, orange furnace vents. Use these features as falling broken wreckage, never as a living organic dragon.
Scene: Heroic recovery after the final battle over a crimson airborne foundry. Lumi is airborne in the central foreground, grasping and drawing the undamaged turquoise Wind Heart in its two crossing brass rings safely toward her chest with both hands, her recognizable ivory-and-brass rune wings spread to lift her away. Show her face in three-quarter view with focused relief. The defeated dragon is visibly breaking apart below and behind her: huge fractured red-brass-ivory dragon head, detached armored wing and broken plates falling toward a distant industrial foundry. Small ember sparks and warm smoke drift upward, but the turquoise crystal remains unbroken and luminous. Her long orange scarf arcs in the slipstream. Clean focal hierarchy: her face, hands, and turquoise crystal are clear and centered, surrounding wreckage secondary. Dramatic warm orange lower light against cool opening sky, painterly heroic escape, no gore, no extra characters.
```
### homecoming

- 최종 파일: `dist/assets/story/homecoming.jpg`
- 크기: 1536×1024, 634,577 bytes
- SHA-256: `5ca0506290e44798d44d81970c1e985a4cec8de01ddbb10701ae477ff9f42aef`
- 참조 그림: `dist/assets/lumi-key-art.png`

생성 프롬프트:

```text
Use case: illustration-story, character-identity-preserving scene transformation.
Asset type: polished landscape game story cutscene, approximately 3:2 aspect ratio.
Reference image 1 supplies Lumi's exact character identity and the established visual style: adult young woman with short tousled warm brown hair, amber eyes, brass goggles resting on her head, ivory flight clothes over a dark vest, brown leather gloves and boots, long flowing orange scarf, articulated brass-and-ivory mechanical wings with luminous turquoise rune panels, compact brass rune pistol. Retain her outfit, recognizable face, and mechanical wings. Keep the warm painterly anime-steampunk rendering, detailed brushwork, luminous skies and believable brass surfaces.
Recurring story prop: the Wind Heart is one undamaged, faceted, elongated turquoise crystal, hand-to-forearm sized, suspended inside two crossing brass gyroscope rings. Make this shape clearly recognizable; it is NOT a red reactor.
Format and constraints: no words, captions, lettering, interface, logos, watermarks, borders, multiple panels, or duplicated characters. One finished illustration. Keep Lumi and the central story action within the central 55 percent of the frame so portrait cropping remains legible. Do not reproduce the reference's original pose or composition; transform it into this new story scene.
Scene: The homecoming and restored sky routes. The same bright cliffside Mediterranean steampunk harbor with ivory houses, terracotta roofs, floating rocky islands and turquoise water is peaceful again. The tall ivory rune lighthouse is relit: show the recognizable turquoise Wind Heart in its two crossing brass rings installed within the glass lantern chamber, sending a welcoming soft turquoise-and-gold beam across the harbor. Lumi flies just in front of the lighthouse at center in a relaxed graceful three-quarter pose, her ivory-and-brass rune wings open, one gloved hand lifting in a small greeting to the returning boats, her face smiling with quiet relieved satisfaction. Her long orange scarf billows freely, a clear symbol of the returned wind. Small homebound sailing boats and merchant airships follow the reopened route below, friendly but distant; no extra close-up characters. Warm golden sunrise or sunset, peach clouds, gentle atmospheric depth, celebratory relief after an adventure. The lighthouse and Lumi must remain clearly visible together in the central crop. No battle, smoke, fire, or enemies.
```

선정본 수정 프롬프트:

```text
Use case: precise-object-edit / composition adjustment. Edit this finished 3:2 landscape game story illustration only to make its central story action safe for a centered square crop. Preserve the painterly anime steampunk style, exact Lumi face and ivory clothes, orange scarf, turquoise rune wings, cheerful greeting, peaceful harbor, ships, sunset and palette. Keep landscape 3:2 dimensions.
Move the existing lit rune lighthouse leftward and slightly farther into the scene so its entire glass lantern chamber containing the single glowing turquoise crystal in its brass gyroscope rings is around 69% of image width, just behind Lumi's right shoulder/wing. Keep Lumi's face around 43% of width; adjust the right wing naturally so it does not cover the crystal. The restored lighthouse and Lumi's face must both fit completely within the middle 70% of the picture. Populate the former far-right lighthouse area naturally with harbor cliff buildings and sky. Keep exactly one lighthouse and one Lumi; the crystal stays visibly inside the lantern chamber. Preserve all remaining style and story details. No lettering, UI, borders or watermark.
```


## 0.9.0 사운드트랙 · 2026-10-18

모델: YuE2 MLX 8-bit · 32 steps · instrumental. 전투 스타일은 사용자가 선택한 오케스트라+록(B안)입니다. 타이틀/엔딩은 승인된 B의 원본을 입력으로 한 instrumental cover이며, 다른 곡은 새 생성입니다. 가중치 라이선스는 CC BY-NC 4.0이며 코드 라이선스와 구분합니다. 상업적 이용 조건은 별도로 확인해야 합니다.

승인된 B 원본 SHA-256: `5e2777738da00ff7bdcd94ae29f1983765abe19d3297314b48d3ca24e4ea5655`. 원본을 바이트 단위로 보존했습니다.

웹용 음원은 48 kHz stereo / AAC 192 kbps이며 공통 -21 dBFS RMS 수준으로 맞췄습니다. 이는 LUFS나 true-peak 측정이 아닙니다. 디코딩 후 샘플 피크와 무음 구간, 파일 무결성, 반복 경계를 검사했습니다. 주관적 청취 검증으로 표현하지 않습니다. 모든 원본과 생성 경고는 `artifacts/soundtrack-v0.9.0/`에 보관합니다.

| ID | 곡 | 파일 | 길이 | SHA-256 |
|---|---|---|---|---|
| stage1 | 해풍의 항구 | `dist/assets/music/stage1.m4a` | 61.30s | `a9b3eb18259b8e72893d863c560732756fb0771a8b8b2722ba1a3a947efb5980` |
| title | 빼앗긴 바람 — 루미의 테마 | `dist/assets/music/title.m4a` | 60.40s | `94ca6504fa06996c59a4bfa5f11cd39a70cc147e69d00ce7aa45a80d4b9fe58b` |
| stage2 | 뇌운을 가르는 날개 | `dist/assets/music/stage2.m4a` | 77.40s | `6e4e46b9ca3513acfd6b18f5ec1d6890b90aa73fe3cedbef980cf627425da0e2` |
| stage3 | 홍련의 조선소 | `dist/assets/music/stage3.m4a` | 100.12s | `26bdc242b9e4a76dd5e5ff7235ce0cd0b49f5eccce0e965e70c24d291c31ffd2` |
| midboss | 돌파구 | `dist/assets/music/midboss.m4a` | 39.08s | `9e4411c0067a2fa5a02f5918640cc25f1314979827d1b8fd0ed03d90129dfd6e` |
| boss1 | 아이언 레이븐 — 해적 기함 | `dist/assets/music/boss1.m4a` | 52.30s | `a88a5a03abb6c6073aeb5b25134e3bc999cfcdbd3e505a7058489cb72e6fba49` |
| boss2 | 템페스트 — 폭풍의 눈 | `dist/assets/music/boss2.m4a` | 57.70s | `b6a7ed860d4d1d8f07f8cc1b2c5d2cb99b021d406d02326c72c766290a97686d` |
| boss3 | 이그니스 — 마지막 비행 | `dist/assets/music/boss3.m4a` | 75.06s | `080e4c8b9edca74ef150bcc3c59a652b8c65c342524d9a48d92882b1d1303bfb` |
| ending | 돌아온 바람 — 배송 완료 | `dist/assets/music/ending.m4a` | 62.42s | `a5d862d8e1e65386c504bbc8611f9deb3fc918c75f848f9947734fb0e8949028` |
| launch | 출격 | `dist/assets/music/launch.m4a` | 4.61s | `61e8e006f9f5e470614b4b8cb40407f2859c3ff1ef8dfc9b6525e171292c8852` |
| warning | 보스 출현과 변신 | `dist/assets/music/warning.m4a` | 4.50s | `473138e9de8e4a56f640e78ac947e34d07626ed29a15a90360b0b366b6c12dfc` |
| clear | 항로 확보 | `dist/assets/music/clear.m4a` | 6.50s | `fd203d75a75e361d3df09048942980714dfc01ef4294b666c3e3ad800f0e169a` |
| gameover | 다음 비행을 기다리며 | `dist/assets/music/gameover.m4a` | 6.39s | `5ec6b61cedf398138ff3626e77146674ef74c6b620510686f802f572efe5fa6f` |

### 요청 프롬프트와 시드

#### stage1

방식: `text2music` · seed `4211018` · instrumental `True` · steps `32`

```text
Original instrumental background music for the first stage of Sky Chaser, a colorful fantasy-steampunk vertical arcade shooter. Lumi, a cheerful flying courier with brass rune wings and an orange scarf, pursues pirate airships over a sunlit turquoise harbor. The mood is adventurous, nimble, optimistic and exciting, with a clear forward pulse rather than danger or sadness. Approximately 148 BPM, steady 4/4, bright D major character. A memorable rising four-note motif answered by a playful descending phrase; short melodic phrases and clear breathing space. Introduce the beat and main melody within the first two bars. Compose a coherent approximately one-minute cue: energetic theme, brief contrasting phrase, varied return of the theme, and a compact musical cadence close to the end. Maintain gameplay momentum throughout, with no long intro, no quiet breakdown, and no long solo. Balanced, clean stereo mix with controlled bass and room for game sound effects. Strictly instrumental throughout: no singing, no choir, no vocal chops, no humming, no spoken voice, no chanting, no lyrics. No environmental sounds or weapon sound effects. Orchestral arcade rock. Bright melodic strings and heroic brass interlock with crunchy rhythm electric guitars, melodic electric bass and a tight live drum kit. Driving eighth-note guitar rhythm, punchy kick and snare, restrained cymbals, occasional short clean lead-guitar answers. The flute or strings keep the playful flying-courier identity audible. Energetic and sunny rather than aggressive metal. Keep the orchestral melody clear over the guitars; no dense wall of distortion, no extended guitar solo and no electronic dance drop.
```

#### title

방식: `cover` · seed `10918010` · instrumental `True` · steps `32`

```text
Original instrumental soundtrack for Sky Chaser, a colorful fantasy-steampunk arcade shooter starring Lumi the flying courier. Clear memorable rising four-note heroic motif answered by a short descending phrase. Clean stereo mix with controlled bass, melodic orchestral identity and space for game sound effects. Strictly instrumental: no vocals, singing, choir, humming, chanting, spoken voice or vocal chops. No environmental or weapon sounds. Warm uplifting title-theme arrangement of the source melody. Bright D-major adventure, woodwinds and sweeping strings sing the supplied melody, warm brass answers, light electric rhythm guitar, melodic bass and restrained live drums. A welcoming fantasy harbor and promise of flight. Clear theme within the first two bars, flowing four-bar phrases, moderate confident pulse, no explosive intro or solemn cinematic drones. Preserve the source melodic identity while giving it a graceful orchestral introduction.
```

#### stage2

방식: `text2music` · seed `10918011` · instrumental `True` · steps `32`

```text
Original instrumental soundtrack for Sky Chaser, a colorful fantasy-steampunk arcade shooter starring Lumi the flying courier. Clear memorable rising four-note heroic motif answered by a short descending phrase. Clean stereo mix with controlled bass, melodic orchestral identity and space for game sound effects. Strictly instrumental: no vocals, singing, choir, humming, chanting, spoken voice or vocal chops. No environmental or weapon sounds. Driving orchestral arcade rock: crunchy electric rhythm guitar, melodic bass, tight live drum kit, clear strings and heroic brass. Main hook and full rhythm enter immediately, no long intro, no quiet breakdown, no extended solo. Maintain an even exciting gameplay pulse, with short contrasting phrases and recurring memorable hooks; arrange four-bar and eight-bar phrases suitable for looping. Stage 2: fast pursuit through dark storm canyons and electric power towers. Approximately 156 BPM, steady 4/4, E minor with flashes of hopeful major harmony. Precise synth arpeggios weave underneath staccato strings, sharp brass answers and energetic rock drums. Tense, agile, determined, not gloomy. Frequent short melodic returns, no slow build, no EDM drop. End the final phrase on a strong beat with continuing energy.
```

#### stage3

방식: `text2music` · seed `10918012` · instrumental `True` · steps `32`

```text
Original instrumental soundtrack for Sky Chaser, a colorful fantasy-steampunk arcade shooter starring Lumi the flying courier. Clear memorable rising four-note heroic motif answered by a short descending phrase. Clean stereo mix with controlled bass, melodic orchestral identity and space for game sound effects. Strictly instrumental: no vocals, singing, choir, humming, chanting, spoken voice or vocal chops. No environmental or weapon sounds. Driving orchestral arcade rock: crunchy electric rhythm guitar, melodic bass, tight live drum kit, clear strings and heroic brass. Main hook and full rhythm enter immediately, no long intro, no quiet breakdown, no extended solo. Maintain an even exciting gameplay pulse, with short contrasting phrases and recurring memorable hooks; arrange four-bar and eight-bar phrases suitable for looping. Stage 3: assault on a blazing pirate foundry. Approximately 164 BPM, steady 4/4, energetic A minor. Heavier guitar rhythm, powerful low brass, metallic tuned percussion and galloping strings. Strong melodic hook remains audible above the weight. Heat, machinery and urgent forward motion, heroic action rather than horror. Increase harmonic intensity in the last third while preserving a consistent tempo. No wall of noise, no machine sound effects. Continuing four-bar phrase at the end.
```

#### midboss

방식: `text2music` · seed `10918013` · instrumental `True` · steps `32`

```text
Original instrumental soundtrack for Sky Chaser, a colorful fantasy-steampunk arcade shooter starring Lumi the flying courier. Clear memorable rising four-note heroic motif answered by a short descending phrase. Clean stereo mix with controlled bass, melodic orchestral identity and space for game sound effects. Strictly instrumental: no vocals, singing, choir, humming, chanting, spoken voice or vocal chops. No environmental or weapon sounds. Driving orchestral arcade rock: crunchy electric rhythm guitar, melodic bass, tight live drum kit, clear strings and heroic brass. Main hook and full rhythm enter immediately, no long intro, no quiet breakdown, no extended solo. Maintain an even exciting gameplay pulse, with short contrasting phrases and recurring memorable hooks; arrange four-bar and eight-bar phrases suitable for looping. Shared midboss battle: immediate urgent challenge. Approximately 168 BPM, 4/4, D minor with an adventurous resolve. Short punchy guitar riff, snare accents, quick string ostinato and brass calls. Concentrated energetic theme, a brief contrasting response and return. Relentless but clean, no long build or slow interlude. End with an energetic phrase that can return to the beginning.
```

#### boss1

방식: `text2music` · seed `10918014` · instrumental `True` · steps `32`

```text
Original instrumental soundtrack for Sky Chaser, a colorful fantasy-steampunk arcade shooter starring Lumi the flying courier. Clear memorable rising four-note heroic motif answered by a short descending phrase. Clean stereo mix with controlled bass, melodic orchestral identity and space for game sound effects. Strictly instrumental: no vocals, singing, choir, humming, chanting, spoken voice or vocal chops. No environmental or weapon sounds. Driving orchestral arcade rock: crunchy electric rhythm guitar, melodic bass, tight live drum kit, clear strings and heroic brass. Main hook and full rhythm enter immediately, no long intro, no quiet breakdown, no extended solo. Maintain an even exciting gameplay pulse, with short contrasting phrases and recurring memorable hooks; arrange four-bar and eight-bar phrases suitable for looping. Iron Raven boss battle: a giant pirate airship guards the stolen rune core. Approximately 164 BPM, 4/4, martial but adventurous. Military snare rolls, bold pirate brass calls, chunky guitar rhythm, driving bass and fast strings. A theatrical menacing rival theme with a heroic counter-melody, not horror. Immediate memorable hook. Keep up the rhythm through the whole cue and end on a continuing phrase.
```

#### boss2

방식: `text2music` · seed `10918015` · instrumental `True` · steps `32`

```text
Original instrumental soundtrack for Sky Chaser, a colorful fantasy-steampunk arcade shooter starring Lumi the flying courier. Clear memorable rising four-note heroic motif answered by a short descending phrase. Clean stereo mix with controlled bass, melodic orchestral identity and space for game sound effects. Strictly instrumental: no vocals, singing, choir, humming, chanting, spoken voice or vocal chops. No environmental or weapon sounds. Driving orchestral arcade rock: crunchy electric rhythm guitar, melodic bass, tight live drum kit, clear strings and heroic brass. Main hook and full rhythm enter immediately, no long intro, no quiet breakdown, no extended solo. Maintain an even exciting gameplay pulse, with short contrasting phrases and recurring memorable hooks; arrange four-bar and eight-bar phrases suitable for looping. Tempest boss battle: a precise storm machine fires rotating bullets and lasers. Approximately 170 BPM, 4/4, tense E minor. Sharp synchronized electric guitar and string pulses, crystalline synth arpeggios, assertive kick and snare, agile brass accents. A tightly focused technical duel with clear forward momentum and a memorable rising answer. No long ambient intro or dance drop. Continue the energetic pattern into the ending.
```

#### boss3

방식: `text2music` · seed `10918016` · instrumental `True` · steps `32`

```text
Original instrumental soundtrack for Sky Chaser, a colorful fantasy-steampunk arcade shooter starring Lumi the flying courier. Clear memorable rising four-note heroic motif answered by a short descending phrase. Clean stereo mix with controlled bass, melodic orchestral identity and space for game sound effects. Strictly instrumental: no vocals, singing, choir, humming, chanting, spoken voice or vocal chops. No environmental or weapon sounds. Driving orchestral arcade rock: crunchy electric rhythm guitar, melodic bass, tight live drum kit, clear strings and heroic brass. Main hook and full rhythm enter immediately, no long intro, no quiet breakdown, no extended solo. Maintain an even exciting gameplay pulse, with short contrasting phrases and recurring memorable hooks; arrange four-bar and eight-bar phrases suitable for looping. Ignis final battle: an unfinished mechanical dragon awakened by the stolen heart of the wind. Approximately 176 BPM, steady 4/4. Heroic orchestral rock with powerful but melodic guitar, rapid strings, broad brass and strong live drums. The core heroic motif is prominent from the beginning. The first section is a dangerous confrontation; the middle answers with soaring resolve; the last third intensifies with higher brass and fuller drums without tempo change, culminating in the strongest variation of the hook. No choir or vocals, no silence or slow breakdown. End on an energetic phrase for repeating the final confrontation.
```

#### ending

방식: `cover` · seed `10918017` · instrumental `True` · steps `32`

```text
Original instrumental soundtrack for Sky Chaser, a colorful fantasy-steampunk arcade shooter starring Lumi the flying courier. Clear memorable rising four-note heroic motif answered by a short descending phrase. Clean stereo mix with controlled bass, melodic orchestral identity and space for game sound effects. Strictly instrumental: no vocals, singing, choir, humming, chanting, spoken voice or vocal chops. No environmental or weapon sounds. Warm peaceful ending arrangement of the supplied source melody. The stolen wind core is returned, the lighthouse shines and Lumi waves to the reopened harbor. Gentle piano carries the recognizable melody, warm strings and woodwinds respond, very light acoustic guitar and restrained percussion. Tender, relieved and hopeful, never tragic. Bring the source melody forward immediately, open gradually into a bright orchestral return, then finish with a natural resolved major-key cadence and a short soft musical tail. No heavy guitars or dramatic combat percussion.
```

#### launch

방식: `text2music` · seed `10918018` · instrumental `True` · steps `32`

```text
Original instrumental soundtrack for Sky Chaser, a colorful fantasy-steampunk arcade shooter starring Lumi the flying courier. Clear memorable rising four-note heroic motif answered by a short descending phrase. Clean stereo mix with controlled bass, melodic orchestral identity and space for game sound effects. Strictly instrumental: no vocals, singing, choir, humming, chanting, spoken voice or vocal chops. No environmental or weapon sounds. Ten-second compact bright launch fanfare, orchestral arcade rock. Immediate rising four-note brass and guitar gesture over one energetic drum fill, confident major-key lift, quickly resolved triumphant chord. A short complete game cue with a brief natural tail, no introduction or sustained repeating section.
```

#### warning

방식: `text2music` · seed `10918019` · instrumental `True` · steps `32`

```text
Original instrumental soundtrack for Sky Chaser, a colorful fantasy-steampunk arcade shooter starring Lumi the flying courier. Clear memorable rising four-note heroic motif answered by a short descending phrase. Clean stereo mix with controlled bass, melodic orchestral identity and space for game sound effects. Strictly instrumental: no vocals, singing, choir, humming, chanting, spoken voice or vocal chops. No environmental or weapon sounds. Ten-second compact boss-warning and transformation stinger, orchestral arcade rock. Immediate low brass pulse and sharp string rise, two tense electric-guitar accents, concise snare roll into a heavy unresolved chord. Short focused dramatic cue with a brief decay, no long intro or repeating song section. Musical instruments only, no alarm or siren sound effect.
```

#### clear

방식: `text2music` · seed `10918020` · instrumental `True` · steps `32`

```text
Original instrumental soundtrack for Sky Chaser, a colorful fantasy-steampunk arcade shooter starring Lumi the flying courier. Clear memorable rising four-note heroic motif answered by a short descending phrase. Clean stereo mix with controlled bass, melodic orchestral identity and space for game sound effects. Strictly instrumental: no vocals, singing, choir, humming, chanting, spoken voice or vocal chops. No environmental or weapon sounds. Ten-second compact stage-clear fanfare, joyful orchestral arcade rock. Immediate bright brass and strings play a rising heroic phrase answered by ringing electric guitar, a concise drum flourish, then a clearly resolved triumphant major chord. Complete short game victory cue, natural short tail, no intro or full song section.
```

#### gameover

방식: `text2music` · seed `10918021` · instrumental `True` · steps `32`

```text
Original instrumental soundtrack for Sky Chaser, a colorful fantasy-steampunk arcade shooter starring Lumi the flying courier. Clear memorable rising four-note heroic motif answered by a short descending phrase. Clean stereo mix with controlled bass, melodic orchestral identity and space for game sound effects. Strictly instrumental: no vocals, singing, choir, humming, chanting, spoken voice or vocal chops. No environmental or weapon sounds. Ten-second compact game-over cue. Gentle descending woodwind and clean electric-guitar phrase with warm piano, a restrained final drum accent, then a soft resolved chord. Kind and reflective but hopeful, not tragic or frightening. Complete short game cue with natural decay, no long introduction or repeating section.
```


## 0.9.1 음악 구성과 이야기 컷인 · 2026-10-18

새로운 이미지나 음원은 생성하지 않았습니다. 기존 그림 17개와 음원 13개의 바이트를 모두 유지했습니다. 게임과 감상 화면에서 실제 사용하는 음원은 타이틀, 스테이지 1·2·3, 보스 1·2·3, 엔딩의 여덟 곡입니다. midboss·launch·warning·clear·gameover는 사용·선행 로딩·감상 목록에서 제외했고, 이전 버전의 캐시가 참조하는 URL만 호환을 위해 보존했습니다.

이야기 연출은 기존 lumi-key-art.png의 폭탄 컷인과 같은 영역을 크게 보여주고, 기존 보스 부품을 Canvas로 한 번 합성합니다. 배경과 이야기 그림도 그대로 사용합니다. CSS·SVG 룬·유한한 Web Animations로 진입·장면 전환·제목·대사를 표현하며, 이미지 파일을 가공하지 않았습니다. 화면 흔들림 끄기와 시스템의 움직임 줄이기를 존중하고 정지·닫기 때 애니메이션을 멈추거나 해제합니다.
