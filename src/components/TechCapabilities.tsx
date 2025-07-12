"use client"

import { useState } from "react"
import { Code, Database, Smartphone, Cloud, Server, Globe, ArrowRight, ChevronRight } from "lucide-react"

const TechCapabilitiesImproved = () => {
  const [activeCategory, setActiveCategory] = useState("frontend")

  const techCategories = [
    {
      id: "frontend",
      title: "Frontend Programming Languages",
      icon: <Code className="w-5 h-5" />,
      description: "Modern frontend technologies for stunning user interfaces",
    },
    {
      id: "backend",
      title: "Backend Programming Languages",
      icon: <Server className="w-5 h-5" />,
      description: "Robust server-side technologies for scalable applications",
    },
    {
      id: "mobile",
      title: "Mobile Development",
      icon: <Smartphone className="w-5 h-5" />,
      description: "Cross-platform mobile solutions for iOS and Android",
    },
    {
      id: "database",
      title: "Databases / Data Storage",
      icon: <Database className="w-5 h-5" />,
      description: "Reliable data management and storage solutions",
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      icon: <Cloud className="w-5 h-5" />,
      description: "Scalable cloud infrastructure and deployment solutions",
    },
    {
      id: "frameworks",
      title: "Frameworks & Libraries",
      icon: <Globe className="w-5 h-5" />,
      description: "Modern frameworks for rapid development",
    },
  ]

  const technologies = {
    frontend: [
      { name: "HTML5", icon: "🌐", color: "from-orange-500 to-red-500" },
      { name: "CSS3", icon: "🎨", color: "from-blue-500 to-blue-600" },
      { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-yellow-500" },
      { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-700" },
      { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
      { name: "Vue.js", icon: "💚", color: "from-green-400 to-green-500" },
      { name: "Angular", icon: "🅰️", color: "from-red-500 to-red-600" },
      { name: "Next.js", icon: "▲", color: "from-gray-700 to-black" },
      { name: "Svelte", icon: "🧡", color: "from-orange-500 to-red-500" },
      { name: "Tailwind CSS", icon: "💨", color: "from-cyan-400 to-blue-500" },
      { name: "Bootstrap", icon: "🅱️", color: "from-purple-500 to-blue-500" },
      { name: "SASS", icon: "💄", color: "from-pink-500 to-red-500" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-600" },
      { name: "Python", icon: "🐍", color: "from-blue-400 to-yellow-400" },
      { name: "PHP", icon: "🐘", color: "from-purple-500 to-blue-500" },
      { name: "Java", icon: "☕", color: "from-orange-500 to-red-500" },
      { name: "C#", icon: "🔷", color: "from-purple-600 to-blue-600" },
      { name: "Go", icon: "🐹", color: "from-cyan-400 to-blue-500" },
      { name: "Ruby", icon: "💎", color: "from-red-500 to-pink-500" },
      { name: "Express.js", icon: "🚀", color: "from-gray-600 to-gray-700" },
      { name: "Django", icon: "🐍", color: "from-green-600 to-blue-600" },
      { name: "Laravel", icon: "🔴", color: "from-red-500 to-orange-500" },
      { name: "Spring Boot", icon: "🍃", color: "from-green-500 to-green-600" },
      { name: "FastAPI", icon: "⚡", color: "from-green-400 to-cyan-400" },
    ],
    mobile: [
      { name: "React Native", icon: "📱", color: "from-cyan-400 to-blue-500" },
      { name: "Flutter", icon: "🦋", color: "from-blue-400 to-cyan-400" },
      { name: "Swift", icon: "🍎", color: "from-orange-500 to-red-500" },
      { name: "Kotlin", icon: "🤖", color: "from-purple-500 to-blue-500" },
      { name: "Ionic", icon: "⚡", color: "from-blue-500 to-cyan-500" },
      { name: "Xamarin", icon: "🔷", color: "from-purple-600 to-blue-600" },
      { name: "Cordova", icon: "📲", color: "from-gray-600 to-gray-700" },
      { name: "PWA", icon: "🌐", color: "from-green-500 to-blue-500" },
      { name: "Expo", icon: "🎯", color: "from-blue-500 to-purple-500" },
      { name: "NativeScript", icon: "📱", color: "from-green-400 to-blue-400" },
      { name: "Unity", icon: "🎮", color: "from-gray-700 to-black" },
      { name: "Android Studio", icon: "🤖", color: "from-green-500 to-blue-500" },
    ],
    database: [
      { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-600" },
      { name: "MySQL", icon: "🐬", color: "from-blue-500 to-cyan-500" },
      { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-blue-700" },
      { name: "Redis", icon: "🔴", color: "from-red-500 to-red-600" },
      { name: "Firebase", icon: "🔥", color: "from-yellow-500 to-orange-500" },
      { name: "SQLite", icon: "💾", color: "from-gray-500 to-gray-600" },
      { name: "Oracle", icon: "🏛️", color: "from-red-600 to-orange-600" },
      { name: "Supabase", icon: "⚡", color: "from-green-400 to-cyan-400" },
      { name: "DynamoDB", icon: "⚡", color: "from-orange-400 to-yellow-500" },
      { name: "Cassandra", icon: "🏛️", color: "from-blue-500 to-purple-500" },
      { name: "Elasticsearch", icon: "🔍", color: "from-yellow-400 to-orange-500" },
      { name: "InfluxDB", icon: "📊", color: "from-blue-400 to-cyan-400" },
    ],
    cloud: [
      { name: "AWS", icon: "☁️", color: "from-orange-400 to-yellow-500" },
      { name: "Google Cloud", icon: "🌤️", color: "from-blue-400 to-green-400" },
      { name: "Azure", icon: "🔷", color: "from-blue-500 to-cyan-500" },
      { name: "Vercel", icon: "▲", color: "from-gray-700 to-black" },
      { name: "Netlify", icon: "🌊", color: "from-cyan-400 to-blue-500" },
      { name: "Docker", icon: "🐳", color: "from-blue-500 to-cyan-500" },
      { name: "Kubernetes", icon: "⚙️", color: "from-blue-600 to-purple-600" },
      { name: "DigitalOcean", icon: "🌊", color: "from-blue-400 to-cyan-400" },
      { name: "Heroku", icon: "💜", color: "from-purple-500 to-pink-500" },
      { name: "Railway", icon: "🚂", color: "from-gray-600 to-gray-700" },
      { name: "Cloudflare", icon: "🔶", color: "from-orange-500 to-yellow-500" },
      { name: "Jenkins", icon: "🔧", color: "from-blue-600 to-gray-600" },
    ],
    frameworks: [
      { name: "Laravel", icon: "🔴", color: "from-red-500 to-orange-500" },
      { name: "Django", icon: "🐍", color: "from-green-600 to-blue-600" },
      { name: "Spring Boot", icon: "🍃", color: "from-green-500 to-green-600" },
      { name: "ASP.NET", icon: "🔷", color: "from-purple-600 to-blue-600" },
      { name: "FastAPI", icon: "⚡", color: "from-green-400 to-cyan-400" },
      { name: "NestJS", icon: "🦅", color: "from-red-500 to-pink-500" },
      { name: "Nuxt.js", icon: "💚", color: "from-green-400 to-green-500" },
      { name: "Gatsby", icon: "🚀", color: "from-purple-500 to-blue-500" },
      { name: "Remix", icon: "🎵", color: "from-blue-500 to-cyan-500" },
      { name: "SvelteKit", icon: "🧡", color: "from-orange-500 to-red-500" },
      { name: "Astro", icon: "🚀", color: "from-orange-400 to-red-500" },
      { name: "Vite", icon: "⚡", color: "from-yellow-400 to-orange-500" },
    ],
  }

  const partnerships = [
    { name: "AWS", logo: "☁️", color: "from-orange-400 to-yellow-500" },
    { name: "Google", logo: "🌈", color: "from-blue-400 to-green-400" },
    { name: "Microsoft", logo: "🪟", color: "from-blue-500 to-cyan-500" },
    { name: "Meta", logo: "📘", color: "from-blue-600 to-purple-600" },
    { name: "Vercel", logo: "▲", color: "from-gray-700 to-black" },
    { name: "MongoDB", logo: "🍃", color: "from-green-500 to-green-600" },
  ]

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#000000" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-6 py-3 mb-6">
            <Code className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Tech Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-600 bg-clip-text text-transparent">
              Driving Digital
            </span>
            <br />
            <span className="text-white">Transformation For Our Clients</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies and frameworks to build scalable, secure, and high-performance
            solutions that drive your business forward in the digital landscape.
          </p>
        </div>

        {/* Main Tech Section - Connected Layout */}
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-3xl overflow-hidden mb-20">
          <div className="grid lg:grid-cols-12">
            {/* Categories Sidebar */}
            <div className="lg:col-span-5 bg-gray-900/60 border-r border-gray-800/50">
              <div className="p-8 h-full">
                <div className="space-y-2">
                  {techCategories.map((category, index) => (
                    <div
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`group cursor-pointer p-4 rounded-xl transition-all duration-300 ${
                        activeCategory === category.id
                          ? "bg-gray-800/80 border border-cyan-500/30 shadow-lg shadow-cyan-500/10"
                          : "hover:bg-gray-800/40 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-2 rounded-lg transition-all duration-300 ${
                              activeCategory === category.id
                                ? "bg-cyan-500/20 text-cyan-400"
                                : "bg-gray-800/50 text-gray-400 group-hover:text-cyan-400"
                            }`}
                          >
                            {category.icon}
                          </div>
                          <div>
                            <h3
                              className={`font-semibold text-lg mb-1 transition-colors duration-300 ${
                                activeCategory === category.id ? "text-white" : "text-gray-300 group-hover:text-white"
                              }`}
                            >
                              {category.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-tight">{category.description}</p>
                          </div>
                        </div>
                        <ChevronRight
                          className={`w-5 h-5 transition-all duration-300 ${
                            activeCategory === category.id
                              ? "rotate-90 text-cyan-400"
                              : "text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies Grid */}
            <div className="lg:col-span-7 bg-gray-900/40">
              <div className="p-8 h-full">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {techCategories.find((cat) => cat.id === activeCategory)?.title}
                  </h3>
                  <p className="text-gray-400">
                    {techCategories.find((cat) => cat.id === activeCategory)?.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                  {technologies[activeCategory as keyof typeof technologies]?.map((tech, index) => (
                    <div
                      key={tech.name}
                      className="group bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-cyan-500/50 hover:bg-gray-800/60 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer"
                      style={{
                        animationDelay: `${index * 0.05}s`,
                      }}
                    >
                      <div className="text-center">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <span className="text-xl">{tech.icon}</span>
                        </div>
                        <h4 className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                          {tech.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Partnerships */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Strategic Partnerships
            </span>{" "}
            <span className="text-white">To Deliver Excellence</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnerships.map((partner, index) => (
              <div
                key={partner.name}
                className="group bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-cyan-500/50 hover:bg-gray-900/60 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${partner.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <span className="text-2xl">{partner.logo}</span>
                  </div>
                  <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                    {partner.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise in these technologies can help you build innovative solutions that drive
              growth and success.
            </p>
            <button className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
              <span className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .grid > div {
          animation: fadeInUp 0.4s ease-out forwards;
          opacity: 0;
        }

        /* Responsive improvements */
        @media (max-width: 1024px) {
          .lg\\:col-span-5 {
            border-right: none;
            border-bottom: 1px solid rgba(55, 65, 81, 0.5);
          }
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .md\\:grid-cols-3 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .bg-gradient-to-r {
            background: #06B6D4 !important;
          }
          
          .border-gray-800\\/50 {
            border-color: #06B6D4 !important;
          }
        }

        /* Custom scrollbar for mobile */
        .overflow-x-auto::-webkit-scrollbar {
          height: 4px;
        }

        .overflow-x-auto::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.3);
          border-radius: 2px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.5);
          border-radius: 2px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.7);
        }
      `}</style>
    </section>
  )
}

export default TechCapabilitiesImproved
