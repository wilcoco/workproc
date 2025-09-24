# 요구사항 정의(초안)

## 배경/목표
- 표피적 업무 기록을 넘어서, OKR/프로세스/진도/노하우를 한 화면에서 연결하고 가시화하는 도구 제공
- 개인/팀 단위 정렬(Alignment)과 공유를 통해 업무 효율과 성과를 개선

## 사용자/권한
- Admin: 조직/팀 관리, 권한 부여, 기본 템플릿 관리
- Member: OKR 작성/편집, 프로세스 편집, 일지 작성, 지식 문서 작성

## 핵심 유스케이스
- OKR 정의: Objective 생성 → KR 등록(지표/단위/목표값) → Initiative(실행) 연결
- 체크인: KR 진행률/신뢰도 업데이트, 리스크/이슈 기록
- 프로세스 시각화: 노드/엣지 기반 에디터로 업무 흐름 정의, 버전 저장/게시
- 업무일지: 일/주간 템플릿으로 기록, OKR/프로세스 노드 링크, 멘션/첨부
- 노하우 베이스: Markdown 에디터, 태그, 검색, 버전 기록
- 대시보드: 개인/팀 OKR 진행, 최근 로그, 지연/리스크 하이라이트

## 비기능 요구사항
- 보안: OAuth, 세션/토큰 관리, 권한(RBAC)
- 감사/이력: 주요 엔터티 변경 이력(작성자/시간/버전)
- 성능/확장: 1~2개 팀 시작, 향후 다중 팀 확장 가능
- 편의: 한국어 UI 우선, 단축키/템플릿 제공

## 데이터 엔터티(요약)
- User(id, email, name, role)
- Team(id, name), Membership(userId, teamId, role)
- Objective(id, teamId, ownerId, title, status, 기간)
- KeyResult(id, objectiveId, metricType, target, current, unit, confidence)
- Initiative(id, objectiveId, title, status)
- ProcessGraph(id, teamId, name, description, isActive)
- ProcessVersion(id, processGraphId, version, json, createdAt)
- WorkLog(id, userId, teamId, date, period[daily|weekly], content, progress, risk)
- CheckIn(id, objectiveId?, keyResultId?, value, confidence, note, createdAt)
- KnowledgeArticle(id, teamId, authorId, title, content, published, createdAt)
- Tag(id, name), ArticleTag(articleId, tagId)
- Attachment(id, entityType, entityId, url, fileName, size, mimeType)
- Comment(id, entityType, entityId, authorId, body, createdAt)
- Mention(id, commentId, userId)

## 화면/흐름(요약)
- 대시보드, OKR, 프로세스, 업무일지, 노하우, 리포트, 설정
- 상세 IA는 `docs/ia.md` 참고

## 오픈 이슈(확인 필요)
- 조직 단위: 단일 팀 시작 vs. 멀티 테넌시(조직/팀 다단계)
- 첨부 저장소: Railway만 사용 시 제한 → S3/Cloudflare R2 등 외부 스토리지 여부
- 인증 공급자: GitHub/Google 중 우선순위
- 노드/엣지 타입 표준 정의(예: 입력/검증/승인/자동화 등)
