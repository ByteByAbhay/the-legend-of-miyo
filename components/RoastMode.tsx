
import React from 'react';
import MiyoImage from './MiyoImage';

const RoastMode: React.FC<{ active: boolean; onToggle: () => void }> = ({ active, onToggle }) => {
  if (!active) return (
    <button 
      onClick={onToggle}
      className="fixed bottom-20 right-4 z-[90] bg-black text-white w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-xl shadow-lg"
    >
      🔥
    </button>
  );

  return (
    <div className="fixed inset-0 z-[200] bg-black text-white p-8 flex flex-col items-center justify-center text-center">
      <button 
        onClick={onToggle}
        className="absolute top-6 right-6 text-3xl font-bold"
      >
        ✕
      </button>
      
      <div className="animate-shake mb-8">
        <MiyoImage className="w-64 h-64 border-red-600 grayscale invert" />
      </div>

      <h2 className="text-5xl font-bungee text-red-600 mb-6">ROAST MODE ON</h2>
      
      <div className="space-y-4 max-w-sm">
        <p className="text-2xl font-bold">Dream bau mota chhe,</p>
        <p className="text-2xl font-bold">pan aa photo jeta consistent nathi.</p>
        <p className="text-lg text-gray-400 italic">"Alarm vage chhe, Miyo ungh ma chhe, duniya badlai gai chhe."</p>
      </div>

      <button 
        onClick={onToggle}
        className="mt-12 bg-red-600 px-8 py-3 font-bungee rounded-full border-2 border-white"
      >
        SACHAI THI BHAGO
      </button>
    </div>
  );
};

export default RoastMode;
