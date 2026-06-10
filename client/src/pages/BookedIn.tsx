import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Plus, Minus, Gift, Trophy, Megaphone } from "lucide-react";
import logoImg from "@assets/TriCreativeGroup_Logo_White_1768588812953.png";
import clientLogosImg from "@assets/client-logos_1768588141832-LlhLCFRX_1781129145911.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ─── FAQ Item ────────────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-white/10 rounded-xl overflow-hidden cursor-pointer"
      onClick={() => setOpen((o) => !o)}
    >
      <div className="flex items-center justify-between px-6 py-4 bg-white/5 hover:bg-white/8 transition-colors">
        <span className="text-base font-semibold text-white pr-4" style={{ fontFamily: "var(--font-body)" }}>
          {q}
        </span>
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

// ─── Data ────────────────────────────────────────────────────────────────────

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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BookedIn() {
  return (
    <div className="text-white">

        {/* ── CONFIRMATION ──────────────────────────────────────────────────── */}
        <section className="px-4 pt-20 pb-16 text-center">
          <div className="max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={logoImg}
                alt="TRI Creative Group"
                className="h-12 mx-auto mb-10 opacity-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="w-20 h-20 rounded-full bg-[#00A3E0]/15 border border-[#00A3E0]/40 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-[#00A3E0]" />
              </div>
              <h1
                className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight"
                style={{ fontFamily: "var(--font-display)", textTransform: "none", letterSpacing: "-0.02em" }}
              >
                You're Booked In.
              </h1>
              <p className="text-xl text-[#00A3E0] font-semibold mb-4" style={{ fontFamily: "var(--font-body)", textTransform: "none" }}>
                A representative will be in touch with you shortly.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "var(--font-body)", textTransform: "none" }}>
                We've got your project details. Someone from our team will reach out within one business day with a few directions to consider — design included.
              </p>
              <p className="text-base text-gray-500 mt-4 italic">
                Got a logo or inspiration handy? Reply to our email and send it over — it'll give us a head start.
              </p>
            </motion.div>
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
                  <p className="text-gray-400 text-base leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>
                    {t.body}
                  </p>
                  <p className="text-sm text-gray-500">
                    — {t.author}, {t.title}, {t.org}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center text-base text-gray-400 italic" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>
              The story's always the same: less juggling, better product, and a brand that keeps working long after the event ends.
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
                  <p className="text-base text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>
                    {s.body}
                  </p>
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
            <h2
              className="text-2xl md:text-3xl font-black text-white mb-6"
              style={{ fontFamily: "var(--font-display)", textTransform: "none" }}
            >
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
            <h2
              className="text-2xl md:text-3xl font-black text-white mb-6"
              style={{ fontFamily: "var(--font-display)", textTransform: "none" }}
            >
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
                  <span className="text-white text-base font-semibold text-left" style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "normal" }}>
                    {r}
                  </span>
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
            <h2
              className="text-2xl md:text-3xl font-black text-white mb-6"
              style={{ fontFamily: "var(--font-display)", textTransform: "none" }}
            >
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
            <h2
              className="text-2xl md:text-3xl font-black text-white mb-6"
              style={{ fontFamily: "var(--font-display)", textTransform: "none" }}
            >
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
        <footer className="px-4 py-12 border-t border-white/10 text-center">
          <img src={logoImg} alt="TRI Creative Group" className="h-10 mx-auto mb-4 opacity-70" />
          <p className="text-base font-bold text-white mb-1">Tri Creative Group — Nashville, TN</p>
          <p className="text-sm text-gray-500 mb-3">
            Info@TRIcreativegroup.com · 615.850.5260
          </p>
          <p className="text-sm text-gray-600 italic mb-4">
            Proudly local. Promotional products that leave a message and last.
          </p>
          <p className="text-sm text-gray-700">
            &copy; {new Date().getFullYear()} Tri Creative Group. All rights reserved.
          </p>
        </footer>

    </div>
  );
}
