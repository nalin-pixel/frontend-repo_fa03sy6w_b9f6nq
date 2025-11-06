import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function RefundVision() {
  const { scrollYProgress } = useScroll();
  const zoom = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 to-black">
      <motion.div style={{ scale: zoom }} className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_0_50px_rgba(217,70,239,0.25)]">
            <div className="relative grid h-full grid-cols-2 gap-2 overflow-hidden rounded-xl">
              {/* Left side scanning */}
              <div className="relative">
                <img src="/refund_ai.webp" alt="Refund Scan" className="h-full w-full object-cover" />
                <motion.div
                  className="pointer-events-none absolute inset-0"
                  animate={{ backgroundPosition: ['0% 0%', '0% 100%', '0% 0%'] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom, rgba(168,85,247,0.0), rgba(168,85,247,0.45), rgba(168,85,247,0.0))',
                    backgroundSize: '100% 30%',
                    mixBlendMode: 'screen',
                  }}
                />
              </div>
              {/* Right side approval hologram */}
              <div className="relative flex items-center justify-center bg-black/40">
                <img src="/refund_ai.webp" alt="Refund Result" className="absolute inset-0 h-full w-full object-cover opacity-20" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="relative rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-6 py-4 text-center text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.4)]"
                >
                  <span className="mb-1 block text-xs uppercase tracking-widest text-cyan-200/80">Status</span>
                  <span className="bg-gradient-to-r from-cyan-200 to-fuchsia-300 bg-clip-text text-2xl font-bold text-transparent">Refund Approved</span>
                </motion.div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="bg-gradient-to-r from-cyan-200 to-fuchsia-300 bg-clip-text text-3xl font-semibold text-transparent">Refund Vision AI</h3>
            <p className="mt-3 text-blue-100/80">AI-driven product validation for instant refunds.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
