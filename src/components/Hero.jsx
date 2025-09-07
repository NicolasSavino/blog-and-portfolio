import React from "react";
import { ArrowDown } from "lucide-react";

// This Hero component is designed to sit on top of the Background component.
// It includes self-contained styles for animations and custom button styling
// to perfectly match the celestial theme.

const Hero = () => {
  return (
    <>
      {/* Component-specific styles for animations and the cosmic button */}
      <style>
        {`
          @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
          }
          @keyframes blink-caret {
            from, to { border-color: transparent; }
            50% { border-color: white; }
          }
          @keyframes fade-in-up {
            from { 
              opacity: 0; 
              transform: translateY(20px) scale(0.98);
              filter: blur(5px);
            }
            to { 
              opacity: 1; 
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }
          @keyframes shimmer-text {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
          }
        `}
      </style>

      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 text-white"
      >
        <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <span 
                className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-r-transparent pr-2 animate-[typewriter_3.5s_steps(40)_1s_1_both,blink-caret_.75s_step-end_5_1s]"
              >
                Ciao, Salve, こんにちは, and Hello.
              </span>
              <span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-400 bg-[length:200%_auto] drop-shadow-[0_0_12px_rgba(102,216,255,0.7)] opacity-0 animate-[fade-in-up_1s_ease-out_4.5s_forwards,shimmer-text_3s_ease-in-out_4.5s_infinite]"
              >
                I'm Nicolas F. Savino.
              </span>
            </h1>
            
            <div className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              <p className="opacity-0 animate-[fade-in-up_1s_ease-out_5s_forwards]">Fordham University, Class of 2026</p>
              <p className="text-base md:text-lg text-gray-400 opacity-0 animate-[fade-in-up_1s_ease-out_5.2s_forwards]">BS in Psychology | Minor in Computer Science</p>
            </div>

            <div className="flex justify-center pt-4 opacity-0 animate-[fade-in-up_1s_ease-out_5.5s_forwards]">
              {/* This link now correctly points to the file in your public directory */}
              <a 
                href="/Nicolas F. Savino Resume.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(102,216,255,0.7)]"
              >
                Peep the Beautiful Resume
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 animate-[fade-in-up_1s_ease-out_6s_forwards]">
          <span className="text-sm text-gray-400 mb-2">See More</span>
          <ArrowDown className="h-5 w-5 text-cyan-400 animate-bounce" />
        </div>
      </section>
    </>
  );
};

export default Hero;

