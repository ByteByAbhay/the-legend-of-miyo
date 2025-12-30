
import React from 'react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  { id: 1, sender: "Jigri Yaar", message: "Mad**c*** dhabe na avay, bill kon bharse tare bap?", time: "10:15 PM" },
  { id: 2, sender: "Bhukkad Dost", message: "Guugra khava kyare lai jais! Bau vaar lagadi hve toh.", time: "11:30 PM" },
  { id: 3, sender: "Mummy", message: "Beta phone muki de hve, suta suta 2 vagya. Aankho bhighse tari.", time: "2:00 AM" },
  { id: 4, sender: "School Friend", message: "Paisa kya chhe mara? Party kyar aapse? Khali vato j kare che.", time: "Read" },
  { id: 5, sender: "Ex-Girlfriend", message: "Block karva thi sachai nathi badlati, Miyo Miyo j rehse.", time: "Yesterday" }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-blue-100 px-4 text-slate-900">
      <h2 className="text-4xl font-bungee text-center mb-12 text-blue-700">What People Say</h2>
      
      <div className="flex flex-col gap-4 max-w-md mx-auto">
        {reviews.map((r, i) => (
          <div 
            key={r.id} 
            className={`flex flex-col p-4 max-w-[85%] rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
              i % 2 === 0 ? 'bg-green-100 self-start rounded-tl-none' : 'bg-white self-end rounded-tr-none'
            }`}
          >
            <span className="text-xs font-bold text-blue-600 mb-1">{r.sender}</span>
            <p className="text-sm font-medium text-slate-800">{r.message}</p>
            <span className="text-[10px] text-gray-500 text-right mt-1">{r.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
