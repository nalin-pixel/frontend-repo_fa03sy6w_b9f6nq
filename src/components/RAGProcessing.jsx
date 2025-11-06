import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function RAGProcessing() {
  const { scrollYProgress } = useScroll();
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <div className="mx-auto flex max-w-6xl items-center gap-10 px-6 py-24">
        <div className="relative flex-1">
          <motion.div style={{ y: parallax }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_0_50px_rgba(56,189,248,0.25)]">
            <div className="relative overflow-hidden rounded-xl">
              <img src="/rag_ai.webp" alt="RAG AI" className="h-full w-full object-cover" />
              {/* Scanning holographic lines */}
              <motion.div
                className="pointer-events-none absolute inset-0"
                initial={{ backgroundPosition: '0% 0%' }}
                animate={{ backgroundPosition: ['0% 0%', '0% 200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                style={{
                  backgroundImage:
                    'repeating-linear-gradient( to bottom, rgba(56,189,248,0.0) 0%, rgba(56,189,248,0.35) 2%, rgba(56,189,248,0.0) 4% )',
                  backgroundSize: '100% 50%',
                  mixBlendMode: 'screen',
                }}
              />
              {/* Data stream particles */}
              {[...Array(25)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute h-[2px] w-12 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-60"
                  style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
                  animate={{ x: [ -40, 40 ] }}
                  transition={{ duration: 3 + (i % 5), repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                />
              ))}
            </div>
          </motion.div>
        </div>
        <div className="flex-1">
          <h3 className="bg-gradient-to-r from-cyan-200 to-fuchsia-300 bg-clip-text text-3xl font-semibold text-transparent">Retrieval-Augmented Generation in Action</h3>
          <p className="mt-3 text-blue-100/80">Intellica fuses knowledge bases with live context to craft precise, trustworthy answers. Watch documents transform into instant insight through real-time retrieval and grounded generation.</p>
        </div>
      </div>
    </section>
  );
}
