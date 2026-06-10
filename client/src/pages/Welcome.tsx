import { useRef, useState, useCallback } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2, VolumeX, Play, Pause, ArrowRight, ArrowLeft, CheckCircle
} from "lucide-react";
import vslVideo from "@assets/0610_1781128078224.mp4";
import logoImg from "@assets/TriCreativeGroup_Logo_White_1768588812953.png";
import { ShootingStars } from "@/components/ShootingStars";
import { ForceFieldBackground } from "@/components/ForceFieldBackground";

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

async function submitProject(formData: FormData): Promise<void> {
  const res = await fetch("https://formspree.io/f/mkoavjwv", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(formData),
  });
  if (!res.ok) throw new Error("Submission failed");
}

function ProjectForm() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ name: "", business: "", email: "", phone: "", notes: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const totalSteps = STEPS.length + 1;

  const selectOption = (stepId: string, label: string) => {
    setSelections((prev) => ({ ...prev, [stepId]: label }));
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
    setLocation("/bookedin");
  };

  const currentOptionStep = STEPS[step];

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
        {step < STEPS.length ? (
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
              {currentOptionStep.question}
            </h3>
            <p className="text-base text-gray-400 mb-6">{currentOptionStep.hint}</p>
            <div className="space-y-3">
              {currentOptionStep.options.map((opt) => {
                const selected = selections[currentOptionStep.id] === opt.label;
                return (
                  <button
                    key={opt.label}
                    onClick={() => selectOption(currentOptionStep.id, opt.label)}
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

            {/* Next / Back */}
            <div className="flex gap-3 mt-6">
              {step > 0 && (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="flex items-center gap-2 px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-white/30 font-semibold text-base transition-all duration-200"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              )}
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={!selections[currentOptionStep.id]}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-black text-base uppercase tracking-widest transition-all duration-200 ${
                  selections[currentOptionStep.id]
                    ? "bg-[#00A3E0] hover:bg-[#0082B3] text-white shadow-[0_0_20px_rgba(0,163,224,0.3)]"
                    : "bg-white/8 text-gray-500 cursor-not-allowed"
                }`}
              >
                Next <ArrowRight className="w-4 h-4" />
              </button>
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
            <p className="text-sm uppercase tracking-widest text-[#00A3E0] mb-3 font-bold">
              Step {totalSteps} of {totalSteps}
            </p>
            <h3 className="text-2xl font-black text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Last step — how do we reach you?
            </h3>
            <p className="text-base text-gray-400 mb-6">No cost and no commitment to begin.</p>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your name *"
                  value={contact.name}
                  onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                  className={`w-full px-4 py-4 rounded-xl bg-white/5 border text-white placeholder:text-gray-500 text-base focus:outline-none focus:border-[#00A3E0] transition-colors ${
                    errors.name ? "border-red-500" : "border-white/10"
                  }`}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Business / organization *"
                  value={contact.business}
                  onChange={(e) => setContact((c) => ({ ...c, business: e.target.value }))}
                  className={`w-full px-4 py-4 rounded-xl bg-white/5 border text-white placeholder:text-gray-500 text-base focus:outline-none focus:border-[#00A3E0] transition-colors ${
                    errors.business ? "border-red-500" : "border-white/10"
                  }`}
                />
                {errors.business && <p className="text-red-400 text-sm mt-1">{errors.business}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email address *"
                  value={contact.email}
                  onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                  className={`w-full px-4 py-4 rounded-xl bg-white/5 border text-white placeholder:text-gray-500 text-base focus:outline-none focus:border-[#00A3E0] transition-colors ${
                    errors.email ? "border-red-500" : "border-white/10"
                  }`}
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
              <div>
                <input
                  type="text"
                  placeholder="Anything else? A logo, an event date, a wild idea… (optional)"
                  value={contact.notes}
                  onChange={(e) => setContact((c) => ({ ...c, notes: e.target.value }))}
                  className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 text-base focus:outline-none focus:border-[#00A3E0] transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-5 rounded-xl bg-[#00A3E0] hover:bg-[#0082B3] text-white font-black text-base uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {submitting ? "Sending…" : <>Start My Project <ArrowRight className="w-5 h-5" /></>}
              </button>
              <p className="text-center text-sm text-gray-500">No cost and no commitment to begin. We'll reply within one business day.</p>
            </form>

            {/* Back button */}
            <button
              onClick={() => setStep((s) => s - 1)}
              className="mt-4 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
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
