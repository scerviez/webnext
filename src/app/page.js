// pages/index.js
// This is the home page component
"use client";
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { FaPython, FaReact, FaNodeJs, FaGit } from 'react-icons/fa'
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { createContext } from 'react'
import Link from 'next/link'

// Define some constants
const name = 'Farih Fadlullah Dzaky' // Your name
const bio = 'Ganteng ' // Description about yourself
//const photo = './photo.jpg' // Your photo URL
const skills = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'Next.js', icon: <TbBrandNextjs /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Git', icon: <FaGit /> },
]
const socials = [
  { name: 'Instagram', icon: <AiFillInstagram />, url: 'https://instagram.com/username' },
  { name: 'GitHub', icon: <AiFillGithub />, url: 'https://github.com/username' },
  { name: 'LinkedIn', icon: <AiFillLinkedin />, url: 'https://linkedin.com/in/username' },
] // Your social media links

// Define some animation variants
const photoVariants = {
  hidden: { x: -200, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
}
const bioVariants = {
  hidden: { x: 200, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
}
const skillVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
}
const socialVariants = {
  hidden: { scale: 0 },
  visible: (i) => ({
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
  hover: { scale: 1.2, rotate: 10 },
}

// Define the default export component
export default function Home() {
  // Use media query to check if the device is mobile or not
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Portfolio Website</title>
        <meta name="description" content="A portfolio website made with Next.js, Framer Motion, DaisyUI, and React Spring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <nav className={`navbar mb-2 shadow-lg bg-neutral text-neutral-content ${isMobile ? 'mobile-nav' : 'desktop-nav'}`}>
        <div className="flex-none px-2 mx-2">
          <span className="text-lg font-bold">{name}</span>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="items-stretch hidden lg:flex">
            <Link href="/conemail">
              <div className="btn btn-ghost btn-sm rounded-btn">
                Contact Email
              </div>
            </Link>
            <Link href="/api">
              <div className="btn btn-ghost btn-sm rounded-btn">
                API
              </div>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.div
            className="w-64 h-64 rounded-full overflow-hidden shadow-lg"
            variants={photoVariants}
            initial="hidden"
            animate="visible"
          >
            <Image src="/photo.jpg" alt={name} width={256} height={256} />
          </motion.div>
          <motion.div
            className="md:ml-8 mt-4 md:mt-0 text-center md:text-left"
            variants={bioVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
            <p className="text-lg text-gray-600">{bio}</p>
          </motion.div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Learning Language</h2>
          <div className="flex flex-wrap justify-center mt-8">
            {skills.map((skill, i) => (
              <motion.div
                className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg m-4"
                key={skill.name}
                variants={skillVariants}
                custom={i}
                initial="hidden"
                animate="visible"
              >
                <div className="text-6xl text-gray-800">{skill.icon}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-wrap justify-center">
          {socials.map((social, i) => (
            <motion.a
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg m-4"
              key={social.name}
              variants={socialVariants}
              custom={i}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-4xl text-gray-800">{social.icon}</div>
            </motion.a>
          ))}
        </div>
      </main>
    </div>
  )
}
