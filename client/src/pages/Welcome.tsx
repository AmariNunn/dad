import { useRef, useState, useCallback } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2, VolumeX, Play, Pause, ArrowRight, ArrowLeft, CheckCircle,
  Plus, Minus, Gift, Trophy, Megaphone
} from "lucide-react";
import vslVideo from "@assets/0610_1781128078224.mp4";
import logoImg from "@assets/TriCreativeGroup_Logo_White_1768588812953.png";
import clientLogosImg from "@assets/client-logos_1768588141832-LlhLCFRX_1781129145911.webp";
import hatGif from "@/assets/images/hat.gif";
import handSanitizerGif from "@/assets/images/hand-sanitizer.gif";
import oasisJournal from "@assets/oasis_journal_sample__1_-removebg-preview_1781291103249.png";
import niaHouseBag from "@assets/nia_house_bag_samples__1_-removebg-preview_1781291107290.png";
import corizonLogo from "@assets/client-logos_1768588141832-LlhLCFRX-removebg-preview_(2)_1781292044408.png";
import spineLogo from "@assets/spine_1781292047686.png";
import mnpsLogo from "@assets/mnps_(1)_1781292051557.png";
import soccerClub from "@assets/sc_1781292077727.png";
import overtonCroc from "@assets/overton_crok_sample-removebg-preview_1781291158630.png";
import jfkBackpack from "@assets/jfk_backpack_sample-removebg-preview_1781291225686.png";

const marqueeItems = [
  { src: corizonLogo, alt: "Corizon Health" },
  { src: overtonCroc, alt: "Overton Crocs" },
  { src: mnpsLogo, alt: "Metro Nashville Public Schools" },
  { src: jfkBackpack, alt: "JFK Backpack" },
  { src: soccerClub, alt: "Nashville SC" },
  { src: oasisJournal, alt: "Oasis Journal" },
  { src: spineLogo, alt: "Advanced Spine & Wellness" },
  { src: niaHouseBag, alt: "Nia House Bag" },
];
import { ShootingStars } from "@/components/ShootingStars";
import { ForceFieldBackground } from "@/components/ForceFieldBackground";

// ─── Shared data & components ─────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-white/10 rounded-xl overflow-hidden cursor-pointer"
      onClick={() => setOpen((o) => !o)}
    >
      <div className="flex items-center justify-between px-6 py-4 bg-white/5 hover:bg-white/8 transition-colors">
        <span className="text-base font-semibold text-white pr-4" style={{ fontFamily: "var(--font-body)" }}>{q}</span>
        {open ? <Minus className="w-5 h-5 text-[#00A3E0] shrink-0" /> : <Plus className="w-5 h-5 text-[#00A3E0] shrink-0" />}
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
            <p className="px-6 py-4 text-lg text-gray-100 leading-relaxed border-t border-white/10" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
  { q: "Do I need a big order to work with you?", a: "No. We work with one-off event runs and large rollouts alike. Tell us what you're planning and we'll size it to fit — not the other way around." },
  { q: "What if I don't have a finished design or even a logo file?", a: "That's the part we handle. Bring us a rough idea, an old logo, or just the feeling you're going for, and our design team takes it from there. You approve before anything prints." },
  { q: "Can you really match my budget?", a: "Yes. We start with the number you've already set and build the best product around it. You'll never get a quote that quietly ignores what you told us." },
  { q: "I have a hard deadline. Can you hit it?", a: "On time is the standard, not the upgrade. Give us your date up front and we build the timeline backward from it — with the arrival guaranteed." },
  { q: "What kinds of products do you do?", a: "Apparel, drinkware, bags, signage, event giveaways, executive gifts — if it can carry your brand, we can make it. Not sure what fits your event? That's exactly what the first conversation is for." },
  { q: "Will I see it before the full order runs?", a: "Always. You'll review and approve a proof before we produce anything. Nothing goes to print without your yes." },
  { q: "I'm not totally sure what I want yet.", a: "Perfect — most people aren't. Starting a project isn't a commitment to buy; it's just the first conversation. We'll help you figure out the rest." },
];

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
    hint: "Pick one, then hit Next",
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
    hint: "Pick one, then hit Next",
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

const FORMSPREE = "https://formspree.io/f/mkoavjwv";

function ProjectForm() {
  const [, setLocation] = useLocation();
  // step 0 = contact info, steps 1-3 = option selection
  const [step, setStep] = useState(0);
  const [contact, setContact] = useState({ name: "", business: "", email: "", phone: "", notes: "" });
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const totalSteps = STEPS.length + 1; // 4

  const selectOption = (stepId: string, label: string) =>
    setSelections((prev) => ({ ...prev, [stepId]: label }));

  const validateContact = () => {
    const errs: Record<string, string> = {};
    if (!contact.name.trim()) errs.name = "Name is required.";
    if (!contact.business.trim()) errs.business = "Business name is required.";
    if (!contact.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) errs.email = "Please enter a valid email.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Step 0 Next: validate, fire partial lead to Formspree, advance
  const handleContactNext = async () => {
    if (!validateContact()) return;
    setSubmitting(true);
    try {
      await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...contact, _subject: "New lead (contact captured)", status: "Contact captured — project details pending" }),
      });
    } catch (_) {}
    setSubmitting(false);
    setStep(1);
  };

  // Last option step Next: send full submission and redirect
  const handleFinalSubmit = async () => {
    setSubmitting(true);
    try {
      await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...contact,
          type: selections.type,
          timeline: selections.timeline,
          budget: selections.budget,
          _subject: "New project request (complete)",
          status: "Complete",
        }),
      });
    } catch (_) {}
    setSubmitting(false);
    setLocation("/bookedin");
  };

  const currentOptionStep = step > 0 ? STEPS[step - 1] : null;

  return (
    <div>
      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i <= step ? "bg-[#00A3E0] w-6" : "bg-white/20 w-3"
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 0 ? (
          /* ── STEP 1: Contact info (fires partial lead on Next) ── */
          <motion.div
            key="contact-step"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-sm uppercase tracking-widest text-[#00A3E0] mb-3 font-bold">
              Step 1 of {totalSteps}
            </p>
            <h3 className="text-2xl font-black text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
              First, how do we reach you?
            </h3>
            <p className="text-base text-gray-400 mb-6">No cost and no commitment to begin.</p>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your name *"
                  value={contact.name}
                  onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                  className={`w-full px-4 py-4 rounded-xl bg-white/5 border text-white placeholder:text-gray-500 text-base focus:outline-none focus:border-[#00A3E0] transition-colors ${errors.name ? "border-red-500" : "border-white/10"}`}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Business / organization *"
                  value={contact.business}
                  onChange={(e) => setContact((c) => ({ ...c, business: e.target.value }))}
                  className={`w-full px-4 py-4 rounded-xl bg-white/5 border text-white placeholder:text-gray-500 text-base focus:outline-none focus:border-[#00A3E0] transition-colors ${errors.business ? "border-red-500" : "border-white/10"}`}
                />
                {errors.business && <p className="text-red-400 text-sm mt-1">{errors.business}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email address *"
                  value={contact.email}
                  onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                  className={`w-full px-4 py-4 rounded-xl bg-white/5 border text-white placeholder:text-gray-500 text-base focus:outline-none focus:border-[#00A3E0] transition-colors ${errors.email ? "border-red-500" : "border-white/10"}`}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Best phone number (optional)"
                  value={contact.phone}
                  onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                  className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 text-base focus:outline-none focus:border-[#00A3E0] transition-colors"
                />
              </div>
              <button
                onClick={handleContactNext}
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-black text-base uppercase tracking-widest transition-all duration-200 bg-[#00A3E0] hover:bg-[#0082B3] text-white shadow-[0_0_20px_rgba(0,163,224,0.3)] disabled:opacity-70"
              >
                {submitting ? "Saving…" : <>Next <ArrowRight className="w-4 h-4" /></>}
              </button>
              <p className="text-center text-sm text-gray-500">No cost and no commitment to begin. We'll reply within one business day.</p>
            </div>
          </motion.div>
        ) : (
          /* ── STEPS 2-4: Option selection ── */
          <motion.div
            key={`step-${step}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-sm uppercase tracking-widest text-[#00A3E0] mb-3 font-bold">
              Step {step + 1} of {totalSteps}
            </p>
            <h3 className="text-2xl font-black text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
              {currentOptionStep!.question}
            </h3>
            <p className="text-base text-gray-400 mb-6">{currentOptionStep!.hint}</p>
            <div className="space-y-3">
              {currentOptionStep!.options.map((opt) => {
                const selected = selections[currentOptionStep!.id] === opt.label;
                return (
                  <button
                    key={opt.label}
                    onClick={() => selectOption(currentOptionStep!.id, opt.label)}
                    className={`w-full text-left flex items-center gap-4 px-5 py-5 rounded-xl border transition-all duration-200 ${
                      selected
                        ? "border-[#00A3E0] bg-[#00A3E0]/15 text-white"
                        : "border-white/10 bg-white/5 text-gray-300 hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    <span className="text-2xl">{opt.emoji}</span>
                    <span className="font-semibold text-base">{opt.label}</span>
                    {selected && <CheckCircle className="w-5 h-5 text-[#00A3E0] ml-auto" />}
                  </button>
                );
              })}
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setStep((s) => s - 1)}
                className="flex items-center gap-2 px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-white/30 font-semibold text-base transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              {step < STEPS.length ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!selections[currentOptionStep!.id]}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-black text-base uppercase tracking-widest transition-all duration-200 ${
                    selections[currentOptionStep!.id]
                      ? "bg-[#00A3E0] hover:bg-[#0082B3] text-white shadow-[0_0_20px_rgba(0,163,224,0.3)]"
                      : "bg-white/8 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Next <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleFinalSubmit}
                  disabled={!selections[currentOptionStep!.id] || submitting}
                  className={`flex-1 flex items-center justify-center gap-2 py-5 rounded-xl font-black text-base uppercase tracking-widest transition-all duration-200 ${
                    selections[currentOptionStep!.id] && !submitting
                      ? "bg-[#00A3E0] hover:bg-[#0082B3] text-white shadow-[0_0_20px_rgba(0,163,224,0.3)]"
                      : "bg-white/8 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {submitting ? "Sending…" : <>Start My Project <ArrowRight className="w-5 h-5" /></>}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Welcome() {
  return (
    <div className="relative min-h-screen text-white" style={{ background: "#080d14" }}>
      <ForceFieldBackground
        hue={195}
        saturation={90}
        spacing={20}
        forceStrength={15}
        magnifierRadius={200}
        className="fixed inset-0"
      />
      <ShootingStars />
      <div className="relative z-10">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="px-4 pt-8 pb-2 text-center">
          <div className="max-w-2xl mx-auto">
            <motion.img
              src={logoImg}
              alt="TRI Creative Group"
              className="h-10 mx-auto mb-4 opacity-90"
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
              <span className="text-[#00A3E0]">Represented Proudly.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
              style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal", fontWeight: 400 }}
            >
              Tell us what you're building.{" "}
              <strong className="text-white">We'll handle the rest</strong> — design included.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              onClick={() => document.getElementById("project-form")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00A3E0] hover:bg-[#0082B3] text-white font-black text-base uppercase tracking-widest shadow-[0_0_30px_rgba(0,163,224,0.4)] hover:shadow-[0_0_40px_rgba(0,163,224,0.6)] transition-all duration-200 mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </section>

        {/* ── VSL VIDEO ─────────────────────────────────────────────────────── */}
        <section className="px-4 pb-3">
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

        {/* ── PRODUCT MARQUEE ───────────────────────────────────────────────── */}
        <section className="bg-white border-y border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.10)]">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-gray-400 pt-5 pb-1">
            Trusted By
          </p>
          <div className="relative overflow-hidden py-4">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-white to-transparent" />
            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-white to-transparent" />
            <div className="flex gap-10 animate-[marquee_30s_linear_infinite] [animation-direction:reverse] whitespace-nowrap w-max items-center">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
                <div key={i} className="flex-shrink-0 w-44 h-20 flex items-center justify-center">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORM ──────────────────────────────────────────────────────────── */}
        <section id="project-form" className="px-4 pt-3 pb-12">
          <div className="max-w-md mx-auto">
            <h2
              className="text-3xl font-black text-white mb-6 text-center"
              style={{ fontFamily: "var(--font-display)", textTransform: "none" }}
            >
              Start Your Project
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-[0_0_60px_rgba(0,163,224,0.1)]">
              <ProjectForm />
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
        <motion.section
          className="px-4 py-16 border-t border-white/5"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-12 text-center" style={{ fontFamily: "var(--font-display)", textTransform: "none" }}>
              How It Works —{" "}
              <span className="text-[#00A3E0]">From Idea to Delivered</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  n: "1",
                  title: "Tell Us What You Need",
                  body: "Share your idea, event, or budget — even if it's just \"we need something for homecoming.\" That's enough to get started.",
                },
                {
                  n: "2",
                  title: "We Build Your Presentation",
                  body: "We come back with product samples, mockups with your logo, and clear pricing. You see exactly what you're getting before you spend a dollar.",
                },
                {
                  n: "3",
                  title: "You Approve",
                  body: "Love it? Give us the green light. Want changes? We revise until it's right.",
                },
                {
                  n: "4",
                  title: "We Produce & Deliver",
                  body: "We handle production, quality checks, and shipping straight to your door. That simple.",
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-5 items-start bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#00A3E0]/30 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00A3E0]/15 border border-[#00A3E0]/40 flex items-center justify-center">
                    <span className="text-[#00A3E0] font-black text-base" style={{ fontFamily: "var(--font-display)" }}>{step.n}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white mb-1" style={{ fontFamily: "var(--font-display)", textTransform: "none", letterSpacing: "normal" }}>{step.title}</h3>
                    <p className="text-base text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

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
            <p className="text-base text-gray-500 italic mt-6">
              From city government to local favorites — the names you know already carry our work.
            </p>
          </div>
        </motion.section>

        {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
        <motion.section
          className="px-4 py-16 border-t border-white/5"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-10 text-center" style={{ fontFamily: "var(--font-display)", textTransform: "none" }}>
              They Didn't Just Get Products.{" "}
              <span className="text-[#00A3E0]">They Got Their Time Back.</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
              {/* Left — testimonial cards */}
              <div>
                <div className="space-y-4 mb-10">
                  {testimonials.map((t) => (
                    <div key={t.quote} className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <p className="text-white font-black text-base mb-2" style={{ fontFamily: "var(--font-display)", textTransform: "none", letterSpacing: "normal" }}>"{t.quote}"</p>
                      <p className="text-gray-400 text-base leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>{t.body}</p>
                      <p className="text-sm text-gray-500">— {t.author}, {t.title}, {t.org}</p>
                    </div>
                  ))}
                </div>
                <p className="text-base text-gray-400 italic" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>
                  The story's always the same: less juggling, better product, and a brand that keeps working long after the event ends.
                </p>
              </div>

              {/* Right — two product GIFs */}
              <div className="flex flex-col gap-6">
                {/* Top — Apparel Print */}
                <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                  <img src={hatGif} alt="Apparel Print" className="w-full object-cover" />
                  <div className="px-4 py-3">
                    <p className="text-xs font-bold text-[#00A3E0] uppercase tracking-widest">Apparel Print</p>
                    <p className="text-sm text-gray-400 mt-0.5" style={{ textTransform: "none" }}>Screen print · Embroidery · Vinyl</p>
                  </div>
                </div>
                {/* Bottom — Custom Solutions */}
                <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                  <img src={handSanitizerGif} alt="Custom Solutions" className="w-full object-cover" />
                  <div className="px-4 py-3">
                    <p className="text-xs font-bold text-[#00A3E0] uppercase tracking-widest">Custom Solutions</p>
                    <p className="text-sm text-gray-400 mt-0.5" style={{ textTransform: "none" }}>Promo · Merch · Executive gifts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <motion.section
          className="px-4 py-16 border-t border-white/5"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-10 text-center" style={{ fontFamily: "var(--font-display)", textTransform: "none" }}>
              A Few Things <span className="text-[#00A3E0]">People Ask</span>
            </h2>
            <div className="space-y-3 mb-16">
              {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </div>
        </motion.section>

        {/* ── THE SOLUTION ──────────────────────────────────────────────────── */}
        <motion.section
          className="px-4 py-16 border-t border-white/5"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-10 text-center" style={{ fontFamily: "var(--font-display)", textTransform: "none" }}>
              One Trusted Partner for <span className="text-[#00A3E0]">Everything You Need</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {solutions.map((s) => (
                <div key={s.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#00A3E0]/40 transition-colors">
                  <s.icon className="w-6 h-6 text-[#00A3E0] mb-3" />
                  <h3 className="text-base font-black text-white mb-2" style={{ fontFamily: "var(--font-display)", textTransform: "none", letterSpacing: "normal" }}>{s.title}</h3>
                  <p className="text-base text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── PICTURE IT DONE ───────────────────────────────────────────────── */}
        <motion.section
          className="px-4 py-16 border-t border-white/5"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6" style={{ fontFamily: "var(--font-display)", textTransform: "none" }}>
              Picture It <span className="text-[#00A3E0]">Done</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>
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
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6" style={{ fontFamily: "var(--font-display)", textTransform: "none" }}>
              You Won't Be <span className="text-[#00A3E0]">Juggling This Alone</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>
              <p>No five vendors. No five logins. No rep learning your brand for the first time on a phone call.</p>
              <p>One partner who already gets it. One process. One person who knows your name and your deadline.</p>
              <p className="text-white font-semibold">We've done this long enough to make it feel easy — because the simplest part of your week should be the part you hand to us.</p>
            </div>
          </div>
        </motion.section>

        {/* ── RESULTS ───────────────────────────────────────────────────────── */}
        <motion.section
          className="px-4 py-16 border-t border-white/5"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-10" style={{ fontFamily: "var(--font-display)", textTransform: "none" }}>
              What You <span className="text-[#00A3E0]">Walk Away With</span>
            </h2>
            <div className="space-y-4">
              {results.map((r) => (
                <div key={r} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-4">
                  <CheckCircle className="w-5 h-5 text-[#00A3E0] shrink-0" />
                  <span className="text-white text-base font-semibold text-left" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── BRAND / EMOTIONAL ─────────────────────────────────────────────── */}
        <motion.section
          className="px-4 py-16 border-t border-white/5"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6" style={{ fontFamily: "var(--font-display)", textTransform: "none" }}>
              More Than Merch —{" "}
              <span className="text-[#00A3E0]">A Lasting Impression</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>
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
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6" style={{ fontFamily: "var(--font-display)", textTransform: "none" }}>
              Built Here. For the People Who{" "}
              <span className="text-[#00A3E0]">Built Here.</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>
              Tri Creative Group is a Nashville company. The businesses we serve are the ones that made this city what it is — and we think those businesses deserve a partner who's part of the same streets.
              <br /><br />
              We don't make throwaways. We make the kind of thing people <strong className="text-white">keep, use, and remember.</strong> Because a product that lasts is a message that lasts.
            </p>
          </div>
        </motion.section>

        {/* ── FOOTER ────────────────────────────────────────────────────────── */}
        <footer className="px-4 py-10 border-t border-white/10 text-center">
          <img src={logoImg} alt="TRI Creative Group" className="h-10 mx-auto mb-4 opacity-70" />
          <p className="text-base font-bold text-white mb-1">Tri Creative Group — Nashville, TN</p>
          <p className="text-sm text-gray-500 mb-1">Info@TRIcreativegroup.com · 615.850.5260</p>
          <p className="text-sm text-gray-700 mt-3">
            &copy; {new Date().getFullYear()} Tri Creative Group. All rights reserved.
          </p>
        </footer>

      </div>
    </div>
  );
}
