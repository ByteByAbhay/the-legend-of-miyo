
import React, { useState, useEffect } from 'react';
import MiyoImage from './MiyoImage';

const subtitles = [
  "Visionary chhe pan alarm ne ignore kare",
  "Kal thi pakku change thase",
  "Gym nu subscription chhe pan gym nathi",
  "Responsibility thi dur, confidence ma full"
];

const Home: React.FC = () => {
  const [subtitle, setSubtitle] = useState('');
  const [subIdx, setSubIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFull = subtitles[subIdx];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIdx < currentFull.length) {
          setSubtitle(currentFull.substring(0, charIdx + 1));
          setCharIdx(charIdx + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIdx > 0) {
          setSubtitle(currentFull.substring(0, charIdx - 1));
          setCharIdx(charIdx - 1);
        } else {
          setIsDeleting(false);
          setSubIdx((prev) => (prev + 1) % subtitles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, subIdx]);

  return (
    <section className="min-h-screen pt-20 pb-10 flex flex-col items-center px-4 overflow-hidden bg-orange-50">
      <div className="relative mb-8 mt-10">
        <div className="animate-float">
           <MiyoImage className="w-56 h-56 md:w-80 md:h-80 rounded-full" />
        </div>
        <div className="absolute -bottom-4 -right-4 bg-yellow-400 border-2 border-black px-4 py-1 font-bold rotate-12 text-sm text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Real Legend!
        </div>
      </div>

      <h1 className="text-5xl md:text-7xl font-bungee text-center text-blue-600 drop-shadow-lg mb-2">
        MITUL (MIYO)
      </h1>
      
      <div className="h-12 flex items-center justify-center mb-10">
        <p className="text-lg md:text-xl font-bold text-pink-500 text-center">
          {subtitle}<span className="animate-pulse">|</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
        {[
          { label: "Promises karela", val: "9999", color: "bg-red-400" },
          { label: "Promises rakhela", val: "3", color: "bg-green-400" },
          { label: "Alarms ignore karela", val: "Infinite", color: "bg-purple-400" }
        ].map((stat, i) => (
          <div key={i} className={`${stat.color} border-4 border-black p-4 flex flex-col items-center text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-transform`}>
            <span className="text-3xl font-bungee">{stat.val}</span>
            <span className="text-sm font-bold uppercase">{stat.label}</span>
          </div>
        ))}
      </div>

      <button className="mt-12 bg-blue-600 text-white font-bungee px-8 py-4 rounded-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all text-xl">
        Sachai Joi Lo ↓
      </button>
    </section>
  );
};

export default Home;
