import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/")
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-cyan-900 flex items-center justify-center relative overflow-hidden">

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-8 select-none">
          404
        </h1>

        {/* Error message */}
        <div className="mb-12 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Page not found
          </h2>
          <p className="text-lg text-gray-300 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Home button */}
        <button
          onClick={handleGoHome}
          className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center gap-3 mx-auto"
        >
          <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          Take Me Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;