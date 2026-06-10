# Replit Build Prompt — Tri Creative Group Landing Page

**Paste everything below into Replit Agent.** It contains the full project brief, tech stack, design direction, section-by-section copy, and form spec. Build it as a single, polished, conversion-focused landing page.

---

## 1. PROJECT OVERVIEW

Build a single-page, high-conversion **opt-in landing page** for **Tri Creative Group**, a Nashville-based promotional products company. The goal of the page is to get a visitor to fill out a short, low-friction **"Start Your Project"** intake form.

The entire page is engineered around one psychological idea: **never ask the visitor to buy — make them feel the project has already begun, so all that's left is to start it.** Copy is assumptive and warm; the form feels like describing something they already want, not filling out a form.

**Target audience:** Business owners and leaders aged 40–60 in Middle Tennessee (Nashville area).

**Primary conversion goal:** Completed "Start Your Project" form submissions.

---

## 2. TECH STACK

- **React + Vite** (single-page app)
- **Tailwind CSS** for styling
- **Framer Motion** for subtle scroll/entrance animations (fade-up on sections, smooth, not flashy)
- Mobile-first, fully responsive (this audience converts heavily on mobile)
- No external CMS — content can be hardcoded as structured data/arrays so it's easy to edit
- Form submission: wire to a simple handler (see Section 8). Start with a console.log + success state; make the submit endpoint a single, clearly-commented function so it's easy to connect to email/CRM later.

---

## 3. DESIGN DIRECTION

Model the **structure and conversion flow** on a modern direct-response opt-in funnel (single centered column, bold emphasized headlines, tappable form options, heavy social proof, long FAQ, founder/local bio at the bottom). But the **brand feel must be professional, grounded, and trustworthy** — this is a 40–60 business audience, not a hype crowd. Quiet confidence over loud marketing.

**Layout**
- Single centered column, max-width ~640–720px for text content, wider for logo wall and testimonials
- Generous vertical spacing between sections
- Sticky or repeated CTA button so "Start Your Project" is always within reach
- Mobile-first; everything stacks cleanly on phones

**Typography**
- Strong, modern sans-serif for headlines (e.g. Inter, Plus Jakarta Sans, or similar) — large, confident, with **selected words emphasized** (bold or accent color) the way the reference emphasizes key phrases
- Highly readable body text, comfortable line-height, slightly larger than default for the older demographic

**Color (placeholder — swap in Tri Creative brand colors)**
- Clean, premium base: white or very light background with deep charcoal/near-black text, OR an optional dark hero section for contrast
- One confident accent color for CTAs and emphasized words (pick a brand color — a strong blue, green, or Tri Creative's existing brand hue)
- CTAs should be high-contrast and impossible to miss

**Tone of motion**
- Subtle fade-up as sections enter viewport
- Tappable form options get a clear selected state (filled accent background, checkmark)
- No gimmicks — smooth and intentional

---

## 4. PAGE STRUCTURE (in order)

**IMPORTANT: the form sits at the TOP, directly under the hero video — not at the bottom.** This mirrors the reference funnel: visitors watch the video, then immediately hit the application form. Everything below the form (proof, story, testimonials, FAQ) exists to re-sell anyone who scrolls past without filling it out, and every lower CTA scrolls them back UP to the form.

1. Hero (headline + subhead + **video** + primary CTA)
2. **Start Your Project** multi-step form (the conversion target — directly under the video)
3. Social proof bar (client logo wall)
4. "Picture it done" — future-pacing section
5. "Getting away from" — the problem section
6. "What we bring" — the solution section
7. Results section
8. Testimonials
9. The emotional / brand section
10. Local positioning section
11. FAQ
12. Footer (contact info, local trust)

The CTA button "**Start Your Project →**" should appear in the hero (scrolls down a touch to the form just below), after testimonials, and after the FAQ — every lower button scrolls smoothly back UP to the form under the video (section 2).

---

## 5. SECTION-BY-SECTION COPY

### SECTION 1 — HERO

**Headline:**
Your Brand Deserves to Be Carried Proudly.

**Subheadline:**
Tell us what you're building. We'll handle the rest — design included.

**CTA Button:** Start Your Project →
**Microcopy under button:** Takes two minutes. No pressure, no cost to begin.

**VIDEO:** Place a brand/explainer video directly below the headline and subhead, with a short prompt above it like **"Watch this first ↓"** (mirrors the reference funnel's "CLICK BELOW TO WATCH FIRST!"). The **Start Your Project form (Section 6) sits immediately under the video** — no other section comes between the video and the form. The hero CTA button scrolls down a touch to that form.

---

### SECTION 2 — SOCIAL PROOF BAR

**Small quiet header:** Trusted by the brands that built Nashville

**[LOGO WALL]** — display client logos in a clean responsive grid (grayscale by default, color on hover is a nice touch). Logos to include:
Nashville SC · Metro Nashville Public Schools · National Museum of African American Music · Music City Community Court · PENCIL · Oasis Center · Hang WKND Suite · Advanced Spine & Wellness · Amsterdam Premium Cannabis Company · Native Soil Co. · Born Again Church · Rémy Martin · Corizon Health · Dubs Apothecary

*(Logo image file provided separately — `client-logos.webp`. Can be used as a single image strip or sliced into individual logos for the grid.)*

**One-liner under logos:** From city government to local favorites — the names you know already carry our work.

---

### SECTION 3 — PICTURE IT DONE (future pacing)

**Header:** Picture It Done

It's the morning of your event. The boxes arrived early — exactly when we promised. Your team opens them and you watch their faces. They're proud to wear it. Proud to hand it out.

Weeks later, it's still working for you. On a desk across town. In a car. On someone's shoulder at the grocery store. Your name, still in the room, long after you've left it.

That's not a giveaway. That's a brand that travels.

---

### SECTION 4 — THE PROBLEM ("getting away from")

**Header:** You Won't Be Juggling This Alone

No five vendors. No five logins. No rep learning your brand for the first time on a phone call.

One partner who already gets it. One process. One person who knows your name and your deadline.

We've done this long enough to make it feel easy — because the simplest part of your week should be the part you hand to us.

---

### SECTION 5 — THE SOLUTION ("what we bring")

**Header:** One Trusted Partner for Everything You Need

Display as four clean value cards or rows:

- **A proven track record** — a vendor businesses trust.
- **One place for all your needs** — no more chasing five suppliers.
- **Pricing matched to your budget** — quality that fits what you planned to spend.
- **On-time, guaranteed** — your products arrive when we say they will.

---

### SECTION 6 — RESULTS

**Header:** What You Walk Away With

Display as four short items (icons optional):

- Products delivered on time, every time
- Stronger brand awareness in your community
- Clients who notice the difference
- Employees who feel appreciated and proud

---

### SECTION 7 — TESTIMONIALS

**Header:** They Didn't Just Get Products. They Got Their Time Back.

Display as testimonial cards. **NOTE TO BUILDER: these are placeholder testimonials to be replaced with real, client-approved quotes before launch.** Structure the component as an editable array so quotes/names swap in easily.

> **"We stopped chasing vendors."**
> Used to be three suppliers and three headaches for every event. Now it's one call, and it's done — early, every time.
> — [Name], [Title], [Organization]

> **"My team actually wears it."**
> That's the real test. The shirts didn't end up in a drawer. People wear them around town, and I keep getting asked where they came from.
> — [Name], [Title], [Organization]

> **"They handled the design and made us look better than we asked for."**
> I came in with a rough idea and a logo. They came back with something I was proud to put our name on.
> — [Name], [Title], [Organization]

**Closing line under testimonials:** The story's always the same: less juggling, better product, and a brand that keeps working long after the event ends.

**CTA Button:** Start Your Project →

---

### SECTION 8 — EMOTIONAL / BRAND

**Header:** More Than Merch — A Lasting Impression

The right product does more than fill a goodie bag. It powers your brand, draws attention at your next event, and turns a single moment into a lasting memory. Long after the day is over, your message keeps working — sitting on a desk, riding in a car, worn around town.

---

### SECTION 9 — LOCAL POSITIONING

**Header:** Built Here. For the People Who Built Here.

Tri Creative Group is a Nashville company. The businesses we serve are the ones that made this city what it is — and we think those businesses deserve a partner who's part of the same streets.

We don't make throwaways. We make the kind of thing people keep, use, and remember. Because a product that lasts is a message that lasts.

---

### SECTION 10 — FAQ

**Header:** Before You Start — A Few Things People Ask

Accordion-style (click to expand). Each Q expands to reveal the A.

**"Do I need a big order to work with you?"**
No. We work with one-off event runs and large rollouts alike. Tell us what you're planning and we'll size it to fit — not the other way around.

**"What if I don't have a finished design or even a logo file?"**
That's the part we handle. Bring us a rough idea, an old logo, or just the feeling you're going for, and our design team takes it from there. You approve before anything prints.

**"Can you really match my budget?"**
Yes. We start with the number you've already set and build the best product around it. You'll never get a quote that quietly ignores what you told us.

**"I have a hard deadline. Can you hit it?"**
On time is the standard, not the upgrade. Give us your date up front and we build the timeline backward from it — with the arrival guaranteed.

**"What kinds of products do you do?"**
Apparel, drinkware, bags, signage, event giveaways, executive gifts — if it can carry your brand, we can make it. Not sure what fits your event? That's exactly what the first conversation is for.

**"Will I see it before the full order runs?"**
Always. You'll review and approve a proof before we produce anything. Nothing goes to print without your yes.

**"I'm not totally sure what I want yet."**
Perfect — most people aren't. Starting a project isn't a commitment to buy; it's just the first conversation. We'll help you figure out the rest.

**Closing CTA block:**
**Header:** Still Reading? Let's Just Start the Conversation.
**Button:** Start Your Project →
**Microcopy:** Two minutes. We'll bring the design. You bring the vision.

---

## 6. THE "START YOUR PROJECT" FORM (conversion target)

**PLACEMENT: this form sits at the top of the page, directly under the hero video (Section 1) — it is the second thing on the page, not the last.** Build it as a **multi-step form** (one question per screen on mobile, like the reference funnel). Each step has large, **tappable option cards/pills** with a clear selected state. A progress indicator (dots or a bar) sits at the top. Selecting an option can auto-advance to the next step for a smooth feel; contact fields are the final step.

**Form Header:** Start Your Project
**Subhead:** Three quick questions — most people finish in under two minutes. We'll take the design from here.

### STEP 1
**What are we creating?** *(tap one)*
- 🎁 Event giveaways
- 👕 Team apparel
- 🥃 Client or executive gifts
- 🪧 Signage & displays
- 💡 Not sure yet — help me decide

### STEP 2
**When do you need it?** *(tap one)*
- Within 2 weeks
- Sometime this month
- 1–2 months out
- Just planning ahead for now

### STEP 3
**Roughly what budget are you working with?** *(ballpark is fine — this just helps us match the right products)*
- Under $500
- $500 – $2,000
- $2,000 – $5,000
- $5,000+
- Not sure yet

### STEP 4 — CONTACT INFO
Keep to the minimum. Fields:
- **Your name** (required)
- **Business / organization** (required)
- **Email** (required, validated)
- **Best phone number** (optional)
- **Anything else we should know?** (optional, single text line — "a logo, an event date, a wild idea")

**Submit Button:** Start My Project →
**Microcopy under button:** No cost and no commitment to begin. We'll reply within one business day with a few ideas to get rolling.

### SUCCESS / THANK-YOU SCREEN (replaces form after submit)
**Header:** That's It — Your Project's Underway.

We've got it, [First Name]. Someone from our team will reach out within one business day with a few directions to consider — design included. In the meantime, start picturing it: your name, in their hands, long after the day's over.

*Secondary line:* Got a logo or inspiration handy? Reply to our email and send it over — it'll give us a head start.

*(Pull [First Name] from the name field. If unavailable, just say "We've got it.")*

---

## 7. CONVERSION DETAILS TO PRESERVE (do not "clean up" these choices)

- The submit button reads **"Start My Project"** in first person — not "Submit." Keep it.
- Keep the microcopy **"no cost, no commitment to begin"** directly under the button.
- The thank-you screen says **"your project's underway"** — past the decision point on purpose. Keep that framing.
- Every option in every form step nudges forward; there is no dead-end "no" option anywhere.
- Headlines emphasize selected words (bold/accent) the way the reference does — e.g. **Proudly**, **carried**, **on time**, **design included**.

---

## 8. FORM SUBMISSION / BACKEND NOTE

Wire the form submit to a single, clearly-commented async function `submitProject(formData)`. For now it can `console.log` the payload and resolve to show the success screen. Leave a `// TODO: connect to email/CRM` comment so it's trivial to later POST to an email service, Google Sheet, Supabase table, or webhook. Validate email and required fields before allowing submit.

---

## 9. ASSETS NEEDED

- `client-logos.webp` — provided (logo wall). Use as-is or slice into individual logos.
- Tri Creative Group logo (header/footer) — to be supplied.
- Brand color hex codes — to be supplied (swap into the accent placeholder).
- Optional hero image or short brand video.
- Real client testimonials + names (replace placeholders before launch).

---

## 10. FOOTER

Simple, trustworthy footer:
- Tri Creative Group — Nashville, TN
- Contact: [email] · [phone]
- A short line: "Proudly local. Promotional products that leave a message and last."
- Copyright line

---

**Build it clean, fast-loading, mobile-first, and conversion-focused. The whole page should feel like quiet, confident momentum toward one action: Start Your Project.**
