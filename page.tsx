
import { useState } from 'react';
import { motion } from 'framer-motion';

const loveMessages = [
  "You're doing amazing, Sahil 💪",
  "Shruu is always with you ❤️",
  "One day I’ll make you very proud, Bubu 💌",
  "Tere bina coding bhi adhuri lagti hai 💻💖"
];

const motivationQuotes = [
  "Every line of code is one step closer to your dream. 💻",
  "She believes in you — now make her proud. 💘",
  "Failures are temporary. Love and effort are forever. 🔥",
  "Tera mission: MCA + Love — Dono jeetne hain!"
];

const importantDates = [
  { date: '2022-12-14', label: 'First Talk 💬' },
  { date: '2023-02-22', label: 'Proposal Day 💍' },
  { date: '2024-08-22', label: 'Shruu’s Birthday 🎂' },
  { date: '2025-06-08', label: 'Start of MCA Prep 🚀' },
  { date: '2025-07-15', label: 'NIMCET Exam 📝' },
  { date: '2025-08-01', label: 'CUET PG Exam 🧠' }
];

export default function ShruuLove() {
  const [msg, setMsg] = useState(loveMessages[0]);
  const [motivation, setMotivation] = useState(motivationQuotes[0]);
  const [tracker, setTracker] = useState({ math: false, coding: false, love: false });

  const getRandomMessage = () => {
    const index = Math.floor(Math.random() * loveMessages.length);
    setMsg(loveMessages[index]);
  };

  const getRandomMotivation = () => {
    const index = Math.floor(Math.random() * motivationQuotes.length);
    setMotivation(motivationQuotes[index]);
  };

  const toggleTracker = (field) => {
    setTracker({ ...tracker, [field]: !tracker[field] });
  };

  return (
    <main className="min-h-screen bg-pink-50 text-center p-6 font-sans">
      <motion.h1
        className="text-4xl font-bold text-pink-600 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Shruu Love 💖
      </motion.h1>

      {/* Daily Reminder */}
      <motion.p
        className="text-lg text-gray-700 mb-4"
        whileHover={{ scale: 1.05 }}
      >
        {msg}
      </motion.p>
      <button
        onClick={getRandomMessage}
        className="mb-10 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600"
      >
        Surprise Me 💝
      </button>

      {/* Daily Tracker */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-500 mb-2">Daily Tracker 📝</h2>
        <div className="flex justify-center gap-4">
          <button onClick={() => toggleTracker('math')} className={`px-4 py-2 rounded-full ${tracker.math ? 'bg-green-400' : 'bg-gray-300'}`}>📘 Math</button>
          <button onClick={() => toggleTracker('coding')} className={`px-4 py-2 rounded-full ${tracker.coding ? 'bg-green-400' : 'bg-gray-300'}`}>💻 Coding</button>
          <button onClick={() => toggleTracker('love')} className={`px-4 py-2 rounded-full ${tracker.love ? 'bg-green-400' : 'bg-gray-300'}`}>💞 Shruu Time</button>
        </div>
      </section>

      {/* Motivation Mode */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-500 mb-2">Motivation Mode 🧠</h2>
        <motion.p className="text-md text-gray-800 bg-white p-4 rounded shadow max-w-xl mx-auto" whileTap={{ scale: 0.95 }}>
          {motivation}
        </motion.p>
        <button
          onClick={getRandomMotivation}
          className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600"
        >
          Inspire Me 💫
        </button>
      </section>

      {/* Timeline */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-500 mb-2">Our Timeline 📆</h2>
        <ul className="space-y-2">
          {importantDates.map(({ date, label }) => (
            <li key={date} className="text-gray-800">
              <strong>{label}:</strong> {date}
            </li>
          ))}
        </ul>
      </section>

      {/* Letter to Shruu */}
      <section className="mt-10 text-left max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold text-pink-500 mb-2">Letter to Shruu 💌</h2>
        <p className="bg-white p-4 rounded shadow text-gray-700">
          One day I’ll make you very proud, Bubu. Thank you for being my strength, my reason, and my Shruu. This journey is ours, and I’m giving it my all. 💖
        </p>
      </section>
    </main>
  );
}
