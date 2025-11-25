import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern online shopping experience with secure payments and intuitive user interface.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      category: "Web Development",
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity application for team collaboration and project tracking with real-time updates.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      category: "Mobile App",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Clean and responsive portfolio design showcasing creative work and professional achievements.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      category: "Web Design",
      status: "Completed"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather monitoring application with interactive maps and detailed forecasts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      category: "Data Visualization",
      status: "Completed"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Comprehensive health and fitness tracking application with progress analytics.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      category: "Mobile App",
      status: "Planning"
    },
    {
      id: 6,
      title: "Social Media Analytics",
      description: "Advanced analytics platform for social media performance and engagement metrics.",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=300&fit=crop",
      category: "Data Analytics",
      status: "In Progress"
    }
  ]);

  const handleViewDetails = (project) => {
    toast.info(`Viewing details for: ${project.title}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300";
      case "In Progress":
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300";
      case "Planning":
        return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div className="max-w-7xl mx-auto my-12 px-4 mt-20">
      
      <ToastContainer position="top-right" autoClose={3000} />
      
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Projects</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our portfolio of innovative projects and creative solutions
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col group"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-3">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-1">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-3 flex-1">
                {project.description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <button
                  onClick={() => handleViewDetails(project)}
                  className="px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium"
                >
                  View Details
                </button>
                <span className="text-xs text-gray-500 dark:text-gray-400">Project #{project.id}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <p className="text-gray-600 dark:text-gray-300 mb-6">Interested in working together?</p>
        <button className="px-8 py-3 bg-black dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 font-medium">
          Start a Project
        </button>
      </div>
    </div>
    </div>
  );
}

export default Projects;