# 🚀 Selltrat - AI 기반 멀티에이전트 창업지원 플랫폼

## 프로젝트 소개

Selltrat은 AI 멀티에이전트 시스템을 활용하여 예비 창업자에게 맞춤형 사업계획서와 실행 도구를 제공하는 SaaS 플랫폼입니다.

## 기술 스택

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: NestJS, PostgreSQL, Prisma
- **AI**: LangGraph, LangChain, OpenAI GPT-4
- **Infrastructure**: Docker, Vercel, Railway

## 시작하기

### 사전 요구사항

- Node.js 18+
- pnpm 8+
- PostgreSQL (또는 Supabase 계정)

### 설치

```bash
# 의존성 설치
pnpm install

# 환경 변수 설정
cp .env.example .env.local

# 데이터베이스 마이그레이션
cd apps/api
pnpm prisma migrate dev

# 개발 서버 실행
pnpm dev
```

## 프로젝트 구조

```
selltrat/
├── apps/
│   ├── web/          # Next.js 프론트엔드
│   ├── api/          # NestJS 백엔드
│   └── agent-runtime/ # AI 에이전트 엔진
├── packages/
│   ├── shared/       # 공통 타입, 유틸리티
│   ├── ui/          # 공통 UI 컴포넌트
│   └── agents/      # 에이전트 코어
└── infrastructure/   # 인프라 설정
```

## 주요 기능

- 🤖 AI 멀티에이전트 시스템
- 📊 실시간 사업 분석
- 🛠️ 실행 도구 (OEM 매칭, 관세 계산 등)
- 💳 구독 기반 요금제

## 라이선스

MIT
