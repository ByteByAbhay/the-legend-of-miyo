
import React, { useState, useEffect } from 'react';

const messages = [
  "Miyo ni photo load kariye chhiye... data slow chhe",
  "Motivation search kari... not found",
  "Excuses download thai gaya ✔",
  "Aavse aavse, dhiraj rakho bhai...",
  "Status update: Suto chhe Miyo"
];

const LoadingScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 1200);

    const timer = setTimeout(() => {
      onFinish();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[100] bg-blue-500 flex flex-col items-center justify-center p-8 text-center">
      <div className="w-24 h-24 border-8 border-white border-t-yellow-400 rounded-full animate-spin mb-8"></div>
      <h2 className="text-white text-2xl font-bungee leading-tight">
        {messages[msgIndex]}
      </h2>
      <div className="mt-4 w-64 bg-blue-700 h-4 rounded-full overflow-hidden border-2 border-black">
        <div className="bg-yellow-400 h-full animate-[loading_5s_ease-in-out]"></div>
      </div>
      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
