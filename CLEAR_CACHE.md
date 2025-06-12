# Next.js 캐시 삭제 및 재시작 스크립트

터미널에서 실행:

```powershell
cd apps/web

# .next 폴더 삭제
Remove-Item -Recurse -Force .next

# node_modules 재설치 (선택사항, 문제가 지속되면)
# Remove-Item -Recurse -Force node_modules
# pnpm install

# 개발 서버 재시작
pnpm dev
```