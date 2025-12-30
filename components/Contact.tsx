
import React, { useState } from 'react';
import MiyoImage from './MiyoImage';

const Contact: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isSent, setIsSent] = useState(false);

  const dodge = () => {
    if (isSent) return;
    const x = Math.random() * 100 - 50;
    const y = Math.random() * 50 - 25;
    setPos({ x, y });
  };

  const handleSend = () => {
    setIsSent(true);
  };

  if (isSent) {
    return (
      <section id="contact" className="py-20 bg-green-50 px-4 text-center text-slate-900">
        <MiyoImage className="w-40 h-40 mx-auto rounded-full mb-6" />
        <h2 className="text-3xl font-bungee text-green-600">SUCCESS!</h2>
        <p className="text-xl font-bold mt-4">Tamaro message successfully ignore kari didho chhe.</p>
        <button 
          onClick={() => { setIsSent(false); setPos({x:0, y:0}); }}
          className="mt-8 bg-black text-white px-8 py-3 font-bold"
        >
          MARI BHUL THAI GAI
        </button>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-slate-100 px-4 text-slate-900">
      <h2 className="text-4xl font-bungee text-center mb-12">Contact Miyo</h2>
      
      <div className="max-w-md mx-auto bg-white border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
        <div className="space-y-4">
          <div>
            <label className="block font-bold mb-1 text-black">Taru Naam</label>
            <input 
              type="text" 
              className="w-full border-2 border-black p-2 outline-none bg-white text-black" 
              placeholder="Eg. Jignesh" 
            />
          </div>
          <div>
            <label className="block font-bold mb-1 text-black">Message</label>
            <textarea 
              className="w-full border-2 border-black p-2 outline-none h-24 bg-white text-black" 
              placeholder="Kem reply nathi aapto?"
            ></textarea>
          </div>
          
          <div className="pt-4 h-20 relative flex items-center justify-center">
            <button 
              onMouseEnter={dodge}
              onClick={handleSend}
              style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
              className="bg-black text-white px-10 py-3 font-bungee transition-all absolute"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
      <p className="text-center mt-8 text-sm font-bold text-gray-500">Warning: Reply 2 varsh pachhi aavse.</p>
    </section>
  );
};

export default Contact;
