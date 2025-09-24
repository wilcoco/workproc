# 배포 가이드(Railway + GitHub)

## 개요
- 코드: GitHub 저장소
- 배포: Railway (웹 서버 + PostgreSQL)

## 사전 준비
- GitHub 계정, Railway 계정
- PostgreSQL는 Railway 플러그인으로 생성

## 절차 개요
1) GitHub 리포지토리 생성 후 코드 푸시
2) Railway에서 New Project → GitHub 리포 연결 → Postgres 추가
3) 환경변수 설정(필수: `DATABASE_URL`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET` 등)
4) 빌드/런 커맨드 확인
   - Build: `npm run build`
   - Start: `npm run start`
   - Postinstall(권장): `prisma generate`
   - Release Hook(권장): `npx prisma migrate deploy`
5) 도메인 연결(Optional)

## 환경 변수 예시
- `DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DB?schema=public`
- `NEXTAUTH_URL=https://<your-app>.up.railway.app`
- `NEXTAUTH_SECRET=...` (OpenSSL 등으로 생성)
- `AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`
- `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`

## 마이그레이션 전략
- 개발: `npx prisma migrate dev`
- 배포: `npx prisma migrate deploy`
- Seed(선택): `node prisma/seed.ts`

## GitHub Actions(선택)
- Lint/Test 후 Railway로 배포는 Railway의 GitHub 연동으로 대체 가능
- 필요 시 CI에서 Prisma 스키마 검증/타입 생성 수행

## 백업/복구(초안)
- Railway에서 DB 백업 스냅샷 설정
- 주기적 Export 및 오브젝트 스토리지 보관 권장
