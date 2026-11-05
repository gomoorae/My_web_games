# 마지막 표행 전용 Flow Music 원본

2026-11-05에 별도 세션에서 새로 만든 연주곡 3개다. 기존 무혼비동 리메이크용 음원을 사용하지 않았다.

- `requests.json`: 정확한 프롬프트, Lyria 3.5, 연주곡 모드, 3:00 길이, BPM과 시드.
- `sources.json`: 새 곡 페이지·다운로드 주소, 원본 M4A 해시.
- `*-original.m4a`: 서비스에서 내려받은 파일 그대로.
- `*-original.wav`: 원본 M4A를 디코딩한 48kHz 스테레오 PCM24.
- `prepared/`: 게임용 음량·끝점 정리본과 측정 기록.
- `reserved-remake-sources.json`: 재사용하지 않을 무혼비동 리메이크용 음원 식별자와 해시.

현재 곡만 `dist/music-catalog.mjs`에 명시적으로 등록하며, 기존 원본은 덮어쓰지 않는다.
