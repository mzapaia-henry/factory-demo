const workKinds = [
  {
    title: "Software",
    body: "Clone a repo, implement a change test-first, run the checks and open a Pull Request. The first specialization, not the only one.",
  },
  {
    title: "Analysis & research",
    body: "Investigate a question, query data, compare options and leave a written report or an artifact the whole Project can reuse.",
  },
  {
    title: "No-code content",
    body: "Projects with zero repositories: video analysis, slide decks, documents, operating external services. First-class, not an edge case.",
  },
];

const entities = [
  {
    title: "Organization",
    body: "The root: members, shared variables, and the services and MCP connections everyone in it can use.",
  },
  {
    title: "Project",
    body: "The reusable context for a kind of work: its environment recipe, policies, members and one Manager.",
  },
  {
    title: "Manager",
    body: "The durable point of contact of a Project. Plans, prioritizes, launches Missions and follows them up.",
  },
  {
    title: "Mission",
    body: "One concrete line of work with a start and an end, in its own sandbox restored from the Project environment.",
  },
  {
    title: "Coordinator & Workers",
    body: "The Coordinator owns the Mission and reports in its Journal. Workers are specialists it delegates to in a private team room.",
  },
  {
    title: "Proxy",
    body: "A personal agent per user and Organization. Acts with exactly that user's permissions over chat, e.g. Telegram.",
  },
];

const steps = [
  {
    title: "Describe the environment",
    body: "Each Project declares four phases: build (clone, install), start (once per Mission), run (what agents see) and stop. Each phase lists by name the variables it needs; nothing else leaks in.",
  },
  {
    title: "Freeze and prepare it",
    body: "Factory freezes the recipe into an immutable revision, builds it once in a throwaway sandbox and snapshots the result. Every Mission starts from that snapshot in seconds.",
  },
  {
    title: "Hand over a Mission",
    body: "You (or the Manager) give a Mission an objective. Its Coordinator plans, delegates to Workers and writes progress and questions to the Journal.",
  },
  {
    title: "Watch, talk, decide",
    body: "Agents ask humans through structured asks: a question, a blocker, an access request. Humans answer, review the result and decide when the Mission closes.",
  },
];

const principles = [
  { title: "Explicit orchestration", body: "Nothing fires on its own. A human or an agent asks for every action deliberately." },
  { title: "Humans decide", body: "Destructive or irreversible actions only happen on an explicit human request." },
  { title: "Secrets never travel through chat", body: "Loaded through one-time web links or stdin, encrypted at rest, never printed by an agent." },
  { title: "No repository required", body: "Git and GitHub are tools a Project may use, never part of the core." },
  { title: "Services are optional add-ons", body: "If one integration disappears, the rest of Factory keeps working." },
  { title: "Earned complexity", body: "New roles, providers and abstractions only arrive when a real run needs them." },
];

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <span className="brand-mark" aria-hidden />
            Henry Factory
          </div>
          <div className="nav-links">
            <a href="#what">What</a>
            <a href="#structure">Structure</a>
            <a href="#how">How it works</a>
            <a href="#use">Using it</a>
          </div>
        </div>
      </nav>

      <main>
        <header className="hero">
          <div className="container">
            <span className="eyebrow">Henry Factory</span>
            <h1>A team of AI agents, plus governance.</h1>
            <p>
              Factory lets an organization prepare a ready-to-run environment per Project and hand
              work, called Missions, to teams of agents. You can watch and talk to them while the
              work happens.
            </p>
            <div className="hero-tags">
              <span className="tag">Durable agent teams</span>
              <span className="tag">Isolated sandboxes</span>
              <span className="tag">MCP &amp; CLI first</span>
              <span className="tag">Human in control</span>
            </div>
          </div>
        </header>

        <section className="section" id="what">
          <div className="container">
            <div className="label">What it does</div>
            <h2>Any work with a start and an end.</h2>
            <p className="section-lead">
              A Mission can write code, but it can just as well investigate, analyze data, operate a
              service or produce content. Software development is the first specialization, not a
              requirement.
            </p>
            <div className="grid grid-3">
              {workKinds.map((k) => (
                <div className="card" key={k.title}>
                  <h3>{k.title}</h3>
                  <p>{k.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="structure">
          <div className="container">
            <div className="label">How it is organized</div>
            <h2>One hierarchy, clear ownership.</h2>
            <p className="section-lead">
              The abstract part (Organization, Project, environment) exists before anything runs.
              The concrete part (Manager, Missions and their agents) is the actual execution.
            </p>

            <div className="diagram" aria-label="Factory hierarchy diagram">
              <div className="org-row">
                <div className="side left">
                  <div className="node dashed">
                    <strong>Proxy</strong>
                    <span>one per user · same permissions</span>
                  </div>
                </div>
                <div className="node primary">
                  <strong>Organization</strong>
                  <span>members · variables</span>
                </div>
                <div className="side right">
                  <div className="node dashed">
                    <strong>Services &amp; MCPs</strong>
                    <span>Linear · Drive · GitHub · storage</span>
                  </div>
                </div>
              </div>
              <div className="connector" />
              <div className="node">
                <strong>Project</strong>
                <span>environment · policies · members</span>
              </div>
              <div className="connector" />
              <div className="node">
                <strong>Manager</strong>
                <span>one per Project · durable</span>
              </div>
              <div className="connector" />
              <div className="missions">
                {["Mission A", "Mission B"].map((m) => (
                  <div className="mission" key={m}>
                    <div className="mission-title">{m}</div>
                    <div className="mission-sub">own sandbox · Journal · team room</div>
                    <div className="chips">
                      <span className="chip lead">Coordinator</span>
                      <span className="chip">Worker</span>
                      <span className="chip">Worker</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="legend">
                The Manager talks to each Coordinator through the Mission Journal; the Coordinator
                coordinates its Workers in a private team room. Dashed boxes live at the
                Organization level and serve every Project.
              </p>
            </div>

            <div style={{ height: 32 }} />
            <div className="grid grid-3">
              {entities.map((e) => (
                <div className="card" key={e.title}>
                  <h3>{e.title}</h3>
                  <p>{e.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="how">
          <div className="container">
            <div className="label">How it works</div>
            <h2>From recipe to running team.</h2>
            <p className="section-lead">
              Agents never share a machine with Factory&apos;s own credentials. Every Mission gets a
              fresh sandbox, and Core decides what each phase is allowed to see.
            </p>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.title}>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="label">Services &amp; harnesses</div>
            <h2>Plug in what you need, keep the core small.</h2>
            <p className="section-lead">
              Anything that is not the core contract enters as a plug-and-play platform service.
            </p>
            <div className="grid grid-2">
              <div className="card">
                <h3>Organization services</h3>
                <p>
                  Configured once per Organization (Linear, Google Drive, artifact storage,
                  notifications). Credentials stay encrypted in Core; agents call them on demand
                  through <code>factory service …</code> and never hold the token.
                </p>
              </div>
              <div className="card">
                <h3>Pluggable harnesses</h3>
                <p>
                  Each agent runs on a harness behind one small contract: start a session, continue
                  a turn, check if it is busy. Claude Code and Codex are implemented today, with a
                  model per role (Manager, Coordinator, Worker).
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="use">
          <div className="container">
            <div className="split">
              <div>
                <div className="label">How you use it</div>
                <h2>Everything through MCP or the CLI.</h2>
                <p className="section-lead" style={{ marginBottom: 24 }}>
                  Talk to Factory from your own MCP client (Claude, Codex, any agent) or from the{" "}
                  <code>factory</code> CLI. Prefer chat? Your Proxy takes requests over Telegram.
                  The web app is read-only: a place to look at Projects, Journals and asks, not to
                  operate them.
                </p>
              </div>
              <div className="terminal" aria-label="Example CLI session">
                <div className="c"># from any MCP client: one tool, many operations</div>
                <div>factory_request mission.create</div>
                <div>&nbsp;&nbsp;objective: &quot;Analyze last month&apos;s churn&quot;</div>
                <div className="c"># or from the CLI: what is waiting on you</div>
                <div>$ factory me missions</div>
                <div className="c"># follow a Mission&apos;s Journal</div>
                <div>$ factory room read journal:&lt;mission-id&gt;</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="principles">
          <div className="container">
            <div className="label">Principles</div>
            <h2>Open by default, closed where it matters.</h2>
            <div style={{ height: 24 }} />
            <ul className="principles">
              {principles.map((p) => (
                <li key={p.title}>
                  <strong>{p.title}</strong>
                  <span>{p.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>Henry Factory · built by Henry</span>
          <span>This page is served live from a Factory Mission sandbox.</span>
        </div>
      </footer>
    </>
  );
}
