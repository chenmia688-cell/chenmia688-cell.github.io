export type NavItem = { id: string; label: string; labelZh?: string }

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', labelZh: '首页' },
  { id: 'about', label: 'About', labelZh: '关于' },
  { id: 'work', label: 'Work', labelZh: '作品' },
  { id: 'system', label: 'System', labelZh: '方法论' },
  { id: 'contact', label: 'Contact', labelZh: '联系' },
]

export const sectionIds = navItems.map((n) => n.id)

export const site = {
  brand: 'MC',
  brandVersion: 'Mia Chen',
  name: 'Mia Chen',
  footer: {
    line: '© 2026 Mia Chen · AI Product Portfolio',
    coords: 'Blush Product Lab',
  },
  hero: {
    status: 'Blush Product Lab',
    roleLine: 'AI PRODUCT MANAGER / AGENT SYSTEMS',
    title: 'HI, HERE IS Mia Chen',
    subtitle:
      '我是一名 AI 产品经理，关注 B 端复杂业务、销售经营 Agent、RAG 与评测闭环。我擅长把模糊业务问题拆成可落地的产品链路，让 AI 从「回答问题」走向「辅助判断、生成材料、推动闭环」。',
    tags: [
      'B2B AI Product',
      'LLM + RAG + Agent',
      'CRM / Sales Ops',
      'Evaluation Loop',
      'Vibe Coding',
    ],
    ctas: [
      { href: '#work', label: '查看作品' },
      { href: '#contact', label: '联系我' },
    ],
    vizTitle: 'Agent workflow notes',
    vizCoords: 'From question to action',
  },
  about: {
    sectionTag: 'Capability notes',
    title: 'I design AI products that survive real business complexity.',
    overview:
      '把复杂业务拆成可执行链路，再把链路产品化成可上线的 Agent 系统：知识、数据、工具与评测同一套节奏里迭代。',
    background: [
      '5 年+ B 端 / AI 产品经验',
      'AI 产品经理',
      '建筑学工科背景',
      '关注系统结构与落地闭环',
    ],
    capabilities: [
      {
        id: '01',
        title: 'Business Decomposition',
        titleZh: '复杂业务拆解',
        body:
          '从角色、任务、频次与数据可得性识别高价值场景；把业务断点拆成任务节点、数据契约与系统链路。',
      },
      {
        id: '02',
        title: 'Agent Productization',
        titleZh: 'Agent 产品化落地',
        body:
          '围绕工具、记忆、权限与护栏设计 Agent；把 LLM、RAG、MCP、Skills 收敛成可运营的产品闭环。',
      },
      {
        id: '03',
        title: 'Evaluation Loop',
        titleZh: '数据驱动评测',
        body:
          '用 Golden Set 与 Badcase 归因定位链路问题；用线上反馈验证真实业务价值，而不是只追「感觉对」。',
      },
      {
        id: '04',
        title: 'Vibe Coding & Collaboration',
        titleZh: 'Vibe Coding 与跨团队推进',
        body:
          '用 Cursor / Claude Code 等工具把想法快速变成可点 Demo；联动业务、算法、研发与销售推进上线。',
      },
    ],
  },
  work: {
    sectionTag: 'Selected case study',
    featured: {
      name: '智能销售经营 CRM：销售助手 Agent + 销售报告 Agent',
      role: 'AI 产品经理 / 项目负责人',
      period: '2024.06 至今',
      lead:
        '面向近 1000 名一线销售及经营管理角色，覆盖销售 LTC 链路中的资料查找、经验复用、经营分析与报告生成等断点。',
      metrics: [
        { key: 'Metric_01', value: '70%+', label: '高频问题自助解决率' },
        { key: 'Metric_02', value: '90%', label: '意图识别准确率（75% → 90%）' },
        { key: 'Metric_03', value: '92%', label: 'Top-K 召回准确率（68% → 92%）' },
        { key: 'Metric_04', value: '95%', label: '槽位抽取准确率（82% → 95%）' },
      ],
      context:
        '多系统切换导致查找低效；销冠经验与销售 SOP 难规模化复用；经营分析会前依赖人工盘数；报告生成需在 AI 与人工确认间取得平衡。',
      strategy:
        '移动端销售助手承接高频经营问题；PC 端报告 Agent 承接深度材料与三会报告；平台从 RAG 问答升级为多 Agent 矩阵，配套意图体系与评测闭环。',
      architecture: [
        '意图体系：8 类一级意图、36 类二级意图',
        '链路：Query 改写 → 槽位抽取 → RAG → MCP 工具 → Memory / Skills → Planner → Responder',
        '数据底座：结构化事实 + 离线知识库，Metadata 支撑溯源与权限',
        '评测：Golden Set、Badcase 归因、线上反馈闭环',
      ],
      stackNote: '产品框架围绕业务事实、知识检索、工具调用与评测反馈持续迭代。',
    },
    secondary: [
      {
        title: '保险企业客户 CRM 系统',
        phase: 'Stable CRM foundation',
        period: '2020.06 — 2023.08',
        bullets: [
          '标签体系、客户画像、客群视图与关联查询；线索生命周期与 B 端协同。',
          '沉淀客户分层、数据看板、字段口径与跨系统协同能力。',
        ],
      },
      {
        title: '银行采购管理系统',
        phase: 'Reference only',
        period: '占位',
        bullets: ['后续补充项目亮点与指标。'],
      },
    ],
  },
  system: {
    sectionTag: 'Product operating system',
    title: 'My operating system for AI products.',
    methods: [
      {
        id: 'METHOD_01',
        title: '从业务链路找 AI 场景',
        body:
          '先看角色、任务、频次、标准化程度、数据可得性与经营价值；不从技术能力倒推需求。',
      },
      {
        id: 'METHOD_02',
        title: '从问答走向任务闭环',
        body:
          '基础知识走 RAG；单一事实走工具调用；高频稳定复杂任务封装为 Skills；开放式经营建议走 Planner 链路。',
      },
      {
        id: 'METHOD_03',
        title: '数据与知识底座分层',
        body:
          '结构化事实服务上下文与工具调用；非结构化知识服务案例、话术与材料；Metadata 支撑过滤、召回增强与溯源。',
      },
      {
        id: 'METHOD_04',
        title: '评测驱动迭代',
        body:
          'Golden Set 支撑选型上线；Badcase 归因定位链路问题；线上反馈验证真实业务价值。',
      },
      {
        id: 'METHOD_05',
        title: '用 AI 工具加速验证',
        body:
          '用 Cursor、Claude Code 与轻量托管把 MVP Agent 在数天内跑通核心循环，再决定是否投入生产工程。',
      },
    ],
  },
  contact: {
    scriptName: 'say hi to mia chen',
    prompt: 'Open to AI product roles, collaboration, and thoughtful conversations.',
    sub: '联系方式先保留占位，后续可接入真实链接与简历下载。',
    title: 'Let’s build something useful with AI.',
    links: [
      { label: 'EMAIL', value: '[后续填写]', href: '#' },
      { label: 'WECHAT', value: '[后续填写]', href: '#' },
      { label: 'GITHUB', value: '[后续填写]', href: '#' },
      { label: '小红书', value: '[后续填写]', href: '#' },
    ],
    resume: { label: '下载简历 PDF', href: '#' },
  },
} as const
