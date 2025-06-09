# 기여 가이드

## 개발 환경 설정

1. 저장소 포크 및 클론
2. \`pnpm install\` 실행
3. 기능 브랜치 생성: \`git checkout -b feature/기능명\`

## 코드 스타일

- ESLint와 Prettier 설정을 따릅니다
- 커밋 전 자동으로 린트가 실행됩니다
- TypeScript strict mode를 준수합니다

## 커밋 컨벤션

- feat: 새로운 기능
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 포맷팅
- refactor: 코드 리팩토링
- test: 테스트 추가
- chore: 빌드 프로세스 등

## PR 프로세스

1. 기능 브랜치에서 작업
2. 테스트 통과 확인
3. PR 생성 및 리뷰 요청
4. 리뷰 반영 후 머지
