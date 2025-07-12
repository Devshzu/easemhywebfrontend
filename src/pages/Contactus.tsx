"use client"

import type React from "react"
import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Shield,
  Zap,
  Users,
  ArrowRight,
  MessageCircle,
} from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import EmailCharacterGif from "../assets/gif/email-character-preloader.gif"

interface FormData {
  fullName: string
  email: string
  company: string
  service: string
  subject: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export default function ResponsiveContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    service: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [progress, setProgress] = useState(0)

  const validateField = (field: keyof FormData, value: string): string => {
    switch (field) {
      case "fullName":
        return value.length < 2 ? "Name must be at least 2 characters" : ""
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid email" : ""
      case "subject":
        return value.length < 5 ? "Subject must be at least 5 characters" : ""
      case "message":
        return value.length < 20 ? "Message must be at least 20 characters" : ""
      default:
        return ""
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    const error = validateField(field, value)
    setErrors((prev) => ({ ...prev, [field]: error }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: FormErrors = {}
    Object.keys(formData).forEach((key) => {
      const error = validateField(key as keyof FormData, formData[key as keyof FormData])
      if (error) newErrors[key] = error
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
      setFormData({
        fullName: "",
        email: "",
        company: "",
        service: "",
        subject: "",
        message: "",
      })
      setErrors({})
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
            padding: "32px 24px",
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
              alt="Processing your message..."
              width={120}
              height={120}
              style={{ margin: "0 auto", position: "relative", zIndex: 10 }}
            />
          </div>
          <div style={{ marginBottom: "32px" }}>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "white",
                marginBottom: "12px",
              }}
            >
              Sending Your Message
            </h3>
            <p style={{ color: "#9CA3AF", fontSize: "16px" }}>Please wait while we process your request...</p>
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
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "#000000",
            border: "1px solid #1F2937",
            borderRadius: "16px",
            padding: "32px 24px",
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: "32px", position: "relative" }}>
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
                width: "80px",
                height: "80px",
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
              <CheckCircle style={{ width: "40px", height: "40px", color: "#000000" }} />
            </div>
          </div>
          <div style={{ marginBottom: "32px" }}>
            <h1
              style={{
                fontSize: "32px",
                fontWeight: "300",
                color: "white",
                lineHeight: "1.2",
                marginBottom: "16px",
              }}
            >
              Message sent
              <br />
              <span style={{ position: "relative" }}>
                successfully
                <div
                  style={{
                    position: "absolute",
                    bottom: "4px",
                    left: "0",
                    right: "0",
                    height: "4px",
                    backgroundColor: "#00BCD4",
                    borderRadius: "2px",
                  }}
                ></div>
              </span>
            </h1>
            <div style={{ marginBottom: "12px" }}>
              <p style={{ fontSize: "18px", color: "#9CA3AF", fontWeight: "300" }}>
                Thank you, <span style={{ color: "white", fontWeight: "500" }}>{formData.fullName}</span>
              </p>
            </div>
            <p
              style={{
                fontSize: "16px",
                color: "#6B7280",
                maxWidth: "400px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Your message has been received and forwarded to our team. We'll get back to you with a strategic response.
            </p>
          </div>
          <div
            style={{
              backgroundColor: "rgba(31, 41, 55, 0.5)",
              border: "1px solid #1F2937",
              borderRadius: "16px",
              padding: "24px",
              marginBottom: "24px",
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
              <Clock style={{ width: "20px", height: "20px", color: "#00BCD4" }} />
              <h3 style={{ fontSize: "18px", color: "white", fontWeight: "500" }}>Expected Response</h3>
            </div>
            <p style={{ fontSize: "24px", fontWeight: "300", color: "white", marginBottom: "8px" }}>Within 2-4 hours</p>
            <p style={{ color: "#6B7280", fontSize: "14px" }}>During business hours (Mon-Fri, 9AM-6PM)</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#1F2937",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 8px",
                }}
              >
                <Shield style={{ width: "20px", height: "20px", color: "#00BCD4" }} />
              </div>
              <p style={{ color: "#9CA3AF", fontSize: "12px", fontWeight: "500" }}>Secure</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#1F2937",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 8px",
                }}
              >
                <Zap style={{ width: "20px", height: "20px", color: "#00BCD4" }} />
              </div>
              <p style={{ color: "#9CA3AF", fontSize: "12px", fontWeight: "500" }}>Priority</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#1F2937",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 8px",
                }}
              >
                <Users style={{ width: "20px", height: "20px", color: "#00BCD4" }} />
              </div>
              <p style={{ color: "#9CA3AF", fontSize: "12px", fontWeight: "500" }}>Expert Team</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000000" }}>
      <Header />
      <div className="" style={{ padding: "20px 16px", paddingTop: '120px' }}>
        {/* Header Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "48px",
            maxWidth: "1200px",
            margin: "0 auto 48px",
            padding: "0 16px",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <MessageCircle
              style={{
                width: "16px",
                height: "16px",
                color: "#00BCD4",
                display: "inline-block",
                marginRight: "8px",
              }}
            />
            <span style={{ color: "#00BCD4", fontSize: "14px", fontWeight: "500" }}>Get In Touch</span>
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
            Let's Start a
            <br />
            <span style={{ color: "#00BCD4" }}>Conversation</span>
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
            Ready to transform your business? We're here to help you every step of the way. Reach out and let's discuss
            how we can bring your vision to life.
          </p>
        </div>

        {/* Main Content */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "start",
            marginBottom: "48px",
          }}
        >
          {/* Desktop: Two columns, Mobile: Single column */}
          <style>{`
            @media (min-width: 768px) {
              .content-grid {
                grid-template-columns: 1fr 1fr !important;
                gap: 80px !important;
              }
            }
          `}</style>

          <div className="content-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px" }}>
            {/* Contact Form */}
            <div
              style={{
                backgroundColor: "rgba(31, 41, 55, 0.3)",
                border: "1px solid #374151",
                borderRadius: "16px",
                padding: "clamp(24px, 5vw, 40px)",
              }}
            >
              <div style={{ marginBottom: "24px" }}>
                <h2
                  style={{
                    fontSize: "clamp(20px, 4vw, 24px)",
                    fontWeight: "bold",
                    color: "white",
                    marginBottom: "8px",
                  }}
                >
                  Send us a message
                </h2>
                <p style={{ color: "#9CA3AF", fontSize: "clamp(14px, 3vw, 16px)" }}>
                  Fill out the form below and we'll get back to you within 24 hours.
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
                        value={formData.fullName}
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
                        value={formData.email}
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

                {/* Company and Service Row */}
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
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
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
                      Service Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => handleInputChange("service", e.target.value)}
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
                    >
                      <option value="" style={{ backgroundColor: "#1F2937", color: "white" }}>
                        Select a service
                      </option>
                      <option value="web-development" style={{ backgroundColor: "#1F2937", color: "white" }}>
                        Web Development
                      </option>
                      <option value="mobile-app" style={{ backgroundColor: "#1F2937", color: "white" }}>
                        Mobile App Development
                      </option>
                      <option value="ui-ux-design" style={{ backgroundColor: "#1F2937", color: "white" }}>
                        UI/UX Design
                      </option>
                      <option value="consulting" style={{ backgroundColor: "#1F2937", color: "white" }}>
                        Consulting
                      </option>
                      <option value="other" style={{ backgroundColor: "#1F2937", color: "white" }}>
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
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
                    Subject *
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
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
                  {errors.subject && (
                    <p style={{ color: "#EF4444", fontSize: "14px", marginTop: "4px" }}>{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
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
                    Message *
                  </label>
                  <textarea
                    placeholder="Tell us more about your project..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
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
                  {errors.message && (
                    <p style={{ color: "#EF4444", fontSize: "14px", marginTop: "4px" }}>{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: "#00BCD4",
                    color: "#000000",
                    fontWeight: "bold",
                    height: "56px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "all 0.2s ease",
                    width: "100%",
                  }}
                >
                  <Send style={{ width: "20px", height: "20px" }} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div style={{ marginBottom: "32px" }}>
                <h2
                  style={{
                    fontSize: "clamp(24px, 5vw, 32px)",
                    fontWeight: "bold",
                    color: "white",
                    marginBottom: "16px",
                  }}
                >
                  Get in touch
                </h2>
                <p
                  style={{
                    fontSize: "clamp(14px, 3vw, 16px)",
                    color: "#9CA3AF",
                    lineHeight: "1.6",
                  }}
                >
                  We're here to help and answer any question you might have. We look forward to hearing from you.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
                {/* Email Card */}
                <div
                  style={{
                    backgroundColor: "rgba(31, 41, 55, 0.3)",
                    border: "1px solid #374151",
                    borderRadius: "12px",
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
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
                      flexShrink: 0,
                    }}
                  >
                    <Mail style={{ width: "24px", height: "24px", color: "#000000" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ color: "white", fontWeight: "bold", fontSize: "18px", marginBottom: "4px" }}>
                      Email Us
                    </h3>
                    <p style={{ color: "#9CA3AF", fontSize: "14px", marginBottom: "4px" }}>Send us an email anytime</p>
                    <p style={{ color: "#00BCD4", fontWeight: "bold", fontSize: "16px", wordBreak: "break-all" }}>
                      hello@clixr.com
                    </p>
                  </div>
                  <ArrowRight style={{ width: "20px", height: "20px", color: "#6B7280", flexShrink: 0 }} />
                </div>

                {/* Phone Card */}
                <div
                  style={{
                    backgroundColor: "rgba(31, 41, 55, 0.3)",
                    border: "1px solid #374151",
                    borderRadius: "12px",
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
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
                      flexShrink: 0,
                    }}
                  >
                    <Phone style={{ width: "24px", height: "24px", color: "#000000" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ color: "white", fontWeight: "bold", fontSize: "18px", marginBottom: "4px" }}>
                      Call Us
                    </h3>
                    <p style={{ color: "#9CA3AF", fontSize: "14px", marginBottom: "4px" }}>Mon-Fri from 8am to 5pm</p>
                    <p style={{ color: "#00BCD4", fontWeight: "bold", fontSize: "16px" }}>+1 (555) 123-4567</p>
                  </div>
                  <ArrowRight style={{ width: "20px", height: "20px", color: "#6B7280", flexShrink: 0 }} />
                </div>

                {/* Location Card */}
                <div
                  style={{
                    backgroundColor: "rgba(31, 41, 55, 0.3)",
                    border: "1px solid #374151",
                    borderRadius: "12px",
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
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
                      flexShrink: 0,
                    }}
                  >
                    <MapPin style={{ width: "24px", height: "24px", color: "#000000" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ color: "white", fontWeight: "bold", fontSize: "18px", marginBottom: "4px" }}>
                      Visit Us
                    </h3>
                    <p style={{ color: "#9CA3AF", fontSize: "14px", marginBottom: "4px" }}>
                      Come say hello at our office
                    </p>
                    <p style={{ color: "#00BCD4", fontWeight: "bold", fontSize: "16px" }}>
                      123 Innovation St, Tech City
                    </p>
                  </div>
                  <ArrowRight style={{ width: "20px", height: "20px", color: "#6B7280", flexShrink: 0 }} />
                </div>
              </div>

              {/* Quick Response Card */}
              <div
                style={{
                  backgroundColor: "rgba(31, 41, 55, 0.3)",
                  border: "1px solid #374151",
                  borderRadius: "12px",
                  padding: "20px",
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
                  <Clock style={{ width: "20px", height: "20px", color: "#00BCD4" }} />
                  <h3 style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}>Quick Response</h3>
                </div>
                <p
                  style={{
                    color: "#9CA3AF",
                    fontSize: "14px",
                    lineHeight: "1.5",
                  }}
                >
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
