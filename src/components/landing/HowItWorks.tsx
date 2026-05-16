import { Camera, Send, Users } from "lucide-react";
import { motion, Variants } from "framer-motion";

const steps = [
  {
    n: "01",
    icon: Camera,
    title: "Spot & Snap",
    desc: "See a stray, injured, or abandoned animal? Open PetSOS, take a photo, and add a brief description of the situation and location.",
  },
  {
    n: "02",
    icon: Send,
    title: "AI Validates & Prioritizes",
    desc: "Our AI checks that the photo is valid, analyzes the description, and assigns a priority level. Your GPS location is auto-tagged to the report.",
  },
  {
    n: "03",
    icon: Users,
    title: "Volunteers Respond",
    desc: "The report appears on the community feed. Nearby volunteers receive push notifications, accept the rescue, and update progress in real time.",
  },
];

export function HowItWorks() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="how" className="relative py-24 md:py-32 bg-slate-900 text-white overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Blue glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 relative">
        <motion.div 
          className="max-w-2xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400">
            How It Works
          </motion.span>
          <motion.h2 variants={itemVariants} className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
            Three steps. <span className="text-blue-400">One rescue.</span>
          </motion.h2>
        </motion.div>

        <motion.div 
          className="mt-14 grid md:grid-cols-3 gap-6 relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                variants={itemVariants}
                className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-8 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <span className="text-5xl font-extrabold text-white/[0.06]">{s.n}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-slate-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
