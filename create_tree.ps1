# selltrat 폴더 트리 생성 PowerShell 스크립트

$root = "selltrat"

# 폴더 목록
$folders = @(
    "apps/web/app/(auth)/login",
    "apps/web/app/(auth)/signup",
    "apps/web/app/(auth)/forgot-password",
    "apps/web/app/(dashboard)/dashboard",
    "apps/web/app/(dashboard)/chat",
    "apps/web/app/(dashboard)/reports",
    "apps/web/app/(dashboard)/tools",
    "apps/web/app/(dashboard)/settings",
    "apps/web/app/(landing)",
    "apps/web/app/api/auth",
    "apps/web/app/api/webhook",
    "apps/web/app/api/upload",
    "apps/web/components/ui",
    "apps/web/components/chat",
    "apps/web/components/dashboard",
    "apps/web/components/landing",
    "apps/web/components/shared",
    "apps/web/hooks",
    "apps/web/lib",
    "apps/web/stores",
    "apps/web/types",
    "apps/web/public",
    "apps/api/src/modules/auth",
    "apps/api/src/modules/users",
    "apps/api/src/modules/agents",
    "apps/api/src/modules/chat",
    "apps/api/src/modules/reports",
    "apps/api/src/modules/payments",
    "apps/api/src/modules/analytics",
    "apps/api/src/common/decorators",
    "apps/api/src/common/filters",
    "apps/api/src/common/guards",
    "apps/api/src/common/interceptors",
    "apps/api/src/common/pipes",
    "apps/api/src/config",
    "apps/api/src/database/entities",
    "apps/api/src/database/migrations",
    "apps/api/src/database/seeds",
    "apps/api/src/queue",
    "apps/api/test",
    "apps/agent-runtime/src/agents/market",
    "apps/agent-runtime/src/agents/legal",
    "apps/agent-runtime/src/agents/finance",
    "apps/agent-runtime/src/agents/marketing",
    "apps/agent-runtime/src/agents/operation",
    "apps/agent-runtime/src/orchestrator",
    "apps/agent-runtime/src/tools",
    "apps/agent-runtime/src/prompts",
    "apps/agent-runtime/src/workflows",
    "apps/agent-runtime/test",
    "packages/shared/types",
    "packages/shared/utils",
    "packages/shared/config",
    "packages/ui/components",
    "packages/ui/styles",
    "packages/ui/hooks",
    "packages/agents/core",
    "packages/agents/llm",
    "packages/agents/tools",
    "infrastructure/docker",
    "infrastructure/k8s",
    "infrastructure/terraform",
    "scripts",
    "docs",
    ".github/workflows"
)

# 파일 목록 (상대경로)
$files = @(
    "apps/web/app/(landing)/page.tsx",
    "apps/api/src/main.ts",
    "packages/shared/types/user.types.ts",
    "packages/shared/types/agent.types.ts",
    "packages/shared/types/chat.types.ts",
    "packages/shared/types/index.ts",
    "packages/shared/utils/date.utils.ts",
    "packages/shared/utils/format.utils.ts",
    "packages/shared/utils/validation.utils.ts",
    "packages/shared/config/constants.ts",
    "packages/shared/config/env.ts",
    "infrastructure/docker/Dockerfile.web",
    "infrastructure/docker/Dockerfile.api",
    "infrastructure/docker/docker-compose.yml",
    "scripts/setup.sh",
    "scripts/deploy.sh",
    "scripts/seed-db.ts",
    "docs/API.md",
    "docs/ARCHITECTURE.md",
    "docs/CONTRIBUTING.md",
    ".github/workflows/ci.yml",
    ".github/workflows/cd.yml",
    ".github/workflows/test.yml",
    ".github/PULL_REQUEST_TEMPLATE.md",
    "turbo.json",
    "package.json",
    "pnpm-workspace.yaml",
    ".env.example",
    ".gitignore",
    "README.md",
    "LICENSE"
)

# 폴더 생성
foreach ($folder in $folders) {
    $path = Join-Path $root $folder
    if (-not (Test-Path $path)) {
        New-Item -ItemType Directory -Path $path | Out-Null
    }
}

# 파일 생성
foreach ($file in $files) {
    $path = Join-Path $root $file
    $dir = Split-Path $path -Parent
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir | Out-Null
    }
    if (-not (Test-Path $path)) {
        New-Item -ItemType File -Path $path | Out-Null
    }
}