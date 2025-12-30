
import React from 'react';
import MiyoImage from './MiyoImage';
import { miyoConfig } from '../config/miyoConfig';

const About: React.FC = () => {
  const timeline = [
    { stage: "Innocent chokro", desc: "Bau mast hato, badhu maan-to." },
    { stage: "Full-time Miyo", desc: "Hve badhu bhuli gayo, khali aram." },
    { stage: "Expert Excuses", desc: "Net nathi, battery low chhe." }
  ];

  return (
    <section id="about" className="py-20 bg-emerald-50 px-4">
      <h2 className="text-4xl font-bungee text-center mb-12">Who is Miyo?</h2>

      <div className="max-w-md mx-auto space-y-8">
        {timeline.map((item, idx) => (
          <div key={idx} className="bg-white border-4 border-black p-6 relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform transition-transform hover:scale-105">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">
              {idx + 1}
            </div>
            <h3 className="text-xl font-bungee text-emerald-600 mb-2">{item.stage}</h3>
            <p className="font-medium text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-6">
        <MiyoImage className="w-32 h-32 rounded-lg grayscale hover:grayscale-0 transition-all cursor-pointer" url={miyoConfig.amaroMiyoUrl} />
        <p className="text-center italic font-bold text-gray-600 max-w-xs">
          "Responsibility missing, confidence full. Aa che amaro Miyo."
        </p>
      </div>
    </section>
  );
};

export default About;
