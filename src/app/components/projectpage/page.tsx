
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react"; // Importing ArrowLeft icon from lucide-react

const projects = [
  {
    title: "Loopstudios",
    description: "Loopstudios is a responsive landing page I developed to showcase immersive VR experiences. Built with modern frontend tools, it emphasizes clean design, interactive visuals, and mobile-first responsiveness.",
    link: "https://yourportfolio.com",
  },
  {
    title: "KORE",  
    description: "a twitter clone built with Next.js and Tailwind CSS.",
    link: "https://kore-six.vercel.app/",
  },
  {
    title: "Ilearnovate",
    description: "iLearnovate is a free learning platform I built to provide accessible tech education, mentorship, and community support for aspiring developers in Africa.",
    link: "https://valueconnnect.vercel.app/",
  },
  
  { 
    title: "Brainiac",
    description: "Brainiac Game is an interactive quiz platform I'm currently developing, featuring real-time scoring, multiplayer challenges, and a dynamic leaderboard to make learning engaging and competitive.",
    link: "https://brainiac-game.vercel.app/",
  },
  
  {
    title: "Tonemarks",
    description: "Tonemarks is an AI-powered platform I helped develop to enhance language accessibility through text-to-speech, speech-to-text, translation, and chatbot tools—focused on low-resource languages like Yoruba.",
    link: "https://yoruba-ai-kappa.vercel.app/",
  },
  
  {
    title: "Youtube-clone",
    description: "A practice YouTube landing page I built using HTML and CSS, designed to be fully responsive across all screen sizes.",
    link: "https://valueconnnect.vercel.app/",
  },
  
];

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen p-6 bg-gray-800 text-gray-800">
      {/* Back Arrow */}
      <button
        onClick={() => router.back()}
        className="flex items-center text-sm text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft className="w-4 text-white h-4 mr-2" />
        Back
      </button>

      
      <h1 className="text-5xl font-extrabold text-white mb-8 text-center">My Projects</h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
          >
            <h2 className="text-xl  font-semibold mb-2">{project.title}</h2>
            <p className="text-sm text-gray-600">{project.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
