"use client";

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaFileDownload } from 'react-icons/fa';

// Replace with your information
const personalInfo = {
  name: "Your Name",
  title: "Your Title / Role",
  tagline: "Your professional tagline goes here",
  description: "I'm a passionate [your profession] with [X years] of experience specializing in [your specialty]. I combine creativity and technical expertise to deliver exceptional results for my clients and teams.",
  photo: "/profile-photo.jpg",
  skills: ["JavaScript", "React", "Next.js", "Tailwind CSS", "UI/UX Design", "Node.js", "Git"],
  interests: ["Photography", "Hiking", "Reading", "Playing Guitar", "Travel"],
  social: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourhandle",
    email: "your.email@example.com"
  },
  resumeLink: "/your-resume.pdf",
  journey: "I began my career in [field/year], where I discovered my passion for [specialty]. Since then, I've worked with [types of clients/companies], helping them [achievements]. My approach combines [your methodology] with [your strengths].",
  philosophy: "I believe in [your professional philosophy]. My work is guided by principles of [your values], and I'm constantly seeking opportunities to [your goals].",
  education: [
    {
      degree: "Your Degree",
      field: "Your Field of Study",
      school: "University Name",
      year: "20XX - 20XX"
    }
  ],
  experience: [
    {
      position: "Your Position",
      company: "Company Name",
      period: "Month Year - Present",
      description: "Brief description of your responsibilities and achievements"
    },
    {
      position: "Previous Position",
      company: "Previous Company",
      period: "Month Year - Month Year",
      description: "Brief description of your responsibilities and achievements"
    }
  ],
  testimonials: [
    {
      quote: "Working with [Your Name] was an excellent experience. Their expertise in [skill] helped us achieve [result].",
      author: "Client/Colleague Name",
      title: "Position, Company"
    }
  ],
  projects: [
    {
      title: "Project Name",
      description: "Brief description of the project and your role in it",
      link: "/projects/project-1"
    }
  ]
};

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState('professional');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About Me | {personalInfo.name}</title>
        <meta name="description" content={`About ${personalInfo.name} - ${personalInfo.tagline}`} />
      </Head>
      
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="font-bold text-xl text-blue-600">
            <Link href="/">
              <div>{personalInfo.name.split(' ')[0]}&apos;s Portfolio</div>
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link href="/">
              <div className="text-gray-700 hover:text-blue-600 transition-colors">Home</div>
            </Link>
            <Link href="/about">
              <div className="text-blue-600 font-medium">About Me</div>
            </Link>
            <Link href="/works">
              <div className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Works</div>
            </Link>
            <Link href="/contact">
              <div className="text-gray-700 hover:text-blue-600 transition-colors">Contact</div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={personalInfo.photo}
                alt={personalInfo.name}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{personalInfo.name}</h1>
            <h2 className="text-xl md:text-2xl mb-4">{personalInfo.title}</h2>
            <p className="text-lg md:text-xl mb-6 opacity-90">{personalInfo.tagline}</p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                <div className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all p-3 rounded-full">
                  <FaLinkedin className="text-xl" />
                </div>
              </Link>
              <Link href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
                <div className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all p-3 rounded-full">
                  <FaGithub className="text-xl" />
                </div>
              </Link>
              <Link href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer">
                <div className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all p-3 rounded-full">
                  <FaTwitter className="text-xl" />
                </div>
              </Link>
              <Link href={`mailto:${personalInfo.social.email}`}>
                <div className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all p-3 rounded-full">
                  <FaEnvelope className="text-xl" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex overflow-x-auto space-x-6 justify-center">
            <button 
              onClick={() => setActiveTab('professional')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'professional' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Professional
            </button>
            <button 
              onClick={() => setActiveTab('personal')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'personal' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Personal
            </button>
            <button 
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'experience' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Experience
            </button>
            <button 
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'education' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Education
            </button>
            <button 
              onClick={() => setActiveTab('testimonials')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'testimonials' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Testimonials
            </button>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          {/* Professional Tab */}
          {activeTab === 'professional' && (
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Professional Background</h2>
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">About Me</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{personalInfo.description}</p>
                <p className="text-gray-600 leading-relaxed">{personalInfo.journey}</p>
              </div>
              
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Professional Philosophy</h3>
                <p className="text-gray-600 leading-relaxed">{personalInfo.philosophy}</p>
              </div>
              
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.skills.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                <Link href={personalInfo.resumeLink}>
                  <div className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                    <FaFileDownload />
                    <span>Download Resume</span>
                  </div>
                </Link>
              </div>
            </div>
          )}
          
          {/* Personal Tab */}
          {activeTab === 'personal' && (
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Beyond Work</h2>
              
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Interests & Hobbies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-medium text-lg mb-3 text-gray-800">What I Enjoy</h4>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.interests.map((interest, index) => (
                        <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-medium text-lg mb-3 text-gray-800">Personal Projects</h4>
                    <p className="text-gray-600">
                      When I&apos;m not working, I enjoy [describe your personal projects or activities]. 
                      These pursuits help me stay creative and bring fresh perspectives to my professional work.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Fun Facts</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                  <li>Fun fact about yourself</li>
                  <li>Another interesting tidbit</li>
                  <li>Something unexpected about you</li>
                  <li>A hidden talent or quirky habit</li>
                </ul>
              </div>
            </div>
          )}
          
          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Work Experience</h2>
              
              <div className="space-y-8">
                {personalInfo.experience.map((job, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-800">{job.position}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-gray-600 mb-2">
                      <span className="font-medium">{job.company}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                      <span>{job.period}</span>
                    </div>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Featured Projects</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {personalInfo.projects.map((project, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg mb-2 text-gray-800">{project.title}</h4>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <Link href={project.link}>
                        <div className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                          View Project
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Education & Training</h2>
              
              <div className="space-y-8">
                {personalInfo.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-800">{edu.degree} in {edu.field}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-gray-600 mb-2">
                      <span className="font-medium">{edu.school}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                      <span>{edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Certifications & Courses</h3>
                <p className="text-gray-600 mb-6">
                  In addition to my formal education, I&apos;ve completed the following certifications and courses:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                    <li>Certification Name, Issuing Organization (Year)</li>
                    <li>Course Name, Platform (Year)</li>
                    <li>Workshop or Bootcamp, Provider (Year)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {/* Testimonials Tab */}
          {activeTab === 'testimonials' && (
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">What People Say</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {personalInfo.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <svg className="w-10 h-10 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                    <div>
                      <p className="font-medium text-gray-800">{testimonial.author}</p>
                      <p className="text-gray-500 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-medium mb-2 text-blue-800">Let&apos;s Work Together</h3>
                <p className="text-blue-700 mb-4">
                  Interested in collaborating or learning more about my work? I&apos;d love to hear from you!
                </p>
                <Link href={`mailto:${personalInfo.social.email}`}>
                  <div className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg inline-block transition-colors">
                    Get in Touch
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">{personalInfo.name}</h3>
              <p className="text-gray-400">{personalInfo.title}</p>
            </div>
            
            <div className="flex space-x-6">
              <Link href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                <div className="hover:text-blue-400 transition-colors">
                  <FaLinkedin className="text-xl" />
                </div>
              </Link>
              <Link href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
                <div className="hover:text-blue-400 transition-colors">
                  <FaGithub className="text-xl" />
                </div>
              </Link>
              <Link href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer">
                <div className="hover:text-blue-400 transition-colors">
                  <FaTwitter className="text-xl" />
                </div>
              </Link>
              <Link href={`mailto:${personalInfo.social.email}`}>
                <div className="hover:text-blue-400 transition-colors">
                  <FaEnvelope className="text-xl" />
                </div>
              </Link>
            </div>
          </div>
          
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}