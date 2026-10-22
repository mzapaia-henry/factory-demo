const tools = [
  { name: "bash", note: "the shell every model already speaks" },
  { name: "file system", note: "a real workspace to read and write" },
  { name: "HTTP", note: "the web, through a governed egress" },
  { name: "MCP", note: "your organization's services, brokered" },
];

const workers = [
  { name: "Developer", note: "writes the change" },
  { name: "Reviewer", note: "reads it with fresh eyes" },
  { name: "Architect", note: "shapes the plan before code" },
  { name: "Test engineer", note: "defines what done means" },
  { name: "Browser", note: "clicks through the real thing" },
  { name: "Second opinion", note: "a different model, on purpose" },
];

const entities = [
  {
    name: "Organization",
    what: "Where people, shared settings and the organization's services live.",
    why: "Configure an integration once, and every team uses it safely.",
  },
  {
    name: "Project",
    what: "A reusable context: its environment, its policies, its people.",
    why: "Every Mission starts from a known-good place instead of from scratch.",
  },
  {
    name: "Mission",
    what: "A bounded unit of work, with a beginning, an end and its own sandbox.",
    why: "A clear goal and an isolated machine keep the whole team on one thing.",
  },
];

const projects = [
  {
    name: "factory-demo",
    stack: ["Next.js", "Node 22"],
    vars: ["REPO_TOKEN", "ANALYTICS_KEY"],
    people: 3,
  },
  {
    name: "billing-api",
    stack: ["Go", "Postgres"],
    vars: ["DATABASE_URL", "STRIPE_KEY", "SENTRY_DSN"],
    people: 5,
  },
  {
    name: "data-pipelines",
    stack: ["Python", "Chromium"],
    vars: ["WAREHOUSE_URL", "S3_BUCKET"],
    people: 2,
  },
];

const missions = [
  { goal: "Translate the hero to Spanish", status: "running", label: "running", progress: 60 },
  { goal: "Add a FAQ about Missions", status: "waiting", label: "waiting on you", progress: 85 },
  { goal: "Fix the mobile nav overflow", status: "done", label: "done", progress: 100 },
  { goal: "Upgrade Next.js and rebuild", status: "running", label: "running", progress: 30 },
];

const sandboxFlow = [
  { name: "Base image", note: "built by CI" },
  { name: "Ephemeral builder", note: "declarative build" },
  { name: "Snapshot", note: "the active revision" },
  { name: "N Missions", note: "in parallel" },
  { name: "Preview", note: "*.vercel.run" },
];

const sandboxFacts = [
  {
    title: "One microVM per Mission",
    text: "Every Mission gets its own Firecracker microVM — its own kernel, file system and network, isolated from every other Mission.",
  },
  {
    title: "A generic base image",
    text: "CI publishes and registers a general-purpose runtime image. A Project can pin a variant, for example one that ships a browser.",
  },
  {
    title: "Environments, built once",
    text: "An ephemeral builder runs the Project’s declarative build, checks that no secret was baked in and takes a snapshot. That snapshot is the active Environment Revision.",
  },
  {
    title: "Missions start in seconds",
    text: "Each Mission is restored from that snapshot instead of being built from scratch — so many can start at once, side by side.",
  },
  {
    title: "Sleep, never lose work",
    text: "After an hour without activity (configurable) a sandbox goes to sleep, then resumes from its own snapshot right where it stopped. It can be kept awake for up to 72 hours.",
  },
  {
    title: "Previews on a public URL",
    text: "A dev server inside the sandbox is published as a public *.vercel.run URL — like the preview this page may be served from right now.",
  },
  {
    title: "It cleans up after itself",
    text: "Superseded snapshots are retired after 7 days, and orphan sandboxes are swept away.",
  },
];

const FACTORY_MCP_URL ="https://api.factory.soyhenry.com/api/mcp";
const FACTORY_CONNECT_DOCS = "https://api.factory.soyhenry.com/docs/connect";
const FACTORY_WEB = "https://factory.soyhenry.com";

const examples = [
  "Add a light/dark theme toggle to the top right of the page.",
  "Rewrite the hero headline in Spanish and keep the gradient.",
  "Add a short FAQ about Missions right before this section.",
];

const questions = [
  "How does Factory work?",
  "What Projects and Missions do I have?",
  "Explain what a Coordinator does.",
];

export default function Home() {
  return (
    <main>
      {/* ───────────── Hero ───────────── */}
      <section className="section hero">
        <div className="hero-glow" aria-hidden />
        <svg className="focus-rings" viewBox="0 0 400 400" aria-hidden>
          <circle cx="200" cy="200" r="190" />
          <circle cx="200" cy="200" r="150" />
          <circle cx="200" cy="200" r="110" />
          <circle cx="200" cy="200" r="70" />
        </svg>
        <div className="wrap hero-inner">
          <p className="eyebrow">Factory · a team of AI agents, plus governance</p>
          <h1 className="hero-title">
            It&rsquo;s all about <span className="grad">focus.</span>
          </h1>
          <p className="lede">
            What we learned building Factory, one iteration at a time: agents do their best work
            when they are <strong>small and focused</strong> &mdash; one clear goal, and exactly the
            tools they need to reach it.
          </p>
          <a className="demo-badge" href="#try-it">
            <span className="demo-dot" aria-hidden />
            This is a live demo page &mdash; built to be changed. Ask Factory to modify it.
            <span className="demo-arrow" aria-hidden>
              &darr;
            </span>
          </a>
        </div>
        <div className="scroll-hint" aria-hidden>
          <span>Scroll</span>
          <i />
        </div>
      </section>

      {/* ───────────── Harness + Sandbox ───────────── */}
      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <p className="kicker">01 &middot; The building block</p>
            <h2>
              Harness <span className="plus">+</span> sandbox.
            </h2>
            <p className="body">
              A harness like <strong>Claude Code</strong> or <strong>Codex</strong> is the agent&rsquo;s
              mind. A sandbox &mdash; today a <strong>Vercel Sandbox</strong> &mdash; is its
              workbench: everything it needs to actually solve problems.
            </p>
            <p className="body">
              Because every byte leaves through the sandbox, it is also where traffic is
              <strong> observed and governed</strong>. And Factory is provider-agnostic: sandboxes and
              harnesses are interchangeable parts.
            </p>
            <div className="swap">
              <span className="chip">Claude Code</span>
              <span className="chip">Codex</span>
              <span className="swap-sep">in</span>
              <span className="chip">Vercel Sandbox</span>
              <span className="chip ghost">any sandbox</span>
            </div>
          </div>

          <div className="sandbox reveal" aria-label="A harness inside a sandbox">
            <div className="sandbox-label">sandbox</div>
            <div className="harness">
              <div className="harness-dot" aria-hidden />
              <div>
                <div className="harness-name">harness</div>
                <div className="harness-sub">Claude Code · Codex</div>
              </div>
            </div>
            <ul className="tools">
              {tools.map((t) => (
                <li key={t.name}>
                  <code>{t.name}</code>
                  <span>{t.note}</span>
                </li>
              ))}
            </ul>
            <div className="egress">
              <svg viewBox="0 0 24 24" aria-hidden>
                <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
              </svg>
              governed egress
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Use what the model knows ───────────── */}
      <section className="section alt">
        <div className="wrap">
          <div className="reveal center">
            <p className="kicker">02 &middot; Don&rsquo;t fight the training</p>
            <h2>
              Use what the model <span className="grad">already knows.</span>
            </h2>
            <p className="body narrow">
              Models are trained on shells, CLIs and open protocols. Give them exactly that and get
              out of the way. Every bespoke mechanism &mdash; even something as well-meant as a
              shared memory &mdash; is a little bit of noise.
            </p>
          </div>
          <div className="signal reveal">
            <div className="signal-col">
              <h3>Signal</h3>
              <ul>
                <li><code>git</code>, <code>curl</code>, <code>grep</code></li>
                <li>a real file system</li>
                <li>a CLI with <code>--help</code></li>
                <li>standard MCP servers</li>
              </ul>
              <svg className="wave clean" viewBox="0 0 300 60" aria-hidden>
                <path d="M0 30 Q 37.5 0 75 30 T 150 30 T 225 30 T 300 30" />
              </svg>
            </div>
            <div className="signal-col noisy">
              <h3>Noise</h3>
              <ul>
                <li>custom tool zoos</li>
                <li>hidden side channels</li>
                <li>clever shared memories</li>
                <li>formats it has never seen</li>
              </ul>
              <svg className="wave" viewBox="0 0 300 60" aria-hidden>
                <path d="M0 30 L12 12 L22 44 L34 18 L45 50 L58 8 L70 38 L82 22 L95 52 L108 14 L120 40 L132 6 L146 46 L158 24 L170 54 L184 10 L196 36 L210 20 L222 48 L236 12 L248 42 L262 16 L274 50 L288 26 L300 30" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Roles ───────────── */}
      <section className="section">
        <div className="wrap">
          <div className="reveal center">
            <p className="kicker">03 &middot; The real game</p>
            <h2>
              It all comes down to <span className="grad">roles.</span>
            </h2>
            <p className="body narrow">
              Multi-agent design is the art of drawing the boundaries. Too wide and an agent drowns
              in scope. Too narrow and work turns into a hand-off game nobody can control.
            </p>
          </div>
          <div className="spectrum reveal">
            <div className="spectrum-bar" aria-hidden>
              <span className="spectrum-pin" />
            </div>
            <div className="spectrum-cards">
              <div className="spec-card bad">
                <h3>Too broad</h3>
                <p>Too much scope. It gets confused, loses the thread and performs worse.</p>
              </div>
              <div className="spec-card good">
                <h3>Just right</h3>
                <p>One clear focus, the right tools, a clean hand-off. This is where Factory lives.</p>
              </div>
              <div className="spec-card bad">
                <h3>Too narrow</h3>
                <p>Endless token ping-pong between agents. Costly, slow and impossible to steer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Entities: Org → Project → Mission ───────────── */}
      <section className="section alt">
        <div className="wrap">
          <div className="reveal center">
            <p className="kicker">04 &middot; The shape of the work</p>
            <h2>Organization. Project. Mission.</h2>
            <p className="body narrow">Each layer narrows the focus of the one above it.</p>
          </div>
          <ol className="nest reveal">
            {entities.map((e, i) => (
              <li key={e.name} className={`nest-${i}`}>
                <h3>{e.name}</h3>
                <p className="what">{e.what}</p>
                <p className="why">
                  <span>Why</span> {e.why}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Each Project, its own world ───────────── */}
      <section className="section">
        <div className="wrap">
          <div className="reveal center">
            <p className="kicker">05 &middot; Isolation by default</p>
            <h2>
              Each Project, <span className="grad">its own world.</span>
            </h2>
            <p className="body narrow">
              A Project brings its own repository, runtime, variables and people. Every Mission
              inherits all of it, and nothing leaks from one Project into another.
            </p>
          </div>
          <ul className="projects reveal">
            {projects.map((p) => (
              <li key={p.name} className="project">
                <div className="project-head">
                  <h3>{p.name}</h3>
                  <span>{p.people} people</span>
                </div>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <dl className="project-vars">
                  {p.vars.map((v) => (
                    <div key={v}>
                      <dt>{v}</dt>
                      <dd aria-label="hidden value">••••••••</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
          <p className="why-line center reveal">
            <span>Why</span> Values stay masked &mdash; on the web, in Journals, in logs. A Mission
            only sees what its Project gives it.
          </p>
        </div>
      </section>

      {/* ───────────── Coordinator + Workers ───────────── */}
      <section className="section alt">
        <div className="wrap split">
          <div className="reveal">
            <p className="kicker">06 &middot; Inside a Mission</p>
            <h2>
              One Coordinator.
              <br />
              <span className="grad">Specialist Workers.</span>
            </h2>
            <p className="body">
              The <strong>Coordinator</strong> owns the Mission: it plans, delegates and decides when
              the work is done. <strong>Workers</strong> are specialists it calls on, each with its
              own role, harness and model &mdash; a fast model to browse, a strong one to design, a
              different vendor for the second opinion.
            </p>
            <p className="why-line">
              <span>Why</span> Focus. Each agent holds one job in its head, never all of them.
            </p>
          </div>
          <div className="team reveal" aria-label="A Coordinator delegating to Workers">
            <div className="coord">
              <span className="node-dot" aria-hidden /> Coordinator
            </div>
            <svg className="fan" viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden>
              <path d="M150 0 V12 M75 40 V24 Q75 12 87 12 H213 Q225 12 225 24 V40" />
            </svg>
            <ul className="workers">
              {workers.map((w) => (
                <li key={w.name}>
                  <strong>{w.name}</strong>
                  <span>{w.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────── Manager + Proxy ───────────── */}
      <section className="section">
        <div className="wrap">
          <div className="reveal center">
            <p className="kicker">07 &middot; Above the Missions</p>
            <h2>
              A Manager per Project.
              <br />
              <span className="grad">A Proxy per person.</span>
            </h2>
          </div>
          <div className="duo reveal">
            <article className="card">
              <div className="card-icon" aria-hidden>
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="5" r="2.5" />
                  <circle cx="5" cy="19" r="2.5" />
                  <circle cx="19" cy="19" r="2.5" />
                  <path d="M12 7.5V12M12 12L6.5 17M12 12l5.5 5" />
                </svg>
              </div>
              <h3>Manager</h3>
              <p className="what">
                Coordinates every Mission of a Project, sets priorities and talks to the people.
              </p>
              <p className="why">
                <span>Why</span> Coordinators never talk to each other &mdash; that would break their
                focus. Someone has to see the whole board.
              </p>
            </article>
            <article className="card">
              <div className="card-icon" aria-hidden>
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="3.5" />
                  <path d="M5 20c1.2-3.6 4-5.5 7-5.5s5.8 1.9 7 5.5" />
                </svg>
              </div>
              <h3>Proxy</h3>
              <p className="what">
                Your personal agent. It represents you, summarizes for you and decides what you
                delegated to it &mdash; with your permissions, never more.
              </p>
              <p className="why">
                <span>Why</span> People have limited attention. Your Proxy spends it only on what truly
                needs you.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ───────────── In parallel ───────────── */}
      <section className="section alt">
        <div className="wrap split">
          <div className="reveal">
            <p className="kicker">08 &middot; In parallel</p>
            <h2>
              Many Missions.
              <br />
              <span className="grad">One glance.</span>
            </h2>
            <p className="body">
              Each Mission runs in its own sandbox, so several can move at once without stepping on
              each other. You don&rsquo;t babysit them: you step in only when one is
              <strong> waiting on you</strong>.
            </p>
          </div>
          <ul className="board reveal" aria-label="Missions running in parallel">
            {missions.map((m) => (
              <li key={m.goal} className={`board-row ${m.status}`}>
                <div className="board-top">
                  <strong>{m.goal}</strong>
                  <span className="board-status">{m.label}</span>
                </div>
                <div className="board-bar" aria-hidden>
                  <i style={{ width: `${m.progress}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Diagram ───────────── */}
      <section className="section">
        <div className="wrap">
          <div className="reveal center">
            <p className="kicker">09 &middot; How it fits together</p>
            <h2>Everyone talks in rooms.</h2>
            <p className="body narrow">
              Each Mission has a <strong>Journal</strong>, where the Coordinator, the Manager and
              people meet, and a <strong>team room</strong> for the Coordinator and its Workers.
              Work moves through <strong>asks</strong> &mdash; a question, a blocker, a request &mdash;
              and <strong>@mentions</strong> that wake the right agent.
            </p>
          </div>

          <div className="diagram reveal" role="img" aria-label="People talk to their Proxy, the Proxy and people talk to the Manager, the Manager talks to each Mission through its Journal, and each Coordinator talks to its Workers in the team room. Core holds every credential.">
            <div className="dg-main">
              <div className="dg-row">
                <div className="dg-node person">You</div>
                <Wire label="chat" horizontal />
                <div className="dg-node proxy">Proxy</div>
              </div>
              <Wire label="asks · decisions" />
              <div className="dg-row">
                <div className="dg-node manager">
                  Manager
                  <small>one per Project</small>
                </div>
              </div>
              <Wire label="Journal · asks · @mentions" />
              <div className="dg-missions">
                {["Mission A", "Mission B"].map((m) => (
                  <div className="dg-mission" key={m}>
                    <div className="dg-mission-tag">
                      {m} <em>sandbox</em>
                    </div>
                    <div className="dg-node coord">Coordinator</div>
                    <Wire label="team room" short />
                    <div className="dg-workers">
                      <span>Dev</span>
                      <span>Review</span>
                      <span>Test</span>
                      <span>…</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="dg-note">Missions never talk to each other. The Manager does.</p>
            </div>

            <aside className="dg-core">
              <div className="dg-core-head">
                <svg viewBox="0 0 24 24" aria-hidden>
                  <rect x="5" y="10" width="14" height="10" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
                Core
              </div>
              <ul>
                <li>holds every credential</li>
                <li>brokers the organization&rsquo;s services and MCPs</li>
                <li>authorizes people by role</li>
                <li>audits what matters</li>
              </ul>
              <div className="dg-core-foot">secrets never enter a sandbox</div>
            </aside>
          </div>
        </div>
      </section>

      {/* ───────────── Nothing depends on your machine ───────────── */}
      <section className="section alt">
        <div className="wrap split">
          <div className="reveal">
            <p className="kicker">10 &middot; Nothing depends on your machine</p>
            <h2>
              Close the laptop.
              <br />
              <span className="grad">The work goes on.</span>
            </h2>
            <p className="body">
              Missions run in the cloud, not on your computer. Ask from anywhere, shut the lid, and
              come back to a Journal that kept moving and a preview ready to review.
            </p>
          </div>
          <div className="offline reveal" aria-label="Your laptop is off while the Mission keeps working in the cloud">
            <div className="offline-laptop">
              <svg viewBox="0 0 48 32" aria-hidden>
                <rect x="8" y="3" width="32" height="21" rx="2" />
                <path d="M3 28h42" />
              </svg>
              <div>
                <strong>Your laptop</strong>
                <span>off &middot; asleep</span>
              </div>
            </div>
            <div className="offline-arrow" aria-hidden>
              &darr;
            </div>
            <div className="offline-cloud">
              <div className="offline-cloud-head">
                <span className="demo-dot" aria-hidden /> Mission running in the cloud
              </div>
              <ol>
                <li>
                  <time>02:10</time> plan agreed with the Coordinator
                </li>
                <li>
                  <time>02:24</time> change made, build passing
                </li>
                <li>
                  <time>02:31</time> preview published
                </li>
                <li className="ask">
                  <time>02:32</time> waiting on you: approve?
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── How we use Vercel Sandbox ───────────── */}
      <section className="section">
        <div className="wrap">
          <div className="reveal center">
            <p className="kicker">11 &middot; Under the hood</p>
            <h2>
              How we use <span className="grad">Vercel Sandbox.</span>
            </h2>
            <p className="body narrow">
              An environment is built once, frozen as a snapshot and restored for every Mission
              &mdash; so a fresh, isolated machine is always seconds away.
            </p>
          </div>
          <ol className="flow reveal" aria-label="Base image, ephemeral builder, snapshot, many Missions in parallel, preview">
            {sandboxFlow.map((s) => (
              <li key={s.name}>
                <strong>{s.name}</strong>
                <span>{s.note}</span>
              </li>
            ))}
          </ol>
          <ul className="facts reveal">
            {sandboxFacts.map((f) => (
              <li key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Core + Web ───────────── */}
      <section className="section alt">
        <div className="wrap">
          <div className="reveal center">
            <p className="kicker">12 &middot; Governance without friction</p>
            <h2>
              Core keeps the keys.
              <br />
              <span className="grad">The web just watches.</span>
            </h2>
          </div>
          <div className="duo reveal">
            <article className="card">
              <h3>Core governs</h3>
              <p className="what">
                Core is the only place that stores credentials. Organization services and MCPs are
                reached <em>through</em> Core, so an agent can use a service without ever holding its
                key.
              </p>
              <p className="why">
                <span>Why</span> A sandbox runs untrusted, generated code. Nothing worth stealing
                should live there.
              </p>
            </article>
            <article className="card">
              <h3>MCP and CLI do</h3>
              <p className="what">
                Everything in Factory &mdash; humans and agents alike &mdash; happens over MCP or the
                CLI. The web app is a window: watch Missions, read Journals, see what waits on you.
              </p>
              <p className="why">
                <span>Why</span> One interface for people and agents means agents can do anything a
                person can, and every action goes through the same door.
              </p>
            </article>
          </div>
          <div className="askwatch reveal" aria-label="You ask over MCP or the CLI, the agents do the work, you watch on the web">
            <div className="askwatch-step">
              <span>Ask</span>
              <strong>MCP &middot; CLI</strong>
            </div>
            <div className="askwatch-roles">
              <span>Proxy</span>
              <span>Manager</span>
              <span>Coordinator</span>
              <span>Workers</span>
            </div>
            <div className="askwatch-step">
              <span>Watch</span>
              <strong>the web</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Vision ───────────── */}
      <section className="section vision">
        <div className="wrap reveal center">
          <p className="kicker">13 &middot; Where this goes</p>
          <h2 className="vision-title">
            Small teams of focused agents,
            <br />
            <span className="grad">governed like a company.</span>
          </h2>
          <p className="body narrow">
            Software is only the first specialization. The same building blocks &mdash; a harness, a
            sandbox, a clear role &mdash; can research, analyze data, run operations or produce
            content. People set direction and make the calls; agents do the rest.
          </p>
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="section cta" id="try-it">
        <div className="wrap reveal">
          <div className="cta-card">
            <p className="kicker">Your turn</p>
            <h2 className="cta-title">
              Try changing this page &mdash; however you want &mdash; <span className="grad">from Factory.</span>
            </h2>
            <p className="body">
              This page lives in the <strong>factory-demo</strong> Project. Connect your agent client
              to Factory over <strong>MCP</strong>, then ask a Mission of the factory-demo Project to
              change it. Watch the Journal while a focused team does the work and sends you a preview.
            </p>
            <div className="connect">
              <p className="connect-lead">
                All operation and management of Factory happens through the <strong>MCP</strong> (and
                the CLI). Connect once:
              </p>
              <p className="connect-row">
                <span>MCP server</span>
                <code>{FACTORY_MCP_URL}</code>
              </p>
              <pre className="connect-cmd" aria-label="Claude Code command">
                <code>{`claude mcp add --transport http factory ${FACTORY_MCP_URL}`}</code>
              </pre>
              <p className="connect-note">
                That&rsquo;s the Claude Code one-liner &mdash; any MCP client works.{" "}
                <a href={FACTORY_CONNECT_DOCS}>Read the connection guide &rarr;</a>
              </p>
            </div>
            <div className="terminal" aria-label="Example request">
              <div className="terminal-bar" aria-hidden>
                <i />
                <i />
                <i />
                <span>Factory MCP</span>
              </div>
              <pre>
                <span className="prompt">&gt;</span>
                {" Start a Mission on the factory-demo Project: make the hero purple, add a section that welcomes the Vercel team, and send me the preview."}
                <span className="caret" aria-hidden />
              </pre>
            </div>
            <p className="examples-label">Or try one of these</p>
            <ul className="examples">
              {examples.map((e) => (
                <li key={e}>&ldquo;{e}&rdquo;</li>
              ))}
            </ul>
            <p className="examples-label">Or ask Factory itself</p>
            <p className="ask-note">
              The MCP has built-in help, <code>factory_help</code>, that explains every concept and
              operation &mdash; so you can learn the whole system just by asking.
            </p>
            <ul className="examples ask">
              {questions.map((q) => (
                <li key={q}>&ldquo;{q}&rdquo;</li>
              ))}
            </ul>
            <ol className="steps">
              <li>
                <b>1</b> Connect the Factory MCP
              </li>
              <li>
                <b>2</b> Ask for a Mission
              </li>
              <li>
                <b>3</b> Watch it ship
              </li>
            </ol>
            <p className="web-line">
              <span>Web</span> Monitor everything at{" "}
              <a href={FACTORY_WEB}>factory.soyhenry.com</a> &mdash; a dashboard, an overview of every
              Mission and a few quick actions. Sign in and try it.
            </p>
          </div>
        </div>
        <footer className="foot">Factory &middot; built with focus</footer>
      </section>
    </main>
  );
}

function Wire({ label, horizontal, short }: { label: string; horizontal?: boolean; short?: boolean }) {
  return (
    <div className={`dg-link${horizontal ? " h" : ""}${short ? " short" : ""}`}>
      <svg viewBox={horizontal ? "0 0 100 10" : "0 0 10 100"} preserveAspectRatio="none" aria-hidden>
        {horizontal ? <line x1="0" y1="5" x2="100" y2="5" /> : <line x1="5" y1="0" x2="5" y2="100" />}
      </svg>
      <span>{label}</span>
    </div>
  );
}
