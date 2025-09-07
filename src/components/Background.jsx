import React, { useEffect, useState } from "react";

// --- SVG Icon Components for Constellations ---
const GithubIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white transition-all duration-300 ease-in-out hover:text-cyan-400 drop-shadow-[0_0_8px_rgba(102,216,255,0.8)]">
    <title>GitHub</title>
    <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12Z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white transition-all duration-300 ease-in-out hover:text-cyan-400 drop-shadow-[0_0_8px_rgba(102,216,255,0.8)]">
    <title>LinkedIn</title>
    <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

const YoutubeIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white transition-all duration-300 ease-in-out hover:text-cyan-400 drop-shadow-[0_0_8px_rgba(102,216,255,0.8)]">
        <title>YouTube</title>
        <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
);

// --- UPDATED COFFEE ICON ---
const CoffeeIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white transition-all duration-300 ease-in-out hover:text-cyan-400 drop-shadow-[0_0_8px_rgba(102,216,255,0.8)]">
        <title>Overcoffee.ai</title>
        <path fill="currentColor" d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 13c-2.76 0-5-2.24-5-5V5h5c1.38 0 2.5 1.12 2.5 2.5S17.38 10 16 10v3z M20 21H4v-2h16v2z"/>
    </svg>
);

const AlienIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white transition-all duration-300 ease-in-out hover:text-cyan-400 drop-shadow-[0_0_8px_rgba(102,216,255,0.8)]">
    <title>Contact Info</title>
    <path fill="currentColor" d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10s10-4.47,10-10S17.53,2,12,2z M12,18c-3.31,0-6-2.69-6-6 c0-2.23,1.22-4.17,3-5.19V12c0,1.66,1.34,3,3,3s3-1.34,3-3v-1.19c1.78,1.02,3,2.96,3,5.19C18,15.31,15.31,18,12,18z M12,8 c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,8,12,8z M16,8c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S17.1,8,16,8z"/>
  </svg>
);


const Background = () => {
  const [stars, setStars] = useState([]);
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const constellations = [
    { name: 'GitHub', Icon: GithubIcon, href: 'https://github.com/NicolasSavino', position: { top: '15%', left: '10%' },
      stars: [ { top: '10%', left: '80%' }, { top: '50%', left: '110%' }, { top: '90%', left: '60%' }, { top: '-20%', left: '40%' } ]
    },
    { name: 'LinkedIn', Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/nicolas-f-savino-6887182a9/', position: { top: '20%', right: '15%' },
      stars: [ { top: '0%', left: '80%' }, { top: '60%', left: '120%' }, { top: '100%', left: '50%' }, { top: '40%', left: '-30%' } ]
    },
    { name: 'YouTube', Icon: YoutubeIcon, href: 'https://www.youtube.com/@nikolaivonchenkloff', position: { bottom: '25%', left: '25%' },
      stars: [ { top: '10%', left: '110%' }, { top: '90%', left: '90%' }, { top: '110%', left: '30%' }, { top: '20%', left: '-10%' } ]
    },
    // --- UPDATED LINK ---
    { name: 'Overcoffee', Icon: CoffeeIcon, href: 'https://overcoffee.ai', position: { bottom: '20%', right: '20%' },
      stars: [ { top: '-20%', left: '80%' }, { top: '50%', left: '120%' }, { top: '120%', left: '70%' }, { top: '40%', left: '-20%' } ]
    }
  ];

  useEffect(() => {
    const generateStars = () => {
      const starCount = 150;
      const newStars = Array.from({ length: starCount }, (_, i) => ({
        id: `star-${i}`, size: Math.random() * 2 + 1, x: Math.random() * 100, y: Math.random() * 100, animationDelay: `${Math.random() * 10}s`,
      }));
      setStars(newStars);
    };

    generateStars();
    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes aurora-float { 0% { transform: translateY(0px) translateX(0px); opacity: 0.2; } 50% { transform: translateY(-20px) translateX(20px); opacity: 0.5; } 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; } }
          @keyframes comet-streak { 0% { transform: translateX(-100%) translateY(-100%); opacity: 0; } 10% { opacity: 1; } 80% { opacity: 1; } 100% { transform: translateX(100vw) translateY(100vh); opacity: 0; } }
          @keyframes fade-in-scale { 0% { opacity: 0; transform: scale(0.95) translateY(10px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
          .animate-fade-in-scale { animation: fade-in-scale 0.3s ease-out forwards; }
        `}
      </style>

      {/* PART 1: PURELY DECORATIVE BACKGROUND (BEHIND EVERYTHING) */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 to-gray-900"></div>
        <div className="absolute inset-0">
          {stars.map((star) => (
            <div key={star.id} className="absolute rounded-full bg-white animate-pulse" style={{ width: `${star.size}px`, height: `${star.size}px`, left: `${star.x}%`, top: `${star.y}%`, animationDelay: star.animationDelay, boxShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #6d28d9' }}/>
          ))}
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-[-50px] left-[-100px] w-[400px] h-[300px] rounded-full bg-gradient-to-r from-violet-600 to-purple-500 blur-3xl" style={{ animation: 'aurora-float 20s infinite ease-in-out alternate' }}></div>
          <div className="absolute top-[50px] right-[-150px] w-[500px] h-[400px] rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 blur-3xl" style={{ animation: 'aurora-float 25s infinite ease-in-out alternate-reverse -10s' }}></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full" style={{ animation: `comet-streak 25s linear infinite 5s` }}>
          <div className="absolute top-[10%] left-[-10%]">
            <div className="relative w-4 h-4 rounded-full bg-white shadow-[0_0_20px_10px_#fff,0_0_40px_20px_#0ea5e9,0_0_80px_40px_#8b5cf6]"></div>
            <div className="absolute top-1/2 right-4 w-[600px] h-2 bg-gradient-to-l from-transparent via-sky-400/50 to-violet-500/30 rounded-[50%] -translate-y-1/2 blur-sm"></div>
          </div>
        </div>
      </div>

      {/* PART 2: INTERACTIVE ICONS (IN FRONT OF CONTENT) */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {constellations.map(({ name, Icon, href, position, stars }) => (
          <div key={name} className="absolute" style={position}>
            {/* Re-enable pointer events just for the link */}
            <a href={href} target="_blank" rel="noopener noreferrer" className="relative block pointer-events-auto">
              <Icon />
            </a>
            {/* The small stars around the icon are decorative and not clickable */}
            {stars.map((star, index) => (
              <div key={index} className="absolute bg-white rounded-full animate-pulse" style={{ top: star.top, left: star.left, width: '2px', height: '2px', animationDelay: `${index * 0.5}s`, boxShadow: '0 0 6px #fff, 0 0 12px #67e8f9' }}/>
            ))}
          </div>
        ))}
      </div>

      {/* PART 3: MODAL TRIGGER AND MODAL (HIGHEST Z-INDEX) */}
      <button 
        onClick={() => setIsInfoVisible(true)} 
        className="fixed top-5 right-5 z-20 p-2 rounded-full transition-all duration-300 hover:bg-cyan-500/20"
        aria-label="Show contact information"
      >
        <AlienIcon />
      </button>

      {isInfoVisible && (
        <div 
          onClick={() => setIsInfoVisible(false)} 
          className="fixed inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative w-full max-w-md p-8 bg-slate-900/80 border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/10 text-white animate-fade-in-scale"
          >
            <button 
              onClick={() => setIsInfoVisible(false)} 
              className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">Contact Information</h2>
            <div className="space-y-4 text-slate-300">
              <p><strong>Email:</strong> nicolassavino3@gmail.com</p>
              <p><strong>Phone:</strong> 914-441-5392</p>
              <p><strong>Location:</strong> New York, United States</p>
              <a 
                href="https://www.buymeacoffee.com/nicolassavino" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <strong>Buy Me a Pumpkin Spiced Latte</strong>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Background;