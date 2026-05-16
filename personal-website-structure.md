# 个人网页结构设计说明

> 交付用途：提供给 Cursor 作为后续前端开发的信息架构与设计输入。  
> 当前版本只做结构与风格梳理，正文内容后续再填充；简历内容仅用于提炼页面模块和展示优先级。

## 1. 网站定位

### 1.1 网站类型

- 类型：个人主页 / 作品集网站 / AI 产品经理个人品牌页
- 核心目的：展示个人能力、项目经历、AI 产品方法论、代表作品，并引导访客联系
- 主要访客：
  - 招聘方 / 面试官
  - 合作方 / 业务负责人
  - 对 AI Agent、RAG、CRM、B 端产品感兴趣的同行
  - 后续从小红书、GitHub、作品链接跳转来的访客

### 1.2 页面关键词

- AI 产品经理
- B 端复杂业务拆解
- LLM / RAG / Agent / MCP / Memory / Skills
- 销售经营 Agent
- 数据驱动评测闭环
- Vibe Coding
- 跨团队推进
- 从 0 到 1 到 N

### 1.3 站点气质

- 主气质：清新、松弛、克制、有个人品牌感
- 辅助气质：产品架构感、业务穿透力、AI 原生、可落地
- 参考风格：[Glossier 品牌分析](https://www.ritnerdigital.com/brands-we-love/glossier)
- 风格迁移原则：借鉴 Glossier 的浅色留白、柔和粉色、真实亲和、编辑感排版，但不要做成美妆品牌页；Mia Chen 的页面需要保留 AI 产品经理的系统思维和项目可信度
- 避免方向：
  - 不要做成传统简历网页
  - 不要做成甜腻少女风或美妆电商页
  - 不要堆满卡片和模板化图标
  - 不要使用过度玻璃拟态、渐变文字、营销感大标题
  - 不要大面积铺满粉色，粉色只作为品牌记忆点

## 2. 信息架构总览

### 2.1 推荐版本

第一版建议做成单页滚动式个人主页，顶部导航使用锚点跳转。这样信息集中、开发成本低，也更适合后续逐步补充内容。

### 2.2 页面结构

```text
Personal Website
├─ Home 首页
│  ├─ Hero 主视觉
│  ├─ 身份标签
│  ├─ 核心一句话
│  └─ 联系我 CTA
│
├─ About 关于我
│  ├─ 个人概述
│  ├─ 核心能力矩阵
│  ├─ 工作方法
│  └─ 教育与背景
│
├─ Work 作品 / 项目
│  ├─ Featured Project 代表项目
│  ├─ Project Detail 项目拆解
│  ├─ Impact Metrics 项目成果
│  └─ More Works 其他经历
│
├─ System 产品方法论
│  ├─ 我如何拆业务
│  ├─ 我如何设计 Agent
│  ├─ 我如何做评测闭环
│  └─ 我如何用 AI 工具提升原型效率
│
├─ Contact 联系我
│  ├─ 头像 / 个人标识
│  ├─ 联系方式
│  ├─ GitHub / 小红书 / 微信
│  └─ 简历下载入口
│
└─ Footer 页脚
   ├─ Logo
   ├─ Copyright
   └─ Back to top
```

### 2.3 导航项

顶部导航建议固定在页面右上角。

- Home
- About
- Work
- System
- Contact

导航跳转方式：

- 第一版：单页锚点平滑跳转
- 后续可扩展：`/work` 独立作品页、`/notes` 独立博客页

## 3. 视觉方向

### 3.1 视觉关键词

- Glossier-inspired
- 浅色底、小清新、自然光
- Blush Product Lab
- 柔和粉色作为品牌点缀
- 大量留白与炭黑文字
- 产品工作台 / AI 系统手账
- 轻量 Agent 流程草图
- 真实、亲和、专业，不要过度可爱

### 3.2 色彩建议

使用 OKLCH 或接近 OKLCH 的色彩体系。参考 Glossier 的粉、白、炭黑体系，但为了网页质感和可访问性，不使用纯黑 `#000` 和纯白 `#fff`。

```text
Background / 主背景
- 柔粉白：oklch(0.985 0.012 18)
- 用途：全站主背景，接近温暖自然光下的纸面

Surface / 次级背景
- 乳白粉：oklch(0.965 0.018 25)
- 用途：项目详情块、能力模块底色、分隔区

Accent / 强调色
- Glossier-inspired 柔粉：oklch(0.86 0.075 18)
- 用途：按钮、链接、关键标签、导航 active 状态、少量图形点缀

Text / 主文字
- 软炭黑：oklch(0.19 0.012 22)
- 用途：正文、标题

Muted Text / 弱文字
- 暖灰棕：oklch(0.58 0.018 32)
- 用途：说明、时间、标签

System Accent / 系统辅助色
- 淡薄荷绿：oklch(0.88 0.055 150)
- 用途：Agent 流程线、系统图节点、方法论模块辅助标记

Cool Accent / 冷色辅助
- 雾蓝：oklch(0.86 0.04 230)
- 用途：数据、指标、项目结构中的次级信息
```

### 3.3 字体建议

目标是“轻盈、可信、有编辑感的 AI 产品经理个人品牌”，不是传统程序员终端感。

- 英文标题：选择干净、有亲和力的 Sans 字体
- 中文正文：选择高可读性的系统中文字体
- 局部标签 / 指标 / 系统图注释：可少量使用 Mono 字体作为结构点缀

推荐字体方向：

```text
Display / 英文大标题
- Geist
- Söhne
- ABC Diatype
- 或其他干净、温和、有现代感的 sans
- 避免过度锋利的科技字体

Body / 中文正文
- PingFang SC
- Noto Sans SC
- Source Han Sans

Mono / 局部标签
- JetBrains Mono
- Berkeley Mono
- Commit Mono
- 只用于短标签、指标、系统节点名
```

字体使用原则：

- Hero 大标题要有足够体量，但不要做渐变文字
- 正文行长控制在 65 到 75 个英文字符左右
- Mono 字体只用于状态、标签、时间线、数据指标，不要铺满全站

### 3.4 整体布局风格

- 首屏左侧为主文案，右侧可以是浅色 Agent 流程草图 / 产品手账式注释 / 自然光工作台视觉
- 页面整体不做传统“卡片网格”
- 模块之间用编号、细线、注释标签、轻量分隔建立结构感
- 留白要承担主要视觉秩序，粉色只做点睛
- 项目页用“问题 → 方案 → 架构 → 指标 → 复用价值”的叙事方式
- 联系页可以更轻，像一张清爽的个人名片，不要弹窗

## 4. 首页 Home

### 4.1 模块目标

让访客在 5 秒内知道：

- 这个人是谁
- 做什么方向
- 核心强项是什么
- 为什么值得继续看作品
- 如何联系

### 4.2 首屏结构

```text
Header
├─ Logo: MC
└─ Nav: Home / About / Work / System / Contact

Hero
├─ Small Label: AI PRODUCT MANAGER / AGENT SYSTEMS
├─ H1: HI, HERE IS Mia Chen
├─ Subtitle: 用产品方法拆解复杂业务，用 Agent 把知识、数据与行动连起来
├─ Tags:
│  ├─ B2B AI Product
│  ├─ LLM + RAG + Agent
│  ├─ CRM / Sales Ops
│  └─ Evaluation Loop
├─ CTA:
│  ├─ 查看作品
│  └─ 联系我
└─ Visual:
   ├─ light agent workflow sketch
   ├─ soft blush annotation marks
   ├─ subtle notebook-grid texture
   └─ optional natural-light portrait placeholder
```

### 4.3 首屏文案占位

```text
HI, HERE IS Mia Chen

我是一名 AI 产品经理，关注 B 端复杂业务、销售经营 Agent、RAG 与评测闭环。
我擅长把模糊业务问题拆成可落地的产品链路，让 AI 从“回答问题”走向“辅助判断、生成材料、推动闭环”。
```

### 4.4 首页交互

- 页面加载时使用柔和淡入和轻微纸张浮现效果，时间控制在 1.2 秒内
- Hero 文案淡入，不要弹跳动画
- CTA hover 时出现浅粉描边、轻微阴影和下划线延展
- 导航 active 状态以柔粉色短线或小圆点表示

## 5. 关于我 About

### 5.1 模块目标

把简历中的个人概述转译成网页可读的信息，而不是原样粘贴简历。

### 5.2 内容结构

```text
About
├─ Section Label: 01 / ABOUT
├─ Title: I design AI products that survive real business complexity.
├─ Overview Paragraph
├─ Capability Matrix
│  ├─ 复杂业务拆解
│  ├─ Agent 产品化落地
│  ├─ 数据驱动评测
│  └─ Vibe Coding 与跨团队推进
└─ Background Strip
   ├─ 5 年 B 端 / AI 产品经验
   ├─ AI 产品经理
   ├─ 建筑学工科背景
   └─ 关注系统结构与落地闭环
```

### 5.3 能力矩阵建议

```text
01 Business Decomposition
- 从复杂流程中识别高价值 AI 场景
- 能将业务断点拆解为任务、角色、数据和系统链路

02 Agent Productization
- 熟悉 LLM、RAG、Agent、MCP、Memory、Skills、Prompt 等范式
- 能把技术能力转化为业务可用的产品闭环

03 Evaluation Loop
- 基于 Golden Set、Badcase 归因和线上反馈持续迭代
- 关注准确率、召回率、槽位抽取、响应时延和业务闭环指标

04 Vibe Coding & Collaboration
- 使用 Cursor、Claude Code 等工具快速完成原型和 MVP Demo
- 能联动业务、算法、研发、数据和销售团队推进上线
```

### 5.4 视觉表现

- 不使用四个相同大卡片
- 可以做成“能力雷达 / 能力命令行 / 架构分层图”
- 每项能力左侧用编号，右侧用短句，不放大段文字
- 背景可加入非常淡的网格线或节点连线

## 6. 作品 / 项目 Work

### 6.1 模块目标

用作品证明能力，优先突出“智能销售经营 CRM：销售助手 Agent + 销售报告 Agent”这一代表项目。

### 6.2 作品页结构

```text
Work
├─ Section Label: 02 / WORK
├─ Title: Selected systems I have shipped.
├─ Featured Project
│  ├─ 项目名称
│  ├─ 项目角色
│  ├─ 项目时间
│  ├─ 一句话背景
│  ├─ 核心问题
│  ├─ 产品方案
│  ├─ Agent 架构
│  ├─ 数据底座
│  ├─ 评测闭环
│  └─ 项目成果
└─ More Experience
   ├─ 保险企业客户 CRM 系统
   ├─ 银行采购管理系统
   └─ 后续作品占位
```

### 6.3 Featured Project 内容框架

#### 项目 1：智能销售经营 CRM

```text
项目名称
- 智能销售经营 CRM：销售助手 Agent + 销售报告 Agent

角色
- AI 产品经理 / 项目负责人

时间
- 2024.06 至今

项目背景
- 面向近 1000 名一线销售及经营管理角色
- 解决销售 LTC 链路中的资料查找、经验复用、经营分析、报告生成等断点

核心挑战
- 多系统切换导致信息查找低效
- 销冠经验和销售 SOP 难以规模化复用
- 经营分析会前准备依赖人工盘数
- 报告生成质量需要在 AI 生成与人工确认之间取得平衡

产品方案
- 移动端销售助手 Agent：承接高频经营问题、客户拜访、商机推进、软产品适配等场景
- PC 端报告生成 Agent：承接深度材料作业与三会报告生成
- 平台从 RAG 知识问答升级为多 Agent 产品矩阵

关键能力
- 意图体系：8 类一级意图、36 类二级意图
- 数据底座：结构化数据 + 离线知识库
- Agent 链路：Query 改写、槽位抽取、RAG 检索、MCP 工具调用、Memory、Skills、Planner、Responder
- 评测体系：Golden Set、Badcase 归因、线上反馈闭环

成果指标
- 高频问题自助解决率 70%+
- 经营动作闭环率 80%+
- 意图识别准确率 75% → 90%
- Top-K 召回准确率 68% → 92%
- 槽位抽取准确率 82% → 95%
- 单问题解决时长 0.75 天 → 10 分钟内
- 经营分析会前准备 3 天 → 0.5 天
```

#### 项目 2：保险企业客户 CRM 系统

```text
项目名称
- 保险企业客户 CRM 系统

角色
- 产品经理

时间
- 2020.06 至 2023.08

展示重点
- 标签体系
- 客户画像
- 客群视图数据看板
- 关联关系查询
- 线索管理生命周期

页面呈现方式
- 作为次级项目，不需要展开到代表项目同等篇幅
- 用横向时间线或折叠面板展示
- 重点突出 B 端产品基本功、数据建模、CRM 业务理解
```

### 6.4 项目详情叙事模板

后续每个项目都可以使用同一套结构，方便维护。

```text
Project Detail Template
├─ Context 背景
├─ Problem 问题
├─ Role 我的角色
├─ Strategy 产品策略
├─ System 架构 / 链路
├─ Execution 关键动作
├─ Metrics 结果指标
├─ Reflection 复盘
└─ Next 后续可扩展方向
```

## 7. 产品方法论 System

### 7.1 模块目标

让页面不只是“经历陈列”，而是展示个人思考方式和产品判断框架。

### 7.2 推荐模块

```text
System
├─ Section Label: 03 / SYSTEM
├─ Title: My operating system for AI products.
├─ Method 1: 业务断点识别
├─ Method 2: Agent 链路设计
├─ Method 3: 数据与知识底座
├─ Method 4: 评测与迭代闭环
└─ Method 5: Vibe Coding 原型验证
```

### 7.3 方法论内容占位

```text
01 从业务链路找 AI 场景
- 先看角色、任务、频次、标准化程度、数据可得性和经营价值
- 不从技术能力倒推需求

02 从问答走向任务闭环
- 基础知识问题走 RAG
- 单一事实查询走工具调用
- 高频稳定复杂任务封装为 Skills
- 开放式经营建议进入 Planner 链路

03 数据底座分层
- 结构化业务事实用于上下文和工具调用
- 非结构化知识用于案例、话术、材料和方案支撑
- Metadata 支持过滤、召回增强、证据溯源和权限控制

04 评测驱动迭代
- 用 Golden Set 支撑模型选型和版本上线
- 用 Badcase 归因定位链路问题
- 用线上反馈验证真实业务价值

05 用 AI 工具加速验证
- 用 Cursor / Claude Code 做产品原型和 MVP Demo
- 在需求早期缩短想法到可见物的距离
```

### 7.4 视觉表现

- 可做成一条“AI Product OS”纵向流程
- 每个方法论节点像系统日志一样出现
- 鼠标 hover 时展开一句解释或一个代表案例
- 不建议做成普通博客列表

## 8. 联系我 Contact

### 8.1 模块目标

让访客自然完成最后一步：联系、查看作品、下载简历或跳转社媒。

### 8.2 内容结构

```text
Contact
├─ Section Label: 04 / CONTACT
├─ Title: Let’s build something useful with AI.
├─ Avatar / Portrait
├─ Contact Methods
│  ├─ Email
│  ├─ WeChat
│  ├─ GitHub
│  └─ 小红书
├─ Resume Download
└─ Final CTA
```

### 8.3 联系方式占位

```text
Email: [后续填写]
WeChat: [后续填写]
GitHub: [后续填写]
小红书: [后续填写]
Resume: [后续上传 PDF 链接]
```

### 8.4 视觉表现

- 联系页不要弹窗
- 可以使用轻量命令式文案，例如 `say hi to mia chen`
- 头像建议使用真实头像或高质量职业形象图
- 链接 hover 时显示柔粉色细线展开效果

## 9. 交互与动效

### 9.1 页面加载

- 使用柔和的自然光淡入作为短暂 loader
- 过程建议：浅粉白背景 → 细网格/注释线轻微浮现 → Hero 内容出现
- 时长控制在 800ms 到 1200ms
- 提供 `prefers-reduced-motion` 降级，减少动画用户直接显示页面

### 9.2 滚动

- 不做复杂滚动视差
- 模块进入视口时使用轻微淡入和向上位移
- 关键指标可以在进入视口时做一次计数动画
- 导航 active 状态随滚动更新

### 9.3 鼠标与按钮

- 按钮 hover：柔粉边线、轻微阴影、背景轻微提亮
- 链接 hover：下划线从左到右展开
- 项目模块 hover：只增强层级，不改变布局尺寸

### 9.4 页面切换

第一版单页不需要复杂路由切换。若后续拆分多页面：

- 页面切换使用淡入 / 淡出
- 保持导航固定
- 作品详情页从列表进入时可使用轻微横向滑入

## 10. 响应式要求

### 10.1 Desktop

- 导航固定右上角
- Hero 左文案右视觉
- Work 项目详情可以使用双栏结构
- 指标横向排列，但不要做成模板化统计卡片

### 10.2 Tablet

- Hero 改为上下结构
- 右侧视觉缩小或变成背景层
- 项目详情改为单栏阅读

### 10.3 Mobile

- 导航折叠为右上角菜单按钮
- Hero 大标题允许换行，不要压缩到不可读
- 所有指标和项目模块单栏展示
- Contact CTA 固定在内容下方，不要悬浮遮挡正文

## 11. 内容数据结构建议

后续开发时建议将内容抽成结构化配置，便于 Cursor 实现和后续维护。

```ts
type SiteProfile = {
  name: string;
  alias: string;
  role: string;
  headline: string;
  summary: string;
  tags: string[];
  contacts: ContactLink[];
};

type Capability = {
  id: string;
  title: string;
  label: string;
  description: string;
  evidence?: string[];
};

type Project = {
  id: string;
  title: string;
  role: string;
  period: string;
  summary: string;
  context: string;
  problems: string[];
  strategy: string[];
  systemDesign: string[];
  metrics: Metric[];
  reflection?: string;
};

type Method = {
  id: string;
  title: string;
  principle: string;
  steps: string[];
};

type ContactLink = {
  type: "email" | "wechat" | "github" | "xiaohongshu" | "resume";
  label: string;
  value: string;
  href?: string;
};

type Metric = {
  label: string;
  before?: string;
  after?: string;
  value?: string;
  note?: string;
};
```

## 12. 首页首版内容占位

```text
Logo
- MC

Hero Label
- AI PRODUCT MANAGER / AGENT SYSTEMS

Hero Title
- HI, HERE IS Mia Chen

Hero Summary
- 我是一名 AI 产品经理，擅长把复杂业务流程拆解为可落地的 AI 产品链路。

Primary CTA
- 查看作品

Secondary CTA
- 联系我

Featured Tags
- B2B AI Product
- Sales Agent
- RAG Pipeline
- Evaluation Loop
- Vibe Coding
```

## 13. Cursor 开发提示

### 13.1 第一版优先级

```text
P0
- 单页结构
- 固定导航
- Hero
- About
- Featured Work
- Contact
- 基础响应式

P1
- 产品方法论 System 模块
- 指标动效
- 柔和纸张浮现加载效果
- 项目详情展开

P2
- 独立作品详情页
- Notes / Blog
- 简历 PDF 下载
- 深色 / 浅色主题切换
```

### 13.2 实现注意事项

- 不要把所有内容都包在卡片里
- 不要使用渐变文字
- 不要使用纯黑和纯白
- 不要使用大面积玻璃拟态
- 不要大面积铺满粉色，粉色只作为品牌记忆点
- 不要使用糖果色、小女生贴纸风、过度可爱插画
- 不要使用模板化 icon + heading + text 的重复网格
- 不要让首屏只剩大字和空背景，右侧需要有可识别的系统视觉或自然光个人视觉
- 所有文本要考虑中文换行
- 动效必须支持 `prefers-reduced-motion`
- 联系方式先用占位，不要写死简历中的隐私信息

## 14. 后续可扩展页面

```text
/work
- 作品列表
- 项目筛选
- 项目详情

/notes
- AI 产品思考
- RAG / Agent 笔记
- 产品复盘

/resume
- 在线简历
- PDF 下载

/playground
- Vibe Coding Demo
- 小工具或原型展示
```

## 15. 一句话总结

这个网站不是“把简历搬到网页上”，而是把个人能力包装成一个可浏览的 AI 产品系统：首屏建立身份，About 建立可信度，Work 证明落地能力，System 展示方法论，Contact 完成转化。
