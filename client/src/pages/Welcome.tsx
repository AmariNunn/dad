import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2, VolumeX, Play, Pause, ArrowRight, ArrowLeft,
  CheckCircle, Plus, Minus, Gift, Shirt, Trophy, Megaphone, HelpCircle
} from "lucide-react";
import vslVideo from "@assets/0610_1781128078224.mp4";
import logoImg from "@assets/TriCreativeGroup_Logo_White_1768588812953.png";
import clientLogosImg from "@assets/client-logos_1768588141832-LlhLCFRX_1781129145911.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ─── VSL Video ────────────────────────────────────────────────────────────────

function VSLVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleClick = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused || v.ended) {
      v.currentTime = 0;
      v.muted = false;
      setMuted(false);
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  }, []);

  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,163,224,0.25)] cursor-pointer select-none"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={vslVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="w-full block"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />

      {/* Hover overlay */}
      <AnimatePresence>
        {hovering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/30 flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40">
              {playing ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white ml-1" />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Muted badge */}
      {muted && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 text-xs text-white/80">
          <VolumeX className="w-3 h-3" /> <span>Tap to unmute</span>
        </div>
      )}
      {!muted && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2 py-1.5 rounded-full border border-white/20 text-xs text-white/60">
          <Volume2 className="w-3 h-3" />
        </div>
      )}
    </div>
  );
}

// ─── Multi-Step Form ──────────────────────────────────────────────────────────

const STEPS = [
  {
    id: "type",
    question: "What are we creating?",
    hint: "Tap one to continue",
    options: [
      { emoji: "🎁", label: "Event giveaways" },
      { emoji: "👕", label: "Team apparel" },
      { emoji: "🥃", label: "Client or executive gifts" },
      { emoji: "🪧", label: "Signage & displays" },
      { emoji: "💡", label: "Not sure yet — help me decide" },
    ],
  },
  {
    id: "timeline",
    question: "When do you need it?",
    hint: "Tap one to continue",
    options: [
      { emoji: "⚡", label: "Within 2 weeks" },
      { emoji: "📅", label: "Sometime this month" },
      { emoji: "🗓️", label: "1–2 months out" },
      { emoji: "🔭", label: "Just planning ahead for now" },
    ],
  },
  {
    id: "budget",
    question: "Roughly what budget are you working with?",
    hint: "Ballpark is fine — this just helps us match the right products",
    options: [
      { emoji: "💵", label: "Under $500" },
      { emoji: "💳", label: "$500 – $2,000" },
      { emoji: "💰", label: "$2,000 – $5,000" },
      { emoji: "🏆", label: "$5,000+" },
      { emoji: "🤷", label: "Not sure yet" },
    ],
  },
];

interface FormData {
  type: string;
  timeline: string;
  budget: string;
  name: string;
  business: string;
  email: string;
  phone: string;
  notes: string;
}

// TODO: connect to email/CRM
async function submitProject(formData: FormData): Promise<void> {
  console.log("[submitProject] payload:", formData);
  await new Promise((r) => setTimeout(r, 800));
}

function ProjectForm() {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ name: "", business: "", email: "", phone: "", notes: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = STEPS.length + 1; // 3 option steps + 1 contact step

  const selectOption = (stepId: string, label: string) => {
    setSelections((prev) => ({ ...prev, [stepId]: label }));
    setTimeout(() => setStep((s) => s + 1), 280);
  };

  const validateContact = () => {
    const errs: Record<string, string> = {};
    if (!contact.name.trim()) errs.name = "Name is required.";
    if (!contact.business.trim()) errs.business = "Business name is required.";
    if (!contact.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) errs.email = "Please enter a valid email.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateContact()) return;
    setSubmitting(true);
    await submitProject({
      type: selections.type,
      timeline: selections.timeline,
      budget: selections.budget,
      ...contact,
    });
    setSubmitting(false);
    setSubmitted(true);
  };

  const firstName = contact.name.split(" ")[0] || "";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10"
      >
        <CheckCircle className="w-14 h-14 text-[#00A3E0] mx-auto mb-4" />
        <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>
          That's It — Your Project's Underway.
        </h3>
        <p className="text-gray-300 leading-relaxed max-w-md mx-auto mb-4">
          We've got it{firstName ? `, ${firstName}` : ""}. Someone from our team will reach out within one business day with a few directions to consider — design included.
        </p>
        <p className="text-gray-400 text-sm">
          Got a logo or inspiration handy? Reply to our email and send it over — it'll give us a head start.
        </p>
      </motion.div>
    );
  }

  const currentOptionStep = STEPS[step];

  return (
    <div>
      {/* Progress dots + back button row */}
      <div className="flex items-center justify-center gap-2 mb-8 relative">
        {step > 0 && (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="absolute left-0 flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </button>
        )}
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i < step ? "bg-[#00A3E0] w-6" : i === step ? "bg-[#00A3E0] w-6" : "bg-white/20 w-3"
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step < STEPS.length ? (
          <motion.div
            key={`step-${step}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-xs uppercase tracking-widest text-[#00A3E0] mb-2 font-bold">
              Step {step + 1} of {totalSteps}
            </p>
            <h3 className="text-xl font-black text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
              {currentOptionStep.question}
            </h3>
            <p className="text-sm text-gray-400 mb-6">{currentOptionStep.hint}</p>
            <div className="space-y-3">
              {currentOptionStep.options.map((opt) => {
                const selected = selections[currentOptionStep.id] === opt.label;
                return (
                  <button
                    key={opt.label}
                    onClick={() => selectOption(currentOptionStep.id, opt.label)}
                    className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-200 ${
                      selected
                        ? "border-[#00A3E0] bg-[#00A3E0]/15 text-white"
                        : "border-white/10 bg-white/5 text-gray-300 hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    <span className="text-xl">{opt.emoji}</span>
                    <span className="font-semibold text-sm">{opt.label}</span>
                    {selected && <CheckCircle className="w-4 h-4 text-[#00A3E0] ml-auto" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="contact-step"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-xs uppercase tracking-widest text-[#00A3E0] mb-2 font-bold">
              Step {totalSteps} of {totalSteps}
            </p>
            <h3 className="text-xl font-black text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
              Last step — how do we reach you?
            </h3>
            <p className="text-sm text-gray-400 mb-6">No cost and no commitment to begin.</p>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your name *"
                  value={contact.name}
                  onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-[#00A3E0] transition-colors ${
                    errors.name ? "border-red-500" : "border-white/10"
                  }`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Business / organization *"
                  value={contact.business}
                  onChange={(e) => setContact((c) => ({ ...c, business: e.target.value }))}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-[#00A3E0] transition-colors ${
                    errors.business ? "border-red-500" : "border-white/10"
                  }`}
                />
                {errors.business && <p className="text-red-400 text-xs mt-1">{errors.business}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email address *"
                  value={contact.email}
                  onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-[#00A3E0] transition-colors ${
                    errors.email ? "border-red-500" : "border-white/10"
                  }`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Best phone number (optional)"
                  value={contact.phone}
                  onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-[#00A3E0] transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Anything else? A logo, an event date, a wild idea… (optional)"
                  value={contact.notes}
                  onChange={(e) => setContact((c) => ({ ...c, notes: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-[#00A3E0] transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-xl bg-[#00A3E0] hover:bg-[#0082B3] text-white font-black text-sm uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {submitting ? "Sending…" : <>Start My Project <ArrowRight className="w-4 h-4" /></>}
              </button>
              <p className="text-center text-xs text-gray-500">No cost and no commitment to begin. We'll reply within one business day.</p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── FAQ Item ────────────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-white/10 rounded-xl overflow-hidden cursor-pointer"
      onClick={() => setOpen((o) => !o)}
    >
      <div className="flex items-center justify-between px-6 py-4 bg-white/5 hover:bg-white/8 transition-colors">
        <span className="text-sm font-semibold text-white pr-4" style={{ fontFamily: "var(--font-body)" }}>
          {q}
        </span>
        {open ? <Minus className="w-4 h-4 text-[#00A3E0] shrink-0" /> : <Plus className="w-4 h-4 text-[#00A3E0] shrink-0" />}
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-6 py-4 text-sm text-gray-400 leading-relaxed border-t border-white/10">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── CTA Button ───────────────────────────────────────────────────────────────

function CTAButton({ label = "Start Your Project →" }: { label?: string }) {
  const scrollToForm = () => {
    document.getElementById("project-form")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToForm}
      className="px-8 py-4 rounded-xl bg-[#00A3E0] hover:bg-[#0082B3] text-white font-black text-sm uppercase tracking-widest transition-all duration-200 hover:scale-105 shadow-[0_0_24px_rgba(0,163,224,0.35)]"
    >
      {label}
    </button>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

const clients = [
  "Nashville SC", "Metro Nashville Public Schools",
  "National Museum of African American Music", "Music City Community Court",
  "PENCIL", "Oasis Center", "Hang WKND Suite", "Advanced Spine & Wellness",
  "Amsterdam Premium Cannabis", "Native Soil Co.", "Born Again Church",
  "Rémy Martin", "Corizon Health", "Dubs Apothecary",
];

const solutions = [
  { icon: Trophy, title: "A proven track record", body: "A vendor businesses trust — with 20+ years of promotional marketing experience." },
  { icon: Gift, title: "One place for all your needs", body: "No more chasing five suppliers. One partner, one process." },
  { icon: Megaphone, title: "Pricing matched to your budget", body: "Quality that fits what you planned to spend — we start with your number." },
  { icon: CheckCircle, title: "On-time, guaranteed", body: "Your products arrive when we say they will. On time is the standard, not the upgrade." },
];

const results = [
  "Products delivered on time, every time",
  "Stronger brand awareness in your community",
  "Clients who notice the difference",
  "Employees who feel appreciated and proud",
];

const testimonials = [
  {
    quote: "We stopped chasing vendors.",
    body: "Used to be three suppliers and three headaches for every event. Now it's one call, and it's done — early, every time.",
    author: "Marcus Webb", title: "Operations Director", org: "Shelby & Co. Nashville",
  },
  {
    quote: "My team actually wears it.",
    body: "That's the real test. The shirts didn't end up in a drawer. People wear them around town, and I keep getting asked where they came from.",
    author: "Danielle Okafor", title: "HR Manager", org: "Pinnacle Community Health",
  },
  {
    quote: "They handled the design and made us look better than we asked for.",
    body: "I came in with a rough idea and a logo. They came back with something I was proud to put our name on.",
    author: "Troy Castillo", title: "Executive Director", org: "Eastside Youth Alliance",
  },
];

const faqs = [
  {
    q: "Do I need a big order to work with you?",
    a: "No. We work with one-off event runs and large rollouts alike. Tell us what you're planning and we'll size it to fit — not the other way around.",
  },
  {
    q: "What if I don't have a finished design or even a logo file?",
    a: "That's the part we handle. Bring us a rough idea, an old logo, or just the feeling you're going for, and our design team takes it from there. You approve before anything prints.",
  },
  {
    q: "Can you really match my budget?",
    a: "Yes. We start with the number you've already set and build the best product around it. You'll never get a quote that quietly ignores what you told us.",
  },
  {
    q: "I have a hard deadline. Can you hit it?",
    a: "On time is the standard, not the upgrade. Give us your date up front and we build the timeline backward from it — with the arrival guaranteed.",
  },
  {
    q: "What kinds of products do you do?",
    a: "Apparel, drinkware, bags, signage, event giveaways, executive gifts — if it can carry your brand, we can make it. Not sure what fits your event? That's exactly what the first conversation is for.",
  },
  {
    q: "Will I see it before the full order runs?",
    a: "Always. You'll review and approve a proof before we produce anything. Nothing goes to print without your yes.",
  },
  {
    q: "I'm not totally sure what I want yet.",
    a: "Perfect — most people aren't. Starting a project isn't a commitment to buy; it's just the first conversation. We'll help you figure out the rest.",
  },
];

export default function Welcome() {
  return (
    <div className="min-h-screen text-white" style={{ background: "#080d14" }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="px-4 pt-16 pb-4 text-center">
        <div className="max-w-2xl mx-auto">
          <motion.img
            src={logoImg}
            alt="TRI Creative Group"
            className="h-12 mx-auto mb-10 opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-display)", textTransform: "none", letterSpacing: "-0.02em" }}
          >
            Your Brand Deserves to Be{" "}
            <span className="text-[#00A3E0]">Carried Proudly.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-300 mb-8 leading-relaxed"
            style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal", fontWeight: 400 }}
          >
            Tell us what you're building.{" "}
            <strong className="text-white">We'll handle the rest</strong> — design included.
          </motion.p>

        </div>
      </section>

      {/* ── VSL VIDEO ─────────────────────────────────────────────────────── */}
      <section className="px-4 pb-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <VSLVideo />
          </motion.div>
        </div>
      </section>

      {/* ── FORM ──────────────────────────────────────────────────────────── */}
      <section id="project-form" className="px-4 py-12">
        <div className="max-w-lg mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_0_60px_rgba(0,163,224,0.1)]">
          <div className="text-center mb-8">
            <h2
              className="text-2xl font-black text-white mb-2"
              style={{ fontFamily: "var(--font-display)", textTransform: "none" }}
            >
              Start Your Project
            </h2>
            <p className="text-sm text-gray-400" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>
              Three quick questions — most people finish in under two minutes. We'll take the design from here.
            </p>
          </div>
          <ProjectForm />
        </div>
      </section>

      {/* ── SOCIAL PROOF ──────────────────────────────────────────────────── */}
      <motion.section
        className="px-4 py-10 border-t border-white/5"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-black text-white mb-8 uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
            Trusted by the brands that built Nashville
          </p>
          <img
            src={clientLogosImg}
            alt="Client logos — Nashville SC, Metro Nashville Public Schools, National Museum of African American Music, and more"
            className="w-full max-w-2xl mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
          <p className="text-sm text-gray-500 italic mt-6">
            From city government to local favorites — the names you know already carry our work.
          </p>
        </div>
      </motion.section>

      {/* ── PICTURE IT DONE ───────────────────────────────────────────────── */}
      <motion.section
        className="px-4 py-16 border-t border-white/5"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-black text-white mb-6"
            style={{ fontFamily: "var(--font-display)", textTransform: "none" }}
          >
            Picture It <span className="text-[#00A3E0]">Done</span>
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[15px]" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>
            <p>It's the morning of your event. The boxes arrived early — exactly when we promised. Your team opens them and you watch their faces. They're proud to wear it. Proud to hand it out.</p>
            <p>Weeks later, it's still working for you. On a desk across town. In a car. On someone's shoulder at the grocery store. Your name, still in the room, long after you've left it.</p>
            <p className="text-white font-semibold">That's not a giveaway. That's a brand that travels.</p>
          </div>
        </div>
      </motion.section>

      {/* ── THE PROBLEM ───────────────────────────────────────────────────── */}
      <motion.section
        className="px-4 py-16 border-t border-white/5"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-black text-white mb-6"
            style={{ fontFamily: "var(--font-display)", textTransform: "none" }}
          >
            You Won't Be <span className="text-[#00A3E0]">Juggling This Alone</span>
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[15px]" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>
            <p>No five vendors. No five logins. No rep learning your brand for the first time on a phone call.</p>
            <p>One partner who already gets it. One process. One person who knows your name and your deadline.</p>
            <p className="text-white font-semibold">We've done this long enough to make it feel easy — because the simplest part of your week should be the part you hand to us.</p>
          </div>
        </div>
      </motion.section>

      {/* ── THE SOLUTION ──────────────────────────────────────────────────── */}
      <motion.section
        className="px-4 py-16 border-t border-white/5"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-black text-white mb-10 text-center"
            style={{ fontFamily: "var(--font-display)", textTransform: "none" }}
          >
            One Trusted Partner for <span className="text-[#00A3E0]">Everything You Need</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#00A3E0]/40 transition-colors"
              >
                <s.icon className="w-6 h-6 text-[#00A3E0] mb-3" />
                <h3
                  className="text-base font-black text-white mb-2"
                  style={{ fontFamily: "var(--font-display)", textTransform: "none", letterSpacing: "normal" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── RESULTS ───────────────────────────────────────────────────────── */}
      <motion.section
        className="px-4 py-16 border-t border-white/5"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-black text-white mb-10"
            style={{ fontFamily: "var(--font-display)", textTransform: "none" }}
          >
            What You <span className="text-[#00A3E0]">Walk Away With</span>
          </h2>
          <div className="space-y-4">
            {results.map((r) => (
              <div key={r} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-4">
                <CheckCircle className="w-5 h-5 text-[#00A3E0] shrink-0" />
                <span className="text-white text-sm font-semibold text-left" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>
                  {r}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <motion.section
        className="px-4 py-16 border-t border-white/5"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-black text-white mb-10 text-center"
            style={{ fontFamily: "var(--font-display)", textTransform: "none" }}
          >
            They Didn't Just Get Products.{" "}
            <span className="text-[#00A3E0]">They Got Their Time Back.</span>
          </h2>
          <div className="space-y-4 mb-10">
            {testimonials.map((t) => (
              <div
                key={t.quote}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <p className="text-white font-black text-base mb-2" style={{ fontFamily: "var(--font-display)", textTransform: "none", letterSpacing: "normal" }}>
                  "{t.quote}"
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>
                  {t.body}
                </p>
                <p className="text-xs text-gray-500">
                  — {t.author}, {t.title}, {t.org}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 italic mb-8" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>
            The story's always the same: less juggling, better product, and a brand that keeps working long after the event ends.
          </p>
          <div className="text-center">
            <CTAButton />
          </div>
        </div>
      </motion.section>

      {/* ── BRAND / EMOTIONAL ─────────────────────────────────────────────── */}
      <motion.section
        className="px-4 py-16 border-t border-white/5"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-black text-white mb-6"
            style={{ fontFamily: "var(--font-display)", textTransform: "none" }}
          >
            More Than Merch —{" "}
            <span className="text-[#00A3E0]">A Lasting Impression</span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-[15px]" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>
            The right product does more than fill a goodie bag. It powers your brand, draws attention at your next event, and turns a single moment into a lasting memory. Long after the day is over, your message keeps working — sitting on a desk, riding in a car, worn around town.
          </p>
        </div>
      </motion.section>

      {/* ── LOCAL POSITIONING ─────────────────────────────────────────────── */}
      <motion.section
        className="px-4 py-16 border-t border-white/5"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-black text-white mb-6"
            style={{ fontFamily: "var(--font-display)", textTransform: "none" }}
          >
            Built Here. For the People Who{" "}
            <span className="text-[#00A3E0]">Built Here.</span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-[15px]" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>
            Tri Creative Group is a Nashville company. The businesses we serve are the ones that made this city what it is — and we think those businesses deserve a partner who's part of the same streets.
            <br /><br />
            We don't make throwaways. We make the kind of thing people <strong className="text-white">keep, use, and remember.</strong> Because a product that lasts is a message that lasts.
          </p>
        </div>
      </motion.section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <motion.section
        className="px-4 py-16 border-t border-white/5"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <div className="max-w-xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-black text-white mb-10 text-center"
            style={{ fontFamily: "var(--font-display)", textTransform: "none" }}
          >
            Before You Start —{" "}
            <span className="text-[#00A3E0]">A Few Things People Ask</span>
          </h2>
          <div className="space-y-3 mb-16">
            {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>

          {/* Final CTA block */}
          <div className="text-center border border-white/10 rounded-2xl p-10 bg-white/5">
            <HelpCircle className="w-8 h-8 text-[#00A3E0] mx-auto mb-4 opacity-70" />
            <h3
              className="text-xl font-black text-white mb-4"
              style={{ fontFamily: "var(--font-display)", textTransform: "none" }}
            >
              Still Reading? Let's Just{" "}
              <span className="text-[#00A3E0]">Start the Conversation.</span>
            </h3>
            <CTAButton />
            <p className="text-xs text-gray-500 mt-4">Two minutes. We'll bring the design. You bring the vision.</p>
          </div>
        </div>
      </motion.section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="px-4 py-12 border-t border-white/10 text-center">
        <img src={logoImg} alt="TRI Creative Group" className="h-10 mx-auto mb-4 opacity-70" />
        <p className="text-sm font-bold text-white mb-1">Tri Creative Group — Nashville, TN</p>
        <p className="text-xs text-gray-500 mb-3">
          Info@TRIcreativegroup.com · 615.850.5260
        </p>
        <p className="text-xs text-gray-600 italic mb-4">
          Proudly local. Promotional products that leave a message and last.
        </p>
        <p className="text-xs text-gray-700">
          &copy; {new Date().getFullYear()} Tri Creative Group. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
