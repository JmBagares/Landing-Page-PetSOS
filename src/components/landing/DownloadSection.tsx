import { QRCodeSVG } from "qrcode.react";
import { Download, Smartphone, ScanLine, PawPrint } from "lucide-react";
import { motion } from "framer-motion";

const APK_PATH = "/application-35acb4f9-cc35-45d1-bfa2-ef62339da785.apk";

export function DownloadSection() {
  // Build a full URL at runtime so the QR code always points to the correct host
  const apkUrl = typeof window !== "undefined"
    ? `${window.location.origin}${APK_PATH}`
    : APK_PATH;

  return (
    <section id="download" className="relative py-24 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.05]" aria-hidden>
        <PawPrint className="absolute top-12 left-[10%] h-48 w-48 rotate-12" />
        <PawPrint className="absolute bottom-8 right-[8%] h-36 w-36 -rotate-[20deg]" />
      </div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[120px]" aria-hidden />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-[100px]" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-200">
              <Smartphone className="h-3.5 w-3.5" />
              Download
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Get PetSOS on
              <br />
              your phone <span className="text-blue-200">today.</span>
            </h2>
            <p className="mt-5 text-lg text-blue-100/80 max-w-lg leading-relaxed">
              Scan the QR code with your phone camera to download the PetSOS app.
              Available for Android devices. Start reporting and rescuing animals in
              your community right away.
            </p>

            {/* Direct download button */}
            <a
              href={APK_PATH}
              download
              className="mt-8 inline-flex items-center gap-2.5 rounded-xl bg-white px-7 py-4 text-base font-bold text-blue-700 shadow-xl shadow-blue-900/30 transition-all hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <Download className="h-5 w-5" />
              Download APK
              <span className="ml-1 text-sm font-medium text-blue-400">(Android)</span>
            </a>

            <p className="mt-4 text-sm text-blue-200/60">
              * You may need to allow "Install from unknown sources" in your phone settings.
            </p>
          </motion.div>

          {/* QR Code column */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow behind QR */}
              <div className="absolute -inset-6 bg-white/10 rounded-3xl blur-2xl" aria-hidden />

              <div className="relative rounded-2xl bg-white p-8 shadow-2xl shadow-blue-900/40">
                {/* QR Code */}
                <div className="rounded-xl overflow-hidden">
                  <QRCodeSVG
                    value={apkUrl}
                    size={220}
                    level="H"
                    bgColor="#ffffff"
                    fgColor="#0f172a"
                    imageSettings={{
                      src: "",
                      height: 0,
                      width: 0,
                      excavate: false,
                    }}
                  />
                </div>

                {/* Label under QR */}
                <div className="mt-5 text-center">
                  <div className="flex items-center justify-center gap-2 text-slate-900">
                    <ScanLine className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-bold">Scan to Download</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    Point your camera at the QR code
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 rounded-full bg-emerald-500 text-white px-3 py-1.5 text-xs font-bold shadow-lg">
                Android APK
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
