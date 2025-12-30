
import React, { useState } from 'react';
import { Mood } from '../types';

const excuses = [
  "Battery low chhe bhai",
  "Network nathi aavtu",
  "Suto hato bhai",
  "Rasta ma hato, traffic hato",
  "Dhyan nathi gayu",
  "Net pack khatam thai gayu"
];

const Games: React.FC = () => {
  const [replyStatus, setReplyStatus] = useState("Tap to check");
  const [excuse, setExcuse] = useState("Click for magic");
  const [mood, setMood] = useState<Mood | 'Checking...'>('Bhookhyo 😡');

  const checkReply = () => {
    setReplyStatus("Typing...");
    setTimeout(() => setReplyStatus("Seen 2 divas pela"), 1500);
  };

  const getExcuse = () => {
    const random = excuses[Math.floor(Math.random() * excuses.length)];
    setExcuse(random);
  };

  const detectMood = () => {
    setMood('Checking...');
    const moods: Mood[] = ['Bhookhyo 😡', 'Suto 😴', 'Paisa khatam 💸'];
    setTimeout(() => {
      setMood(moods[Math.floor(Math.random() * moods.length)]);
    }, 1000);
  };

  return (
    <section id="games" className="py-20 bg-yellow-100 px-4 space-y-12">
      <h2 className="text-4xl font-bungee text-center text-orange-600">Miyo Games</h2>

      <div className="max-w-md mx-auto space-y-8 text-slate-900">
        {/* Game 1 */}
        <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-bungee text-lg mb-4 text-black">Miyo reply aavse?</h3>
          <div className="flex items-center justify-between">
             <span className="font-bold text-blue-600">{replyStatus}</span>
             <button onClick={checkReply} className="bg-blue-600 text-white px-4 py-2 font-bold active:scale-90">CHECK</button>
          </div>
        </div>

        {/* Game 2 */}
        <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black">
          <h3 className="font-bungee text-lg mb-4">Excuse Generator</h3>
          <p className="font-bold text-red-500 mb-4 h-8">{excuse}</p>
          <button onClick={getExcuse} className="w-full bg-red-500 text-white py-3 font-bungee active:scale-95">BAHANU KADHO</button>
        </div>

        {/* Game 3 */}
        <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black">
          <h3 className="font-bungee text-lg mb-4">Mood Detector</h3>
          <p className="text-3xl text-center my-4">{mood}</p>
          <button onClick={detectMood} className="w-full bg-green-500 text-white py-3 font-bungee active:scale-95">DETECT MOOD</button>
        </div>
      </div>
    </section>
  );
};

export default Games;
