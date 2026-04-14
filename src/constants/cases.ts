export type ApproachSection = {
  title: string
  content: string[]
  quote?: string
}

export type Result = {
  value: string
  label: string
  context: string
}

export type Case = {
  slug: string
  number: string
  title: string
  subtitle: string
  tags: string[]
  company: string
  role: string
  timeline: string
  intro: string
  situation: string[]
  approach: ApproachSection[]
  results: Result[]
  learned: string[]
  learnedQuote?: string
}

export const CASES: Case[] = [
  {
    slug: 'mylink-portal',
    number: '01',
    title: 'MyLINK Portal',
    subtitle: 'Unifying 50+ legacy products into one platform — from the inside out',
    tags: ['Product Strategy', 'UX Leadership', 'Organisational Change', 'Go-to-Market', 'Platform Design'],
    company: 'LINK Mobility',
    role: 'VP of UX & Product Manager',
    timeline: '2021 – Present',
    intro:
      'LINK Mobility is one of Europe\'s largest CPaaS providers — Oslo-listed, ~700 employees, NOK 7bn revenue, 50,000+ customers sending over 20 billion messages a year. It had grown primarily through acquisitions, resulting in a fragmented product landscape slowly becoming a liability.',
    situation: [
      'When I joined in 2021, the situation was more complex than the strategy documents suggested. The problems were structural, human, and deeply political. Products were frozen in time — many had lost their original engineering teams when companies were acquired, leaving no one to build new features or fix bugs.',
      'Customers faced multiple logins, multiple interfaces, no coherent experience. Revenue per customer was low and upselling was structurally impossible — there was no unified surface to show clients what else existed.',
      'Internally, multiple engineering teams were independently building the same features with no knowledge sharing. Billing was chaotic. Support costs were enormous. A group of managers had been pushing for change for years — and nobody believed it would happen this time either.',
      'The engineering organisation, based primarily in Bulgaria, was resistant to product management involvement and openly skeptical of UX as a discipline. The people who most needed this change were the most exhausted by the fact that it hadn\'t happened yet. That was the environment I walked into.',
    ],
    approach: [
      {
        title: 'The Copenhagen moment — and what came before it',
        content: [
          'My first major test came early: a strategy workshop in Copenhagen with the company\'s senior managers. I was 30, the only PM in the room, surrounded by men in their 40s who had been debating these problems for years.',
          'The conversation was going in circles — arguments about what constituted a product versus a feature. At some point a long silence. I asked one question: "Would this be upsell or upgrade?" The room changed. That distinction unlocked an entirely different way of thinking about the product offering. We spent the next hour restructuring the map.',
          'That workshop taught me something I\'ve used ever since: in politically charged rooms, a well-placed question does more than any argument. I came to every subsequent meeting with something to show — a wireframe, a prototype, a framework — and with questions ready for when showing something wasn\'t the right move.',
        ],
        quote: 'In politically charged rooms, a well-placed question does more than any argument.',
      },
      {
        title: 'Build the north star before anything else',
        content: [
          'Before touching any feature or sprint, I worked with the Head of Product to translate executive strategy into something the organisation could actually execute. The output was a product Blueprint — defining what the portal was and was not, which legacy products would migrate and which would sunset, what the value proposition was for customers and for LINK internally.',
          'This Blueprint became the north star for every subsequent decision. When stakeholders pushed for out-of-scope features, I pointed to the Blueprint. When engineering proposed diverging solutions, the Blueprint anchored the conversation. It is still the reference document today.',
          'I also ran a naming and principles workshop early on — a deliberate move to give the project a codename and a shared identity. It sounds small. It wasn\'t. Teams defend what they helped name.',
        ],
      },
      {
        title: 'Build the team before building the product',
        content: [
          'I was given a UX and frontend team assembled from a recently acquired company in Macedonia. They were talented but disconnected — from each other, from the product, from the broader organisation. Before we could design anything meaningful, we needed a shared way of working.',
          'I started with fortnightly retrospectives — joint sessions with UX and tech together. Not to review deliverables, but to surface the friction in their daily work and systematically reduce it. We now meet monthly. The problems didn\'t disappear — they shrank.',
          'I built a complete UX process from scratch: documented in Confluence, with Figma templates for every project type, clear definitions of what research meant, how prototypes connected to engineering specs. I invited the most resistant team members to contribute to the process rather than receive it.',
          'I also requested that HR run a team dynamics workshop. Some people left after that. The team that remained has been stable ever since. No one has left in four years. That\'s a metric too.',
        ],
      },
      {
        title: 'The research foundation',
        content: [
          'Before a single wireframe was drawn, we ran an exhaustive discovery process. We interviewed internal support teams across multiple markets, analysed existing products, mapped customer personas, spoke directly with clients, and ran a full competitive analysis.',
          'I introduced tools to record and analyse client feedback from meetings systematically, and fought to add product analytics tracking from day one — something that required sustained advocacy inside a company that historically measured very little at the product level.',
        ],
      },
      {
        title: 'Solve the migration problem differently',
        content: [
          'The prevailing assumption was that migrating clients between products caused churn. I disagreed with the diagnosis. The problem wasn\'t migration — it was forced migration.',
          'I proposed a soft migration strategy: first connect client data to the new portal so they could see their existing information there. Once they were logging in regularly and seeing value, introduce the new product capabilities alongside. The migration became a natural next step, not a disruption. Clients began requesting it themselves.',
          'We also established a strict rule: no product could enter the portal without following the unified provisioning process and invoice structure. This was a political battle — several product teams pushed back hard — but it was non-negotiable.',
        ],
      },
      {
        title: 'Earn trust on every front, differently',
        content: [
          'With local market managers who resisted the portal, I always left conversations with a solution and a concrete action plan — never just a diagnosis. Patience was the strategy. Speed of response built credibility that arguments couldn\'t.',
          'With the engineering team, I showed them — incrementally, specifically — how structure in the roadmap made their work easier rather than more constrained. I found allies inside that team and made those people visible.',
          'With C-level stakeholders, I experimented constantly with format: presentations, wireframes, metaphors, videos, user journey flows narrated in the client\'s voice. I presented at every all-hands event, every quarterly review, every annual market gathering — with honesty about what wasn\'t working yet, because credibility under pressure is built by telling the truth when it\'s uncomfortable.',
        ],
        quote: 'Credibility under pressure is built by telling the truth when it\'s uncomfortable.',
      },
    ],
    results: [
      { value: '12,900+', label: 'Unique users', context: 'Across 6 European markets' },
      { value: '8m 41s', label: 'Avg. session duration', context: '14% bounce rate — strong for B2B enterprise' },
      { value: '10+', label: 'Legacy products', context: 'Migrated or sunset — 91–100% completion in Nordics' },
      { value: '6', label: 'Markets launched', context: 'Norway, Denmark, Finland, Sweden, Spain, Global Sales' },
      { value: '1', label: 'Team departure', context: 'In 4 years — the Macedonia team has since grown' },
      { value: '0', label: 'Open billing exceptions', context: 'Provisioning unification ended daily financial fires' },
    ],
    learned: [
      'The hardest part of this project was never the product. It was the organisation. I had to manage in three directions simultaneously — building confidence in a team that had been under-resourced, bringing along stakeholders who had been disappointed before, and maintaining credibility with leadership.',
      'The thing that worked, consistently, was arriving prepared. Not just with a plan, but with something to show. Political rooms don\'t respond well to arguments. They respond to momentum. I learned to create it.',
      'In a complex organisation, the Blueprint wasn\'t just a product document — it was a political tool. A written, agreed-upon north star made every difficult conversation easier. The debate was with the document, not with me.',
    ],
    learnedQuote:
      'I was perhaps too trusting with certain stakeholders early on. I assumed good faith where there was none, and it cost time. I\'ve learned to read the room earlier — to distinguish between genuine resistance and political positioning — and to act on that difference sooner.',
  },

  {
    slug: 'ux-system',
    number: '02',
    title: 'Building the UX System',
    subtitle: 'Designing the process, methodology and feedback loops that made research-led product development real at LINK',
    tags: ['UX Process Design', 'Research Methodology', 'Team Building', 'Customer Program', 'AI Integration'],
    company: 'LINK Mobility',
    role: 'VP of UX & Product Manager',
    timeline: '2021 – Present',
    intro:
      'When I joined LINK, there was no UX process. Designers produced screens. Product managers defined requirements. But the connective tissue between customer insight, product decision, and design execution didn\'t exist. Validation was whoever shouted loudest in a meeting.',
    situation: [
      'Research happened informally or not at all. Delivery often meant engineering built something nobody had tested with a real user. This wasn\'t unusual for a company that had grown through acquisitions — each product team had its own habits, its own tools, its own definition of done.',
      'Building MyLINK Portal on top of that foundation was like building on sand. If we were going to create something that customers would actually use, we needed a shared system for understanding them first. I built that system from scratch.',
    ],
    approach: [
      {
        title: 'The revamped Double Diamond',
        content: [
          'I chose the Double Diamond as the structural framework — not because it was fashionable, but because it addressed the specific failure mode I saw at LINK: teams were jumping to solutions before they understood problems.',
          'But the standard Double Diamond wasn\'t enough. I adapted it to the specific constraints of LINK: a technically complex B2B platform, a distributed team across three countries, product managers new to UX methods, and stakeholders who needed tangible outputs at every stage.',
          'Key constraint I introduced: no other step can start until research is complete. No wireframes during discovery. No feature specs. The pressure to skip ahead was constant. The rule was non-negotiable.',
        ],
      },
      {
        title: 'The four-phase process in practice',
        content: [
          'Step 1 — Discover: The PM defines the topic. The researcher runs primary work: customer interviews, sales and support interviews, legacy platform analysis, competitive analysis, data analytics. Output: raw research findings, not conclusions.',
          'Step 2 — Define: The researcher synthesises findings into themes, builds opportunity areas using HMW questions, defines the core problems. I introduced the practice of presenting research findings formally before moving forward — a step most teams skip but that prevented expensive downstream disagreements.',
          'Step 3 — Develop: With the problem defined, the solution builder begins ideation using Figma templates I created to standardise the process. Exploring many possible solutions before narrowing.',
          'Step 4 — Deliver: The solution is prototyped, tested with real users, refined, and handed to engineering with full specs. I introduced Dovetail for recording and synthesising validation sessions, and Usersnap to capture continuous in-product feedback — making validation ongoing rather than a pre-launch event.',
        ],
        quote: 'The connective tissue between product, UX and engineering was tangible. Teams stopped arguing about solutions and started agreeing on problems first.',
      },
      {
        title: 'The research infrastructure',
        content: [
          'The methodology was only valuable if the team had the tools and contacts to execute it. Qualitative internal: structured interviews with sales and support teams across Northern Europe, workshops designed to extract knowledge that doesn\'t surface in interviews, systematic legacy platform analysis.',
          'Qualitative external: customer interviews following a structured protocol with Think Aloud methodology, validation workshops with prototypes at multiple fidelity levels, all sessions recorded and synthesised in Dovetail.',
          'Quantitative: product analytics tracking implemented from day one inside the portal — something that required sustained advocacy inside a company that historically measured very little. Support ticket analysis via Salesforce. Structured competitor and market analysis.',
        ],
      },
      {
        title: 'The Customer Program',
        content: [
          'I created the Customer Program from scratch — a structured co-creation initiative that brought a small group of enterprise clients directly into the product development process. The goal was not to collect feedback at scale, but to build deep, ongoing relationships with clients who could tell us things surveys never would.',
          'I started by talking to our sales representatives — the people who knew which accounts were engaged, forward-thinking, and willing to invest time. Participants received early access to new features and a direct line to the product team. In return, they committed to workshops, prototype testing, and interviews.',
          'Over time, I built the program into the portal itself: customers can now sign up directly from within MyLINK, submit feedback through an integrated Usersnap widget, and participate in research on their own schedule. Customer insight stopped being something we had to go and find. It started coming to us.',
          'In parallel, I built a broader contact database of 25+ external users across companies including DHL, DNB, Volvofinans Bank, and NAV — tracking which platform they use, what features they rely on, how frequently they log in.',
        ],
      },
      {
        title: 'The AI Learning Hub',
        content: [
          'In 2025 I launched an internal AI Learning Hub within the UX team — a structured programme to build capability for AI-integrated ways of working across three tracks: AI product design, AI-augmented UX practice, and AI-aware product management.',
          'The curriculum was built on the premise that AI changes not just the tools we use but the type of user we\'re designing for. Customers who use AI daily have different mental models, different expectations of speed, and different tolerance for friction.',
          'We also beta-launched an AI-assisted message composer feature within the portal — the first AI-native capability in the product — in collaboration with an external AI partner. This gave the team direct experience with AI product design challenges: managing user expectations, handling failure states, deciding where AI adds value versus where it creates confusion.',
        ],
      },
    ],
    results: [
      { value: '4', label: 'Mandatory phases', context: 'Discover · Define · Develop · Deliver — no skipping' },
      { value: '5+', label: 'Enterprise clients', context: 'In the Customer Program — including DNB and BAS' },
      { value: '25+', label: 'External contacts', context: 'Research database — DHL, NAV, Volvofinans Bank and others' },
      { value: '1', label: 'Searchable knowledge base', context: 'All research stored in Dovetail, accessible to every PM' },
      { value: '3', label: 'AI tracks', context: 'Learning Hub — product design, UX practice, PM awareness' },
    ],
    learned: [
      'The hardest part of building this system wasn\'t the methodology — it was the culture change. Getting people to slow down before the first wireframe, to present research before proposing solutions, to treat validation as a prerequisite rather than a nice-to-have — that required sustained advocacy over a long period.',
      'The thing that worked was making the process feel faster, not slower. I reframed research not as a gate that delayed delivery but as an investment that prevented rework. When an engineer avoided two weeks of wasted development because a research finding changed the spec, that was the argument. I made those moments visible.',
    ],
    learnedQuote:
      'What surprised me most wasn\'t the business impact — though that was real. It was how much better the daily working life of the teams became. Less rework, less confusion, less of that exhausting cycle of building something and then being told it wasn\'t what was needed. People started enjoying their work more. The process gave them clarity, and clarity gave them confidence.',
  },

  {
    slug: 'roadmap',
    number: '03',
    title: 'Building the Roadmap',
    subtitle: 'From a technical Jira timeline nobody could read to a system that serves engineers, product teams and stakeholders — simultaneously',
    tags: ['Roadmap Strategy', 'Stakeholder Management', 'Cross-team Coordination', 'Tooling', 'Process Design'],
    company: 'LINK Mobility',
    role: 'VP of UX & Product Manager',
    timeline: '2021 – Present',
    intro:
      'When I joined LINK, the roadmap was a Jira timeline. Items had ticket numbers, technical descriptions, and status colours. Engineers understood it. Almost nobody else did. This wasn\'t a tooling problem — it was a communication problem with tooling symptoms.',
    situation: [
      'The roadmap served one audience — the people who built things — and excluded everyone else: sales teams trying to understand what they could promise customers, support teams preparing for new features, market managers tracking progress against strategy.',
      'Stakeholder syncs were long and inefficient because people needed context that should have been visible in the roadmap. Tech teams made decisions in isolation because there was no shared surface for coordination. When dependencies created delays — which they did, regularly — nobody saw them coming because nobody was looking at the same picture.',
      'My job wasn\'t to replace the technical roadmap. It was to build a system that served all audiences simultaneously, without creating more overhead for the people already doing the work.',
    ],
    approach: [
      {
        title: 'Version 1 — Making it visible',
        content: [
          'My first move was to introduce Miro. The company didn\'t use it — I brought it in, built the first roadmap there, and presented it to stakeholders. The response was immediate enough that the company bought a licence and adopted it across teams.',
          'The Miro roadmap did something the Jira timeline couldn\'t: it told a story. Instead of a list of ticket numbers, stakeholders could see initiatives grouped by theme, timelines that showed sequence and dependency.',
          'But Version 1 had real limitations. It was good for presenting. It was difficult to maintain. As soon as technical realities changed, the Miro roadmap became stale within days. And the fundamental problem remained: there were now two roadmaps — the Miro one for stakeholders and the Jira one for tech — and they told different stories.',
        ],
      },
      {
        title: 'The structural problem',
        content: [
          'The deeper problem wasn\'t the tool. It was that teams working on related products had no shared roadmap. Each product had its own Jira space, its own sprint cadence, its own planning rhythm. When Product A depended on something Product B was building, that dependency existed only in someone\'s head.',
          'Tech teams were also making architectural decisions that affected product timelines without communicating them through the roadmap. From their perspective, they were doing their job. From the product side, it looked like the roadmap was wrong.',
          'I tried parallel roadmaps — one for product, one for tech. Better than one, but it created new problems: two documents needing to stay in sync, by different people with different incentives. In practice, they diverged.',
        ],
        quote: 'The roadmap isn\'t just a planning document. It\'s an agreement. If two teams are looking at different documents, they\'ve made two different agreements — and they don\'t know it yet.',
      },
      {
        title: 'Version 2 — Building the system',
        content: [
          'The solution came from asking a different question. Instead of "what tool should we use?", I asked "what does each audience actually need from a roadmap, and how do we serve all of them with the least duplication?"',
          'The answer was a two-layer system: Product Plan for stakeholder management, connected to Jira for technical execution. Product Plan sits on top of the technical work and translates it into language stakeholders can use — grouped by strategic theme, progress visible at a glance, different views for different audiences.',
          'Crucially, Product Plan connects directly to Jira. When an engineering task moves, the roadmap updates. The two documents stopped being two separate truths and became two views of the same truth.',
        ],
      },
      {
        title: 'The Impact Value Matrix',
        content: [
          'One persistent problem in roadmap planning was that different PMs prioritised items using different criteria. Negotiation between teams was often based on whoever argued most persuasively, not on shared data.',
          'I introduced the Impact Value Matrix — a scoring framework integrated directly into Product Plan. Each roadmap item is scored against impact and value dimensions, making trade-offs visible and comparable across products. This shifted the negotiation from "my initiative is important" to "here\'s how this item scores against the agreed criteria" — a much faster and less political conversation.',
          'Other PMs adopted the framework too. It became the standard way to compare and commit to items across the whole product organisation during quarterly planning.',
        ],
      },
      {
        title: 'The planning cycle',
        content: [
          'A system is only as good as the process that maintains it. I defined a roadmap planning cycle that starts 6 weeks before the end of each quarter: global research across product, UX and tech; negotiation between teams on priorities and resources; communication to stakeholders; triggering of first sprint tasks; ongoing follow-up through the quarter.',
          'The current roadmap runs quarterly in Product Plan with a full-year view, structured across four strategic workstreams: Identity, Access & Enterprise Readiness; Portal Data & Insight Evolution; Billing & Invoicing; and Portal Adoption & Onboarding.',
        ],
        quote: 'The moment I knew the system was working was when a sales manager told me they hadn\'t needed to schedule a roadmap sync in two months. Not because things weren\'t changing — but because the changes were visible before anyone needed to ask.',
      },
    ],
    results: [
      { value: '4', label: 'Strategic workstreams', context: 'Visible to all stakeholders in real time' },
      { value: '3', label: 'Audiences served', context: 'Engineers, PMs, and stakeholders — with one source of truth' },
      { value: '5', label: 'Planning stages', context: 'Standardised across all product teams — starting 6 weeks before quarter end' },
      { value: '1', label: 'Tool introduced', context: 'Miro — adopted org-wide after the first roadmap presentation' },
    ],
    learned: [
      'The biggest lesson from this work is that a roadmap is never just a planning document — it\'s a communication tool. The question isn\'t "is it accurate?" The question is "does it give each audience the information they need, in a format they can use, without making them dependent on someone else to interpret it?"',
      'The two-parallel-roadmaps phase was frustrating but necessary. I needed to understand what each audience actually used before I could design a system that served both. Skipping straight to the integrated solution without going through the messy middle would have meant building something elegant that nobody actually needed.',
      'The hardest part was the tech team coordination — not because engineers were unwilling, but because asking teams to plan with shared visibility is a cultural change, not just a process change. It requires trust that the information won\'t be used against them when things slip. Building that trust took longer than building the system.',
    ],
  },

  {
    slug: 'engage-gtm',
    number: '04',
    title: 'MyLINK Engage — Global GTM',
    subtitle: 'Taking a German product global — provisioning, politics, and the collaboration that made it work',
    tags: ['Go-to-Market', 'Cross-market Coordination', 'Product Internationalisation', 'Stakeholder Management', 'Operational Readiness'],
    company: 'LINK Mobility',
    role: 'Group PM — Global GTM Lead',
    timeline: '2024 – Present',
    intro:
      'MyLINK Engage — originally WebSMS — was a messaging platform built and owned by LINK\'s German team. The group decided it was the right product to standardise across all markets as the primary messaging solution. My assignment: take a product built for Germany and make it launchable in Norway, Sweden, Denmark — and eventually beyond.',
    situation: [
      'A product built for one market carries all the assumptions of that market invisibly inside it. Provisioning processes designed for German sales teams. Invoice structures matching German billing systems. Support workflows built around German customer expectations. A pricing model calibrated to DACH competition.',
      'I was accountable for the group GTM — sell, provisioning, billing, support, monitoring, security, legal, marketing — but I wasn\'t the product owner. The product belonged to the German PM. She had her own roadmap, her own engineering team, her own priorities, and her own customers to serve. I needed her collaboration without her feeling that the group was taking over her product.',
      'That dynamic — being responsible for an outcome without authority over the product — is one of the harder positions to operate from. It requires a different kind of influence than product ownership.',
    ],
    approach: [
      {
        title: 'The collaboration that changed everything',
        content: [
          'The relationship with the German PM started carefully. We had clear roles on paper, but in practice the boundary was blurry. I was asking questions about her product, requesting changes to her processes, involving her team in planning conversations that affected her roadmap.',
          'I was deliberate about how I showed up — asking rather than telling, framing every request as a shared problem, making sure her priorities were visible in the group roadmap. But it was still formal. Productive, but guarded.',
          'The shift happened when I stopped treating our calls as coordination sessions and started being honest about my own challenges. I told her what was hard on my side. I asked how she dealt with similar problems. I shared my frustrations about the organisation in the same way she was sharing hers.',
          'The calls changed. They became conversations between two people trying to solve the same problem from different angles. We started sharing information that wasn\'t strictly required for the GTM — context, history, political dynamics. That informal knowledge made the formal work significantly better.',
        ],
        quote: 'The best collaboration I had on this project happened when I stopped being "the group PM" and started being a colleague with the same problems. Vulnerability opened a door that professionalism had kept politely closed.',
      },
      {
        title: 'Discovery first — understanding the as-is',
        content: [
          'Before planning the launch, I ran a structured discovery across three dimensions: commercial (customer lists, pricing, migration paths from legacy platforms), technical (provisioning process, integration architecture, API dependencies, monitoring setup), and operational (support requirements, security assessment, legal compliance).',
          'This discovery revealed that several legacy platforms — Turnpike, Fenix, Intouch, Silver Bullet among others — had customers needing migration to Engage. Each had its own pricing history, feature usage, and contract status. Building that picture took weeks.',
        ],
      },
      {
        title: 'Defining what "group-ready" meant',
        content: [
          'One of my most important contributions was defining the criteria a product had to meet before it could enter the group portal. For Engage, this meant: unified provisioning through Salesforce following group standards, invoice structure aligned with group billing, support documentation and training completed for all target markets, and a feature parity assessment per launch market.',
          'This wasn\'t just operational hygiene. It was the same gate I had established for every product entering MyLINK Portal — the principle that complexity stops at the portal door.',
        ],
      },
      {
        title: 'Phased launch and portal integration',
        content: [
          'We launched in phases: Norway, Sweden and Denmark first, with each market requiring its own readiness check — sales training, support onboarding, provisioning setup, and validation with local account managers. I joined Nordic sales meetings to present the product directly for the first five minutes, then handed to the local team.',
          'The phased approach meant we could learn from the first market before scaling. Issues that appeared in Norway could be fixed before Sweden and Denmark launched.',
          'The MyLINK Portal integration — making Engage statistics visible in the portal dashboard, surfacing Engage in navigation, enabling upsell prompts — was defined as a separate phase. Trying to do portal integration and market launch simultaneously would have created too many dependencies and too much risk. Prove the product works in the market first. Then connect it to the platform.',
        ],
      },
    ],
    results: [
      { value: '3+', label: 'Years active', context: 'Q1 2024 through 2027 and beyond' },
      { value: '3', label: 'Markets launched', context: 'Norway, Sweden, Denmark — with phased approach' },
      { value: '7+', label: 'Legacy platforms', context: 'Assessed for migration — Turnpike, Fenix, Intouch, Silver Bullet and others' },
      { value: '8', label: 'Workstreams owned', context: 'Sell · Provisioning · Billing · Support · Monitoring · Security · Legal · Marketing' },
      { value: '4', label: 'Roadmap phases', context: 'GTM as-is · migrations · portal integration · self-service expansion' },
    ],
    learned: [
      'The technical complexity of this GTM was real but manageable. The organisational complexity was harder. Being accountable for an outcome without owning the product requires a very specific kind of influence — one built on trust and shared interest rather than authority.',
      'The lesson I carry from this project is about where collaboration actually starts. It doesn\'t start when two people agree on a plan. It starts when they\'re willing to be honest about what\'s difficult. The moment I stopped performing confidence and started sharing my actual problems, the collaboration became real.',
      'A good GTM is really a good discovery. Most launch failures happen because someone assumed they understood the operational requirements of a new market. The investment in understanding the as-is — existing customers, pricing history, support workflows, legacy platforms — is never wasted.',
    ],
  },

  {
    slug: 'alqua-pricing',
    number: '05',
    title: 'Reinventing the Business Model',
    subtitle: 'How changing how we charged — not what we built — unlocked a new growth curve at Alqua',
    tags: ['Business Model Innovation', 'Pricing Strategy', 'Revenue Growth', 'Market Entry', 'Upselling'],
    company: 'Alqua',
    role: 'Co-Founder & COO / Product Lead',
    timeline: '2018 – 2021',
    intro:
      'Alqua was a MarTech SaaS platform — Big Data and Social Media intelligence for marketing and digital teams. After a prolonged period managing the departure of founding partners, we emerged with a clearer focus: media companies. The problem was that media companies, particularly in Spain, were not flush with budget.',
    situation: [
      'Getting a media company to commit to a monthly SaaS subscription required a procurement process, multiple approval layers, competitive tenders, and months of sales effort. We were spending enormous energy on deals that either didn\'t close or closed too slowly to sustain our growth.',
      'The product hadn\'t changed. The market hadn\'t changed. But the way we were trying to enter it was fundamentally wrong for the customer\'s reality.',
    ],
    approach: [
      {
        title: 'The insight',
        content: [
          'The insight came from understanding how media companies actually made money — and what they were willing to spend on versus what they weren\'t. A media outlet struggling to justify a SaaS subscription would think differently about a banner placement on their own website. Advertising inventory was a familiar concept. It had a direct revenue link.',
          'We studied Seedtag — a contextual advertising platform that had built a sophisticated publisher offering. They had solved a version of the same problem: how do you build a relationship with a publisher that starts with value and grows into dependency?',
          'We designed a model that took that logic and adapted it to our context. Instead of asking media companies to pay for a subscription upfront, we would offer to place a banner on their site, monetise it through our partner network, and share the revenue. Platform access came with the banner. The monthly fee was variable, tied to banner placement and type.',
        ],
        quote: 'Innovation doesn\'t always mean building something new. Sometimes it means changing the contract — who pays, when, and for what.',
      },
      {
        title: 'Building and validating the model',
        content: [
          'Before changing anything in the product, we spent time understanding how Seedtag and similar publishers had structured their offerings. We weren\'t copying — we were learning the logic of a model that worked and adapting it to a different context.',
          'One key design decision: make the entry point as frictionless as possible. The banner setup process was engineered to be fast and mechanical — something completed quickly without heavy involvement from the client\'s technical team. Speed of setup was a competitive advantage: if we could go from signature to live placement faster than anyone else, we reduced the risk of deals dying between contract and activation.',
        ],
      },
      {
        title: 'Testing across markets',
        content: [
          'The hybrid model — banner-based entry with optional monthly plans — worked well in the Spanish market, where media budgets were tightest and SaaS resistance was highest. We validated the model there before considering other markets.',
          'In Latin America, where media companies had different budget dynamics and less resistance to direct SaaS pricing, we continued selling monthly plans. The same product, two different commercial models, calibrated to market reality.',
          'One of the most effective sales tools was a personalised demo showing exactly how the banners would look on the client\'s own website before they signed anything. We would mock up the Sticky Ad and In-Image Ad formats in the client\'s actual site environment. Seeing it rendered on their own pages removed the fear of damaging editorial credibility more effectively than any explanation could.',
        ],
      },
      {
        title: 'The upsell path',
        content: [
          'The entry banner was never the destination — it was the door. Once a media company was live on the platform and seeing value, we introduced the plan structure as an upsell: more features, more data, more capabilities, at a higher fixed monthly fee.',
          'The goal over time was to shift the revenue mix toward higher fixed income per client, reducing our dependence on advertising performance while increasing the client\'s switching cost.',
        ],
      },
    ],
    results: [
      { value: 'Weekly', label: 'Deal cadence', context: 'vs monthly before the model change' },
      { value: '80%', label: 'Customer retention', context: 'Across the Alqua client base during this period' },
      { value: '2', label: 'Commercial models', context: 'Spain (hybrid) and Latin America (SaaS) — calibrated to market' },
    ],
    learned: [
      'This is the case I think about most when someone talks about product innovation. The instinct in most product teams is to solve growth problems by building more — more features, more integrations. Here, the growth problem was solved entirely by changing the commercial terms. The product didn\'t change. The market didn\'t change. The contract changed.',
      'The lesson I carry is that pricing is a product decision, not a sales decision. How you charge shapes what customers value, how they engage, and what growth path is available to you. Moving from pure subscription to hybrid revenue-share didn\'t just change our conversion rate — it changed our relationship with clients. They came in as partners in the revenue, not as buyers of a service.',
    ],
    learnedQuote:
      'The fastest way to grow was not to improve the product — it was to remove the reason people weren\'t buying it. Sometimes the barrier isn\'t what you build. It\'s what you ask for in return.',
  },

  {
    slug: 'alqua-digital-index',
    number: '06',
    title: 'Alqua Digital Index',
    subtitle: 'Turning internal data into a public ranking — and a public ranking into a lead generation engine',
    tags: ['Product-Led Growth', 'Lead Generation', 'Data Product', 'Algorithm Design', 'Conversion Architecture'],
    company: 'Alqua',
    role: 'Co-Founder & Product Lead',
    timeline: '2019 – 2021',
    intro:
      'Alqua\'s platform held a significant data asset: thousands of brands across multiple industries, analysed continuously across social media performance, influencer campaign efficiency, media presence, and digital brand value. This data powered our core product — but it lived entirely inside the platform, visible only to paying customers.',
    situation: [
      'We noticed something in client demos. When we showed prospects the internal ranking — which brands were leading their sector digitally, how they compared to competitors, how positions shifted over time — the reaction was consistently strong. People leaned in. They wanted to know where they ranked.',
      'The question we started asking was simple: what if this data didn\'t just live inside the product? What if it became the product? The Alqua Digital Index was our answer: take the most compelling part of our platform and make it publicly visible, with carefully designed access limits that created a natural path from curiosity to conversion.',
    ],
    approach: [
      {
        title: 'The algorithm — making ranking credible',
        content: [
          'Before the product could work as a lead magnet, it had to be credible as a ranking. We spent significant time refining the Alqua Digital Index formula — a composite score measuring digital brand impact across multiple dimensions: social KPIs (followers, engagement, post volume), influencer campaign efficiency, media presence, audience perception, and monetary digital brand value.',
          'The formula went through multiple iterations. We introduced logarithmic scales to handle the enormous variance between large and small brands without large players dominating purely on volume. We built category, sub-category and niche taxonomies covering industries across Spain and Latin America, so rankings were meaningful at every level of specificity.',
          'The credibility of the index depended on this rigour. A ranking that felt arbitrary would generate curiosity but not trust. A ranking that felt methodologically sound would generate the kind of engagement that leads to a sales conversation.',
        ],
      },
      {
        title: 'Phase 1 — The automated report',
        content: [
          'The first version was a downloadable report: a designed, data-rich PDF ranking the top brands in a given industry for a given period. We produced reports by sector — Beauty was one of the first, analysing 2,650 brands and ranking the Top 200.',
          'The reports were marketed through a landing page with a single conversion wall: to download the full report, you had to provide your contact details. The content was the incentive. The registration was the cost. This gave us a qualified list of people who cared about digital brand performance in a specific industry — exactly the profile of our ideal customer.',
        ],
      },
      {
        title: 'Phase 2 — The live tool with conversion architecture',
        content: [
          'The report had a fundamental limitation: it was static. A brand\'s position in a quarterly report told you where you were — but not how you were trending, who was overtaking you, or what was happening right now.',
          'We built the ADI as a live, interactive tool on the Alqua website. Users could explore rankings by industry, sub-category, niche, time period, and country. But not all of it.',
          'Anonymous users could see a limited number of brands per ranking — enough to understand the value and see their own brand\'s position, but not enough to do serious competitive analysis. Registered users got full access to rankings, plus a timed modal promoting the latest sector report. The consultation button — a direct path to a sales conversation — was always visible.',
          'Every access limit was designed to create a specific kind of frustration: the productive kind, where you can see the value of what you can\'t fully access yet. The wall wasn\'t there to block — it was there to motivate.',
        ],
        quote: 'Every access limit was designed to create a specific kind of frustration: the productive kind, where you can see the value of what you can\'t fully access yet.',
      },
      {
        title: 'The product thinking behind it',
        content: [
          'What I find most interesting about this project is that it wasn\'t a marketing initiative with a product wrapper. It was a product decision that had marketing consequences. A marketing initiative asks: how do we attract more leads? A product initiative asks: what is the most valuable thing our product does, and how do we put that value in front of people who don\'t yet know we exist?',
          'The ranking exploited a specific psychological dynamic: competitive benchmarking. Brands don\'t just want to know their absolute performance. They want to know how they compare to competitors. The ADI made that comparison visible — and then limited it just enough to make the full picture worth paying for.',
        ],
      },
    ],
    results: [
      { value: '2,650+', label: 'Brands analysed', context: 'In the Beauty sector alone — across Spain' },
      { value: '3', label: 'Conversion layers', context: 'Anonymous · registered · consultation — each designed to move users forward' },
      { value: '2', label: 'Phases', context: 'Automated PDF report → live interactive tool with access limits' },
      { value: 'Multi-industry', label: 'Coverage', context: 'Beauty and multiple sectors with category/sub-category/niche taxonomy' },
    ],
    learned: [
      'The most valuable lesson from the ADI is that data you already have is often more powerful as a public product than as a private feature. Keeping data inside a paywall protects revenue in the short term but limits the audience who can ever discover your value.',
      'I also learned that conversion architecture is product design. Every decision about what an anonymous user can see, what a registered user unlocks, and where the consultation button sits is a UX decision with direct revenue consequences.',
      'The algorithm work was a lesson in the relationship between credibility and adoption. A tool that people don\'t trust won\'t generate leads regardless of how well the conversion walls are designed. The investment in making the ranking methodology rigorous was an investment in the trustworthiness of the product. Without that foundation, nothing else would have worked.',
    ],
  },
]
