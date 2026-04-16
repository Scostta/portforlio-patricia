export const SUGGESTED_QUESTIONS = [
  'Why should I hire Patricia?',
  'What cases has she worked on?',
  "What's her experience at LINK Mobility?",
  'Tell me about her work at Alqua',
  'What are her core skills?',
  'How does she approach product leadership?',
]

type ResponseRule = {
  keywords: string[]
  response: string
}

const RULES: ResponseRule[] = [
  {
    keywords: ['hire', 'why pati', 'why patricia', 'choose', 'recommend', 'good fit', 'stand out', 'value'],
    response: `Patricia brings a rare combination of strategic clarity and hands-on execution that's hard to find in a single PM/UX profile.

**10+ years of product and UX leadership** — from 0-to-1 startups (co-founding Alqua) to scaling enterprise platforms (LINK Mobility, ~700 employees, Oslo Stock Exchange).

Here's what makes her stand out:

• **She builds organisations, not just products** — at LINK she built a UX team from scratch, introduced research methodology, and kept the team stable for 4 years with only 1 departure.
• **She operates in politically complex environments** — the MyLINK Portal required aligning 6 markets, multiple engineering teams, and C-level stakeholders simultaneously.
• **She's commercially sharp** — at Alqua she redesigned the entire business model (not just the product), changing the pricing structure and shifting deal cadence from monthly to weekly.
• **She speaks both languages** — fluent in Figma and usability testing, but equally credible in a P&L conversation or a board presentation.
• **She's a builder from 0** — she's been the first PM, the first UX person, the only PM in the room. She doesn't need a structure to operate. She creates one.

Would you like to dig into any specific aspect of her experience?`,
  },
  {
    keywords: ['cases', 'case stud', 'portfolio', 'projects', 'all her work', 'what has she done'],
    response: `Patricia's portfolio includes 6 case studies across two companies:

**LINK Mobility (2021 – Present)**
01 → **MyLINK Portal** — Unified 50+ legacy products into one platform. 12,900+ users across 6 European markets, 8m 41s average session duration.
02 → **UX System** — Built the full research methodology (Double Diamond) from scratch. Created the Customer Program with enterprise clients like DNB.
03 → **Building the Roadmap** — Transformed a Jira-only timeline into a stakeholder-readable system serving engineers, PMs, and leadership with one source of truth.
04 → **MyLINK Engage GTM** — Led global go-to-market across Norway, Sweden, and Denmark for a product she didn't own, coordinating 8 workstreams through influence alone.

**Alqua (2018 – 2021)**
05 → **Reinventing the Business Model** — Shifted from SaaS subscriptions to a hybrid revenue-share model. Weekly deal closures vs monthly, 80% customer retention.
06 → **Alqua Digital Index** — Built a public data product that became a lead generation engine, with conversion architecture across 3 access tiers.

Which case would you like to explore in depth?`,
  },
  {
    keywords: ['link mobility', 'link', 'mylink portal', 'portal', 'cpaas', 'enterprise platform'],
    response: `Patricia joined LINK Mobility in 2021 as VP of UX & Product Manager. LINK is one of Europe's largest CPaaS providers — Oslo-listed, ~700 employees, 50,000+ customers.

Her main contribution was turning a fragmented product landscape (50+ legacy products from acquisitions) into a coherent, unified platform.

**MyLINK Portal results:**
• 12,900+ unique users across 6 European markets
• 8m 41s average session duration, 14% bounce rate (strong for B2B enterprise)
• 10+ legacy products migrated or sunset
• 0 open billing exceptions after provisioning unification

**UX System she built:**
• Double Diamond methodology — mandatory 4 phases, no skipping
• Customer Program with enterprise clients (DNB, DHL, NAV, Volvofinans Bank)
• Research database of 25+ external contacts
• AI Learning Hub launched in 2025 (3 tracks: product design, UX practice, PM awareness)

**Roadmap infrastructure:**
• Introduced Miro company-wide (bought org licence after first presentation)
• Built Product Plan + Jira integrated system — one source of truth for all audiences
• Created the Impact Value Matrix for cross-team prioritisation

She's currently leading the MyLINK Engage global GTM, already live in Norway, Sweden, and Denmark.`,
  },
  {
    keywords: ['alqua', 'startup', 'co-founder', 'martech', 'saas', 'media company'],
    response: `Patricia co-founded Alqua (2018–2021), a MarTech SaaS platform providing Big Data and Social Media intelligence to marketing and digital teams.

Her two case studies here show her commercial instincts and product creativity:

**Reinventing the Business Model (Case 05)**
Media companies in Spain resisted SaaS subscriptions — long procurement, tight budgets. Patricia's answer: redesign the commercial model entirely.
• Introduced a hybrid banner revenue-share model — platform access in exchange for an ad placement on the client's site
• The entry barrier dropped from months of sales cycles to days
• Weekly deal closures vs monthly before the change
• 80% customer retention across the client base
• Two parallel models: hybrid for Spain, traditional SaaS for Latin America

**Alqua Digital Index (Case 06)**
She turned Alqua's internal competitive benchmarking data into a public lead generation engine.
• Designed the ranking algorithm with logarithmic scales for fair comparison across brand sizes
• Built 3-tier conversion architecture: anonymous (limited view) → registered (full rankings) → consultation (sales)
• Started with downloadable PDF reports, evolved to a live interactive tool
• 2,650+ brands analysed in the Beauty sector alone

These cases show her ability to think beyond product features into business model design — a rare skill for a PM/UX profile.`,
  },
  {
    keywords: ['skills', 'capabilities', 'expertise', 'what can she', 'good at', 'strengths', 'competenc'],
    response: `Patricia's skillset spans four domains:

**Product Management**
Roadmapping · Prioritisation · Sprint Planning · OKRs · Go-to-Market

**UX & Research**
User Interviews · Double Diamond · Figma · Prototyping · Usability Testing

**Business**
P&L Management · Fundraising · Cross-cultural Leadership · Agile / Scrum

**Tools**
Jira · Confluence · Figma · Miro · Hotjar · Dovetail · Usersnap · Product Plan · Notion

**Languages**
Spanish (native) · Catalan (native) · English (professional)

What makes her particularly valuable is the combination: she can run a user interview in the morning, define a pricing model in the afternoon, and present the roadmap to C-level in the evening — and be credible in all three contexts.`,
  },
  {
    keywords: ['leadership', 'management style', 'team', 'manage', 'lead people', 'how she leads'],
    response: `Patricia's leadership style emerges clearly across her case studies:

**"Show, don't argue"** — In politically charged rooms she arrives with something concrete: a wireframe, a prototype, a framework. She's learned that a well-placed question moves rooms more than any argument.

**Build before you build** — At LINK she spent months establishing team dynamics, UX process, and shared principles before any significant product work. The team had only 1 departure in 4 years.

**Multi-directional management** — On MyLINK Portal she simultaneously managed:
• A design team in Macedonia (building confidence in an under-resourced group)
• Stakeholders across 6 markets (bringing along people disappointed by previous attempts)
• C-level leadership (maintaining credibility through honest updates, including what wasn't working)

**Influence without authority** — On the Engage GTM she was accountable for the outcome without owning the product. The collaboration turned when she stopped performing confidence and started sharing her actual problems: *"The best collaboration I had happened when I stopped being 'the group PM' and started being a colleague with the same problems."*

**Culture as infrastructure** — HR-run dynamics workshops, Confluence-documented processes, fortnightly retrospectives with UX and tech together. These aren't soft extras — they're what makes teams stable.`,
  },
  {
    keywords: ['ux', 'research', 'methodology', 'double diamond', 'user interview', 'usability', 'testing', 'design process'],
    response: `Patricia's UX approach is built on the adapted Double Diamond she created at LINK Mobility:

**Phase 1 — Discover**
PM defines the problem space. Researcher runs primary work: customer interviews, sales/support interviews, legacy platform analysis, competitive analysis, product analytics. Output: raw findings, not conclusions.

**Phase 2 — Define**
Synthesis into themes, HMW opportunity areas, formal research presentation before any solution work. This step exists specifically to prevent expensive downstream disagreements.

**Phase 3 — Develop**
Ideation using standardised Figma templates. Exploring multiple solutions before narrowing.

**Phase 4 — Deliver**
Prototype → user testing → engineering spec. Validation is ongoing (Dovetail for synthesis, Usersnap for in-product feedback) — not a one-time pre-launch event.

Her strict rule: **no wireframes until research is complete.** This sounds obvious. In practice it requires sustained advocacy against constant pressure to skip ahead.

She also built a Customer Program with enterprise clients (DNB, DHL, NAV, Volvofinans Bank) — structured co-creation, not just feedback collection. Customer insight stopped being something to go find. It started coming in.`,
  },
  {
    keywords: ['international', 'global', 'europe', 'market', 'country', 'multilingual', 'remote', 'cross-cultural'],
    response: `Patricia has extensive international experience across Europe and Latin America.

**Markets she's worked across:**
Norway, Denmark, Finland, Sweden, Spain, Germany — and Latin America at Alqua.

**At LINK Mobility:**
She led the launch of MyLINK Portal across 6 European markets, coordinating with local market managers and navigating different customer expectations, sales cultures, and regulatory requirements. For the Engage GTM, she took a German-built product and adapted it for Nordic markets — a process requiring deep understanding of the assumptions baked invisibly into a single-market product.

**At Alqua:**
She ran two different commercial models simultaneously: hybrid revenue-share for Spain, traditional SaaS for Latin America — calibrated to different budget dynamics and market realities.

**Languages:**
Spanish (native) · Catalan (native) · English (professional)

She's particularly skilled at cross-cultural collaboration — having navigated German, Norwegian, Danish, Finnish, Spanish, and Macedonian working styles within the same organisation, often in the same week.`,
  },
  {
    keywords: ['roadmap', 'planning', 'stakeholder', 'prioritis', 'prioritiz'],
    response: `Case 03 is entirely about roadmapping — transforming a Jira timeline into a communication system.

**The problem:** The roadmap served one audience (engineers) and excluded everyone else — sales teams, support, market managers, C-level. Stakeholder syncs were long and inefficient because context that should be in the roadmap wasn't there.

**The evolution:**
• **V1 (Miro):** Visual, story-telling roadmap that stakeholders could read. Adopted company-wide after first presentation. But it created two roadmaps — Miro for stakeholders, Jira for tech — that diverged.
• **V2 (Product Plan + Jira):** Product Plan connects directly to Jira. When an engineering task moves, the roadmap updates. Two views of the same truth, not two separate truths.

**The Impact Value Matrix:** A scoring framework for prioritisation. Each item scored on impact and value. This shifted the conversation from "my initiative is important" to "here's how it scores against agreed criteria" — faster and less political.

**The planning cycle:** 6-week process before each quarter. Global research across product/UX/tech, cross-team negotiation, stakeholder communication, sprint triggering.

The moment she knew it was working: *"A sales manager told me they hadn't needed to schedule a roadmap sync in two months. Not because things weren't changing — but because the changes were visible before anyone needed to ask."*`,
  },
  {
    keywords: ['engage', 'gtm', 'go-to-market', 'launch', 'germany', 'nordic'],
    response: `Case 04 — MyLINK Engage GTM is about taking a German product global without owning it.

**The challenge:** Patricia was accountable for the group go-to-market (sell, provisioning, billing, support, monitoring, security, legal, marketing — 8 workstreams) but the product belonged to the German PM. Different roadmap, different engineering team, different priorities.

**The collaboration insight:** The relationship turned when she stopped running coordination sessions and started being honest about her own challenges. *"The best collaboration I had on this project happened when I stopped performing confidence and started sharing my actual problems. Vulnerability opened a door that professionalism had kept politely closed."*

**What she did:**
• Structured discovery across commercial, technical, and operational dimensions
• Defined "group-ready" criteria — unified Salesforce provisioning, group invoice structure, support docs complete
• Phased launch: Norway first, learnings applied to Sweden and Denmark
• Attended Nordic sales meetings for the first 5 minutes of each to present the product directly

**Results:**
• 3 markets launched with phased approach
• 7+ legacy platforms assessed for migration (Turnpike, Fenix, Intouch, Silver Bullet, and others)
• 8 workstreams owned without product ownership
• GTM active from Q1 2024 through 2027+`,
  },
  {
    keywords: ['digital index', 'alqua index', 'ranking', 'data product', 'lead generation'],
    response: `The Alqua Digital Index (Case 06) is one of Patricia's most creative projects — turning internal data into a public growth engine.

**The insight:** During demos, the internal competitive ranking data consistently made prospects lean in. The question became: what if this data didn't live inside the product? What if it *was* the product?

**The algorithm:** Before the product could work as a lead magnet it had to be credible as a ranking. She refined the ADI formula — a composite score across social KPIs, influencer campaign efficiency, media presence, audience perception, and monetary digital brand value. Logarithmic scales prevented large brands from dominating purely on volume.

**Phase 1 — PDF reports:** Downloadable sector reports (2,650+ brands in Beauty). Conversion wall: provide contact details to download. Result: a qualified list of people who care about digital brand performance in a specific industry.

**Phase 2 — Live interactive tool:** Users could explore rankings by industry, sub-category, time period, country. But not all of it. Anonymous users saw limited brands. Registered users got full access. The consultation button was always visible.

*"Every access limit was designed to create a specific kind of frustration: the productive kind, where you can see the value of what you can't fully access yet."*

**The product thinking:** Not a marketing initiative with a product wrapper. A product decision with marketing consequences. She asked: what's the most valuable thing our product does, and how do we put that value in front of people who don't know we exist yet?`,
  },
  {
    keywords: ['about', 'background', 'who is', 'tell me about', 'experience', 'career', 'biography'],
    response: `Patricia Bayona Bultó is a Product Manager and UX Lead with 10+ years of experience building digital products.

**Career overview:**
• **2021 – Present:** VP of UX & Product Manager at LINK Mobility (Oslo-listed CPaaS, ~700 people, 50,000+ customers). Leading the MyLINK Portal platform, building the UX function from scratch, and running global go-to-market initiatives.
• **2018 – 2021:** Co-Founder & COO / Product Lead at Alqua (MarTech SaaS, Spain and Latin America). Built and scaled a data intelligence platform from 0, including commercial model innovation and product-led growth.

**What defines her work:**
She operates at the intersection of product strategy, UX practice, and organisational change. She's been the first PM, the first UX person, the only PM in the room. She doesn't need structure to operate — she creates it.

She's based in Europe, speaks Spanish, Catalan, and English, and has worked across 6+ markets (Norway, Denmark, Finland, Sweden, Spain, Germany, Latin America).

You can see her full work at the [cases page](/cases) or [learn more about her](/about).`,
  },
  {
    keywords: ['contact', 'reach', 'email', 'available', 'get in touch', 'hire her'],
    response: `You can reach Patricia through the contact page of this portfolio.

She's currently based in Europe and open to conversations about senior PM/UX Lead roles — particularly in B2B SaaS, CPaaS, or scaling tech companies, remote or hybrid.

Head to the [contact page](/contact) for her details.`,
  },
]

export function getResponse(input: string): string {
  const lower = input.toLowerCase()
  for (const rule of RULES) {
    if (rule.keywords.some((kw) => lower.includes(kw))) {
      return rule.response
    }
  }
  return `That's a great question. I'm Patricia's portfolio assistant — I can tell you about her work, experience, and approach.

Here are some topics I can help with:

• Her 6 case studies and what she built
• Her experience at LINK Mobility and Alqua
• Her skills, methodology, and leadership approach
• Why she might be a strong fit for your team

What would you like to know?`
}
