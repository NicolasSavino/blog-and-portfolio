import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { BrainCircuit, Music, GitBranch, PenSquare, Github } from 'lucide-react';

// --- Data for the Technical Skills Section ---
const technicalSkillsData = [
  // Dev
  { name: "React", level: "Advanced", category: "dev" },
  { name: "JavaScript", level: "Advanced", category: "dev" },
  { name: "CSS", level: "Advanced", category: "dev" },
  { name: "HTML", level: "Advanced", category: "dev" },
  { name: "Python", level: "Proficient", category: "dev" },
  { name: "Rust", level: "Beginner", category: "dev" },
  { name: "R", level: "Familiar", category: "dev" },
  { name: "C++", level: "Familiar", category: "dev" },
  { name: "SQL", level: "Advanced", category: "dev" },
  
  // Data
  { name: "Qualtrics", level: "Advanced", category: "data" },
  { name: "IBM SPSS", level: "Advanced", category: "data" },
  { name: "Excel", level: "Proficient", category: "data" },

  // Tools
  { name: "Figma", level: "Advanced", category: "tools" },
  { name: "VS Code", level: "Advanced", category: "tools" },
  { name: "Framer", level: "Proficient", category: "tools" },
  { name: "Salesforce", level: "Proficient", "category": "tools" },
  { name: "RStudio", level: "Proficient", category: "tools" },

  // Languages
  { name: "English", level: "Native", category: "languages" },
  { name: "Italian", level: "Conversational", category: "languages" },
  { name: "Latin", level: "Proficient", category: "languages" },
  { name: "Japanese", level: "N1", category: "languages" },
];

const categories = ["dev", "data", "tools", "languages"];

const quotes = {
  languages: "Carthago Delenda Est",
  data: "In God we trust, all others must bring data.",
};

// --- Sub-Component for Technical Skills ---
const TechnicalSkills = () => {
  const [activeCategory, setActiveCategory] = useState("dev");
  const filteredSkills = technicalSkillsData.filter(skill => skill.category === activeCategory);

  const levelStyles = {
    Advanced: "border-cyan-400/50 bg-cyan-900/40 text-cyan-300",
    Proficient: "border-violet-400/50 bg-violet-900/40 text-violet-300",
    Familiar: "border-slate-400/50 bg-slate-800/40 text-slate-300",
    Beginner: "border-gray-500/50 bg-gray-800/40 text-gray-400",
    Native: "border-amber-400/50 bg-amber-900/40 text-amber-300",
    N1: "border-green-400/50 bg-green-900/40 text-green-300"
  };

  return (
    <div className="animate-[fade-in-up_0.5s_ease-out] w-full">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 text-sm md:text-base rounded-full font-semibold transition-all duration-300 capitalize backdrop-blur-sm ${
              activeCategory === category
                ? "bg-cyan-400/20 text-cyan-300 shadow-[0_0_15px_rgba(102,216,255,0.5)] border border-cyan-400/50"
                : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/70 border border-slate-700 hover:border-slate-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map(skill => (
          <div key={skill.name} className="bg-slate-900/50 backdrop-blur-md p-6 rounded-xl border border-slate-800/80 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/50 flex justify-between items-center group">
            <h3 className="font-semibold text-lg text-slate-200 group-hover:text-white transition-colors">{skill.name}</h3>
            <span className={`px-3 py-1 text-sm font-bold rounded-full border ${levelStyles[skill.level] || 'bg-gray-600'}`}>
              {skill.level}
            </span>
          </div>
        ))}
      </div>
       {quotes[activeCategory] && (
        <div className="mt-16 text-center">
          <p className="text-xl italic text-slate-400 opacity-0 animate-[fade-in-up_1s_ease-out_1s_forwards]">
            "{quotes[activeCategory]}"
          </p>
        </div>
      )}
    </div>
  );
};

// --- SVGs for Project Cards ---
const CrownedKnightIcon = () => (
    <svg viewBox="0 0 45 45" className="w-10 h-10 text-slate-300">
        <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5">
            <path d="M22.5 11.63V8.5h3v-3h-3v-3h-3v3h-3v3h3v3.13c-3.95.49-7 3.85-7 7.87v9h17v-9c0-4.02-3.05-7.38-7-7.87z" strokeLinecap="round"/>
            <path d="M12.5 30.5v-1.5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5" strokeLinecap="round"/>
            <path d="M12.5 30.5a2.5 2.5 0 0 1-5 0v-2.5h5V30.5zM32.5 30.5a2.5 2.5 0 0 0 5 0v-2.5h-5V30.5z" strokeLinecap="round"/>
            <path d="M22.5 11.63c.51 1.5 1.28 2.86 2.22 4.07.93 1.2 2.08 2.18 3.38 2.9v2.15h-11.2v-2.15c1.3-.72 2.45-1.7 3.38-2.9.94-1.2 1.7-2.57 2.22-4.07z" strokeLinecap="round"/>
            <path d="M18 5.5l-2.5-3 5.5 1 2.5-4 2.5 4 5.5-1-2.5 3z" strokeLinecap="square"/>
        </g>
    </svg>
);
const KingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M12 2l2.5 5h-5L12 2z"/>
        <path d="M12 7v2"/>
        <path d="M9 9h6"/>
        <path d="M9 11l-2 10h10l-2-10H9z"/>
        <path d="M6 21h12"/>
    </svg>
);
const PianoKeyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M6 21v-8M12 21v-8M18 21v-8"/>
        <path d="M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>
    </svg>
);


// --- Special Sub-Component for Piano with Modal ---
const PianoCard = ({ title, subtitle, detail, Icon }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
    <>
        <div className="group animate-[fade-in-up_0.5s_ease-out] p-8 rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-800/80 text-center max-w-lg mx-auto transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-900/50 hover:border-violet-400/50 overflow-hidden relative">
            <div className="flex justify-center mb-4">
                <Icon className="w-12 h-12 text-slate-500 group-hover:text-violet-400 transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-slate-200 group-hover:text-white mb-2 transition-colors">{title}</h3>
            <p className="text-violet-300 text-lg">{subtitle}</p>
            <div className="w-24 h-px bg-slate-700 group-hover:bg-violet-500 transition-colors mx-auto my-6"></div>
            <p className="text-slate-400">{detail}</p>
            
            <button onClick={() => setIsModalOpen(true)} className="absolute top-3 right-3 text-slate-400 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-slate-800/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:scale-110" aria-label="Show project details">
                <PianoKeyIcon />
            </button>
        </div>

        {isModalOpen && (
            <div onClick={() => setIsModalOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md animate-[modal-fade-in_0.3s_ease-out]">
                <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-lg p-8 bg-slate-900 border border-violet-500/30 rounded-2xl shadow-2xl shadow-violet-500/10 text-white animate-[fade-in-up_0.4s_ease-out_forwards]">
                    <button onClick={() => setIsModalOpen(false)} className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors" aria-label="Close">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <h3 className="text-2xl font-bold mb-2 text-cyan-300">Project Spotlight: Noted</h3>
                    <div className="w-20 h-px bg-slate-700 my-4"></div>
                    <p className="text-slate-300 mb-6">
                       An AI-powered sheet music reader that utilizes computer vision to interpret and transcribe musical notation in real-time.
                    </p>
                    <a href="https://github.com/NicolasSavino/onelittlelie" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 font-semibold text-white bg-slate-800/70 border border-slate-700 rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:bg-slate-700/90 hover:border-slate-600 hover:shadow-[0_0_15px_rgba(102,216,255,0.4)]">
                        <Github className="w-5 h-5" />
                        Check the Repo
                    </a>
                </div>
            </div>
        )}
    </>
    );
};


// --- Special Sub-Component for Chess with Animation and Modal ---
const ChessCard = ({ title, subtitle, detail, Icon }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
    <>
        <div className="group animate-[fade-in-up_0.5s_ease-out] p-8 rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-800/80 text-center max-w-lg mx-auto transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-900/50 hover:border-violet-400/50 overflow-hidden relative">
            <div className="flex justify-center mb-4">
                <Icon className="w-12 h-12 text-slate-500 group-hover:text-violet-400 transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-slate-200 group-hover:text-white mb-2 transition-colors">{title}</h3>
            <p className="text-violet-300 text-lg">{subtitle}</p>
            <div className="w-24 h-px bg-slate-700 group-hover:bg-violet-500 transition-colors mx-auto my-6"></div>
            <p className="text-slate-400">{detail}</p>
            
            <button onClick={() => setIsModalOpen(true)} className="absolute top-3 right-3 text-slate-400 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-slate-800/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:scale-110" aria-label="Show project details">
                <KingIcon />
            </button>

            <div className="absolute -bottom-2 -left-12 opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-king-ride group-hover:animate-play">
                 <CrownedKnightIcon/>
            </div>
        </div>

        {isModalOpen && (
            <div onClick={() => setIsModalOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md animate-[modal-fade-in_0.3s_ease-out]">
                <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-lg p-8 bg-slate-900 border border-violet-500/30 rounded-2xl shadow-2xl shadow-violet-500/10 text-white animate-[fade-in-up_0.4s_ease-out_forwards]">
                    <button onClick={() => setIsModalOpen(false)} className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors" aria-label="Close">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <h3 className="text-2xl font-bold mb-2 text-cyan-300">Project Spotlight: Chess Buddy</h3>
                    <div className="w-20 h-px bg-slate-700 my-4"></div>
                    <p className="text-slate-300 mb-6">
                        An advanced predictive AI engine designed to analyze chess gameplay. It leverages machine learning algorithms to infer opening repertoires and positional tendencies by correlating game history with psychometric inputs, offering a unique analytical perspective on a player's style.
                    </p>
                    <a href="https://github.com/NicolasSavino/chess-buddy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 font-semibold text-white bg-slate-800/70 border border-slate-700 rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:bg-slate-700/90 hover:border-slate-600 hover:shadow-[0_0_15px_rgba(102,216,255,0.4)]">
                        <Github className="w-5 h-5" />
                        Check the Repo
                    </a>
                </div>
            </div>
        )}
    </>
    );
};


// --- Main Skills Section Component ---
const Skills = () => {
  const [activeSkill, setActiveSkill] = useState("technicals");

  const skillCategories = [
    { id: "technicals", label: "Programming", Icon: BrainCircuit },
    { id: "piano", label: "Piano", Icon: Music },
    { id: "chess", label: "Chess", Icon: GitBranch },
    { id: "writing", label: "Writing", Icon: PenSquare, to: "/blog" },
  ];

  const renderContent = () => {
    switch (activeSkill) {
      case "technicals": return <TechnicalSkills />;
      case "piano": return <PianoCard 
        title="Noted"
        subtitle="Python | OpenCV | TensorFlow"
        detail="Favorite Piece: Liebeslied (Love's Sorrow): Kreisler (Rachmaninoff)"
        Icon={Music}
      />;
      case "chess": return <ChessCard 
        title="Chess Buddy"
        subtitle="Python | Scikit-learn | Chess.com API"
        detail="Favorite Opening: The Ruy López or King's Indian Defense"
        Icon={GitBranch}
      />;
      default: return null;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32">
      <style>{`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); filter: blur(5px); }
            to { opacity: 1; transform: translateY(0); filter: blur(0); }
          }
          @keyframes king-ride {
              0% { transform: translateX(0); }
              100% { transform: translateX(550px); }
          }
          @keyframes modal-fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-king-ride {
              animation: king-ride 5s linear infinite;
              animation-play-state: paused;
          }
          .animate-play:hover {
              animation-play-state: running;
          }
      `}</style>
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          My Skill Constellation
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-16">
          {skillCategories.map(({ id, label, Icon, to }) => {
            const commonClasses = "flex items-center gap-3 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out backdrop-blur-sm border";
            const activeClasses = "bg-gradient-to-r from-violet-600 to-cyan-500 border-transparent shadow-[0_0_20px_rgba(102,216,255,0.7)] scale-105 text-white";
            const inactiveClasses = "bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700/70 hover:border-slate-600";
            
            if (to) {
              return (
                <Link key={id} to={to} className={`${commonClasses} ${inactiveClasses}`}>
                  <Icon className="w-6 h-6" /> {label}
                </Link>
              );
            }

            return (
              <button
                key={id}
                onClick={() => setActiveSkill(id)}
                className={`${commonClasses} ${activeSkill === id ? activeClasses : inactiveClasses}`}
              >
                <Icon className="w-6 h-6" /> {label}
              </button>
            );
          })}
        </div>
        
        <div className="mt-12 min-h-[400px]">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Skills;

