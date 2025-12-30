
import React from 'react';

const Nav: React.FC = () => {
  const links = [
    { name: "Miyo", href: "#" },
    { name: "About", href: "#about" },
    { name: "Proofs", href: "#gallery" },
    { name: "Fun", href: "#games" }
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[80] w-[90%] max-w-sm">
      <div className="bg-white/80 backdrop-blur-md border-2 border-black rounded-full px-4 py-2 flex justify-between shadow-lg">
        {links.map((l) => (
          <a key={l.name} href={l.href} className="text-[10px] font-bungee uppercase text-gray-800 hover:text-blue-600 p-2">
            {l.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
