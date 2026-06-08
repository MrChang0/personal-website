const navItems = [
  { label: "关于", href: "#about" },
  { label: "能力", href: "#expertise" },
  { label: "项目", href: "#projects" },
  { label: "文章", href: "#writing" }
];

const expertise = [
  {
    title: "问题建模",
    value: "Modeling",
    description: "把模糊需求拆成清晰边界、约束条件和可验证的行动路径。"
  },
  {
    title: "系统设计",
    value: "Design",
    description: "用简洁的结构承载复杂需求，让方案在变化中依然容易理解和维护。"
  },
  {
    title: "工程交付",
    value: "Delivery",
    description: "关注从想法到上线的完整链路，尽量让每一步都有明确反馈。"
  },
  {
    title: "持续学习",
    value: "Learning",
    description: "保持对新工具、新范式和新问题的好奇心，并把学习转化为实践。"
  }
];

const projects = [
  {
    title: "项目案例 01",
    label: "Project / Case Study",
    summary:
      "这里会放一个真实项目：它解决了什么问题、你承担了什么角色、方案如何设计、最后产生了什么结果。",
    points: ["问题背景", "关键方案", "结果数据"],
    metric: "待补充"
  },
  {
    title: "项目案例 02",
    label: "Project / Build Log",
    summary:
      "这里会放另一个真实项目：重点展示工程判断、取舍过程和可复用的经验，而不是堆砌技术名词。",
    points: ["设计取舍", "实现路径", "经验沉淀"],
    metric: "待补充"
  }
];

const writings = [
  {
    title: "近期文章计划 01",
    tag: "Essay",
    description: "记录一个正在思考的问题，等真实文章完成后替换为正式链接。"
  },
  {
    title: "近期文章计划 02",
    tag: "Notes",
    description: "可以放读书笔记、技术复盘、工具体验或项目构建过程。"
  },
  {
    title: "近期文章计划 03",
    tag: "Log",
    description: "保持简短、具体、可持续更新，不需要一开始就写成长文。"
  }
];

function SignalDiagram() {
  return (
    <div className="signal-card" aria-label="系统数据流视觉图">
      <div className="signal-grid" />
      <div className="node node-a">API</div>
      <div className="node node-b">Cache</div>
      <div className="node node-c">Core</div>
      <div className="node node-d">Trace</div>
      <div className="pulse-ring ring-one" />
      <div className="pulse-ring ring-two" />
      <svg className="signal-lines" viewBox="0 0 520 420" role="presentation">
        <path d="M118 120 C196 72 252 94 318 150 S424 218 462 154" />
        <path d="M92 284 C168 220 238 250 304 288 S390 350 462 292" />
        <path d="M146 118 C166 206 250 228 318 182 S398 162 438 246" />
      </svg>
      <div className="terminal-panel">
        <span>current focus</span>
        <strong>Build</strong>
        <code>idea → design → shipped</code>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="回到首页">
          <span className="brand-mark">MC</span>
          <span>MrChang0</span>
        </a>
        <nav aria-label="主导航">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-action" href="#contact">
          联系我
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="mono-line">Personal Website / Work in Progress</p>
          <h1>把想法做成作品，把过程留下痕迹</h1>
          <p className="hero-subtitle">Projects · Writing · Experiments</p>
          <p className="hero-description">
            这是一个正在构建中的个人主页。它会逐步沉淀真实项目、文章、实验和联系方式。
            当前版本先搭好视觉和结构，后续内容会用真实经历替换。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="https://github.com/MrChang0">
              查看 GitHub
            </a>
            <a className="secondary-button" href="mailto:mrchang0@users.noreply.github.com">
              邮件沟通
            </a>
          </div>
        </div>
        <SignalDiagram />
      </section>

      <section className="section-shell split-intro" id="expertise">
        <div>
          <p className="section-kicker">Capabilities</p>
          <h2>先保留结构，再用真实内容一点点填满。</h2>
        </div>
        <p>
          这个页面暂时不引用历史记忆里的项目和履历，只保留适合个人网站的版式。
          之后可以把真实项目、文章链接和联系方式按模块补进去。
        </p>
      </section>

      <section className="expertise-grid section-shell" aria-label="核心能力">
        {expertise.map((item, index) => (
          <article className="expertise-card" key={item.title}>
            <span className="card-index">0{index + 1}</span>
            <p>{item.value}</p>
            <h3>{item.title}</h3>
            <span className="card-rule" />
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="section-shell project-section" id="projects">
        <div className="section-heading">
          <p className="section-kicker">Selected Work</p>
          <h2>项目区先作为真实案例的容器，不提前编造经历。</h2>
        </div>
        <div className="project-stack">
          {projects.map((project) => (
            <article className="project-row" key={project.title}>
              <div className="project-meta">
                <p>{project.label}</p>
                <h3>{project.title}</h3>
                <span>{project.metric}</span>
              </div>
              <div className="project-body">
                <p>{project.summary}</p>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="project-visual" aria-hidden="true">
                <span />
                <span />
                <span />
                <i />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell writing-section" id="writing">
        <div className="section-heading">
          <p className="section-kicker">Writing</p>
          <h2>文章区先放计划，等真实内容完成后替换。</h2>
        </div>
        <div className="writing-list">
          {writings.map((post) => (
            <article className="writing-item" key={post.title}>
              <span>{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-contact section-shell" id="about">
        <div>
          <p className="section-kicker">About</p>
          <h2>保持页面真实，比把内容写得很满更重要。</h2>
        </div>
        <p>
          第一版已经建立了视觉方向、响应式布局和部署链路。接下来最有价值的工作，
          是把每个模块替换成经过确认的真实内容，而不是依赖推断。
        </p>
      </section>

      <footer className="site-footer section-shell" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>欢迎从 GitHub 开始了解这个页面的后续迭代。</h2>
        </div>
        <div className="footer-links">
          <a href="https://github.com/MrChang0">GitHub</a>
          <a href="mailto:mrchang0@users.noreply.github.com">Email</a>
        </div>
      </footer>
    </main>
  );
}
