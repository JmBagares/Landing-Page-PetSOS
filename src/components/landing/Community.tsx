import { ArrowRight, CheckCircle2 } from "lucide-react";
import community from "@/assets/community.jpg";
import { motion } from "framer-motion";

const perks = [
  "Receive push notifications for new rescue reports",
  "Accept and manage rescue assignments",
  "Track and update rescue progress in real time",
  "Coordinate with the community through the forum",
];

export function Community() {
  return (
    <section id="community" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <div
            className="absolute -inset-3 rounded-3xl bg-blue-100/50 -z-10 rotate-[-2deg]"
            aria-hidden
          />
          <img
            src={community}
            alt="A volunteer rescuer helping a stray dog"
            width={1280}
            height={896}
            loading="lazy"
            className="w-full rounded-2xl object-cover shadow-xl aspect-[4/3]"
          />
          {/* Floating stat card */}
          <motion.div 
            className="absolute -bottom-5 -right-3 rounded-xl bg-white border border-slate-200 px-5 py-4 shadow-lg max-w-[220px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          >
            <p className="text-2xl font-extrabold text-slate-900">Open Source</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-1 font-medium">Community-driven platform</p>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-600">
            Volunteers
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Become the reason a paw <span className="text-blue-600">made it home.</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Volunteers are the backbone of PetSOS. When a report is submitted,
            nearby volunteers receive push notifications and can accept rescue
            assignments — updating progress until the animal is safe.
          </p>

          <ul className="mt-8 space-y-3">
            {perks.map((p, i) => (
              <motion.li 
                key={p} 
                className="flex items-center gap-3 text-slate-700"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-medium">{p}</span>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="#volunteer"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-blue-600 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-blue-600/25"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Register as Volunteer
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
