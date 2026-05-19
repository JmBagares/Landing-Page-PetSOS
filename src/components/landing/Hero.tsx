import { ArrowRight, Siren, PawPrint } from "lucide-react";
import DotGrid from "@/components/ui/DotGrid";
import phoneMockup from "@/assets/phone-mockup.png";
import { motion, Variants } from "framer-motion";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-0 lg:pb-0 lg:min-h-screen lg:flex lg:items-center bg-slate-50/50">
      {/* ── DotGrid interactive background ── */}
      {/* Opacity increased, removed opaque gradients, set z-index to stay under text but visible */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-auto">
        <DotGrid
          dotSize={6}
          gap={32}
          baseColor="#cbd5e1" /* slate-300 */
          activeColor="#2563eb" /* blue-600 */
          proximity={150}
          shockRadius={250}
          shockStrength={4}
          resistance={600}
          returnDuration={1.2}
        />
      </div>

      {/* Decorative paw prints - kept behind the grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.04]" aria-hidden>
        <PawPrint className="absolute top-16 left-[8%] h-40 w-40 text-blue-600 rotate-12" />
        <PawPrint className="absolute top-36 right-[12%] h-28 w-28 text-emerald-600 -rotate-12" />
        <PawPrint className="absolute bottom-20 left-[30%] h-20 w-20 text-blue-500 rotate-45" />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 pointer-events-none">
        {/* Text column - pointer-events-auto so buttons still work over the grid */}
        <motion.div 
          className="lg:col-span-7 pointer-events-auto"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-white/80 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-[pulse-ring_2.4s_ease-out_infinite]" />
              Community Animal Rescue
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="mt-7 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-slate-900 drop-shadow-sm">
            Report. Rescue.
            <br />
            <span className="text-blue-600">Reunite.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6 max-w-xl text-lg text-slate-700 leading-relaxed font-medium">
            PetSOS is a community-driven mobile app for reporting stray, injured,
            missing, found, or abused animals. Snap a photo, tag your location, and
            AI prioritizes the report — then volunteers and nearby vets can respond.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#download"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-blue-600/30"
            >
              <Siren className="h-5 w-5" />
              Download the App
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.dl variants={containerVariants} className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "Quick", l: "Photo Reports" },
              { v: "AI", l: "Prioritization" },
              { v: "Live", l: "Community Feed" },
            ].map((s) => (
              <motion.div variants={itemVariants} key={s.l} className="text-center sm:text-left">
                <dt className="text-3xl font-extrabold text-slate-900 drop-shadow-sm">{s.v}</dt>
                <dd className="text-xs uppercase tracking-wider text-slate-600 mt-1 font-bold">{s.l}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Phone mockup column */}
        <motion.div 
          className="lg:col-span-5 relative pointer-events-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.6 }}
        >
          {/* Blue glow behind phone */}
          <div
            className="absolute inset-0 -z-10 blur-3xl opacity-50"
            style={{ background: "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.3), transparent 60%)" }}
            aria-hidden
          />
          
          <motion.div 
            className="relative mx-auto max-w-md"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <img
              src={phoneMockup}
              alt="PetSOS app showing the Quick Report camera with GPS location tagging"
              width={800}
              height={1280}
              className="w-full drop-shadow-[0_40px_60px_rgba(15,23,42,0.3)] transition-transform duration-500 hover:scale-[1.03]"
            />
            {/* Floating card - AI Priority */}
            <motion.div 
              className="absolute -left-2 sm:-left-6 top-16 sm:top-24 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 px-3 sm:px-4 py-2 sm:py-3 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
            >
              <p className="text-[10px] uppercase tracking-wider text-blue-600 font-extrabold">AI Priority</p>
              <p className="text-xs sm:text-sm font-bold text-slate-900">Urgency assessed</p>
            </motion.div>

            {/* Floating card - GPS Tagged */}
            <motion.div 
              className="absolute -right-2 sm:-right-4 bottom-24 sm:bottom-32 rounded-xl bg-slate-900/95 backdrop-blur-md text-white px-3 sm:px-4 py-2 sm:py-3 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
            >
              <p className="text-[10px] uppercase tracking-wider text-emerald-400 font-extrabold">GPS Tagged</p>
              <p className="text-xs sm:text-sm font-bold">Location pinned</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
