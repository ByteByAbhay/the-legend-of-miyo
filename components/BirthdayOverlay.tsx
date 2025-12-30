import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import MiyoImage from './MiyoImage';

const BirthdayOverlay: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        // Fire confetti immediately
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        }

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    if (!show) return null;

    const handleClose = () => {
        setShow(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[150] bg-black/90 flex flex-col items-center justify-center p-4 text-center animate-bg-pulse">
            <div className="bg-white p-8 rounded-3xl border-8 border-yellow-400 rotate-2 shadow-[0_0_50px_rgba(250,204,21,0.5)] max-w-lg w-full relative">

                <div className="absolute -top-12 left-1/2 -translate-x-1/2 animate-bounce">
                    <span className="text-6xl">🎂</span>
                </div>

                <div className="mt-8">
                    <MiyoImage className="w-40 h-40 mx-auto rounded-full border-4 border-black mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bungee text-pink-600 mb-4 drop-shadow-sm">
                        HAPPY BIRTHDAY MIYO!
                    </h1>
                    <p className="font-bold text-lg text-gray-700 mb-8 italic">
                        "Aaj divas chhe aaram karvano, pan tu toh roj kare chhe!"
                    </p>

                    <button
                        onClick={handleClose}
                        className="bg-blue-600 text-white font-bungee px-8 py-3 rounded-full text-xl hover:scale-105 active:scale-95 transition-transform border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    >
                        PARTY BHULTO NAI!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BirthdayOverlay;
