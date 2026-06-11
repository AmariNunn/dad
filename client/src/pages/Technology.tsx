import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Mic, CalendarDays, Globe, Star, ShieldCheck, KeyRound, ExternalLink, DollarSign, Monitor, Users, MessageSquare, ChevronLeft, Award, Phone } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const lanes = [
  {
    icon: Mic,
    tag: "AI",
    title: "Voice AI Receptionists",
    body: "24/7 inbound and outbound AI agents that answer calls, book appointments, and follow up via SMS — so your business never misses a lead, even while you sleep.",
    cta: "Build mine",
  },
  {
    icon: CalendarDays,
    tag: "BOOKING",
    title: "Booking Systems",
    body: "White-label booking on modern infrastructure. Multi-staff, combo services, automated reminders, and payment collection — all under your brand.",
    cta: "Build mine",
  },
  {
    icon: Globe,
    tag: "WEB",
    title: "Web Apps & Stores",
    body: "Custom websites, e-commerce storefronts, member portals, and dashboards. Built with precision, built to last — and you own every piece of it.",
    cta: "Build mine",
  },
];

const builds = [
  { name: "SkyIQ Cloud", desc: "A sleek SaaS landing page showcasing AI-powered voice assistant and telephony solutions for modern businesses.", tags: ["React", "Tailwind", "AI"], url: "https://skyiq.cloud/", img: "https://amarinunn.tech/images/skyiq-cloud.png" },
  { name: "SkyIQ App", desc: "A full-featured web application delivering intelligent automation and client management tools.", tags: ["React", "Node.js", "Automation"], url: "https://www.skyiq.app/", img: "https://amarinunn.tech/images/skyiq-app.png" },
  { name: "Lyra Robotics", desc: "A forward-thinking robotics and AI company site highlighting innovative automation technology.", tags: ["Next.js", "AI", "Robotics"], url: "https://www.lyrarobotics.io/", img: "https://amarinunn.tech/images/lyra-robotics.png" },
  { name: "Onda Floent", desc: "A dynamic entertainment and music brand site representing the Money on da FLO creative movement.", tags: ["Web Design", "Branding", "Entertainment"], url: "https://ondafloent.money/", img: "https://amarinunn.tech/images/onda-floent.png" },
  { name: "Antwon Harris", desc: "A professional personal brand and portfolio site spotlighting expertise, projects, and entrepreneurial ventures.", tags: ["Portfolio", "Personal Brand"], url: "https://antwonharris.com/", img: "https://amarinunn.tech/images/antwon-harris.png" },
  { name: "Saniya Allen", desc: "An elegant personal brand website showcasing talent, artistry, and professional achievements.", tags: ["Artistry", "Personal Brand"], url: "https://saniyaallen.com/", img: "https://amarinunn.tech/images/sani-allen.png" },
  { name: "Excellence In Motion", desc: "A purpose-driven youth development organization bridging arts, science, and educational excellence.", tags: ["Web Design", "Nonprofit", "Education"], url: "https://excellenceinmotion.org/", img: "https://amarinunn.tech/images/excellence-in-motion.png" },
];

const pillars = [
  { icon: Star, stat: "Crafted, Not Templated", body: "Every build is designed specifically for your brand — no generic themes, no cookie-cutter layouts." },
  { icon: KeyRound, stat: "You Own Everything", body: "Code, domains, accounts — no lock-in. It's yours from day one." },
  { icon: ShieldCheck, stat: "Secure by Default", body: "DNS hardened, secrets rotated, HTTPS everywhere. Built right from the start." },
];

const techStack = [
  "React", "TypeScript", "Tailwind", "Supabase", "Cloudflare",
  "Netlify", "Render", "Cal.com", "ElevenLabs", "Twilio", "Stripe", "Shopify",
];

const results = [
  {
    icon: DollarSign,
    headline: "$47,000+",
    sub: "Revenue Generated",
    body: "We set him up with an AI receptionist and automated follow-up system. He went from chasing customers to closing deals while he slept — $47k+ in new revenue without hiring a single person.",
    label: "Home Services — Nashville, TN",
    videos: ["/videos/featured1.mp4", "/videos/featured2.mp4"],
  },
  {
    icon: MessageSquare,
    headline: "Real Results",
    sub: "Booking Page That Converts",
    body: "We built them a booking page that actually works — their brand, their voice, their offer — just positioned to close. Now they own their pipeline and the leads don't stop.",
    label: "Client — Nashville, TN",
    videos: ["/videos/promo.mp4"],
  },
  {
    icon: CalendarDays,
    headline: "Booked. Period.",
    sub: "New Website → Real Bookings",
    body: "They launched. They got booked. That's it — no ads, no chasing, no guessing. A site built right does the work before you even wake up.",
    label: "Client — Nashville, TN",
    videos: ["/videos/bookings.mov"],
  },
  {
    icon: Monitor,
    headline: "A New Era",
    sub: "Professional Feel, Built to Last",
    body: "First impressions are everything. We rebuilt their presence from the ground up — polished, premium, and unmistakably theirs. Now they walk into every room like they own it.",
    label: "Client — Nashville, TN",
    videos: ["/videos/professional.mov"],
  },
];

// ─── Video Carousel ───────────────────────────────────────────────────────────

function VideoCarousel({ srcs }: { srcs: string[] }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + srcs.length) % srcs.length);
  const next = () => setIdx((i) => (i + 1) % srcs.length);
  return (
    <div className="relative bg-black aspect-video group">
      <video
        key={srcs[idx]}
        src={srcs[idx]}
        controls
        playsInline
        muted
        preload="auto"
        onPlay={(e) => { e.currentTarget.muted = false; }}
        className="w-full h-full object-contain"
      />
      {srcs.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/80 hover:border-primary"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/80 hover:border-primary"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {srcs.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === idx ? "bg-primary" : "bg-white/30 hover:bg-white/60"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Technology() {
  return (
    <div className="relative pt-20 min-h-screen text-white">
      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 py-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-[0.2em] uppercase backdrop-blur-sm">
            WEBSITE · BOOKING · AI RECEPTIONIST
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6"
        >
          ONE PARTNER.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
            EVERY SCREEN.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >Your Website, App, or AI receptionist — built with you, not at you. A real team walks you through every step, from idea to launch, with results that last.</motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-primary text-black font-bold tracking-widest uppercase rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            Start Today <ArrowRight size={18} />
          </a>
          <a
            href="#builds"
            className="group px-8 py-4 bg-transparent border border-white/20 text-white font-bold tracking-widest uppercase rounded-lg hover:bg-white/5 hover:border-primary/50 hover:text-primary transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            See Real Builds <ChevronRight size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-500"
        >
          {["Crafted to your brand", "A real human, every step", "50+ launches", "You own everything"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block" />
              {t}
            </span>
          ))}
        </motion.div>
      </section>
      {/* ── THREE LANES ───────────────────────────────────────────────────────── */}
      <motion.section
        className="container mx-auto px-4 py-16 border-t border-white/5"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-3">
            Three Lanes. <span className="text-primary">One Studio.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Whether you need a site, a booking system, or an AI that answers the phone at 2am — we build it, you own it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {lanes.map((lane) => (
            <motion.div
              key={lane.title}
              variants={fadeUp}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                <lane.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-[10px] font-black tracking-[0.2em] text-primary/70 uppercase mb-2 block">{lane.tag}</span>
              <h3 className="text-xl font-black text-white mb-3" style={{ textTransform: "none" }}>{lane.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-6" style={{ textTransform: "none" }}>{lane.body}</p>
              <Link
                href="/quote"
                className="text-primary text-sm font-bold uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all"
              >
                {lane.cta} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* ── REAL BUILDS ───────────────────────────────────────────────────────── */}
      <motion.section
        id="builds"
        className="container mx-auto px-4 py-16 border-t border-white/5"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-3">
            Real Builds. <span className="text-primary">Real Clients.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Every project below is live, owned by the client, and built with the same process we'd use for yours.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 max-w-6xl mx-auto">
          {builds.map((b) => (
            <motion.div
              key={b.name}
              variants={fadeUp}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors flex flex-col"
            >
              <div className="w-full h-36 rounded-lg overflow-hidden border border-white/5 mb-4 bg-white/5">
                <img src={b.img} alt={b.name} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-base font-black text-white mb-2" style={{ textTransform: "none" }}>{b.name}</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1" style={{ textTransform: "none" }}>{b.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {b.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary/80 border border-primary/20 rounded-full px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-primary flex items-center gap-1 transition-colors font-medium"
              >
                Visit <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-10">
          Want yours here?{" "}
          <a href="#contact" className="text-primary hover:underline">Start a build →</a>
        </p>
      </motion.section>
      {/* ── WHY IT WORKS ──────────────────────────────────────────────────────── */}
      <motion.section
        className="container mx-auto px-4 py-16 border-t border-white/5"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-3">
            Quality. Ownership. <span className="text-primary">Peace.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pillars.map((p) => (
            <div key={p.stat} className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-black text-white mb-3" style={{ textTransform: "none" }}>{p.stat}</h3>
              <p className="text-gray-400 text-sm leading-relaxed" style={{ textTransform: "none" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </motion.section>
      {/* ── TECH STACK MARQUEE ────────────────────────────────────────────────── */}
      <section className="py-10 border-t border-white/5 overflow-hidden">
        <div className="relative">
          <div className="flex gap-6 animate-[marquee_30s_linear_infinite] whitespace-nowrap w-max">
            {[...techStack, ...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="text-sm font-bold text-gray-500 uppercase tracking-widest px-4 py-2 border border-white/10 rounded-full bg-white/5 hover:border-primary/40 hover:text-primary/70 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
      {/* ── RESULTS + VIDEO TESTIMONIALS (combined) ───────────────────────────── */}
      <motion.section
        className="container mx-auto px-4 py-16 border-t border-white/5"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-3">
            Real Results. <span className="text-primary">Hear It Direct.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Watch what happens when Nashville businesses get a real digital stack — website, booking, and AI that closes deals around the clock.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {results.map((r) => (
            <motion.div
              key={r.headline}
              variants={fadeUp}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors flex flex-col"
            >
              {/* Video carousel on top */}
              <VideoCarousel srcs={r.videos} />

              {/* Stat + copy below */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <r.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-black text-white leading-none" style={{ textTransform: "none" }}>{r.headline}</p>
                    <p className="text-[10px] font-bold text-primary/70 uppercase tracking-widest mt-1">{r.sub}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-3 flex-1" style={{ textTransform: "none" }}>{r.body}</p>
                <p className="text-[10px] text-gray-600 italic mb-3">— {r.label}</p>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary hover:gap-2.5 transition-all"
                >
                  Book a Free Call <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* ── CONTACT CTA ───────────────────────────────────────────────────────── */}
      <div id="contact">
        <ContactCTA />
      </div>
    </div>
  );
}
