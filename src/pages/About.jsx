import React from "react";
import { FaCode, FaServer, FaMobileAlt, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiReact } from "react-icons/si";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Full Stack Developer passionate about creating digital solutions that make a difference
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          
          {/* Introduction */}
          <div className="p-8 md:p-12 border-b border-gray-100 dark:border-gray-700">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Hello! I'm a passionate developer with expertise in both frontend and backend technologies. 
                I specialize in building modern, performant web applications that deliver exceptional user experiences.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                With 3+ years of professional experience, I've helped startups and enterprises transform 
                their ideas into scalable digital products. I believe in clean code, thoughtful architecture, 
                and continuous learning.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="p-8 md:p-12 border-b border-gray-100 dark:border-gray-700">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillCard 
                icon={<SiReact className="text-3xl text-cyan-500" />} 
                title="Frontend Development" 
                skills={["React.js", "Tailwind CSS", "JavaScript/ES6+", "Responsive Design"]} 
                gradient="from-cyan-50 to-blue-50"
              />
              <SkillCard 
                icon={<FaServer className="text-3xl text-green-500" />} 
                title="Backend Development" 
                skills={["Django", "Python", "REST APIs", "Authentication"]} 
                gradient="from-green-50 to-emerald-50"
              />
              <SkillCard 
                icon={<FaDatabase className="text-3xl text-purple-500" />} 
                title="Database" 
                skills={["PostgreSQL", "MongoDB", "Firebase", "ORM"]} 
                gradient="from-purple-50 to-violet-50"
              />
              <SkillCard 
                icon={<FaGitAlt className="text-3xl text-orange-500" />} 
                title="Tools & DevOps" 
                skills={["Git/GitHub", "Docker", "CI/CD", "AWS Basics"]} 
                gradient="from-orange-50 to-amber-50"
              />
            </div>
          </div>

          {/* Experience */}
          <div className="p-8 md:p-12 border-b border-gray-100 dark:border-gray-700">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Journey</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-8 max-w-3xl mx-auto">
              <ExperienceItem 
                role="Senior Frontend Developer" 
                company="TechSolutions Inc." 
                duration="2021 - Present" 
                description="Leading React development for enterprise applications, mentoring junior developers, and improving application performance."
                year="2021"
              />
              <ExperienceItem 
                role="Full Stack Developer" 
                company="DigitalAgency LLC" 
                duration="2019 - 2021" 
                description="Built and maintained client websites using Django and React, implemented RESTful APIs, and optimized database queries."
                year="2019"
              />
              <ExperienceItem 
                role="Web Developer Intern" 
                company="StartUp Ventures" 
                duration="2018 - 2019" 
                description="Assisted in developing web applications, fixed bugs, and contributed to UI improvements."
                year="2018"
              />
            </div>
          </div>

          {/* Education */}
          <div className="p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 border border-blue-100 dark:border-gray-600">
                <div className="flex items-start gap-4">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm">
                    <FaCode className="text-2xl text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">BSc in Computer Science</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">State University</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">2015 - 2019 • Graduated with Honors</p>
                    <p className="text-gray-700 dark:text-gray-300 mt-3">
                      Specialized in Web Technologies and Software Engineering. 
                      Focused on modern web development practices and user experience design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Skill Card Component
function SkillCard({ icon, title, skills, gradient }) {
  return (
    <div className={`bg-gradient-to-br ${gradient} dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 group`}>
      <div className="flex items-center mb-4">
        <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="font-bold text-gray-900 dark:text-white text-lg ml-4">{title}</h3>
      </div>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <span className="text-gray-700 dark:text-gray-300">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Experience Item Component
function ExperienceItem({ role, company, duration, description, year }) {
  return (
    <div className="flex gap-6 group">
      {/* Year Badge */}
      <div className="flex-shrink-0">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl px-4 py-2 text-sm font-bold shadow-lg">
          {year}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group-hover:border-blue-200 dark:group-hover:border-blue-600">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
          <h3 className="font-bold text-gray-900 dark:text-white text-lg">{role}</h3>
          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full mt-2 md:mt-0">
            {duration}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">{company}</p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}