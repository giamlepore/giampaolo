'use client'

import { useState } from 'react'
import { Twitter, Youtube, Linkedin, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ProjectCard } from '../components/project-card'
import { CourseCard } from '../components/course-card'  
import { ToolCard } from '../components/tool-card'
import { DarkModeToggle } from '../components/dark-mode-toggle'

const projects = [
  {
    icon: "/logo-sbc.png",
    name: "SBC School",
    description: "Curso de Tecnologia para Pessoas de Negócios.",
    subDescription: "Criar autonomia e confiança nos Product Managers para melhores conversas técnicas",
    link: "https://sbcschool.com.br?ref=tiktok_bio"
  },
  {
    icon: "/curio.png",
    name: "Curiô",
    description: "Plataforma para Criadores de Conteúdo",
    subDescription: "Venda cursos online e tenha acesso a melhores dados dos seus usuários, custando uma fração das grandes plataformas",
    link: "https://curso-sbc.vercel.app?ref=tiktok_bio"
  },
  {
    icon: "/habits.png",
    name: "Habits-Two",
    description: "Visualize seus hábitos como nunca",
    subDescription: "Acompanhe hábitos, veja seu progresso e dos seus amigos",
    link: "https://habit-two.vercel.app?ref=tiktok_bio"
  },
 
]

const courses = [
  {
    icon: "/codando.png",
    name: "Guia Prático para Entrevistas com Usuários",
    description: "Como fazer boas perguntas e entender o que o usuário quer.",
    subDescription: "Um guia completo com as melhores práticas para otimizar seu tempo",
    link: "/entrevista.pdf",
    isPdf: true
  },
  {
    icon: "/codando.png",
    name: "O básico para começar a distribuir produtos digitais",
    description: "Não adianta só criar produtos, você precisa saber como distribuir.",
    subDescription: "Aprenda o passo a passo para criar produtos digitais lucrativos",
    link: "/marketing.pdf",
    isPdf: true
  },
  {
    icon: "/logo-sbc.png",
    name: "Tech for Business People",
    description: "Não ensinamos a programar, e sim 10 temas importantes para um PM ou pessoas de negócios entender sobre tecnologia.",
    link: "sbcschool.com.br/technical-product-manager?ref=tiktok_bio",
    available: true
  },
  {
    icon: "/logo-sbc.png",
    name: "Pense, crie e venda produtos digitais do zero",
    description: "Mesmo que não saiba nada sobre programação, você pode criar e vender produtos digitais.",
    link: "www.sbcschool.com.br/como-criar-produtos-do-zero-sem-sorte?ref=tiktok_bio",
    waitlist: true
  },

]

const tools = [
  {
    icon: "https://cursor.sh/favicon.ico",
    name: "Cursor",
    description: "Editor de código com IA",
    link: "https://cursor.sh/?ref=tiktok_bio"
  },
  {
    icon: "https://v0.dev/favicon.ico",
    name: "v0.dev",
    description: "Gerador de componentes UI com IA da Vercel",
    link: "https://v0.dev/?ref=tiktok_bio"
  },
  {
    icon: "https://lovable.dev/favicon.ico",
    name: "Lovable.io",
    description: "Da ideia ao app",
    link: "https://lovable.dev/?ref=tiktok_bio"
  },
  {
    icon: "https://www.gstatic.com/devrel-devsite/prod/v2210075187f059b839246c2c03840474501c3c6024a99fb78f6293c1b4c0f664/cloud/images/favicon.png",
    name: "Google Cloud Console",
    description: "Plataforma de infraestrutura na nuvem",
    link: "https://console.cloud.google.com/?ref=tiktok_bio"
  },
  {
    icon: "https://bolt.new/favicon.ico",
    name: "Bolt.new",
    description: "Crie e compartilhe snippets de código instantaneamente",
    link: "https://bolt.new/?ref=tiktok_bio"
  },
  {
    icon: "https://excalidraw.com/favicon.ico",
    name: "Excalidraw",
    description: "Quadro virtual para fazer diagramas",
    link: "https://excalidraw.com/?ref=tiktok_bio"
  },
  {
    icon: "https://railway.app/favicon.ico",
    name: "Railway",
    description: "Plataforma moderna para deploy de apps",
    link: "https://railway.app/?ref=tiktok_bio"
  },
  {
    icon: "https://github.com/favicon.ico",
    name: "GitHub",
    description: "Plataforma para hospedar e colaborar em código",
    link: "https://github.com/?ref=tiktok_bio"
  },
  {
    icon: "https://www.perplexity.ai/favicon.ico",
    name: "Perplexity",
    description: "Mecanismo de busca com IA",
    link: "https://www.perplexity.ai/?ref=tiktok_bio"
  },
  {
    icon: "https://chat.openai.com/favicon.ico",
    name: "ChatGPT",
    description: "Modelo avançado de linguagem da OpenAI",
    link: "https://chat.openai.com/?ref=tiktok_bio"
  },
  {
    icon: "https://vercel.com/favicon.ico",
    name: "Vercel",
    description: "Plataforma para deploy de frontend",
    link: "https://vercel.com/?ref=tiktok_bio"
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
                src="/eu.jpeg"
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
              {/* <a href="#" className="text-yellow-600 hover:underline dark:text-yellow-400">
                Comece com o fim em mente:
              </a> */}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Compartilho sobre como ter ideias, construir produtos digitais com AI e monetizá-los.  ⚡
            </p>

            {/* <div className="max-w-md mx-auto lg:mx-0 mb-8">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email..."
                  className="flex-1 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                />
                <Button className="dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">Subscribe</Button>
              </form>
            </div> */}

            <div className="flex justify-center lg:justify-start gap-6 mb-8">
              {/* <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                <Twitter className="w-6 h-6" />
              </a> */}
              <a 
                href="https://www.youtube.com/@OGiampaolo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/giampaolo-lepore/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/giampaolo.tech/profilecard/?igsh=MXVvY2gwODhldG1qaQ==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-4 mb-8">
              <a 
                href="https://youtu.be/v3v9hqsJMbQ?si=cAjHg9NdrtWoVm3d"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-md hover:opacity-95 transition-opacity"
              >
                <img 
                  src="/videoprojeto30.jpeg" 
                  alt="Thumbnail do vídeo" 
                  className="w-full rounded-lg shadow-md"
                />
              </a>
              <a 
                href="https://youtu.be/v3v9hqsJMbQ?si=cAjHg9NdrtWoVm3d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <Youtube className="w-5 h-5" />
                Assista agora
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { id: 'apps', text: 'Meus apps/produtos', icon: '🚀' },
                { id: 'courses', text: 'Cursos/Ebooks', icon: '📚' },
                { id: 'tools', text: 'Ferramentas dos Vídeos', icon: '🛠' }
              ].map(({ id, text, icon }) => (
                <button
                  key={id}
                  onClick={() => setSelectedCategory(id)}
                  className={`p-4 rounded-xl transition-all text-center relative overflow-hidden group ${
                    selectedCategory === id
                      ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:scale-105 hover:shadow-lg'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xl block">{icon}</span>
                    <p className="text-xs font-bold">{text}</p>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity ${
                    selectedCategory === id ? 'hidden' : ''
                  }`} />
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

