"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Send, Brain, Eye, Cloud, BarChart, HardDrive, Lightbulb, ArrowRight } from "lucide-react"

export default function TechnologyShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const rightContentRef = useRef<HTMLDivElement>(null)
  const [translateY, setTranslateY] = useState(0)
  const [sectionStyle, setSectionStyle] = useState({});
  const [sectionMinHeight, setSectionMinHeight] = useState("100vh") // Dynamic height for the section

  const technologies = [
    {
      icon: Lightbulb,
      title: "Generative AI",
      description:
        "We utilize Generative AI technology to create solutions that produce new content, automate creative processes and enhance user experiences.",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description:
        "We use ML to build intelligent systems that analyze data patterns and predict outcomes while continuously improving operations.",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description:
        "We employ computer vision to analyze visual data, automate image processing tasks and enhance the accuracy and speed of visual recognition systems.",
    },
    {
      icon: Cloud,
      title: "Cloud",
      description:
        "We offer scalable and secure cloud consulting services that enhance flexibility and reduce IT overhead, allowing your team to focus on business growth.",
    },
    {
      icon: BarChart,
      title: "Data Science And Analytics",
      description:
        "We leverage data to extract actionable insights, helping your business make informed decisions and optimize operations.",
    },
    {
      icon: HardDrive,
      title: "IoT",
      description:
        "We develop IoT solutions that connect devices, collect data, and enable smart automation for various industries, from smart homes to industrial applications.",
    },
    {
      icon: Brain, // Reusing for more content
      title: "Blockchain",
      description:
        "Implementing decentralized ledger technologies for secure, transparent, and immutable data management across various applications.",
    },
    {
      icon: Eye, // Reusing for more content
      title: "Cybersecurity",
      description:
        "Protecting your digital assets with advanced cybersecurity measures, including threat detection, data encryption, and compliance solutions.",
    },
  ]

  // Calculate the required height for the section to allow full content scroll
  const calculateSectionHeight = useCallback(() => {
    if (rightContentRef.current && sectionRef.current) {
      const rightContentActualHeight = rightContentRef.current.scrollHeight
      const viewportHeight = window.innerHeight

      // The amount the right content needs to "scroll" within its fixed viewport
      const scrollableContentHeight = Math.max(0, rightContentActualHeight - viewportHeight)

      // The section needs to be tall enough to:
      // 1. Allow the section to scroll into view and the sticky effect to start (approx. viewportHeight)
      // 2. Provide enough scroll distance for the right content to fully scroll (scrollableContentHeight)
      // 3. Allow the section to scroll out of view (approx. viewportHeight)
      // We add a buffer (e.g., 2 * viewportHeight) to ensure smooth entry and exit of the sticky state.
      setSectionMinHeight(`${viewportHeight + scrollableContentHeight + viewportHeight}px`)
    }
  }, [])

  useEffect(() => {
    // Recalculate height on mount and window resize
    calculateSectionHeight()
    window.addEventListener("resize", calculateSectionHeight)

    const handleScroll = () => {
      if (!sectionRef.current || !rightContentRef.current) return

      const sectionRect = sectionRef.current.getBoundingClientRect()
      const rightContentActualHeight = rightContentRef.current.scrollHeight
      const viewportHeight = window.innerHeight

      // The total distance the right content can scroll
      const scrollableContentHeight = Math.max(0, rightContentActualHeight - viewportHeight)

      // The scroll position where the sticky effect should start (when the section's top aligns with viewport's top)
      const stickyStartScroll = sectionRef.current.offsetTop

      // The scroll position where the sticky effect should end (after the right content has fully scrolled)
      const stickyEndScroll = stickyStartScroll + scrollableContentHeight

      // Current scroll position of the window
      const currentWindowScroll = window.scrollY

      // Calculate progress within the sticky zone
      // This progress should be 0 when currentWindowScroll is at stickyStartScroll
      // and 1 when currentWindowScroll is at stickyEndScroll
      const scrollProgress = Math.max(
        0,
        Math.min(1, (currentWindowScroll - stickyStartScroll) / scrollableContentHeight),
      )

      // Apply the scroll progress to the translateY of the right content
      setTranslateY(-scrollProgress * scrollableContentHeight)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => {
      window.removeEventListener("resize", calculateSectionHeight)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [calculateSectionHeight])

  useEffect(() => {
    const updateStyle = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        setSectionStyle({
          height: '1500px',
          minHeight: 'auto',
        });
      } else {
        setSectionStyle({
          minHeight: '100vh', // or your `sectionMinHeight` value
          height: 'auto',
        });
      }
    };

    updateStyle(); // run on mount
    window.addEventListener('resize', updateStyle); // update on resize

    return () => window.removeEventListener('resize', updateStyle);
  }, []);

  return (
    <section
    ref={sectionRef}
    className="bg-black text-white py-4 md:py-24"
    style={sectionStyle}
  >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Fixed Column */}
          <div className="lg:w-1/2 block lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 max-w-xl">
              We Create New Solutions And Transform Existing Ones With Technologies That Beat Industry-Best Timelines
            </h2>
            <div className="bg-gray-900 rounded-xl p-8 max-w-sm border border-gray-800 shadow-lg">
              <Send className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fuel Your Digital-First Idea</h3>
              <p className="text-gray-400 text-sm mb-6">With 1600+ Transformation Experts</p>
              <button className="group relative px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Innovate With Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Scrollable Column (Viewport) */}
          <div className="lg:w-1/2 overflow-hidden lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
            {/* Inner content that will be transformed */}
            <div ref={rightContentRef} style={{ transform: `translateY(${translateY}px)` }} className="lg:py-12">
              <div className="space-y-8">
                {technologies.map((tech, index) => (
                  <div key={index} className="pb-8 border-b border-gray-800 last:border-b-0">
                    <div className="flex items-center gap-4 mb-4">
                      <tech.icon className="w-6 h-6 text-white" />
                      <h3 className="text-xl font-semibold">{tech.title}</h3>
                      <ArrowRight className="w-5 h-5 text-gray-500 ml-auto" />
                    </div>
                    <p className="text-gray-400 leading-relaxed max-w-lg">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
