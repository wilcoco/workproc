# 데이터 모델 ERD(초안)

```mermaid
erDiagram
  User ||--o{ Membership : has
  Team ||--o{ Membership : has
  Team ||--o{ Objective : has
  Objective ||--o{ KeyResult : has
  Objective ||--o{ Initiative : has
  ProcessGraph ||--o{ ProcessVersion : has
  Team ||--o{ ProcessGraph : has
  Team ||--o{ WorkLog : has
  User ||--o{ WorkLog : writes
  Objective ||--o{ CheckIn : has
  KeyResult ||--o{ CheckIn : has
  KnowledgeArticle ||--o{ ArticleTag : tagged
  Tag ||--o{ ArticleTag : in
  KnowledgeArticle ||--o{ Attachment : has
  WorkLog ||--o{ Attachment : has
  KnowledgeArticle ||--o{ Comment : has
  WorkLog ||--o{ Comment : has
  Comment ||--o{ Mention : mentions
  User ||--o{ Comment : writes

  User {
    string id PK
    string email
    string name
    string role  // admin|member
    datetime createdAt
  }
  Team {
    string id PK
    string name
    datetime createdAt
  }
  Membership {
    string id PK
    string userId FK
    string teamId FK
    string role  // admin|member
    datetime createdAt
  }
  Objective {
    string id PK
    string teamId FK
    string ownerId FK
    string title
    string description
    date startDate
    date endDate
    string status // planned|active|done|paused
    datetime createdAt
  }
  KeyResult {
    string id PK
    string objectiveId FK
    string title
    string metricType // percent|number|binary
    float target
    float current
    string unit
    int confidence // 0-10
  }
  Initiative {
    string id PK
    string objectiveId FK
    string title
    string status // planned|doing|done|blocked
  }
  ProcessGraph {
    string id PK
    string teamId FK
    string name
    string description
    bool isActive
    string createdById FK
    datetime createdAt
  }
  ProcessVersion {
    string id PK
    string processGraphId FK
    int version
    json json // react-flow 저장
    datetime createdAt
  }
  WorkLog {
    string id PK
    string teamId FK
    string userId FK
    date date
    string period // daily|weekly
    string content
    int progress // 0-100
    string risk
    datetime createdAt
  }
  CheckIn {
    string id PK
    string objectiveId FK
    string keyResultId FK
    float value
    int confidence
    string note
    datetime createdAt
  }
  KnowledgeArticle {
    string id PK
    string teamId FK
    string authorId FK
    string title
    string content // markdown
    bool published
    datetime createdAt
    datetime updatedAt
  }
  Tag {
    string id PK
    string name
  }
  ArticleTag {
    string id PK
    string articleId FK
    string tagId FK
  }
  Attachment {
    string id PK
    string entityType // WorkLog|KnowledgeArticle
    string entityId FK
    string url
    string fileName
    int size
    string mimeType
  }
  Comment {
    string id PK
    string entityType // WorkLog|KnowledgeArticle
    string entityId FK
    string authorId FK
    string body
    datetime createdAt
  }
  Mention {
    string id PK
    string commentId FK
    string userId FK
  }
```

주의: ERD는 초안이며 구현 단계에서 단순화/정규화 조정이 있을 수 있습니다.
