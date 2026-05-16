export type NavItem = { id: string; label: string; labelZh?: string }

export const navItems: NavItem[] = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于我' },
  { id: 'work', label: '项目作品' },
  { id: 'contact', label: '联系我' },
]

export const sectionIds = navItems.map((n) => n.id)

export const site = {
  brand: 'M',
  brandVersion: 'Mia Chen',
  name: 'Mia Chen',
  footer: {
    line: '© 2026 Mia Chen · AI 产品作品集',
    coords: '',
  },
  hero: {
    status: '',
    roleLine: 'AI 产品经理 / Agent 系统',
    title: '你好，我是 Mia Chen',
    subtitle:
      '我是一名 AI 产品经理，关注 B 端复杂业务、销售经营 Agent、RAG 与评测闭环。我擅长把模糊业务问题拆成可落地的产品链路，让 AI 从「回答问题」走向「辅助判断、生成材料、推动闭环」。',
    tags: [
      'B 端 AI 产品',
      'LLM + RAG + Agent',
      'CRM / 销售经营',
      '评测闭环',
      'Vibe Coding',
    ],
    ctas: [
      { href: '#work', label: '查看作品' },
      { href: '#contact', label: '联系我' },
    ],
    vizTitle: 'Agent 工作流笔记',
    vizCoords: '从问题到行动',
  },
  about: {
    sectionTag: '关于我',
    title: '面向复杂 B 端系统的 AI 产品经理',
    overview:
      '5 年 B 端 / AI 产品经验，专注把复杂业务流程拆解为可验证、可上线、可持续迭代的 AI 产品链路。',
    background: [
      'B 端 AI 产品',
      'LLM + RAG + Agent',
      '数据与评测',
      'Vibe Coding',
    ],
    capabilities: [
      {
        id: '01',
        title: '复杂业务拆解与 AI 场景规划',
        titleZh: '复杂业务拆解与场景规划',
        body:
          '能从复杂流程中识别高价值 AI 场景；曾围绕销售 LTC 全链路拆解核心节点，抽象 5 类 AI 场景并转化为可落地方案。',
      },
      {
        id: '02',
        title: 'LLM / RAG / Agent 产品化落地',
        titleZh: '大模型产品化落地',
        body:
          '熟悉 LLM、RAG、Agent、MCP、Memory、Skills、Prompt；主导销售经营 Agent 平台从 0 到 1 到 N，覆盖意图体系、RAG Pipeline、知识库、工具调用、Skills 与 Prompt 资产。',
      },
      {
        id: '03',
        title: '数据驱动与评测闭环',
        titleZh: '数据驱动与评测闭环',
        body:
          '具备数据分析能力，可围绕北极星指标拆解影响因素；通过评测集、评估体系、Badcase 归因和线上反馈驱动迭代。',
      },
      {
        id: '04',
        title: 'Vibe Coding 与跨团队推进',
        titleZh: 'Vibe Coding 与跨团队推进',
        body:
          '可独立输出 Spec、SDD 与 AI 系统 PRD；基于 Cursor、Claude Code 快速完成原型和 MVP 验证，并联动业务、算法、研发、数据和销售推动上线闭环。',
      },
    ],
  },
  work: {
    sectionTag: '项目作品',
    title: '项目、原型与 PRD 集中展示。',
    intro: '',
    featured: {
      id: 'P01',
      name: '智能销售经营 CRM：销售助手 Agent + 销售报告 Agent',
      role: 'AI 产品经理 / 项目负责人',
      period: '2024.06 至今',
      type: 'Agent 产品矩阵',
      lead:
        '面向近 1000 名一线销售及经营管理角色，覆盖销售 LTC 链路中的资料查找、经验复用、经营分析与报告生成等断点。',
      metrics: [
        { key: '指标_01', value: '70%+', label: '高频问题自助解决率' },
        { key: '指标_02', value: '90%', label: '意图识别准确率（75% → 90%）' },
        { key: '指标_03', value: '92%', label: 'Top-K 召回准确率（68% → 92%）' },
        { key: '指标_04', value: '95%', label: '槽位抽取准确率（82% → 95%）' },
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
      links: {
        prd: 'https://my.feishu.cn/wiki/PvjpwuJraigVeVkCqDpcq7gXnbd?from=from_copylink',
        demo: 'https://mobile-web-cyan-six.vercel.app/mobile/assistant',
        case: '#',
      },
    },
    projectBlocks: [
      {
        id: 'P02',
        title: '保险企业客户 CRM 系统',
        type: 'B 端 CRM 底座',
        phase: '稳定经营底座',
        period: '2020.06 至 2023.08',
        summary: '围绕标签体系、客户画像、客群视图、关联查询与线索生命周期搭建企业客户经营底座。',
        bullets: [
          '标签体系、客户画像、客群视图与关联查询；线索生命周期与 B 端协同。',
          '沉淀客户分层、数据看板、字段口径与跨系统协同能力。',
        ],
        links: {
          prd: '#',
          demo: '#',
          case: '#',
        },
      },
      {
        id: 'P03',
        title: 'Vibe Coding 项目展示位',
        type: '原型展示位',
        phase: '即将更新',
        period: '持续更新',
        summary: '后续可放 Cursor / Claude Code 快速搭出来的公网原型，比如个人工具、AI 小应用或交互原型。',
        bullets: [
          '每个项目保持独立块状展示，支持公网链接、PRD 链接、项目复盘链接。',
          '先用占位结构，不绑定具体内容，后续新增项目只改配置。',
        ],
        links: {
          prd: '#',
          demo: '#',
          case: '#',
        },
      },
    ],
  },
  contact: {
    scriptName: '联系 Mia Chen',
    prompt: '欢迎交流 AI 产品、Agent 系统与合作机会。',
    title: '一起做点真正有用的 AI 产品。',
    links: [
      { label: '邮箱', value: 'chenzemei2022@foxmail.com', href: 'mailto:chenzemei2022@foxmail.com' },
      { label: '微信', value: 'Enchantedzzm', href: '#' },
      { label: 'GitHub', value: 'https://github.com/chenmia688-cell/', href: 'https://github.com/chenmia688-cell/' },
    ],
    resume: { label: '下载简历 PDF', href: '#' },
  },
} as const
