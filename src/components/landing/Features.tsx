import { Camera, MapPin, MessageSquareText, Search, PawPrint, BookOpen } from "lucide-react";
import { motion, Variants } from "framer-motion";

const features = [
  {
    icon: Camera,
    title: "Quick Photo Report",
    desc: "Snap a photo and add a description. AI validates the image, assesses urgency, and auto-tags your GPS location for accurate reports.",
    lightBg: "bg-blue-50",
    lightText: "text-blue-600",
  },
  {
    icon: PawPrint,
    title: "Missing, Found & Abuse Reports",
    desc: "Report missing pets, found strays, or suspected animal abuse through dedicated report forms with photo evidence and location data.",
    lightBg: "bg-red-50",
    lightText: "text-red-600",
  },
  {
    icon: Search,
    title: "Find Nearby Vets",
    desc: "Locate veterinary clinics near you using GPS. View distance, check if they're open, and get directions or call directly from the app.",
    lightBg: "bg-emerald-50",
    lightText: "text-emerald-600",
  },
  {
    icon: MessageSquareText,
    title: "Community Feed & Forum",
    desc: "View all reported animals on a live community feed with status tracking — open, assigned to a volunteer, or completed rescue.",
    lightBg: "bg-violet-50",
    lightText: "text-violet-600",
  },
  {
    icon: BookOpen,
    title: "AI-Help & Guides",
    desc: "Chat with PetSOS AI for guidance on first aid, rescue steps, and pet care. Access curated guides and tips anytime from the app.",
    lightBg: "bg-amber-50",
    lightText: "text-amber-600",
  },
  {
    icon: MapPin,
    title: "Volunteer Rescue Tracking",
    desc: "Volunteers get push notifications for new reports, accept rescue assignments, and update progress — users can track the status live.",
    lightBg: "bg-sky-50",
    lightText: "text-sky-600",
  },
] as const;

export function Features() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="features" className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div 
          className="max-w-2xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-600">
            Features
          </motion.span>
          <motion.h2 variants={itemVariants} className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Everything you need to <span className="text-blue-600">help animals in need.</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-5 text-lg text-slate-600">
            From quick photo reports to finding nearby vets — PetSOS gives users and volunteers the tools to coordinate animal rescues.
          </motion.p>
        </motion.div>

        {/* Feature cards */}
        <motion.div 
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={itemVariants}
                className="group relative rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div
                  className={`grid h-12 w-12 place-items-center rounded-xl ${f.lightBg} ${f.lightText} transition-colors`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
