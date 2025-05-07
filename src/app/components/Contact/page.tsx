// pages/contact.tsx or contact.jsx
import Head from 'next/head';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
        <div className="max-w-xl w-full p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
        <div className='flex items-center'>
    
        <Link href="/"><button className="mb-4 flex pr-20 text-blue-600 hover:text-blue-800 transition">
            <ArrowLeft className="w-5 h-5 mr-2"/>
            </button></Link>
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Contact Me</h1>
        </div>
          <p className="mb-6 text-gray-600 dark:text-gray-300">Reach out to me and lets get to work! Send a message below:</p>
          <form action="https://formspree.io/f/xgvkkrgq" method="POST" className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
