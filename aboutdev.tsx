"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Github,
  Linkedin,
  Mail,
  FolderOpen,
  Globe,
  ExternalLink,
  ChevronRight,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Code,
  Briefcase,
  Headphones,
  Server,
  Shield,
  Users,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function AboutDeveloper() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 backdrop-blur-sm border-b border-zinc-800">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          BVDW
        </div>
        <div className="flex gap-8">
          <Link href="/" className="text-white hover:text-blue-400 transition-colors duration-300">
            Home
          </Link>
          <Link href="/about" className="text-blue-400 font-medium">
            About
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative group">
              <div className="w-32 h-32 rounded-2xl overflow-hidden mb-6 ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Ben Van Der Weerd"
                  width={128}
                  height={128}
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-black flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ben Van Der Weerd
            </h1>
            <p className="text-xl text-blue-400 mb-4">Cyber Security Engineering Student | Consultant & Analyst</p>
            <div className="flex items-center gap-2 text-gray-400 mb-8">
              <MapPin className="w-4 h-4" />
              <span>Wellington, New Zealand</span>
            </div>
            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              <Button
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 uppercase flex items-center gap-3">
            <div className="w-8 h-1 bg-blue-500"></div>
            Summary
          </h2>
          <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-zinc-700 transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                <p>
                  As an internationally educated student pursuing a Bachelor of Cybersecurity Engineering (Honours) at VUW, 
                  I bring a unique blend of technical expertise, crisis management, and people-first communication to every 
                  challenge I face.
                </p>
                <p>
                  My background spans across cybersecurity, emergency management, first aid, and customer service—including 
                  frontline roles at McDonald's, where I honed my skills in high-pressure environments and learned to manage 
                  complex situations with professionalism and empathy. Whether it's de-escalating difficult customer interactions 
                  or handling critical incidents, I thrive in high-stress environments that demand quick thinking and clear communication.
                </p>
                <p>
                  Combining my cybersecurity studies with hands-on experience in triaging and incident response, I'm passionate 
                  about solving problems under pressure, leading teams through difficult situations, and breaking down complex 
                  issues "pinboard and string style"—tracing problems back to their roots to better understand, respond, and resolve.
                </p>
                <p>
                  I'm a continuous learner and natural investigator, Whether I'm speaking with a client, team member, or stakeholder, 
                  I prioritize clear, thoughtful communication as a critical tool for effective collaboration and success.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 uppercase flex items-center gap-3">
            <div className="w-8 h-1 bg-blue-500"></div>
            Experience
          </h2>
          <div className="space-y-6">
            {/* McDonald's Career Progression */}
            <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-zinc-700 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="McDonald's"
                      width={40}
                      height={40}
                      className="rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">McDonald's New Zealand</h3>
                    <p className="text-gray-400">Career progression in fast-paced retail environment</p>
                  </div>
                </div>

                {/* Current Position */}
                <div className="relative pl-8 border-l-2 border-blue-500 pb-6">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">Shift Manager</h4>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>May 2025 - Present</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-3">
                    Promoted to Fully Qualified manager overseeing Full shifts and consulting on areas for restaurant improvement
                  </p>
                  <ul className="text-gray-400 space-y-1">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                      Apply leadership and team coordination skills to manage high-performing crews
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                      Identify opportunities for cost reduction and operational efficiency
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                      Implement and test new methods and technologies to enhance operations
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                      Focus on delivering exceptional customer experiences
                    </li>
                  </ul>
                </div>

                {/* Previous Position */}
                <div className="relative pl-8 border-l-2 border-gray-600 pb-6">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-600 rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">Management Trainee & Shift Supervisor</h4>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>December 2024 - April 2025</span>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    Expanding skills from being a crew trainer, up-skilling in people management and business continuity skills
                  </p>
                </div>

                {/* Previous Position */}
                <div className="relative pl-8 border-l-2 border-gray-600">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-600 rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">Crew Trainer & Barista</h4>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>August 2023 - February 2024</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-3">
                    Progressed from Crew Member to Crew Trainer within 7 months, recognized for fast learning and strong leadership
                  </p>
                  {expandedSections["mcdonalds"] && (
                    <div className="text-gray-400 space-y-1 animate-in slide-in-from-top duration-300">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                        Trained and led teams across all restaurant sectors, including front counter, drive-thru, kitchen, and customer service
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                        Built skills in customer experience management, conflict resolution, and fast-paced teamwork under pressure
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                        Praised for eagerness to learn and adaptability: "Picking up new things with ease—love your enthusiasm for learning!" – Celina (Restaurant Manager)
                      </li>
                    </div>
                  )}
                  {!expandedSections["mcdonalds"] && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-blue-400 hover:text-blue-300 p-0 mt-2"
                      onClick={() => toggleSection("mcdonalds")}
                    >
                      Show more <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  )}
                  {expandedSections["mcdonalds"] && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-blue-400 hover:text-blue-300 p-0 mt-2"
                      onClick={() => toggleSection("mcdonalds")}
                    >
                      Show less <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Project Korora */}
            <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-zinc-700 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FolderOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Team Lead: Incident Response and Continuity</h3>
                        <p className="text-blue-400 font-medium">Project Kororā</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>May 2025 - Present</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-3">
                      Heading a team of experts on maintaining and monitoring the development of Victoria University of Wellington's first satellite project
                    </p>
                    <div className="text-gray-400">
                      <p className="font-medium mb-2">Key responsibilities:</p>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                          Administrating the Git Organization
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                          Coordinating Incident response with group leaders / Experts
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                          Developing Contingency plans and policies to organize response
                        </li>
                      </ul>
                      {expandedSections["korora"] && (
                        <ul className="space-y-1 mt-2 animate-in slide-in-from-top duration-300">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                            Overseeing code and hardware security
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                            Leading Hybrid Team meetings
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                            Liaising with industry professionals and academics on key issues
                          </li>
                        </ul>
                      )}
                      {!expandedSections["korora"] && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-blue-400 hover:text-blue-300 p-0 mt-2"
                          onClick={() => toggleSection("korora")}
                        >
                          Show more <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      )}
                      {expandedSections["korora"] && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-blue-400 hover:text-blue-300 p-0 mt-2"
                          onClick={() => toggleSection("korora")}
                        >
                          Show less <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* UniServices */}
            <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-zinc-700 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Core Technology Consultant</h3>
                        <p className="text-blue-400 font-medium">UniServices</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>July 2024 - Present</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-3">
                      Re-contracted in Jan 25 as a core Member for the ROS committee, as the only Undergraduate representative
                    </p>
                    <ul className="text-gray-400 space-y-1">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                        Serve as a consultant and committee member within two national research commercialization programmes
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                        Collaborate with a diverse, multidisciplinary team to assess, advise, and support commercialisation
                      </li>
                    </ul>
                    {expandedSections["uniservices"] && (
                      <ul className="space-y-1 mt-2 animate-in slide-in-from-top duration-300">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                          Provide cybersecurity and digital communications insight to universities, research institutions, and private companies
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                          Contribute to the evaluation of early-stage research, helping shape investment and commercialisation strategies
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                          Assist in aligning emerging technologies with market needs, ensuring technical feasibility, security, and strategic direction
                        </li>
                      </ul>
                    )}
                    {!expandedSections["uniservices"] && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-blue-400 hover:text-blue-300 p-0 mt-2"
                        onClick={() => toggleSection("uniservices")}
                      >
                        Show more <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    )}
                    {expandedSections["uniservices"] && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-blue-400 hover:text-blue-300 p-0 mt-2"
                        onClick={() => toggleSection("uniservices")}
                      >
                        Show less <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Victoria Engineering Club */}
            <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-zinc-700 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Head of Victoria Security Engineering Club</h3>
                        <p className="text-blue-400 font-medium">Victoria Engineering Club</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>June 2024 - Present</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-3">
                      Lead the Victoria Security Engineering Club (VSEC), Serve as an Executive Committee Member for VEC, Represent VSEC on the VUW STEM Committee
                    </p>
                    <ul className="text-gray-400 space-y-1">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                        Organize guest speakers, technical workshops, and community events
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                        Deliver and lead educational courses such as ASD EXP, ISC2's Certified in Cybersecurity (CC), and more
                      </li>
                    </ul>
                    {expandedSections["vec"] && (
                      <ul className="space-y-1 mt-2 animate-in slide-in-from-top duration-300">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                          Assist in coordinating large-scale events, including the 2024 STEM Ball
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                          Manage, identify, and report on security risks across VEC and all affiliated daughter/sister clubs
                        </li>
                      </ul>
                    )}
                    {!expandedSections["vec"] && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-blue-400 hover:text-blue-300 p-0 mt-2"
                        onClick={() => toggleSection("vec")}
                      >
                        Show more <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    )}
                    {expandedSections["vec"] && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-blue-400 hover:text-blue-300 p-0 mt-2"
                        onClick={() => toggleSection("vec")}
                      >
                        Show less <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Show More Experience Button */}
            {!expandedSections["moreExperience"] && (
              <Button 
                variant="outline" 
                className="w-full border-blue-400/20 text-blue-400 hover:bg-blue-400/10"
                onClick={() => toggleSection("moreExperience")}
              >
                Show more experience <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}

            {/* Additional Experience */}
            {expandedSections["moreExperience"] && (
              <>
                {/* Victoria University of Wellington */}
                <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-zinc-700 transition-all duration-300 group animate-in slide-in-from-top duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-white">Engineering Tutor</h3>
                            <p className="text-blue-400 font-medium">Victoria University of Wellington</p>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>February 2025 - May 2025</span>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-3">
                          Assist with lesson, tutorial, and assessment preparation for first-year engineering students
                        </p>
                        <ul className="text-gray-400 space-y-1">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                            Deliver clear and engaging tutorials, both in-person and online
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                            Lead helpdesk sessions, providing timely support to students
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                            Maintain in-depth knowledge of course content to align with curriculum and academic goals
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* The MacDiarmid Institute */}
                <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-zinc-700 transition-all duration-300 group animate-in slide-in-from-top duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-white">Digital Communications Advisor</h3>
                            <p className="text-blue-400 font-medium">The MacDiarmid Institute</p>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>May 2024 - December 2024</span>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-3">
                          Analyzed digital communication data and developed strategies that improved the MacDiarmid Institute's online presence
                        </p>
                        <ul className="text-gray-400 space-y-1">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                            Key platforms included Facebook/Meta, Instagram, LinkedIn, Twitter/X, Google Adsense/Analytics
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                            Analysing past performance and advising on improvements
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                            Assisting with investor newsletters and developing monthly newsletters
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                            Providing insight and warning on Cyber Security Risks
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* AjaxIA Security */}
                <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-zinc-700 transition-all duration-300 group animate-in slide-in-from-top duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-white">Founder And Director</h3>
                            <p className="text-blue-400 font-medium">AjaxIA Security</p>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>February 2023 - November 2024</span>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-3">
                          Founded and led a 12-person cybersecurity and digital operations team, launched through the Young Enterprise Scheme (YES)
                        </p>
                        <ul className="text-gray-400 space-y-1">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                            Delivered real-world cybersecurity solutions, IT management, and communications support
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                            Oversaw end-to-end project execution—from client engagement to implementation
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                            Developed a strong community presence by improving digital safety in underserved areas
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Freelance */}
                <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-zinc-700 transition-all duration-300 group animate-in slide-in-from-top duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-white">IT Consultant</h3>
                            <p className="text-blue-400 font-medium">Freelance</p>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>February 2020 - July 2024</span>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-3">
                          Independent tech help hotline (ran as a hobby from age 13 - 17)
                        </p>
                        <ul className="text-gray-400 space-y-1">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                            Providing community-based support and consulting across a wide range of IT issues
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                            Designed, developed, and launched tech applications, including small games and utility tools
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                            Built and debugged hardware setups, custom PCs, and home server environments
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Twitch */}
                <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-zinc-700 transition-all duration-300 group animate-in slide-in-from-top duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Headphones className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-white">Content Creator</h3>
                            <p className="text-blue-400 font-medium">Twitch</p>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>April 2020 - January 2023</span>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-3">
                          Ran and managed a live-streaming channel with ~6 million content impressions and ~2 million total views
                        </p>
                        <ul className="text-gray-400 space-y-1">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                            Grew and maintained an engaged community of ~10,000 followers and ~100 average live viewers
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                            Led a small digital team, coordinated moderation efforts, and oversaw all administrative tasks
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                            Executed brand partnerships, sponsorships, and social media marketing strategies
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button 
                  variant="outline" 
                  className="w-full border-blue-400/20 text-blue-400 hover:bg-blue-400/10"
                  onClick={() => toggleSection("moreExperience")}
                >
                  Show less experience <ChevronRight className="w-4 h-4 ml-2 rotate-90" />
                </Button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 uppercase flex items-center gap-3">
            <div className="w-8 h-1 bg-blue-500"></div>
            Projects
          </h2>
          <div className="space-y-6">
            <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-zinc-700 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FolderOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">Project Kororā</h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>May - Present</span>
                      </div>
                    </div>
                    <p className="text-blue-400 font-medium mb-2">
                      <Link href="https://projectkorora.space/" className="flex items-center gap-1 hover:underline">
                        projectkorora.space <ExternalLink className="w-3 h-3" />
                      </Link>
                    </p>
                    <p className="text-gray-300 mb-3">
                      Victoria University of Wellington's first satellite project
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-zinc-700 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">Home Network</h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>Nov 2024 - Present</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-3">
                      Managed and optimized a network of 15 devices, including 3 servers, 5 tower PCs, and 7 laptops running a mix of Windows, macOS, and Linux
                    </p>
                    <div className="text-gray-400">
                      <p className="font-medium mb-2">Technologies mastered:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-blue-400" />
                          <span>Linux Command Line</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-blue-400" />
                          <span>PowerShell scripting</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-blue-400" />
                          <span>OpenSSH configuration</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-blue-400" />
                          <span>RSA encryption</span>
                        </div>
                      </div>
                      {expandedSections["homeNetwork"] && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 animate-in slide-in-from-top duration-300">
                          <div className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-blue-400" />
                            <span>NAS (Network Attached Storage)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-blue-400" />
                            <span>Home media streaming</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-blue-400" />
                            <span>Docker containerization</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-blue-400" />
                            <span>Bash scripting</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-blue-400" />
                            <span>System diagnostics</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-blue-400" />
                            <span>Remote Desktop streaming</span>
                          </div>
                        </div>
                      )}
                      {!expandedSections["homeNetwork"] && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-blue-400 hover:text-blue-300 p-0 mt-2"
                          onClick={() => toggleSection("homeNetwork")}
                        >
                          Show more <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      )}
                      {expandedSections["homeNetwork"] && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-blue-400 hover:text-blue-300 p-0 mt-2"
                          onClick={() => toggleSection("homeNetwork")}
                        >
                          Show less <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 uppercase flex items-center gap-3">
            <div className="w-8 h-1 bg-blue-500"></div>
            Education
          </h2>
          <div className="space-y-6">
            <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-zinc-700 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        Bachelor of Engineering (Honours) - BE(Hons), Cyber Security
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>2024 - 2027</span>
                      </div>
                    </div>
                    <p className="text-blue-400 font-medium mb-2">Victoria University of Wellington</p>
                    <p className="text-gray-400 mb-3">
                      Bachelor Of Cyber Security Engineering (Honors) (Washington Accord)
                    </p>
                    <div className="text-gray-400">
                      <p className="font-medium mb-2">Specialization:</p>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-0.5 text-blue-400" />
                          Incident Response & continuity along with Encryption
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-zinc-700 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-amber-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        NCEA Level 2,3 & UE, Various
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>February 2023 - November 2023</span>
                      </div>
                    </div>
                    <p className="text-blue-400 font-medium mb-2">Te Puke High School</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-zinc-700 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        International General Certificate of Secondary Education, IGCSE
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>February 2010 - February 2023</span>
                      </div>
                    </div>
                    <p className="text-blue-400 font-medium mb-2">International School Brunei</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Awards Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 uppercase flex items-center gap-3">
            <div className="w-8 h-1 bg-blue-500"></div>
            Certifications & Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" />
                Certifications
              </h3>
              <div className="space-y-3">
                <div className="p-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all duration-300">
                  <h4 className="font-medium text-white">Advanced Open Water Scuba Diver</h4>
                </div>
                <div className="p-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all duration-300">
                  <h4 className="font-medium text-white">Youth Mental Health First Aid</h4>
                </div>
                <div className="p-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all duration-300">
                  <h4 className="font-medium text-white">NCEA 1 & 2 With Excellence</h4>
                </div>
                <div className="p-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all duration-300">
                  <h4 className="font-medium text-white">Restaurant Manager/Food & Beverage Manager L4</h4>
                  <p className="text-gray-400 text-sm">Toi Ohomai Institute of Technology · 2025</p>
                </div>
                <div className="p-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all duration-300">
                  <h4 className="font-medium text-white">NCEA 3 With Merit</h4>
                </div>
                <div className="p-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all duration-300">
                  <h4 className="font-medium text-white">Adult and Pediatric First Aid/CPR/AED</h4>
                  <p className="text-gray-400 text-sm">Hato Hone St John · 2025-2027</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" />
                Honors & Awards
              </h3>
              <div className="space-y-3">
                <div className="p-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all duration-300">
                  <h4 className="font-medium text-white">Dux of Business Studies 2023</h4>
                </div>
                <div className="p-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all duration-300">
                  <h4 className="font-medium text-white">Year 13 High Academic Achievement Award</h4>
                </div>
                <div className="p-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all duration-300">
                  <h4 className="font-medium text-white">Runner up, BizVenture Alumni Business challenge</h4>
                </div>
                <div className="p-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all duration-300">
                  <h4 className="font-medium text-white">Bronze Hat for Top Manager</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 uppercase flex items-center gap-3">
            <div className="w-8 h-1 bg-blue-500"></div>
            Skills / Stack
          </h2>
          <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Cyber Security",
                  "Customer Service",
                  "Incident Response",
                  "Consulting",
                  "Network Security",
                  "Linux & Windows Server Management",
                  "Administration",
                  "Business Continuity",
                ].map((skill) => (
                  <div 
                    key={skill} 
                    className="p-3 bg-zinc-800/50 rounded-lg text-white text-center hover:bg-zinc-700/50 transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-zinc-800/50 rounded-lg text-white">
                    English - Fluent
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 uppercase flex items-center gap-3">
            <div className="w-8 h-1 bg-blue-500"></div>
            Contact
          </h2>
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-blue-500/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-lg hover:bg-zinc-800/50 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">benv2007@hotmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-lg hover:bg-zinc-800/50 transition-colors duration-300">
                  <Zap className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+64 274100649</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-lg hover:bg-zinc-800/50 transition-colors duration-300">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <p className="text-white">/in/ben-vandw</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-lg hover:bg-zinc-800/50 transition-colors duration-300">
                  <Github className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <p className="text-white">@benvandw</p>
                  </div>
                </div>
              </div>

              <div\
