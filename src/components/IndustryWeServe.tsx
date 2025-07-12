
import {
  Heart,
  Truck,
  Plane,
  Gamepad,
  Users,
  Calendar,
  Bike,
  Building,
  BookOpen,
  Utensils,
  Car,
  Banknote,
  Factory,
  Fuel,
  Shield,
  Music,
  Cloud,
  Zap,
  Wheat,
  ShoppingCart,
  ArrowRight,
} from "lucide-react"

const industriesData = [
  {
    id: "01",
    title: "Logistics",
    description:
      "We develop cutting-edge software for the logistics industry, including supply chain software with AI/ML-enabled predictive analytics, helping them serve their customers across the globe.",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1565610222500-d687775798b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: Warehouse
  },
  {
    id: "02",
    title: "Healthcare",
    description:
      "We understand the instant benefits of digitalizing medical care and help healthcare organizations realize them while ensuring critical compliances like HIPAA and others.",
    icon: Heart,
    image:
      "https://images.unsplash.com/photo-1584820927466-039218070158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: Doctor and patient
  },
  {
    id: "03",
    title: "Travel",
    description:
      "From booking platforms to personalized itinerary builders, we create seamless travel experiences that delight users and streamline operations for businesses.",
    icon: Plane,
    image:
      "https://images.unsplash.com/photo-1528164344705-4779cd5385a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: Airport/Travel
  },
  {
    id: "04",
    title: "Gaming",
    description:
      "Our expertise in game development spans across various platforms, delivering immersive and engaging gaming experiences that captivate audiences worldwide.",
    icon: Gamepad,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38148e727?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: Gaming setup
  },
  {
    id: "05",
    title: "Sports",
    description:
      "The sports industry requires immersive and engaging UI/UX that we excel in developing. We help leaders launch or scale sports businesses using our technology expertise in the industry.",
    icon: Bike,
    image:
      "https://images.unsplash.com/photo-1579952962644-e0129887789b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: Athlete
  },
  {
    id: "06",
    title: "On-demand",
    description:
      "We develop on-demand apps for any industry by using the best technology available. Whatever your requirement might be, we can create an on-demand app for you as and when you need it.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b70bbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: Delivery service
  },
  {
    id: "07",
    title: "Events",
    description:
      "We develop software for the event management industry allowing users to manage their events on the go in real-time.",
    icon: Calendar,
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f5792d7c5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: Concert/Event
  },
  {
    id: "08",
    title: "Real Estate",
    description:
      "Transforming the real estate landscape with innovative digital solutions, from property management systems to immersive virtual tours.",
    icon: Building,
    image:
      "https://images.unsplash.com/photo-1560518883-ffcd14a65042?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: Modern building
  },
]

const industriesDataWhite = [
    {
        id: "09",
        title: "Education",
        description:
          "Empowering learning with cutting-edge educational technology, including e-learning platforms, virtual classrooms, and interactive content delivery systems.",
        icon: BookOpen,
        image:
          "https://images.unsplash.com/photo-1546410531-bb448c51d502?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: Classroom/Learning
      },
      {
        id: "10",
        title: "Restaurant",
        description:
          "Revolutionizing the food service industry with digital solutions, from online ordering systems to restaurant management software and customer loyalty programs.",
        icon: Utensils,
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: Restaurant interior
      },
      {
        id: "11",
        title: "Automotive",
        description:
          "Driving innovation in the automotive sector with advanced software for vehicle diagnostics, infotainment systems, and connected car technologies.",
        icon: Car,
        image:
          "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: Car manufacturing
      },
      {
        id: "12",
        title: "Finance",
        description:
          "Securing and streamlining financial operations with robust fintech solutions, including secure payment gateways, banking apps, and investment platforms.",
        icon: Banknote,
        image:
          "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: Financial data
      },
      {
        id: "13",
        title: "Manufacturing",
        description:
          "Optimizing production processes and supply chains with smart manufacturing solutions, including IoT integration, automation, and data analytics for efficiency.",
        icon: Factory,
        image:
          "https://images.unsplash.com/photo-1581092910216-a6707602217b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: Factory floor
      },
      {
        id: "14",
        title: "Oil and Gas",
        description:
          "Providing advanced software solutions for the energy sector, including exploration, production optimization, and safety management systems.",
        icon: Fuel,
        image:
          "https://images.unsplash.com/photo-1533247407677-037759967390?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: Oil rig
      },
      {
        id: "15",
        title: "Insurance",
        description:
          "Modernizing the insurance industry with digital platforms for policy management, claims processing, and personalized customer experiences.",
        icon: Shield,
        image:
          "https://images.unsplash.com/photo-1570129476871-f730205e1e98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: Insurance concept
      },
      {
        id: "16",
        title: "Entertainment",
        description:
          "Creating captivating digital experiences for the entertainment industry, from streaming platforms to interactive content and virtual reality applications.",
        icon: Music,
        image:
          "https://images.unsplash.com/photo-1514525253164-ffc02002d790?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: Concert stage
      },
      {
        id: "17",
        title: "SaaS",
        description:
          "Building scalable and robust Software as a Service (SaaS) platforms tailored to various business needs, ensuring seamless user experience and high performance.",
        icon: Cloud,
        image:
          "https://images.unsplash.com/photo-1551288259-cd11ad71052f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: Cloud computing
      },
      {
        id: "18",
        title: "Electric Vehicle (EV)",
        description:
          "Driving the future of mobility with innovative software for electric vehicles, including charging infrastructure management, battery optimization, and smart navigation.",
        icon: Zap,
        image:
          "https://images.unsplash.com/photo-1621961400229-01961307131c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: EV charging
      },
      {
        id: "19",
        title: "eCommerce",
        description:
          "Developing powerful e-commerce solutions that drive sales and enhance customer experience, including online stores, payment integrations, and inventory management.",
        icon: ShoppingCart,
        image:
          "https://images.unsplash.com/photo-1561052962-c41e18719d0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: Online shopping
      },
      {
        id: "20",
        title: "Agriculture",
        description:
          "Innovating the agricultural sector with smart farming solutions, including crop monitoring, precision agriculture, and supply chain optimization.",
        icon: Wheat,
        image:
          "https://images.unsplash.com/photo-1530836203-e115910f12a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dummy AI image: Farm field
      },
    
]

const IndustriesWeServe = () => {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
      
      <section className="relative bg-black text-white py-20 md:py-32 overflow-hidden">
      {/* Background gradient/blur effect */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 25% 75%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
          filter: "blur(100px)",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">INDUSTRIES</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Preferred Transformation Partner of Global Leaders in <span className="text-blue-500">EV</span>
            </h1>
            <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span className="flex items-center gap-2">
                Consult Our Experts
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Right Logos */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              {/* SemaConnect */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-gray-900 rounded-xl flex items-center justify-center border border-gray-800 shadow-lg overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1621961400229-01961307131c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for SemaConnect
                  alt="SemaConnect Logo"
                //   fill
                  style={{ objectFit: "cover" }}
                  className="opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                />
                <span className="relative z-10 text-white text-lg font-semibold">SemaConnect</span>
                <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Matter */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-gray-900 rounded-xl flex items-center justify-center border border-gray-800 shadow-lg overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1581092910216-a6707602217b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for Matter
                  alt="Matter Logo"
                //   fill
                  style={{ objectFit: "cover" }}
                  className="opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                />
                <span className="relative z-10 text-white text-lg font-semibold">Matter</span>
                <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Bolt */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-gray-900 rounded-xl flex items-center justify-center border border-gray-800 shadow-lg overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1533247407677-037759967390?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for Bolt
                  alt="Bolt Logo"
                //   fill
                  style={{ objectFit: "cover" }}
                  className="opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                />
                <span className="relative z-10 text-white text-lg font-semibold">BOLT</span>
                <div className="absolute inset-0 bg-green-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Moo */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-gray-900 rounded-xl flex items-center justify-center border border-gray-800 shadow-lg overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1561052962-c41e18719d0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for Moo
                  alt="Moo Logo"
                //   fill
                  style={{ objectFit: "cover" }}
                  className="opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                />
                <span className="relative z-10 text-white text-lg font-semibold">moo®</span>
                <div className="absolute inset-0 bg-gray-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        {/* "We Work with Clients" Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight mb-4">
            We Work with Clients Developing Industry-Leading Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
            Our experience has enabled us to serve some of the best companies across industries and geographies. Here's
            a snapshot of the same.
          </p>
        </div>

        {/* "Industries We Serve" Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
            Delivering value to multiple industries, we innovate industry-specific technologies to scale and optimize
            operations and bottom line.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {industriesData.map((industry) => (
            <div
              key={industry.id}
              className="group relative bg-gray-950 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-60 md:h-72">
                <img
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.title}
                //   fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/50 text-white text-sm font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                  {industry.id}
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{industry.title}</h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* {white grid } */}

        <div className="grid grid-cols-1 md:grid-cols-4 mt-8 gap-8 md:gap-12 bg-white p-8">
          {industriesDataWhite.map((industry) => (
            <div
              key={industry.id}
              className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-full h-60 md:h-72">
                <img
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.title}
                //   fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 text-gray-400 text-lg font-semibold">{industry.id}</div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-600 rounded-md flex items-center justify-center shadow-lg">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">{industry.title}</h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>


        {/* Preferred Transformation Partner Section (Optional, based on image 4) */}
        <div className="mt-20 md:mt-32 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          <div className="lg:max-w-xl text-center lg:text-left">
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">Industries</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight mb-6">
              Preferred Transformation Partner of Global Leaders in <span className="text-blue-500">EV</span>
            </h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 mx-auto lg:mx-0">
              Consult Our Experts <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {/* Placeholder for company logos */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 shadow-lg">
              <span className="text-gray-500 text-sm">Logo 1</span>
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 shadow-lg">
              <span className="text-gray-500 text-sm">Logo 2</span>
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 shadow-lg">
              <span className="text-gray-500 text-sm">Logo 3</span>
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 shadow-lg">
              <span className="text-gray-500 text-sm">Logo 4</span>
            </div>
          </div>
        </div>
          {/* Top CTA Section */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-950 border border-blue-600/50 rounded-xl p-8 md:p-12 text-center mb-20 md:mb-32 shadow-lg mt-20">
          <p className="text-xl md:text-2xl font-medium text-white mb-6 leading-relaxed">
            Digitally transform your business' potential with industry-best development services
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 mx-auto">
            Connect with an Expert <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default IndustriesWeServe