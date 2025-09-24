# workproc — OKR 중심 업무일지 (Korean-first)

업무는 기록되고 있지만, 실제로 중요한 업무 프로세스/노하우/성과는 가시화되지 않는 문제를 해결합니다.
workproc은 OKR 중심으로 주된 업무를 정의하고, 프로세스를 시각화하여 공유하며, 진도율과 노하우를 체계적으로 축적하는 웹 애플리케이션입니다.

## 주요 기능(초기 버전 목표)
- OKR 관리: 목표(Objective) / 핵심결과(Key Result) / 이니셔티브(실행계획)
- 프로세스 시각화: 업무 프로세스를 노드/엣지로 구성(React Flow 기반), 버전 관리
- 업무일지: 일/주간 로그 작성, OKR/프로세스와 연결, 첨부/멘션
- 체크인/진도 보고: KR 진행률, 신뢰도(Confidence), 리스크 관리
- 노하우 베이스: 리치 텍스트/Markdown, 태그, 검색
- 대시보드: OKR 진행 현황, 최근 로그, 리스크 알림

## 기술 스택(제안)
- 프론트엔드/웹: Next.js 14(App Router) + TypeScript + Tailwind CSS + shadcn/ui
- 시각화: React Flow (프로세스 에디터)
- 인증: Auth.js(NextAuth) — GitHub/Google OAuth
- 데이터: PostgreSQL (Railway), Prisma ORM
- 배포: GitHub → Railway (웹+DB)

한국어 UI를 기본으로 하고, 차후 다국어(i18n) 확장을 고려합니다.

## 모듈 구조(단일 앱 시작)
- `web/` 폴더에 Next.js 앱을 생성합니다.
- `prisma/` 스키마는 `web/prisma/schema.prisma` 경로에 위치.

## 환경 변수(.env)
아래는 `.env.example` 참조. 필수 키 요약:
- `DATABASE_URL`: Railway PostgreSQL 접속 문자열
- `NEXTAUTH_URL`, `NEXTAUTH_SECRET`
- `AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET` (선택, GitHub OAuth)
- `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET` (선택, Google OAuth)

## 로컬 개발(계획)
1) Next.js 앱 스캐폴딩 생성
2) 패키지 설치 및 Prisma 초기화
3) DB 마이그레이션 및 시드
4) 개발 서버 실행

명령은 본문 하단의 "개발 시작" 섹션 또는 `docs/deployment.md`를 참고하세요.

## 데이터 모델(개요)
주요 엔터티:
- User, Team, Membership
- Objective, KeyResult, Initiative
- ProcessGraph, ProcessVersion (React Flow JSON 저장)
- WorkLog (일/주간), CheckIn
- KnowledgeArticle, Tag (+ ArticleTag)
- Attachment, Comment, Mention

상세 ERD는 `docs/erd.md` 참고.

## 개발 시작(제안 명령)
- Next.js 앱 생성: `web/` 폴더에 생성합니다.
- Git 초기화 및 첫 커밋
- Prisma 초기화 및 PostgreSQL 설정

Railway 배포 가이드는 `docs/deployment.md`를 참고하세요.

## 로드맵
- [x] 프로젝트 개요/요구사항/ERD 초안 문서화
- [x] Next.js 앱 스캐폴딩 및 기본 UI 준비
- [ ] 인증/권한, OKR CRUD, 프로세스 에디터, 일지/노하우, 대시보드 구현
- [ ] CI/CD & 배포 자동화

---
본 프로젝트는 회사 업무 맥락에 맞는 OKR 중심 업무일지의 표준화를 목표로 합니다. 초기 요구사항/설계를 바탕으로 빠르게 MVP를 가시화하고, 사용자 피드백을 통해 반복 개선합니다.
