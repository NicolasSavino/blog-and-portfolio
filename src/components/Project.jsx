import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

// --- SVG Icons for Project Cards ---
const AstropareIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16 text-amber-400">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        <path d="M16 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        <path d="M12 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        <path d="M6 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
);

const CognitiveEchoesIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16 text-cyan-400">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        <path d="M12 12v1.5" />
        <path d="M12 20a8 8 0 0 0-8-8" />
        <path d="M12 20a8 8 0 0 1 8-8" />
        <path d="M4 12h.01" />
        <path d="M19.99 12h.01" />
    </svg>
);

const PhoneChartIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16 text-violet-400">
        <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h1" />
    </svg>
);

const ProjectCard = ({ icon, title, description, techStack, repoLink, liveLink }) => (
    <div className="bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800/80 p-8 flex flex-col h-full transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/50">
        <div className="flex-shrink-0 mb-6">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-100 mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map(tech => (
                <span key={tech} className="px-3 py-1 text-xs font-semibold text-cyan-300 bg-cyan-900/40 border border-cyan-400/50 rounded-full">
                    {tech}
                </span>
            ))}
        </div>
        <p className="text-slate-400 flex-grow mb-6">{description}</p>
        <div className="mt-auto flex items-center gap-4">
            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 font-semibold text-white bg-slate-800/70 border border-slate-700 rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:bg-slate-700/90 hover:border-slate-600">
                <Github className="w-5 h-5" />
                View Repo
            </a>
            {liveLink && (
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-violet-400 transition-colors duration-300 hover:text-violet-300">
                    Live Demo <ExternalLink className="w-4 h-4" />
                </a>
            )}
        </div>
    </div>
);

const Projects = () => {
    const projectData = [
        {
            icon: <AstropareIcon />,
            title: "Astropare: Predictive Astrophysics Trend Engine",
            description: "A predictive analytics engine leveraging NLP and anomaly detection to identify emerging research trends from vast datasets of academic astrophysics papers. The model parses and analyzes text to forecast new areas of scientific focus.",
            techStack: ["Python", "Scikit-learn", "NLTK", "spaCy", "Pandas", "Matplotlib"],
            repoLink: "https://github.com/NicolasSavino/astropare",
        },
        {
            icon: <CognitiveEchoesIcon />,
            title: "Cognitive Echoes: NLP Analysis of Omission Neglect",
            description: "A computational psychology project leveraging NLP to detect linguistic markers of Omission Neglect within online BPD support communities. Built a custom data pipeline and a machine learning model to classify text based on cognitive bias indicators.",
            techStack: ["Python", "NLTK", "spaCy", "Scikit-learn", "Pandas", "Plotly"],
            repoLink: "#",
        },
        {
            icon: <PhoneChartIcon />,
            title: "doubLIN: The Screen Time Accountability App",
            description: "A mobile application designed to foster healthier digital habits. Users set personalized screen time limits and deposit funds that are donated to charity if limits are exceeded, creating a tangible incentive to disconnect.",
            techStack: ["React Native", "Firebase", "Stripe API", "Node.js", "Charity Navigator API"],
            repoLink: "#",
        },
    ];

    return (
        <section id="projects" className="py-24 sm:py-32">
            <div className="container mx-auto max-w-7xl px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                    Featured Expeditions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map(project => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;