"use client"
import { useEffect, useRef, useState } from "react"
import {
  MessageCircle,
  FileText,
  Calendar,
  Figma,
  GitBranch,
  Code,
  TestTube,
  Rocket,
  HeadphonesIcon,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Trophy,
  Star,
} from "lucide-react"

const AnimatedHowItWorks = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      icon: MessageCircle,
      title: "Connect With Us",
      subtitle: "Initial Consultation",
      description:
        "Schedule a free consultation call where we understand your vision, goals, and business requirements in detail.",
      gradient: "from-blue-500 to-cyan-500",
      duration: "30 mins",
      deliverable: "Project Brief",
      highlight: "Free Consultation",
    },
    {
      icon: FileText,
      title: "Requirements Analysis",
      subtitle: "Detailed Planning",
      description:
        "We analyze your requirements and create a comprehensive project scope with technical specifications and user stories.",
      gradient: "from-cyan-500 to-teal-500",
      duration: "2-3 days",
      deliverable: "Requirements Document",
      highlight: "Detailed Scope",
    },
    {
      icon: Calendar,
      title: "Development Phases",
      subtitle: "Strategic Roadmap",
      description:
        "We break down your project into manageable phases with clear milestones, timelines, and deliverables for maximum efficiency.",
      gradient: "from-teal-500 to-green-500",
      duration: "1 day",
      deliverable: "Project Roadmap",
      highlight: "Clear Milestones",
    },
    {
      icon: Figma,
      title: "Figma Design",
      subtitle: "Visual Prototype",
      description:
        "Our designers create stunning, interactive prototypes in Figma that bring your vision to life before development begins.",
      gradient: "from-green-500 to-emerald-500",
      duration: "5-7 days",
      deliverable: "Interactive Prototype",
      highlight: "Pixel Perfect",
    },
    {
      icon: GitBranch,
      title: "Jira Sprint Planning",
      subtitle: "Agile Management",
      description:
        "We set up Jira boards with detailed user stories, tasks, and sprint planning for transparent project tracking.",
      gradient: "from-emerald-500 to-blue-500",
      duration: "1-2 days",
      deliverable: "Sprint Backlog",
      highlight: "Full Transparency",
    },
    {
      icon: Code,
      title: "Development",
      subtitle: "Code Implementation",
      description:
        "Our expert developers bring your design to life using cutting-edge technologies and best practices.",
      gradient: "from-blue-500 to-indigo-500",
      duration: "Per Sprint",
      deliverable: "Working Features",
      highlight: "Clean Code",
    },
    {
      icon: TestTube,
      title: "Quality Testing",
      subtitle: "Rigorous QA",
      description:
        "Comprehensive testing including unit tests, integration tests, and user acceptance testing to ensure perfection.",
      gradient: "from-indigo-500 to-purple-500",
      duration: "Ongoing",
      deliverable: "Test Reports",
      highlight: "Zero Bugs",
    },
    {
      icon: Rocket,
      title: "Deployment",
      subtitle: "Go Live",
      description:
        "We deploy your application to production with proper CI/CD pipelines, monitoring, and performance optimization.",
      gradient: "from-purple-500 to-pink-500",
      duration: "1-2 days",
      deliverable: "Live Application",
      highlight: "Lightning Fast",
    },
    {
      icon: HeadphonesIcon,
      title: "1 Month Free Support",
      subtitle: "Post-Launch Care",
      description:
        "Enjoy 30 days of complimentary support with unlimited changes, bug fixes, and feature adjustments after deployment.",
      gradient: "from-pink-500 to-rose-500",
      duration: "30 days",
      deliverable: "Ongoing Support",
      highlight: "Unlimited Changes",
    },
    {
      icon: Trophy,
      title: "Project Complete",
      subtitle: "Mission Accomplished",
      description:
        "Your project is now live, optimized, and ready to drive your business forward. Welcome to your digital success story!",
      gradient: "from-rose-500 to-orange-500",
      duration: "Forever",
      deliverable: "Digital Success",
      highlight: "Success Guaranteed",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !timelineRef.current) return

      const sectionRect = sectionRef.current.getBoundingClientRect()
      const timelineRect = timelineRef.current.getBoundingClientRect()
      const sectionTop = sectionRect.top
      const sectionHeight = sectionRect.height
      const viewportHeight = window.innerHeight

      // Calculate scroll progress through the section
      const progress = Math.max(0, Math.min(1, (viewportHeight - sectionTop) / (sectionHeight + viewportHeight)))
      setScrollProgress(progress)

      // Check which steps are visible
      const stepElements = document.querySelectorAll("[data-step]")
      const visible: number[] = []
      stepElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect()
        // A step is visible if its top is within 80% of viewport height and bottom is within 20% of viewport height
        if (rect.top < viewportHeight * 0.8 && rect.bottom > viewportHeight * 0.2) {
          visible.push(index)
        }
      })
      setVisibleSteps(visible)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-6 py-2 mb-6 border border-blue-500/30 animate-pulse">
            <Sparkles className="w-5 h-5 text-blue-400 animate-spin" />
            <span className="text-blue-400 font-medium">Our Proven Process</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            How We Transform Ideas
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience our comprehensive development journey designed to exceed expectations at every milestone.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative" ref={timelineRef}>
          {/* Enhanced Central Timeline Line */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-2 h-full rounded-full overflow-hidden">
            {/* Background line */}
            <div className="w-full h-full bg-gradient-to-b from-gray-700 via-gray-600 to-gray-700 opacity-30"></div>
            {/* Animated progress line */}
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
            {/* Glowing effect */}
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 blur-sm opacity-50 transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
          </div>

          {/* Flowing Blue Dot */}
          <div
            className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 transition-all duration-300 ease-out z-20"
            style={{
              top: `${scrollProgress * 100}%`,
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)",
            }}
          >
            <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
          </div>

          {/* Step Content Cards */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative mb-20 last:mb-0 flex items-center" // Use flex to align card and arrow
              data-step={index}
              style={{
                transform: visibleSteps.includes(index) ? "translateY(0) scale(1)" : `translateY(50px) scale(0.9)`,
                opacity: visibleSteps.includes(index) ? 1 : 0.3,
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              {/* Static dot for this step */}
              <div
                className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-10"
                style={{ top: "50%", transform: "translateY(-50%)" }} // Center vertically
              >
                <div
                  className={`w-8 h-8 bg-gradient-to-r ${step.gradient} rounded-full border-4 border-gray-900 shadow-lg transition-all duration-500
                    ${visibleSteps.includes(index) ? "scale-125" : "scale-100"} // Animate on visibility
                  `}
                >
                  <div className="absolute inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                </div>
              </div>

              {/* Horizontal connection line from static dot to card */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent animate-pulse
                  left-[40px] w-[calc(100%-64px)] // Mobile: from left timeline to card, adjust width
                  md:w-32 // Desktop: wider
                  ${index % 2 === 0 ? "md:left-1/2 md:translate-x-0" : "md:right-1/2 md:translate-x-0"} // Desktop: from center to card
                  ${index % 2 === 0 ? "md:from-transparent md:via-blue-400/50 md:to-transparent" : "md:from-transparent md:via-blue-400/50 md:to-transparent"}
                `}
              ></div>

              {/* Content Card and Arrow Container */}
              <div className={`flex w-full ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}>
                <div className="w-full md:w-1/2 px-4 md:px-8">
                  <div
                    className={`group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-700 cursor-pointer shadow-2xl w-full
                      ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}
                      ml-16 md:ml-0 md:mr-0 // On mobile, push it right. On desktop, reset.
                    `}
                    style={{
                      transform: visibleSteps.includes(index)
                        ? "translateX(0) rotateY(0deg)"
                        : `${index % 2 === 0 ? "translateX(100px) rotateY(10deg)" : "translateX(-100px) rotateY(-10deg)"}`,
                      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDelay: `${index * 0.1 + 0.2}s`,
                    }}
                  >
                    {/* Animated Background Glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 blur-xl`}
                    ></div>
                    {/* Highlight Badge */}
                    <div
                      className={`absolute -top-3 right-6 px-4 py-1 bg-gradient-to-r ${step.gradient} rounded-full text-white text-sm font-bold shadow-lg`}
                    >
                      {step.highlight}
                    </div>
                    {/* Enhanced Icon */}
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                      <step.icon className="w-10 h-10 text-white relative z-10" />
                      <div className="absolute inset-0 bg-white/10 rounded-3xl animate-ping opacity-75"></div>
                    </div>
                    {/* Enhanced Content */}
                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                          {step.title}
                        </h3>
                        <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-600/30">
                          {step.duration}
                        </span>
                      </div>
                      <h4
                        className={`text-lg font-semibold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}
                      >
                        {step.subtitle}
                      </h4>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {step.description}
                      </p>
                      <div className="flex items-center gap-2 pt-2">
                        <CheckCircle className="w-5 h-5 text-green-400 animate-pulse" />
                        <span className="text-green-400 font-medium">Deliverable: {step.deliverable}</span>
                      </div>
                      {/* Progress Stars */}
                      <div className="flex gap-1 pt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current animate-pulse"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                    </div>
                    {/* Enhanced Step Number */}
                    <div
                      className={`absolute -top-6 right-6 w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl border-4 border-gray-900 group-hover:scale-110 transition-all duration-300`}
                    >
                      <span className="relative z-10">{index + 1}</span>
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>
                </div>
                {/* Enhanced Arrow - only visible on md and up */}
                <div className="hidden md:block w-16 flex justify-center">
                  <div className={`${index % 2 !== 0 ? "rotate-180" : ""}`}>
                    <ArrowRight className="w-10 h-10 text-blue-400 animate-pulse" />
                    <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg animate-pulse"></div>
                  </div>
                </div>
                {/* This div is for spacing on desktop, can be removed or adjusted */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 border border-gray-700 shadow-2xl overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Ready to Begin Your Success Story?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of satisfied clients who have transformed their ideas into successful digital products
                with our proven, transparent process.
              </p>
              <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-bold text-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-3">
                  Start Your Journey Today
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimatedHowItWorks
