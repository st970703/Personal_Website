export type Project = {
  readonly title: string
  readonly eyebrow: string
  readonly summary: string
  readonly impact: string
  readonly tags: readonly string[]
}

export type Experience = {
  readonly role: string
  readonly company: string
  readonly period: string
  readonly summary: string
}

export const projects: readonly Project[] = [
  {
    title: "OEM equipment data integration",
    eyebrow: "Linux service / mine optimisation",
    summary:
      "Designed and deployed an on-premise monitoring service that brought OEM equipment data into optimisation workflows.",
    impact: "$28,000 revenue contribution and a reported 20% productivity improvement.",
    tags: ["Python", "Linux", "Integration", "Production support"],
  },
  {
    title: "Application data archiving",
    eyebrow: "SQL Server / Power BI",
    summary:
      "Archived operational data into dedicated databases for Power BI reporting and in-application chart rendering.",
    impact: "Reduced load on the main system while keeping mine performance reporting available.",
    tags: ["SQL Server", "Data pipelines", "Dashboards"],
  },
  {
    title: "Safety-critical feature migration",
    eyebrow: "Customer-facing reliability",
    summary:
      "Migrated a cave lock-down feature from legacy software into the rewritten version for operational continuity.",
    impact: "Preserved a workflow used to reduce person-machine collision risk.",
    tags: ["Migration", "Safety", "Release support"],
  },
  {
    title: "Internal CouchDB API",
    eyebrow: "Maintainability",
    summary:
      "Built an internal CouchDB API to replace a third-party dependency and improve long-term maintainability.",
    impact: "Reduced dependency risk for backend services used by the product team.",
    tags: ["CouchDB", "Python", "API design"],
  },
] as const

export const experiences: readonly Experience[] = [
  {
    role: "Software Engineer",
    company: "Deswik",
    period: "2021 - 2026",
    summary:
      "Backend and integration software for Deswik.ORB, covering mine optimisation, data integration, AWS-backed workflows, testing, releases, and production support.",
  },
  {
    role: "Industrial Automation Engineer",
    company: "Macro Automation",
    period: "2018 - 2020",
    summary:
      "Factory automation and data capture in the dairy industry, including PLC programming, SQL data capture, workflow analysis, and PowerShell tooling.",
  },
  {
    role: "Junior Software Design Engineer",
    company: "Tait Communications",
    period: "2017 - 2018",
    summary:
      "Prototype mobile web application using Angular to improve interaction with radio hardware.",
  },
] as const

export const skills = [
  "Python",
  "Java",
  "SQL",
  "SQLAlchemy",
  "PostgreSQL",
  "Microsoft SQL Server",
  "CouchDB",
  "RabbitMQ",
  "AWS S3",
  "AWS CDK",
  "CloudWatch",
  "Docker",
  "Linux",
  "pytest",
  "GitHub Actions",
  "Azure DevOps",
  "Jenkins",
] as const
