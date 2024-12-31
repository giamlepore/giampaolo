'use client'

import { useState } from 'react'
import { Twitter, Youtube, Linkedin, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ProjectCard } from './components/project-card'
import { CourseCard } from './components/course-card'
import { ToolCard } from './components/tool-card'
import { DarkModeToggle } from './components/dark-mode-toggle'

const projects = [
  {
    icon: "🌱",
    name: "Habits Garden",
    description: "Fight procrastination with a gamified habit tracker",
    link: "#",
    price: "$70/mo"
  },
  {
    icon: "🚀",
    name: "LaunchViral",
    description: "Grow your startup with viral launch videos",
    link: "#",
    price: "$5k/mo"
  },
  {
    icon: "⚡",
    name: "LogoFast",
    description: "Make beautiful logos with AI, fast & free",
    link: "#"
  },
  {
    icon: "🎮",
    name: "Gamify List",
    description: "The best gamification apps to achieve your goals",
    link: "#"
  },
  {
    icon: "🎯",
    name: "Insighto",
    description: "Build features users (really) want",
    link: "#"
  },
  {
    icon: "ʋ",
    name: "50 Hacks",
    description: "The top 50 productivity tips chosen by the internet",
    link: "#"
  },
]

const courses = [
  {
    icon: "📚",
    name: "AI Product Development",
    description: "Learn to build AI-powered products from scratch",
    link: "#",
    price: "$199"
  },
  {
    icon: "💡",
    name: "Idea Validation Masterclass",
    description: "Turn your ideas into viable products",
    link: "#",
    price: "$149"
  },
  {
    icon: "🚀",
    name: "Launch Your SaaS",
    description: "Step-by-step guide to launching your SaaS product",
    link: "#",
    price: "$299"
  },
]

const tools = [
  {
    icon: "🎨",
    name: "Canva",
    description: "Easy-to-use design tool for thumbnails and graphics",
    link: "https://www.canva.com/"
  },
  {
    icon: "🎬",
    name: "DaVinci Resolve",
    description: "Professional video editing software",
    link: "https://www.blackmagicdesign.com/products/davinciresolve/"
  },
  {
    icon: "🎙️",
    name: "Audacity",
    description: "Free, open source audio editing software",
    link: "https://www.audacityteam.org/"
  },
]

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState('apps')

  const renderContent = () => {
    switch (selectedCategory) {
      case 'apps':
        return projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))
      case 'courses':
        return courses.map((course, i) => (
          <CourseCard key={i} {...course} />
        ))
      case 'tools':
        return tools.map((tool, i) => (
          <ToolCard key={i} {...tool} />
        ))
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <DarkModeToggle />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[400px,1fr] gap-16">
          <div className="text-center lg:text-left lg:max-w-[400px]">
            <div className="w-32 h-32 mx-auto lg:mx-0 mb-6">
              <img
                src="/placeholder.svg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold mb-2 dark:text-white">Giampaolo Lepore</h1>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 dark:text-gray-300 mb-4">
              <span>📍 Brasil</span>
              <span>🎯 ex-diretor de produto</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">
              "Não quero depender de apenas uma fonte de renda."
            </p>
            <p className="mb-6 dark:text-white">
              <span className="font-semibold">+50</span> produtos lançados{" "}
              <a href="#" className="text-yellow-600 hover:underline dark:text-yellow-400">
                Comece com o fim em mente:
              </a>
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Compartilho sobre como ter ideias, construir produtos digitais com AI e monetizá-los.  ⚡
            </p>

            <div className="max-w-md mx-auto lg:mx-0 mb-8">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email..."
                  className="flex-1 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                />
                <Button className="dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">Subscribe</Button>
              </form>
            </div>

            <div className="flex justify-center lg:justify-start gap-6 mb-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { id: 'apps', text: 'Meus apps/produtos' },
                { id: 'courses', text: 'Cursos' },
                { id: 'tools', text: 'Ferramentas dos Vídeos' }
              ].map(({ id, text }) => (
                <button
                  key={id}
                  onClick={() => setSelectedCategory(id)}
                  className={`p-4 rounded-xl shadow-sm hover:shadow-md transition-all text-center ${
                    selectedCategory === id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white'
                  }`}
                >
                  <p className="text-sm font-medium">{text}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

