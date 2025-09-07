import React, { useState } from "react";
import { Link } from 'react-router-dom'; // 1. IMPORT LINK
import { BrainCircuit, Music, GitBranch, PenSquare } from 'lucide-react';

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
  { name: "Italian", level: "Proficient", category: "languages" },
  { name: "Latin", level: "N1", category: "languages" },
  { name: "Japanese", level: "Familiar", category: "languages" },
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

// --- Sub-Component for Hobby Skills ---
const HobbyCard = ({ title, subtitle, detail, Icon }) => (
    <div className="animate-[fade-in-up_0.5s_ease-out] p-8 rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-800/80 text-center max-w-lg mx-auto transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-900/50 hover:border-violet-400/50 group">
    <div className="flex justify-center mb-4">
        <Icon className="w-12 h-12 text-slate-500 group-hover:text-violet-400 transition-colors" />
    </div>
    <h3 className="text-2xl font-bold text-slate-200 group-hover:text-white mb-2 transition-colors">{title}</h3>
    <p className="text-violet-300 text-lg">{subtitle}</p>
    <div className="w-24 h-px bg-slate-700 group-hover:bg-violet-500 transition-colors mx-auto my-6"></div>
    <p className="text-slate-400">{detail}</p>
  </div>
);

// --- Main Skills Section Component ---
const Skills = () => {
  const [activeSkill, setActiveSkill] = useState("technicals");

  const skillCategories = [
    { id: "technicals", label: "Programming", Icon: BrainCircuit },
    { id: "piano", label: "Piano", Icon: Music },
    { id: "chess", label: "Chess", Icon: GitBranch },
    { id: "writing", label: "Writing", Icon: PenSquare, to: "/blog" }, // 2. CHANGE href to "to"
  ];

  const renderContent = () => {
    switch (activeSkill) {
      case "technicals": return <TechnicalSkills />;
      case "piano": return <HobbyCard 
        title="Classical Piano + Chad Piano"
        subtitle="2+ Years of Training"
        detail="Favorite Piece: Liebeslied (Love's Sorrow): Kreisler (Rachmaninoff)"
        Icon={Music}
      />;
      case "chess": return <HobbyCard 
        title="Competitive Chess"
        subtitle="Peak Rating: 1800+ (4 Man)"
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
      `}</style>
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          My Skill Constellation
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-16">
          {skillCategories.map(({ id, label, Icon, to }) => { // 3. DESTRUCTURE "to"
            const commonClasses = "flex items-center gap-3 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out backdrop-blur-sm border";
            const activeClasses = "bg-gradient-to-r from-violet-600 to-cyan-500 border-transparent shadow-[0_0_20px_rgba(102,216,255,0.7)] scale-105 text-white";
            const inactiveClasses = "bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700/70 hover:border-slate-600";
            
            // 4. CHANGE THE CONDITIONAL AND ELEMENT TO <Link>
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