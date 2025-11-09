import { Link } from "react-router-dom";
import {
  MdOutlineScience,
  MdWork,
  MdSchool,
  MdCode,
  MdDesignServices,
  MdDownload,
  MdEmail,
} from "react-icons/md";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-20 mt-8">
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-30 blur-lg transition-all duration-300"></div>
              <img
                src="/img/DP.jpg"
                alt="Hansika Jha"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-xl relative z-10"
              />
              <div className="absolute bottom-2 right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-full shadow-lg z-20">
                <MdCode className="text-xl" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Hansika Jha</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-light">
            Frontend Developer & React Specialist
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, responsive web applications with modern technologies. 
            Passionate about creating intuitive user experiences and clean, maintainable code.
          </p>
        </section>

        {/* About Section */}
        <section className="mb-20">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 md:p-12 hover:shadow-xl transition-all duration-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <ExperienceCard
                  icon={<MdWork className="text-blue-600 text-2xl" />}
                  iconBg="bg-blue-50"
                  title="Senior Frontend Developer"
                  company="TechCorp Inc."
                  period="2021 - Present • 3 years"
                  description="Leading React development for enterprise applications with 500k+ users."
                />
                
                <ExperienceCard
                  icon={<MdSchool className="text-green-600 text-2xl" />}
                  iconBg="bg-green-50"
                  title="BSc Computer Science"
                  company="State University"
                  period="2017 - 2021 • Graduated with Honors"
                  description="Specialized in Human-Computer Interaction and Web Technologies."
                />
                
                <ExperienceCard
                  icon={<MdOutlineScience className="text-purple-600 text-2xl" />}
                  iconBg="bg-purple-50"
                  title="Open Source Contributor"
                  company="Various Projects"
                  period="2020 - Present"
                  description="Contributed to React libraries with 10k+ weekly downloads."
                />
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 border border-blue-100 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <StatCard number="3+" label="Years Experience" />
                  <StatCard number="50+" label="Projects Completed" />
                  <StatCard number="10k+" label="Code Commits" />
                  <StatCard number="5+" label="Open Source Projects" />
                </div>
                <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600">
                  <p className="text-gray-700 dark:text-gray-300 text-sm italic">
                    "Passionate about creating digital experiences that make a difference. 
                    Always learning, always building."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technologies I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <SkillCard
              icon={<SiJavascript className="text-yellow-500 text-3xl" />}
              name="JavaScript"
              level="Advanced"
            />
            <SkillCard
              icon={<SiTypescript className="text-blue-600 text-3xl" />}
              name="TypeScript"
              level="Advanced"
            />
            <SkillCard
              icon={<FaReact className="text-cyan-500 text-3xl" />}
              name="React.js"
              level="Expert"
            />
            <SkillCard
              icon={<SiRedux className="text-purple-500 text-3xl" />}
              name="Redux"
              level="Advanced"
            />
            <SkillCard
              icon={<FaNodeJs className="text-green-600 text-3xl" />}
              name="Node.js"
              level="Intermediate"
            />
            <SkillCard
              icon={<SiTailwindcss className="text-cyan-400 text-3xl" />}
              name="Tailwind"
              level="Expert"
            />
            <SkillCard
              icon={<FaGitAlt className="text-orange-600 text-3xl" />}
              name="Git"
              level="Advanced"
            />
            <SkillCard
              icon={<FaFigma className="text-purple-500 text-3xl" />}
              name="Figma"
              level="Intermediate"
            />
          </div>
        </section>

        {/* Qualifications */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-1 shadow-xl">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Qualifications
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <QualificationSection
                  title="Education"
                  items={[
                    "BSc in Computer Science, State University (2017-2021)",
                    "Advanced React Certification (2022)",
                    "UI/UX Design Specialization"
                  ]}
                />
                <QualificationSection
                  title="Experience"
                  items={[
                    "3+ years frontend development",
                    "Led 5+ successful projects",
                    "Web performance optimization",
                    "Team leadership & mentoring"
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to work together?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/projects"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 font-semibold text-lg"
              >
                <MdDesignServices className="text-xl" />
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 font-semibold text-lg"
              >
                <MdEmail className="text-xl" />
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Download CV */}
        <section className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Want the full story?
            </h3>
            <a
              href="/Hansika_Jha_CV.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg group"
            >
              <MdDownload className="text-xl group-hover:animate-bounce" />
              Download Full CV
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

function ExperienceCard({ icon, iconBg, title, company, period, description }) {
  return (
    <div className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:border-blue-200 dark:hover:border-blue-600">
      <div className={`p-3 rounded-2xl ${iconBg} mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{title}</h3>
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{company}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{period}</p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function SkillCard({ icon, name, level }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:border-blue-200 dark:hover:border-blue-600">
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <span className="text-gray-900 dark:text-white font-semibold text-center mb-2">{name}</span>
      <span className="text-xs text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
        {level}
      </span>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="text-center p-4">
      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{number}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  );
}

function QualificationSection({ title, items }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center md:text-left">
        {title}
      </h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start group">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-1 rounded-full mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}