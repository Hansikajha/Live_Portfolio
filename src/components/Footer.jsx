import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">HJ</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Hansika Jha
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Full Stack Developer passionate about creating digital experiences 
              that make a difference. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 dark:bg-gray-700 p-3 rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
              >
                <FaGithub className="text-xl text-gray-300 group-hover:text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 dark:bg-gray-700 p-3 rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
              >
                <FaLinkedin className="text-xl text-gray-300 group-hover:text-white" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 dark:bg-gray-700 p-3 rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
              >
                <FaTwitter className="text-xl text-gray-300 group-hover:text-white" />
              </a>
              <a 
                href="mailto:alex.johnson@example.com"
                className="bg-gray-800 dark:bg-gray-700 p-3 rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
              >
                <FaEnvelope className="text-xl text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Navigation</h3>
              <ul className="space-y-3">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About" },
                  { path: "/projects", label: "Projects" },
                  { path: "/contact", label: "Contact" }
                ].map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-gray-300 dark:text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
              <div className="space-y-3 text-gray-300 dark:text-gray-400">
                <div className="flex items-start space-x-3 group hover:text-white transition-colors duration-300">
                  <FaEnvelope className="mt-1 text-blue-400 flex-shrink-0" />
                  <span>alex.johnson@example.com</span>
                </div>
                <div className="flex items-start space-x-3 group hover:text-white transition-colors duration-300">
                  <FaPhone className="mt-1 text-green-400 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start space-x-3 group hover:text-white transition-colors duration-300">
                  <FaMapMarkerAlt className="mt-1 text-red-400 flex-shrink-0" />
                  <span>New York, NY</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
                Get the latest updates on my projects and tech insights.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 dark:bg-gray-700 border border-gray-700 dark:border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Hansika Jha. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              {[
                { path: "/privacy", label: "Privacy Policy" },
                { path: "/terms", label: "Terms of Service" },
                { path: "/contact", label: "Contact" }
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-semibold">
            Ready to start your next project?{" "}
            <Link 
              to="/contact" 
              className="underline hover:text-gray-100 transition-colors duration-300"
            >
              Let's talk →
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}