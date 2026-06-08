const navItems = [
  { label: "关于", href: "#about" },
  { label: "能力", href: "#expertise" },
  { label: "项目", href: "#projects" },
  { label: "文章", href: "#writing" }
];

const expertise = [
  {
    title: "系统架构",
    value: "Architecture",
    description: "围绕核心链路、服务边界、容量模型和故障域建立可演进的后端结构。"
  },
  {
    title: "性能诊断",
    value: "Profiling",
    description: "从 CPU、内存、调用链和缓存命中率定位瓶颈，并沉淀可复用诊断路径。"
  },
  {
    title: "稳定性治理",
    value: "Reliability",
    description: "通过压测、限流、降级、监控和预案把复杂系统的不确定性收束起来。"
  },
  {
    title: "工程效率",
    value: "Productivity",
    description: "让工具、规范和自动化测试服务于交付质量，而不是制造额外流程成本。"
  }
];

const projects = [
  {
    title: "性能诊断基础设施",
    label: "P1 / Profiling Platform",
    summary:
      "把一次次线下排查沉淀成标准化性能诊断链路，支撑 CPU 热点、内存对象、线程状态和调用路径的快速定位。",
    points: ["火焰图采集", "链路证据归档", "瓶颈归因模型"],
    metric: "分钟级定位"
  },
  {
    title: "重内存服务稳定性治理",
    label: "Reliability / JVM",
    summary:
      "围绕高内存占用服务建立容量评估、对象生命周期分析和降级保护，让服务在峰值压力下保持可控。",
    points: ["内存水位治理", "GC 行为分析", "容量与回滚预案"],
    metric: "风险前置"
  }
];

const writings = [
  {
    title: "从火焰图到工程闭环：性能优化不是一次排查",
    tag: "Performance",
    description: "如何把 profiler、监控和复盘机制变成团队可复制的方法。"
  },
  {
    title: "高内存 Java 服务的稳定性治理思路",
    tag: "JVM",
    description: "对象生命周期、缓存策略、GC 行为和容量模型之间的取舍。"
  },
  {
    title: "复杂后端系统里的问题定位路径",
    tag: "Architecture",
    description: "从现象、证据、假设到验证，把排障过程结构化。"
  }
];

function SignalDiagram() {
  return (
    <div className="signal-card" aria-label="系统数据流视觉图">
      <div className="signal-grid" />
      <div className="node node-a">API</div>
      <div className="node node-b">Cache</div>
      <div className="node node-c">JVM</div>
      <div className="node node-d">Trace</div>
      <div className="pulse-ring ring-one" />
      <div className="pulse-ring ring-two" />
      <svg className="signal-lines" viewBox="0 0 520 420" role="presentation">
        <path d="M118 120 C196 72 252 94 318 150 S424 218 462 154" />
        <path d="M92 284 C168 220 238 250 304 288 S390 350 462 292" />
        <path d="M146 118 C166 206 250 228 318 182 S398 162 438 246" />
      </svg>
      <div className="terminal-panel">
        <span>p95 latency</span>
        <strong>38ms</strong>
        <code>heap.used ↓ · cpu.hotspot isolated</code>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="回到首页">
          <span className="brand-mark">LS</span>
          <span>李书畅</span>
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
          <p className="mono-line">Java Backend Engineer / Systems Builder</p>
          <h1>构建高性能系统，也构建解决问题的方法</h1>
          <p className="hero-subtitle">
            Java 后端工程师 · 系统架构 · 性能优化
          </p>
          <p className="hero-description">
            我关注复杂系统背后的真实约束：吞吐、延迟、稳定性、可观测性和团队协作成本。
            目标不是写更多代码，而是让关键链路更快、更稳、更容易解释。
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
          <h2>把问题拆成可观测、可验证、可复用的工程能力。</h2>
        </div>
        <p>
          从线上异常到架构演进，我倾向于先建立证据链，再选择最小但有效的改动。
          每一次排查都应该沉淀成下一次更快解决问题的工具或规则。
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
          <h2>项目不是列表，是从复杂问题里走出来的结构化方法。</h2>
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
          <h2>记录能被复用的排查路径和架构判断。</h2>
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
          <h2>偏爱清晰边界、真实证据和能长期维护的工程设计。</h2>
        </div>
        <p>
          我习惯在技术方案里同时考虑系统行为和团队行为：接口是否清晰，监控是否能解释问题，
          变更是否容易回滚，经验是否能变成工具。好的后端系统不只是能跑，还应该能被理解。
        </p>
      </section>

      <footer className="site-footer section-shell" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>一起聊聊复杂系统、性能问题或工程效率。</h2>
        </div>
        <div className="footer-links">
          <a href="https://github.com/MrChang0">GitHub</a>
          <a href="mailto:mrchang0@users.noreply.github.com">Email</a>
        </div>
      </footer>
    </main>
  );
}
