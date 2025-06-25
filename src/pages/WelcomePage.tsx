// External library imports
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';




const WelcomePage: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-teal-800 to-green-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-full blur-lg animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        <div 
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-400 to-green-500 rounded-full blur-lg animate-pulse delay-500"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
      </div>

      {/* Decorative Leaf Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <svg 
          className="absolute top-1/4 left-0 w-96 h-96 text-teal-500 opacity-20 animate-float" 
          viewBox="0 0 200 200" 
          fill="currentColor"
        >
          <path d="M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,140 20,100 20,60 C20,40 60,20 100,20 Z" />
        </svg>
        
        <svg 
          className="absolute top-1/2 right-0 w-72 h-72 text-green-400 opacity-25 animate-float-delayed" 
          viewBox="0 0 200 200" 
          fill="currentColor"
        >
          <path d="M100,10 C150,10 190,50 190,100 C190,150 150,190 100,190 C50,150 10,100 10,50 C10,30 50,10 100,10 Z" />
        </svg>

        <svg 
          className="absolute bottom-1/4 left-1/3 w-48 h-48 text-cyan-400 opacity-30 animate-spin-slow" 
          viewBox="0 0 200 200" 
          fill="currentColor"
        >
          <path d="M100,30 C130,30 160,60 160,100 C160,140 130,170 100,170 C70,140 40,100 40,60 C40,45 70,30 100,30 Z" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
          
          {/* Left Side - Decorative Elements */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-96">
              {/* Animated Leaf Clusters */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-80 animate-bounce-slow" />
              <div className="absolute top-12 left-16 w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-70 animate-float" />
              <div className="absolute top-32 left-8 w-20 h-20 bg-gradient-to-br from-blue-400 to-green-500 rounded-full opacity-60 animate-pulse" />
              
              <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full opacity-75 animate-float-delayed" />
              <div className="absolute bottom-16 right-12 w-16 h-16 bg-gradient-to-br from-green-500 to-blue-400 rounded-full opacity-65 animate-bounce-slow" />
              
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full">
                <path
                  d="M60,60 Q120,80 200,160 Q240,200 300,240"
                  stroke="rgba(6, 182, 212, 0.3)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
                <path
                  d="M100,200 Q180,160 260,120 Q320,80 380,100"
                  stroke="rgba(34, 197, 94, 0.3)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse delay-1000"
                />
              </svg>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 lg:pl-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block animate-fade-in-up">welcome to </span>
              <span className="block animate-fade-in-up animation-delay-200 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                WeatherPotral
              </span>
            </h1>

            <div className="space-y-4 animate-fade-in-up animation-delay-400">
              <p className="text-lg text-gray-200 leading-relaxed">
                Get real-time weather updates,
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                forecasts, and insights tailored for your location.
              </p>
            </div>

            <Link className="group cursor-pointer inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-green-600 hover:from-cyan-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fade-in-up animation-delay-600" to={'/dashboard'}>
              <span>Explore</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>


      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default WelcomePage;