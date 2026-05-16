# Stitch Prototype Prompt

Copy the prompt below into Stitch to generate the first visual prototype.

```text
Create a high-fidelity responsive prototype for a personal portfolio website.

The website is for Mia Chen, an AI Product Manager with 5 years of B2B and AI product experience. She specializes in complex business process decomposition, LLM, RAG, Agent systems, MCP tools, Memory, Skills, Prompt design, sales operations CRM, evaluation loops, and fast AI-assisted prototyping with tools like Cursor and Claude Code.

Reference style:
- Use the brand feeling of this Glossier style analysis as the visual reference: https://www.ritnerdigital.com/brands-we-love/glossier
- Borrow the light background, soft blush pink, minimal layout, friendly editorial tone, polished product-brand feeling, and confident restraint.
- Do not copy Glossier as a beauty brand. Translate the style into a personal AI product manager portfolio.

The goal is not to make a traditional resume website. Design it as a distinctive personal brand and portfolio site that feels fresh, intelligent, credible, and quietly systematic. It should feel like a "Blush Product Lab": a clean daylight workspace where AI product strategy, workflow diagrams, case studies, and personal warmth live together.

Core audience:
- Recruiters and hiring managers
- Business leaders evaluating AI product capability
- Product and AI peers
- Potential collaborators who care about Agent products, RAG systems, CRM, and B2B workflows

Overall visual direction:
- Light, fresh, soft, and polished
- Glossier-inspired but adapted for an AI product portfolio
- Warm off-white background, never pure white
- Soft blush pink as the primary emotional color
- Charcoal text for professionalism, never pure black
- Subtle mint green and pale sky blue for Agent system diagrams
- Lots of whitespace, clear hierarchy, and editorial confidence
- A personal product-lab mood, not a generic resume template
- Feminine and approachable, but not childish, sugary, or cosmetic-brand-heavy

Color direction:
- Background: warm blush white, close to oklch(0.985 0.012 18), never pure #fff
- Secondary surface: soft milk pink, close to oklch(0.965 0.018 25)
- Primary accent: Glossier-inspired soft rose pink, close to oklch(0.86 0.075 18)
- System accent: pale mint green, close to oklch(0.88 0.055 150), used for workflow lines and Agent nodes
- Cool accent: misty sky blue, close to oklch(0.86 0.04 230), used for metrics or secondary structure
- Main text: soft charcoal, close to oklch(0.19 0.012 22), never pure #000
- Muted text: warm grey-brown, close to oklch(0.58 0.018 32)

Typography:
- Use a clean, warm, modern sans-serif for large headings, such as Geist, Söhne, ABC Diatype, or a similar refined sans.
- Use a highly readable sans-serif for body text.
- Use a mono font only for small labels, system nodes, timestamps, metrics, and diagram annotations.
- Do not make the entire site monospace.
- Do not use gradient text.
- The typography should feel more like a polished brand editorial page than a developer terminal.

Page type:
- One-page scrolling personal website
- Fixed top navigation in the upper right
- Logo is the uppercase monogram "MC"
- Navigation items: Home, About, Work, System, Contact
- Smooth anchor-style section transitions

Required sections:

1. Home / Hero
Create a strong first screen.

Header:
- Logo: MC
- Navigation: Home / About / Work / System / Contact

Hero content:
- Small label: AI PRODUCT MANAGER / AGENT SYSTEMS
- Main heading: HI, HERE IS MIA CHEN
- Subtitle: I turn complex business workflows into AI product systems that connect knowledge, data, decisions, and action.
- Tags: B2B AI Product, LLM + RAG + Agent, CRM / Sales Ops, Evaluation Loop, Vibe Coding
- Primary CTA: View Work
- Secondary CTA: Contact

Hero visual:
- On the right side, create a light AI product-lab visual: a soft blush notebook surface, thin Agent workflow lines, small annotated nodes, subtle mint and sky-blue system marks, and maybe a natural-light portrait placeholder.
- It should feel like an intelligent product workspace, not a dark dashboard, not a terminal, and not a beauty e-commerce page.
- Use fine linework, gentle shadows, and small handwritten-note-like annotation labels, but keep it polished.

2. About
Purpose: translate the resume into a concise personal positioning section.

Title:
- I design AI products that survive real business complexity.

Content:
- A short overview paragraph about being an AI Product Manager focused on B2B workflows, sales operations, Agent systems, RAG, and evaluation-driven iteration.
- A capability matrix with four areas:
  1. Business Decomposition
     - Identifies high-value AI scenarios from complex business workflows
     - Breaks business problems into roles, tasks, data, and system chains
  2. Agent Productization
     - Turns LLM, RAG, Agent, MCP, Memory, Skills, and Prompt capabilities into usable product workflows
  3. Evaluation Loop
     - Uses Golden Sets, badcase analysis, online feedback, retrieval metrics, intent accuracy, and slot extraction accuracy to drive iteration
  4. Vibe Coding & Collaboration
     - Uses Cursor and Claude Code to create prototypes and MVP demos quickly
     - Works across business, algorithm, engineering, data, and sales teams

Visual treatment:
- Avoid four identical generic cards.
- Use numbered editorial modules, fine dividers, blush labels, subtle product-note annotations, or an architecture-like layout.
- Keep the section airy and readable.

3. Work
Purpose: prove her capability through representative projects.

Section title:
- Selected systems I have shipped.

Featured project:
- Title: Intelligent Sales Operations CRM: Sales Assistant Agent + Sales Report Agent
- Role: AI Product Manager / Project Lead
- Period: 2024.06 to Present
- Context: Built for nearly 1000 frontline sales users and business management roles
- Problem: Sales teams were slowed down by cross-system information search, scattered SOP knowledge, manual business analysis, and time-consuming report generation
- Solution: A multi-agent product matrix with a mobile Sales Assistant Agent for high-frequency operational questions and a PC Sales Report Agent for deeper document generation tasks

Show the project as a structured story:
- Context
- Business problems
- Product strategy
- Agent system architecture
- Data foundation
- Evaluation loop
- Business impact

Important metrics to show:
- 70%+ high-frequency question self-service resolution rate
- 80%+ business action closure rate
- Intent recognition accuracy improved from 75% to 90%
- Top-K retrieval accuracy improved from 68% to 92%
- Slot extraction accuracy improved from 82% to 95%
- Single question resolution time reduced from 0.75 day to within 10 minutes
- Business analysis preparation reduced from 3 days to 0.5 day

Visual treatment for Work:
- Use case-study storytelling, not a grid of identical cards.
- Use soft blush section labels, thin charcoal dividers, pale pink surfaces, and mint or blue workflow diagrams.
- Metrics should feel precise and product-led, not like a generic SaaS hero-stat block.

Also include a smaller secondary project:
- Insurance Enterprise CRM System
- Focus areas: tagging system, customer profile, customer group dashboard, relationship search, lead lifecycle management
- Present it as a compact timeline or secondary case, not as large as the featured Agent project.

4. System
Purpose: show her product methodology, not just experience.

Section title:
- My operating system for AI products.

Create a vertical process or product-notebook style section with five methods:
1. Find AI scenarios from business workflows
   - Look at role, task, frequency, standardization, data availability, and business value
2. Move from Q&A to task closure
   - Basic knowledge questions use RAG
   - Single fact queries use tools
   - Stable complex tasks become Skills
   - Open-ended business advice uses a Planner workflow
3. Build layered data foundations
   - Structured business facts for context and tool calls
   - Unstructured knowledge for cases, scripts, materials, and strategy support
   - Metadata for filtering, recall enhancement, evidence tracing, and permissions
4. Iterate through evaluation
   - Golden Set for model selection and release confidence
   - Badcase diagnosis for node-level product improvement
   - Online feedback for real business value validation
5. Prototype fast with AI tools
   - Use Cursor and Claude Code to shorten the path from idea to visible product

5. Contact
Purpose: create a clear ending and conversion area.

Title:
- Let us build something useful with AI.

Content:
- Avatar or portrait placeholder
- Email placeholder
- WeChat placeholder
- GitHub placeholder
- Xiaohongshu placeholder
- Resume download placeholder

Use placeholder contact values only. Do not include any real phone number or private contact information.

Footer:
- Logo MC
- Short copyright line
- Back to top link

Interaction and motion direction:
- Use a soft natural-light fade-in on initial load.
- A subtle blush dot or thin annotation line may appear before the hero text.
- Section reveal on scroll with subtle fade and upward movement.
- Buttons use soft rose hover states with light shadow and clean outlines.
- Links use a precise blush underline effect.
- Navigation active state should use a small rose line or dot.
- Respect reduced motion preferences.

Responsive requirements:
- Desktop: hero uses left text and right product-lab visual; Work section can use a two-column case-study layout.
- Tablet: hero stacks vertically; visual becomes smaller or moves behind content.
- Mobile: navigation collapses into a top-right menu; all sections become single-column; hero title wraps cleanly; contact CTA stays in flow and never covers text.

Design constraints:
- Do not create a generic resume template.
- Do not make it look like a beauty store or cosmetic product landing page.
- Do not flood the entire page with pink. Use blush pink as a memory point.
- Do not use candy colors, sticker-like decorations, or overly cute illustrations.
- Do not use pastel SaaS gradients.
- Do not use gradient text.
- Do not use decorative glassmorphism.
- Do not use pure black or pure white.
- Do not build endless identical card grids.
- Do not use large rounded icon cards for every section.
- Do not make the site look like a cryptocurrency, gaming, or dark developer dashboard.
- Do not expose real private contact information.

Deliverable:
- Generate a polished desktop prototype and a mobile responsive version.
- The prototype should feel like a real personal brand site for a senior AI product manager: soft, fresh, clear, credible, and structured.
```

