import { PawPrint, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const cols = [
  { title: "App Features", links: ["Quick Report", "Find Vets", "AI-Help", "Community Feed"] },
  { title: "Report Types", links: ["Missing Pets", "Found Animals", "Abused Animals", "Strays & Injured"] },
  { title: "For Volunteers", links: ["Register", "Rescue Dashboard", "Push Alerts", "Track Progress"] },
];

export function Footer() {
  return (
    <footer id="about" className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <a href="#" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/25">
                <PawPrint className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              <span className="text-xl font-bold">
                Pet<span className="text-blue-400">SOS</span>
              </span>
            </a>
            <p className="mt-5 text-slate-400 max-w-sm leading-relaxed">
              A community-driven animal rescue platform connecting users, volunteers,
              and veterinary clinics to help animals in need through AI-assisted
              reporting and real-time coordination.
            </p>
            <div className="mt-6 flex gap-2.5">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-400 transition-all hover:bg-blue-600 hover:border-blue-600 hover:text-white"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">{c.title}</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-500">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-blue-400 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1" />
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} PetSOS. Community Animal Rescue.</p>
          <p className="text-slate-600">PetSOS Animal Rescue Management System</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
