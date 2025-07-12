"use client"

import type React from "react"
import { useState } from "react"
import {
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Shield,
  Zap,
  Users,
  Briefcase,
  Code,
  Palette,
  Database,
  Globe,
  Star,
  DollarSign,
  Calendar,
  Upload,
} from "lucide-react"
import EmailCharacterGif from "../assets/gif/email-character-preloader.gif"
import Header from "../components/Header"
import Footer from "../components/Footer"

interface ApplicationData {
  fullName: string
  email: string
  phone: string
  position: string
  experience: string
  portfolio: string
  coverLetter: string
  resume: File | null
}

interface ApplicationErrors {
  [key: string]: string
}

const jobPositions = [
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / San Francisco",
    salary: "$80k - $120k",
    icon: <Code style={{ width: "24px", height: "24px" }} />,
    description: "Build beautiful, responsive user interfaces using React, TypeScript, and modern CSS.",
    requirements: [
      "3+ years of React/Next.js experience",
      "Strong TypeScript skills",
      "Experience with modern CSS frameworks",
      "Knowledge of responsive design principles",
    ],
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / New York",
    salary: "$90k - $140k",
    icon: <Database style={{ width: "24px", height: "24px" }} />,
    description: "Design and build scalable APIs and microservices using Node.js, Python, or Go.",
    requirements: [
      "4+ years of backend development",
      "Experience with databases (SQL/NoSQL)",
      "Knowledge of cloud platforms (AWS/GCP)",
      "Understanding of microservices architecture",
    ],
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote / Los Angeles",
    salary: "$70k - $100k",
    icon: <Palette style={{ width: "24px", height: "24px" }} />,
    description: "Create intuitive and beautiful user experiences for web and mobile applications.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma, Sketch, or Adobe XD",
      "Strong portfolio showcasing design process",
      "Understanding of design systems",
    ],
  },
  {
    id: "fullstack-developer",
    title: "Fullstack Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Austin",
    salary: "$100k - $150k",
    icon: <Globe style={{ width: "24px", height: "24px" }} />,
    description: "Work across the entire stack to deliver end-to-end solutions for our clients.",
    requirements: [
      "5+ years of fullstack development",
      "Experience with React and Node.js",
      "Database design and optimization",
      "DevOps and deployment experience",
    ],
  },
]

export default function ResponsiveCareersPage() {
  const [applicationData, setApplicationData] = useState<ApplicationData>({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    coverLetter: "",
    resume: null,
  })
  const [errors, setErrors] = useState<ApplicationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [progress, setProgress] = useState(0)
  const [selectedJob, setSelectedJob] = useState<string>("")

  const validateField = (field: keyof ApplicationData, value: string | File | null): string => {
    switch (field) {
      case "fullName":
        return typeof value === "string" && value.length < 2 ? "Name must be at least 2 characters" : ""
      case "email":
        return typeof value === "string" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Please enter a valid email"
          : ""
      case "phone":
        return typeof value === "string" && value.length < 10 ? "Please enter a valid phone number" : ""
      case "position":
        return typeof value === "string" && !value ? "Please select a position" : ""
      case "experience":
        return typeof value === "string" && !value ? "Please select your experience level" : ""
      case "coverLetter":
        return typeof value === "string" && value.length < 50 ? "Cover letter must be at least 50 characters" : ""
      default:
        return ""
    }
  }

  const handleInputChange = (field: keyof ApplicationData, value: string | File | null) => {
    setApplicationData((prev) => ({ ...prev, [field]: value }))
    const error = validateField(field, value)
    setErrors((prev) => ({ ...prev, [field]: error }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: ApplicationErrors = {}
    Object.keys(applicationData).forEach((key) => {
      if (key !== "resume" && key !== "portfolio") {
        const error = validateField(key as keyof ApplicationData, applicationData[key as keyof ApplicationData])
        if (error) newErrors[key] = error
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setProgress(0)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval)
          return 90
        }
        return prev + Math.random() * 15
      })
    }, 200)

    await new Promise((resolve) => setTimeout(resolve, 3000))

    clearInterval(progressInterval)
    setProgress(100)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 500)

    setTimeout(() => {
      setIsSuccess(false)
      setProgress(0)
      setApplicationData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        portfolio: "",
        coverLetter: "",
        resume: null,
      })
      setErrors({})
      setSelectedJob("")
    }, 5000)
  }

  if (isSubmitting) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            border: "1px solid rgba(55, 65, 81, 0.5)",
            borderRadius: "16px",
            padding: "clamp(24px, 5vw, 48px)",
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: "32px", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "0",
                background: "radial-gradient(circle, rgba(0, 188, 212, 0.3), transparent)",
                borderRadius: "50%",
                filter: "blur(24px)",
                animation: "pulse 2s infinite",
              }}
            ></div>
            <img
              src={EmailCharacterGif || "/placeholder.svg"}
              alt="Processing your application..."
              width={120}
              height={120}
              style={{ margin: "0 auto", position: "relative", zIndex: 10 }}
            />
          </div>
          <div style={{ marginBottom: "32px" }}>
            <h3
              style={{
                fontSize: "clamp(20px, 5vw, 28px)",
                fontWeight: "bold",
                color: "white",
                marginBottom: "12px",
              }}
            >
              Submitting Your Application
            </h3>
            <p style={{ color: "#9CA3AF", fontSize: "clamp(14px, 3vw, 18px)" }}>
              Please wait while we process your application...
            </p>
          </div>
          <div style={{ position: "relative", marginBottom: "16px" }}>
            <div
              style={{
                width: "100%",
                backgroundColor: "#1F2937",
                borderRadius: "9999px",
                height: "8px",
                overflow: "hidden",
                border: "1px solid #374151",
              }}
            >
              <div
                style={{
                  height: "100%",
                  background: "linear-gradient(to right, #00BCD4, #0891B2)",
                  width: `${progress}%`,
                  transition: "width 0.5s ease-out",
                  borderRadius: "9999px",
                }}
              ></div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "-32px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#000000",
                border: "1px solid #374151",
                padding: "4px 12px",
                borderRadius: "9999px",
              }}
            >
              <p style={{ color: "#00BCD4", fontSize: "14px", fontWeight: "bold" }}>{Math.round(progress)}%</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        <style>{`
          @keyframes markerDraw {
            0% {
              stroke-dasharray: 300;
              stroke-dashoffset: 300;
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            100% {
              stroke-dasharray: 300;
              stroke-dashoffset: 0;
              opacity: 1;
            }
          }

          @keyframes markerGlow {
            0%,
            100% {
              filter: drop-shadow(0 0 8px rgba(0, 188, 212, 0.6));
            }
            50% {
              filter: drop-shadow(0 0 12px rgba(0, 188, 212, 0.8));
            }
          }
        `}</style>
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "#000000",
            border: "1px solid #1F2937",
            borderRadius: "16px",
            padding: "clamp(32px, 6vw, 64px) clamp(16px, 4vw, 32px)",
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: "clamp(32px, 6vw, 48px)", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "0",
                background: "radial-gradient(circle, rgba(0, 188, 212, 0.2), transparent)",
                borderRadius: "50%",
                filter: "blur(32px)",
                animation: "pulse 2s infinite",
              }}
            ></div>
            <div
              style={{
                width: "clamp(64px, 15vw, 96px)",
                height: "clamp(64px, 15vw, 96px)",
                backgroundColor: "#00BCD4",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                position: "relative",
                zIndex: 10,
                boxShadow: "0 20px 25px -5px rgba(0, 188, 212, 0.3)",
              }}
            >
              <CheckCircle
                style={{ width: "clamp(32px, 8vw, 48px)", height: "clamp(32px, 8vw, 48px)", color: "#000000" }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "clamp(32px, 6vw, 48px)" }}>
            <h1
              style={{
                fontSize: "clamp(28px, 8vw, 48px)",
                fontWeight: "300",
                color: "white",
                lineHeight: "1.2",
                marginBottom: "16px",
              }}
            >
              Application submitted
              <br />
              <span style={{ position: "relative", display: "inline-block" }}>
                successfully
                <svg
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: "-8px",
                    width: "calc(100% + 16px)",
                    height: "16px",
                    overflow: "visible",
                    pointerEvents: "none",
                  }}
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M8,12 Q30,8 60,10 Q90,12 120,9 Q150,6 180,11 Q210,14 240,10 Q270,7 292,12"
                    stroke="#00BCD4"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.9"
                    style={{
                      animation: "markerDraw 1.2s ease-out 0.5s both, markerGlow 2s ease-in-out 1.7s infinite",
                    }}
                  />
                  <path
                    d="M10,14 Q35,10 65,12 Q95,14 125,11 Q155,8 185,13 Q215,16 245,12 Q275,9 290,14"
                    stroke="#00BCD4"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.7"
                    style={{
                      animation: "markerDraw 1.2s ease-out 0.7s both",
                    }}
                  />
                  <path
                    d="M6,10 Q28,6 58,8 Q88,10 118,7 Q148,4 178,9 Q208,12 238,8 Q268,5 294,10"
                    stroke="#00BCD4"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.3"
                    style={{
                      animation: "markerDraw 1.2s ease-out 0.3s both",
                    }}
                  />
                  <path
                    d="M8,12 Q30,8 60,10 Q90,12 120,9 Q150,6 180,11 Q210,14 240,10 Q270,7 292,12"
                    stroke="#ffffff"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.8"
                    style={{
                      animation: "markerDraw 1.2s ease-out 0.9s both",
                    }}
                  />
                </svg>
              </span>
            </h1>

            <div style={{ marginBottom: "12px" }}>
              <p style={{ fontSize: "clamp(16px, 4vw, 24px)", color: "#9CA3AF", fontWeight: "300" }}>
                Thank you, <span style={{ color: "white", fontWeight: "500" }}>{applicationData.fullName}</span>
              </p>
            </div>
            <p
              style={{
                fontSize: "clamp(14px, 3vw, 18px)",
                color: "#6B7280",
                maxWidth: "480px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Your application has been received and forwarded to our hiring team. We'll review your application and get
              back to you soon.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "rgba(31, 41, 55, 0.5)",
              border: "1px solid #1F2937",
              borderRadius: "16px",
              padding: "clamp(16px, 4vw, 32px)",
              marginBottom: "clamp(16px, 4vw, 32px)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                marginBottom: "12px",
              }}
            >
              <Clock style={{ width: "clamp(16px, 4vw, 24px)", height: "clamp(16px, 4vw, 24px)", color: "#00BCD4" }} />
              <h3 style={{ fontSize: "clamp(16px, 4vw, 20px)", color: "white", fontWeight: "500" }}>Next Steps</h3>
            </div>
            <p style={{ fontSize: "clamp(20px, 5vw, 28px)", fontWeight: "300", color: "white", marginBottom: "8px" }}>
              Review within 3-5 days
            </p>
            <p style={{ color: "#6B7280", fontSize: "clamp(12px, 3vw, 14px)" }}>
              We'll contact you if your profile matches our requirements
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(12px, 3vw, 24px)" }}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "clamp(32px, 8vw, 48px)",
                  height: "clamp(32px, 8vw, 48px)",
                  backgroundColor: "#1F2937",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 8px",
                }}
              >
                <Shield
                  style={{ width: "clamp(16px, 4vw, 24px)", height: "clamp(16px, 4vw, 24px)", color: "#00BCD4" }}
                />
              </div>
              <p style={{ color: "#9CA3AF", fontSize: "clamp(10px, 2.5vw, 14px)", fontWeight: "500" }}>Confidential</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "clamp(32px, 8vw, 48px)",
                  height: "clamp(32px, 8vw, 48px)",
                  backgroundColor: "#1F2937",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 8px",
                }}
              >
                <Zap style={{ width: "clamp(16px, 4vw, 24px)", height: "clamp(16px, 4vw, 24px)", color: "#00BCD4" }} />
              </div>
              <p style={{ color: "#9CA3AF", fontSize: "clamp(10px, 2.5vw, 14px)", fontWeight: "500" }}>Fast Review</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "clamp(32px, 8vw, 48px)",
                  height: "clamp(32px, 8vw, 48px)",
                  backgroundColor: "#1F2937",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 8px",
                }}
              >
                <Users
                  style={{ width: "clamp(16px, 4vw, 24px)", height: "clamp(16px, 4vw, 24px)", color: "#00BCD4" }}
                />
              </div>
              <p style={{ color: "#9CA3AF", fontSize: "clamp(10px, 2.5vw, 14px)", fontWeight: "500" }}>Great Team</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000000" }}>
      <Header />
      <div style={{ padding: "20px 16px", paddingTop: '120px' }}>
        {/* Header Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(48px, 10vw, 80px)",
            maxWidth: "1200px",
            margin: "0 auto clamp(48px, 10vw, 80px)",
            padding: "0 16px",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <Briefcase
              style={{
                width: "16px",
                height: "16px",
                color: "#00BCD4",
                display: "inline-block",
                marginRight: "8px",
              }}
            />
            <span style={{ color: "#00BCD4", fontSize: "14px", fontWeight: "500" }}>Join Our Team</span>
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 8vw, 64px)",
              fontWeight: "bold",
              color: "white",
              lineHeight: "1.1",
              marginBottom: "16px",
            }}
          >
            Build Your
            <br />
            <span style={{ color: "#00BCD4" }}>Career</span> With Us
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 4vw, 18px)",
              color: "#9CA3AF",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Join our team of talented developers and designers. We're building the future of digital experiences and we
            want you to be part of it.
          </p>
        </div>

        {/* Job Positions */}
        <div style={{ maxWidth: "1200px", margin: "0 auto clamp(48px, 10vw, 80px)" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 6vw, 32px)",
              fontWeight: "bold",
              color: "white",
              marginBottom: "clamp(24px, 6vw, 40px)",
              textAlign: "center",
            }}
          >
            Open Positions
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(16px, 4vw, 24px)",
            }}
          >
            {jobPositions.map((job) => (
              <div
                key={job.id}
                onClick={() => {
                  setSelectedJob(job.id)
                  setApplicationData((prev) => ({ ...prev, position: job.id }))
                }}
                style={{
                  backgroundColor: selectedJob === job.id ? "rgba(0, 188, 212, 0.1)" : "rgba(31, 41, 55, 0.3)",
                  border: selectedJob === job.id ? "1px solid #00BCD4" : "1px solid #374151",
                  borderRadius: "16px",
                  padding: "clamp(20px, 5vw, 32px)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#00BCD4",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    color: "#000000",
                  }}
                >
                  {job.icon}
                </div>
                <h3
                  style={{
                    color: "white",
                    fontSize: "clamp(16px, 4vw, 20px)",
                    fontWeight: "bold",
                    marginBottom: "8px",
                  }}
                >
                  {job.title}
                </h3>
                <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                  <span
                    style={{
                      backgroundColor: "rgba(0, 188, 212, 0.2)",
                      color: "#00BCD4",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    {job.department}
                  </span>
                  <span
                    style={{
                      backgroundColor: "rgba(156, 163, 175, 0.2)",
                      color: "#9CA3AF",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    {job.type}
                  </span>
                </div>
                <p
                  style={{
                    color: "#9CA3AF",
                    fontSize: "clamp(12px, 3vw, 14px)",
                    lineHeight: "1.5",
                    marginBottom: "12px",
                  }}
                >
                  {job.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <MapPin style={{ width: "14px", height: "14px", color: "#00BCD4" }} />
                    <span style={{ color: "#9CA3AF", fontSize: "clamp(11px, 2.5vw, 14px)" }}>{job.location}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <DollarSign style={{ width: "14px", height: "14px", color: "#00BCD4" }} />
                    <span style={{ color: "#9CA3AF", fontSize: "clamp(11px, 2.5vw, 14px)" }}>{job.salary}</span>
                  </div>
                </div>
                <div style={{ marginBottom: "12px" }}>
                  <h4
                    style={{
                      color: "white",
                      fontSize: "clamp(12px, 3vw, 14px)",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    Requirements:
                  </h4>
                  <ul style={{ color: "#9CA3AF", fontSize: "clamp(10px, 2.5vw, 12px)", paddingLeft: "16px" }}>
                    {job.requirements.map((req, index) => (
                      <li key={index} style={{ marginBottom: "4px" }}>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                {selectedJob === job.id && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#00BCD4",
                      fontSize: "clamp(12px, 3vw, 14px)",
                      fontWeight: "500",
                    }}
                  >
                    <Star style={{ width: "16px", height: "16px", fill: "currentColor" }} />
                    Selected - Fill out the application below
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Application Form Section */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(32px, 8vw, 80px)",
            alignItems: "start",
          }}
        >
          <style>{`
            @media (min-width: 768px) {
              .application-grid {
                grid-template-columns: 1fr 1fr !important;
              }
            }
          `}</style>

          <div
            className="application-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(32px, 8vw, 80px)" }}
          >
            {/* Application Form */}
            <div
              style={{
                backgroundColor: "rgba(31, 41, 55, 0.3)",
                border: "1px solid #374151",
                borderRadius: "16px",
                padding: "clamp(24px, 5vw, 40px)",
              }}
            >
              <div style={{ marginBottom: "clamp(20px, 5vw, 32px)" }}>
                <h2
                  style={{
                    fontSize: "clamp(20px, 5vw, 24px)",
                    fontWeight: "bold",
                    color: "white",
                    marginBottom: "8px",
                  }}
                >
                  Apply for Position
                </h2>
                <p style={{ color: "#9CA3AF", fontSize: "clamp(14px, 3vw, 16px)" }}>
                  {selectedJob
                    ? `Applying for: ${jobPositions.find((job) => job.id === selectedJob)?.title}`
                    : "Please select a position above to apply"}
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {/* Name and Email Row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
                  <style>{`
                    @media (min-width: 640px) {
                      .form-row {
                        grid-template-columns: 1fr 1fr !important;
                      }
                    }
                  `}</style>
                  <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "white",
                          marginBottom: "8px",
                        }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={applicationData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        style={{
                          width: "100%",
                          backgroundColor: "#1F2937",
                          border: "1px solid #374151",
                          color: "white",
                          height: "48px",
                          borderRadius: "8px",
                          padding: "0 16px",
                          fontSize: "16px",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                        required
                      />
                      {errors.fullName && (
                        <p style={{ color: "#EF4444", fontSize: "14px", marginTop: "4px" }}>{errors.fullName}</p>
                      )}
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "white",
                          marginBottom: "8px",
                        }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={applicationData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        style={{
                          width: "100%",
                          backgroundColor: "#1F2937",
                          border: "1px solid #374151",
                          color: "white",
                          height: "48px",
                          borderRadius: "8px",
                          padding: "0 16px",
                          fontSize: "16px",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                        required
                      />
                      {errors.email && (
                        <p style={{ color: "#EF4444", fontSize: "14px", marginTop: "4px" }}>{errors.email}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Phone and Experience Row */}
                <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "white",
                        marginBottom: "8px",
                      }}
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={applicationData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      style={{
                        width: "100%",
                        backgroundColor: "#1F2937",
                        border: "1px solid #374151",
                        color: "white",
                        height: "48px",
                        borderRadius: "8px",
                        padding: "0 16px",
                        fontSize: "16px",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                      required
                    />
                    {errors.phone && (
                      <p style={{ color: "#EF4444", fontSize: "14px", marginTop: "4px" }}>{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "white",
                        marginBottom: "8px",
                      }}
                    >
                      Experience Level *
                    </label>
                    <select
                      value={applicationData.experience}
                      onChange={(e) => handleInputChange("experience", e.target.value)}
                      style={{
                        width: "100%",
                        backgroundColor: "#1F2937",
                        border: "1px solid #374151",
                        color: "white",
                        height: "48px",
                        borderRadius: "8px",
                        padding: "0 16px",
                        fontSize: "16px",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                      required
                    >
                      <option value="" style={{ backgroundColor: "#1F2937", color: "white" }}>
                        Select experience level
                      </option>
                      <option value="junior" style={{ backgroundColor: "#1F2937", color: "white" }}>
                        Junior (0-2 years)
                      </option>
                      <option value="mid" style={{ backgroundColor: "#1F2937", color: "white" }}>
                        Mid-level (2-5 years)
                      </option>
                      <option value="senior" style={{ backgroundColor: "#1F2937", color: "white" }}>
                        Senior (5+ years)
                      </option>
                      <option value="lead" style={{ backgroundColor: "#1F2937", color: "white" }}>
                        Lead/Principal (8+ years)
                      </option>
                    </select>
                    {errors.experience && (
                      <p style={{ color: "#EF4444", fontSize: "14px", marginTop: "4px" }}>{errors.experience}</p>
                    )}
                  </div>
                </div>

                {/* Portfolio */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "white",
                      marginBottom: "8px",
                    }}
                  >
                    Portfolio/GitHub URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://github.com/johndoe or https://portfolio.com"
                    value={applicationData.portfolio}
                    onChange={(e) => handleInputChange("portfolio", e.target.value)}
                    style={{
                      width: "100%",
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                      color: "white",
                      height: "48px",
                      borderRadius: "8px",
                      padding: "0 16px",
                      fontSize: "16px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "white",
                      marginBottom: "8px",
                    }}
                  >
                    Resume Upload
                  </label>
                  <div
                    style={{
                      width: "100%",
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                      padding: "16px",
                      textAlign: "center",
                      cursor: "pointer",
                      position: "relative",
                      boxSizing: "border-box",
                    }}
                  >
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleInputChange("resume", e.target.files?.[0] || null)}
                      style={{
                        position: "absolute",
                        inset: "0",
                        opacity: 0,
                        cursor: "pointer",
                      }}
                    />
                    <Upload style={{ width: "24px", height: "24px", color: "#00BCD4", margin: "0 auto 8px" }} />
                    <p style={{ color: "#9CA3AF", fontSize: "clamp(12px, 3vw, 14px)" }}>
                      {applicationData.resume ? applicationData.resume.name : "Click to upload resume (PDF, DOC, DOCX)"}
                    </p>
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "white",
                      marginBottom: "8px",
                    }}
                  >
                    Cover Letter *
                  </label>
                  <textarea
                    placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                    value={applicationData.coverLetter}
                    onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                    style={{
                      width: "100%",
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                      color: "white",
                      minHeight: "120px",
                      borderRadius: "8px",
                      padding: "16px",
                      fontSize: "16px",
                      resize: "none",
                      outline: "none",
                      fontFamily: "inherit",
                      boxSizing: "border-box",
                    }}
                    required
                  />
                  {errors.coverLetter && (
                    <p style={{ color: "#EF4444", fontSize: "14px", marginTop: "4px" }}>{errors.coverLetter}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !selectedJob}
                  style={{
                    backgroundColor: selectedJob ? "#00BCD4" : "#374151",
                    color: selectedJob ? "#000000" : "#9CA3AF",
                    fontWeight: "bold",
                    height: "56px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    border: "none",
                    cursor: selectedJob ? "pointer" : "not-allowed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "all 0.2s ease",
                    width: "100%",
                  }}
                >
                  <Send style={{ width: "20px", height: "20px" }} />
                  {selectedJob ? "Submit Application" : "Select a Position First"}
                </button>
              </form>
            </div>

            {/* Company Info */}
            <div>
              <div style={{ marginBottom: "clamp(24px, 6vw, 40px)" }}>
                <h2
                  style={{
                    fontSize: "clamp(24px, 6vw, 32px)",
                    fontWeight: "bold",
                    color: "white",
                    marginBottom: "16px",
                  }}
                >
                  Why Join Us?
                </h2>
                <p
                  style={{
                    fontSize: "clamp(14px, 3vw, 16px)",
                    color: "#9CA3AF",
                    lineHeight: "1.6",
                  }}
                >
                  We're building the future of digital experiences. Join our team and work on cutting-edge projects with
                  amazing people.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
                {/* Benefits Cards */}
                <div
                  style={{
                    backgroundColor: "rgba(31, 41, 55, 0.3)",
                    border: "1px solid #374151",
                    borderRadius: "12px",
                    padding: "clamp(16px, 4vw, 24px)",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#00BCD4",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <DollarSign style={{ width: "24px", height: "24px", color: "#000000" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "clamp(16px, 4vw, 18px)",
                        marginBottom: "4px",
                      }}
                    >
                      Competitive Salary
                    </h3>
                    <p style={{ color: "#9CA3AF", fontSize: "clamp(12px, 3vw, 14px)" }}>
                      Market-leading compensation packages
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(31, 41, 55, 0.3)",
                    border: "1px solid #374151",
                    borderRadius: "12px",
                    padding: "clamp(16px, 4vw, 24px)",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#00BCD4",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Globe style={{ width: "24px", height: "24px", color: "#000000" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "clamp(16px, 4vw, 18px)",
                        marginBottom: "4px",
                      }}
                    >
                      Remote First
                    </h3>
                    <p style={{ color: "#9CA3AF", fontSize: "clamp(12px, 3vw, 14px)" }}>
                      Work from anywhere in the world
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(31, 41, 55, 0.3)",
                    border: "1px solid #374151",
                    borderRadius: "12px",
                    padding: "clamp(16px, 4vw, 24px)",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#00BCD4",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Calendar style={{ width: "24px", height: "24px", color: "#000000" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "clamp(16px, 4vw, 18px)",
                        marginBottom: "4px",
                      }}
                    >
                      Flexible Hours
                    </h3>
                    <p style={{ color: "#9CA3AF", fontSize: "clamp(12px, 3vw, 14px)" }}>
                      Work-life balance is important to us
                    </p>
                  </div>
                </div>
              </div>

              {/* Application Process */}
              <div
                style={{
                  backgroundColor: "rgba(31, 41, 55, 0.3)",
                  border: "1px solid #374151",
                  borderRadius: "12px",
                  padding: "clamp(16px, 4vw, 24px)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <Users style={{ width: "20px", height: "20px", color: "#00BCD4" }} />
                  <h3
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "clamp(16px, 4vw, 18px)",
                    }}
                  >
                    Application Process
                  </h3>
                </div>
                <div style={{ color: "#9CA3AF", fontSize: "clamp(12px, 3vw, 14px)", lineHeight: "1.5" }}>
                  <p style={{ marginBottom: "8px" }}>1. Submit your application with resume and cover letter</p>
                  <p style={{ marginBottom: "8px" }}>2. Initial screening call (30 minutes)</p>
                  <p style={{ marginBottom: "8px" }}>3. Technical interview or portfolio review</p>
                  <p>4. Final interview with the team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
