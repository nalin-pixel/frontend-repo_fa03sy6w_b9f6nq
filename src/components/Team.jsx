import React from 'react';
import { motion } from 'framer-motion';

const people = [
  { name: 'Ali Jawad', id: '22f3001825' },
  { name: 'Deepti Gurnani', id: '21f3002204' },
  { name: 'Harsh Mathur', id: '23f1000602' },
  { name: 'Harshita Jain', id: '21f1003224' },
  { name: 'Mayank Singh', id: '23f1000598' },
  { name: 'Rachita Vohra', id: '22f1001847' },
  { name: 'Mohammad Aman', id: '21f3000044' },
  { name: 'Duvvuri Sai Kyvalya', id: '21f1003975' },
];

export default function Team() {
  return (
    <section className="relative bg-neutral-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h3 className="bg-gradient-to-r from-cyan-200 to-fuchsia-300 bg-clip-text text-3xl font-semibold text-transparent">Meet the Visionaries Behind the AI</h3>
          <p className="mt-2 text-blue-100/80">A team of builders crafting human-level support at machine scale.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_40px_rgba(56,189,248,0.18)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20">
                <img src="/team_cards.webp" alt="Team" className="h-full w-full object-cover opacity-70 mix-blend-screen" />
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-xl"
                  animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  style={{
                    backgroundImage: 'radial-gradient(600px 200px at 0% 0%, rgba(56,189,248,0.25), transparent), radial-gradient(600px 200px at 100% 100%, rgba(217,70,239,0.2), transparent)'
                  }}
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-white">{p.name}</h4>
                  <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-cyan-200">Intellica</span>
                </div>
                <p className="mt-1 text-xs text-blue-200/70">{p.id}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-1 rounded-2xl bg-[conic-gradient(from_0deg,rgba(56,189,248,0.2),rgba(217,70,239,0.2),rgba(56,189,248,0.2))] blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
