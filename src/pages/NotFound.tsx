import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="mb-4 text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">404</h1>
          <p className="mb-8 text-xl md:text-2xl text-slate-300">Oops! Page not found</p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-all rounded-lg font-semibold"
          >
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
