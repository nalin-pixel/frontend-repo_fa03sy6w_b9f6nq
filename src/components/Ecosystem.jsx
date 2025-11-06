import React from 'react';
import { motion } from 'framer-motion';

const Node = ({ label, x, y, delay = 0 }) => {
  return (
    <motion.div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative h-20 w-20 rounded-full bg-gradient-to-br from-cyan-500/40 to-fuchsia-500/40 shadow-[0_0_30px_rgba(56,189,248,0.45)] backdrop-blur"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      >
        <span className="pointer-events-none absolute inset-0 -z-0 rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.5),transparent)] blur-xl" />
      </motion.div>
      <div className="mt-3 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90 shadow-[0_0_20px_rgba(168,85,247,0.35)] transition hover:border-cyan-300/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]">
        {label}
      </div>
    </motion.div>
  );
};

const Connector = ({ x1, y1, x2, y2, delay = 0 }) => {
  const path = `M ${x1} ${y1} Q ${(x1 + x2) / 2} ${(y1 + y2) / 2 - 10}, ${x2} ${y2}`;
  return (
    <svg className="pointer-events-none absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.path
        d={path}
        fill="none"
        stroke="url(#grad)"
        strokeWidth="0.3"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.2, delay }}
      />
      <defs>
        <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(34,211,238,0.0)" />
          <stop offset="50%" stopColor="rgba(34,211,238,0.7)" />
          <stop offset="100%" stopColor="rgba(217,70,239,0.0)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default function Ecosystem() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-[radial-gradient(900px_600px_at_20%_10%,rgba(99,102,241,0.15),transparent),radial-gradient(900px_600px_at_80%_80%,rgba(56,189,248,0.15),transparent)]">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(/ecosystem_network.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />

      <div className="relative z-10 h-[600px] w-full max-w-5xl">
        {/* Connectors */}
        <Connector x1={20} y1={50} x2={50} y2={30} delay={0.1} />
        <Connector x1={80} y1={55} x2={50} y2={30} delay={0.3} />
        <Connector x1={50} y1={80} x2={50} y2={30} delay={0.5} />
        <Connector x1={50} y1={30} x2={50} y2={50} delay={0.7} />

        {/* Nodes */}
        <Node label="Customer" x={20} y={50} delay={0.2} />
        <Node label="Agent" x={80} y={55} delay={0.4} />
        <Node label="Vendor" x={50} y={80} delay={0.6} />
        <Node label="Supervisor" x={50} y={30} delay={0.8} />
      </div>

      <div className="relative z-10 mt-10 text-center">
        <h2 className="bg-gradient-to-r from-cyan-200 to-fuchsia-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">Intelligent Ecosystem</h2>
        <p className="mx-auto mt-2 max-w-2xl text-blue-100/80">Connected portals with adaptive routing ensure the right data reaches the right minds—securely, instantly, and visibly.</p>
      </div>
    </section>
  );
}
