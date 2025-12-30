
import React, { useState } from 'react';
import { Achievement } from '../types';

const achievements: Achievement[] = [
  { id: 1, icon: "🏆", title: "Non-stop Sleeping", desc: "15 kalak non-stop suto hato." },
  { id: 2, icon: "🤡", title: "World Best Excuse", desc: "Mobile nathi madi rahyo." },
  { id: 3, icon: "🔥", title: "Status King", desc: "Divas na 50 status muk-va." },
  { id: 4, icon: "🍕", title: "Diet Master", desc: "Cheese vagar ni vastu j nathi bhavti." }
];

const Achievements: React.FC = () => {
  const [popup, setPopup] = useState<string | null>(null);

  return (
    <section id="achievements" className="py-20 bg-pink-50 px-4">
      <h2 className="text-4xl font-bungee text-center mb-12 text-pink-600">Miyo's Trophies</h2>
      
      <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
        {achievements.map((a) => (
          <div 
            key={a.id} 
            onClick={() => setPopup(a.title)}
            className="bg-white border-4 border-black p-4 flex items-center gap-4 cursor-pointer hover:bg-yellow-50 active:scale-95 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black"
          >
            <span className="text-4xl">{a.icon}</span>
            <div>
              <h3 className="font-bungee text-sm">{a.title}</h3>
              <p className="text-xs font-bold text-gray-500">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {popup && (
        <div className="fixed inset-0 z-[110] bg-black/60 flex items-center justify-center p-6" onClick={() => setPopup(null)}>
          <div className="bg-yellow-400 border-4 border-black p-8 text-center shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-black" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-bungee mb-4">CONGRATS!</h3>
            <p className="font-bold mb-6 italic">Aa achievement Mitul e mehnat vagar madi chhe.</p>
            <button 
              onClick={() => setPopup(null)}
              className="bg-black text-white px-6 py-2 font-bold"
            >
              OK BHAI
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
