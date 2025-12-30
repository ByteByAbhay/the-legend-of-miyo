
import React, { useState } from 'react';
import MiyoImage from './MiyoImage';
import { miyoConfig } from '../config/miyoConfig';

const Gallery: React.FC = () => {
  const filters = ["sepia", "blur-sm", "grayscale", "invert", "contrast-150", "none"];
  const [msg, setMsg] = useState("Purava (Proofs)");

  const handleImgClick = () => {
    setMsg("Aa photo delete karvani koshish thai hati!");
    setTimeout(() => setMsg("Purava (Proofs)"), 3000);
  };

  return (
    <section id="gallery" className="py-20 bg-purple-50 px-4">
      <h2 className="text-4xl font-bungee text-center mb-12 text-purple-700">{msg}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {filters.map((f, i) => (
          <div
            key={i}
            onClick={handleImgClick}
            className="aspect-square relative group cursor-pointer overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <MiyoImage className={`w-full h-full ${f}`} url={miyoConfig.profile[i]} />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <span className="text-white font-bold text-xs">Puravo #{i + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
