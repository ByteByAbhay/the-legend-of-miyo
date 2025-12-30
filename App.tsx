
import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Games from './components/Games';
import RoastMode from './components/RoastMode';
import Contact from './components/Contact';
// import BirthdayOverlay from './components/BirthdayOverlay';
import BirthdayOverlay from './components/BirthdayOverlay';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [roastMode, setRoastMode] = useState(false);

  const [showBirthday, setShowBirthday] = useState(true);

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <div className={`relative transition-colors duration-500 min-h-screen ${roastMode ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
      {showBirthday && <BirthdayOverlay onClose={() => setShowBirthday(false)} />}
      <Nav />
      <main className="max-w-screen-sm md:max-w-screen-xl mx-auto overflow-x-hidden">
        <Home />
        <About />
        <Achievements />
        <Testimonials />
        <Gallery />
        <Games />
        <Contact />
      </main>

      <RoastMode active={roastMode} onToggle={() => setRoastMode(!roastMode)} />

      <footer className="py-10 text-center bg-black text-white border-t border-gray-800">
        <p className="font-bungee text-xs">Miyo Official Website © 2024</p>
        <p className="text-[10px] mt-2 text-gray-400 px-4 italic">Aa website khali maja mate banavi che, Mitul bhai bau sara chhe.</p>
      </footer>
    </div>
  );
};

export default App;
