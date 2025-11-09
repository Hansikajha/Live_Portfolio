import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  // Function to check active link
  const isActive = (path) => location.pathname === path;

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center group"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-lg">AJ</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            </div>
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Hansika Jha
            </span>
          </Link>

          {/* Centered Navigation (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex items-center space-x-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-1 shadow-lg border border-gray-200 dark:border-gray-700">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-white"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {isActive(item.path) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg"></div>
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-12 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full p-1 transition-all duration-300 hover:shadow-lg"
              title="Toggle Theme"
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                  isDark ? "translate-x-6" : "translate-x-0"
                }`}
              >
                {isDark ? (
                  <span className="absolute inset-0 flex items-center justify-center text-xs">🌙</span>
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-xs">☀️</span>
                )}
              </div>
            </button>

            {/* Hire Me Button (Desktop) */}
            <div className="hidden md:flex items-center">
              <Link
                to="/contact"
                className="relative px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Hire Me</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="relative w-10 h-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute block w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
                      isOpen ? "rotate-45 top-3" : "top-1"
                    }`}
                  ></span>
                  <span
                    className={`absolute block w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
                      isOpen ? "opacity-0" : "opacity-100 top-3"
                    }`}
                  ></span>
                  <span
                    className={`absolute block w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
                      isOpen ? "-rotate-45 top-3" : "top-5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 mt-4 mb-4">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Hire Me Button */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-4"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}