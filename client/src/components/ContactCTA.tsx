import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function ContactCTA() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mkoavjwv", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.section
      className="border-t border-white/10 mt-8"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">

          {/* Left — contact info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              LET'S START A{" "}
              <span className="text-primary block">CONVERSATION</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10 max-w-sm">
              Have questions? Need a quote? We're here to help you bring your vision to life. Fill out the form or reach out directly.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-white mb-0.5">Phone</p>
                  <p className="text-primary text-lg font-bold">615.850.5260</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-white mb-0.5">Email</p>
                  <p className="text-primary text-lg font-bold">Info@TRIcreativegroup.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-white mb-0.5">Service Area</p>
                  <p className="text-white text-lg font-bold">Serving organizations nationwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-lg font-black text-white uppercase tracking-widest mb-6">Request a Quote</h3>

            {status === "sent" ? (
              <p className="text-primary font-semibold text-center py-8">
                Message sent! We'll be in touch shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    data-testid="input-contact-name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    data-testid="input-contact-email"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Message</label>
                  <textarea
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    rows={5}
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    data-testid="input-contact-message"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-xs">Something went wrong — please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-primary text-black font-black uppercase tracking-widest py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-60"
                  data-testid="button-send-request"
                >
                  {status === "sending" ? "Sending…" : <><Send className="w-4 h-4" /> Send Request</>}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </motion.section>
  );
}
