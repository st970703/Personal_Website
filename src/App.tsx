import { experiences, projects, skills } from "./content"

const contactEmail = "st970703@gmail.com"
const githubUrl = "https://github.com/st970703"

export function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mike Lee home">
          Mike Lee
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#outside">Outside</a>
          <a href={`mailto:${contactEmail}`}>Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy reveal">
            <p className="eyebrow">Software Engineer / Brisbane, Australia</p>
            <h1>I build practical software for physical operations.</h1>
            <p className="hero-lede">
              Four years in mine technology products, with a focus on Python backend systems,
              equipment data integration, Linux services, SQL databases, automated testing, and
              production support.
            </p>
            <div className="hero-actions" aria-label="Contact and profile links">
              <a className="button primary" href={`mailto:${contactEmail}`}>
                Get in touch
              </a>
              <a className="button secondary" href={githubUrl}>
                GitHub
              </a>
            </div>
          </div>
          <aside className="field-note reveal" aria-label="Current field note">
            <p className="note-label">Field note</p>
            <p>
              The work I enjoy most lives between software and operations: taking messy equipment
              data, production constraints, and support feedback, then turning them into systems a
              team can trust.
            </p>
          </aside>
        </section>

        <section className="section-shell intro-grid" aria-labelledby="about-title">
          <div>
            <p className="eyebrow">Professional summary</p>
            <h2 id="about-title">Backend, integration, and support experience for real systems.</h2>
          </div>
          <p className="body-large">
            I have built and maintained mine optimisation web application services, improved test
            coverage with pytest, supported on-premise releases through AWS CDK and ECS Anywhere,
            added audit logging for operational troubleshooting, and helped teams keep
            customer-facing systems reliable.
          </p>
        </section>

        <section className="section-shell" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="eyebrow">Selected project notes</p>
            <h2 id="work-title">Work with measurable operational impact.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="field-card reveal" key={project.title}>
                <p className="card-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p className="impact">{project.impact}</p>
                <div className="tag-list" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell split-section" id="experience" aria-labelledby="exp-title">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2 id="exp-title">From factory automation to mine optimisation software.</h2>
          </div>
          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline-item reveal" key={`${item.company}-${item.role}`}>
                <p className="period">{item.period}</p>
                <h3>
                  {item.role}, <span>{item.company}</span>
                </h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell skills-section" aria-labelledby="skills-title">
          <div>
            <p className="eyebrow">Tooling</p>
            <h2 id="skills-title">Technologies I use to ship and support software.</h2>
          </div>
          <div className="skill-cloud" aria-label="Technical skills">
            {skills.map((skill) => (
              <span className="tag skill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section-shell outside-section" id="outside" aria-labelledby="life-title">
          <div className="outside-card reveal">
            <p className="eyebrow">Outside work</p>
            <h2 id="life-title">Running, audiobooks, and photography keep the loop fresh.</h2>
            <p>
              The site stays mostly about engineering, but those interests belong here too: running
              for rhythm, audiobooks for long-form thinking, and photography for noticing detail.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Mike Lee / Software Engineer / Brisbane, QLD</p>
        <div>
          <a href={githubUrl}>GitHub</a>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </div>
      </footer>
    </>
  )
}
