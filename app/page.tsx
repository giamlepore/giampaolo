import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card" 
import Image from "next/image"
import { Youtube, Newspaper, Instagram } from "lucide-react"
import { TypewriterText } from "@/components/TypeWriterText"

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto p-8 sm:p-10 space-y-6 sm:space-y-8 font-inter">
      {/* Profile Section */}
      <div className="flex flex-col items-start space-y-4">
        <Image
          src="/eu.jpeg"
          alt="Profile picture"
          width={120}
          height={120}
          className="rounded-full"
        />
        <h1 className="text-xl font-bold">Giampaolo (Codando Sem Codar)</h1>
        <div className="space-y-1 text-gray-600 text-base">
          <p>👀 Bora criar aplicativos web sem precisar programar?</p>
          <p>🧙‍♂️ ex-diretor de produto, e criador</p>
        </div>
      </div>

      {/* Free Content Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Conteúdos</h2>
        <div className="grid grid-cols-2 gap-4">
          <a href="https://codandosemcodar.com.br/?utm_campaign=tiktok_bio_perfil" className="block">
            <Card className="aspect-square p-4 sm:p-6 bg-red-50/50 hover:bg-red-50 transition-colors">
              <div className="flex flex-col h-full">
                <div className="bg-gray-700 rounded-full p-1 w-fit mb-2 sm:mb-4">
                  <Image 
                    src="/logo-csc.png"
                    alt="Logo CSC"
                    width={20}
                    height={20}
                    className="text-white"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xs sm:text-sm font-bold mb-1">Conheça minha comunidade + curso:</h3>
                  <TypewriterText 
                    texts={[
                      "+160 alunos",
                      "Crie apps com IA",
                      "Crie novas fontes de renda",
                      "Sua ideia em realidade"
                    ]} 
                    className="text-xs sm:text-sm font-medium mb-1"
                  />
                  <p className="text-[10px] sm:text-xs text-gray-500 truncate">codandosemcodar.com.br</p>
                  <Button className="mt-1 sm:mt-2 bg-orange-500 hover:bg-orange-600 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 h-auto">
                    Conhecer
                  </Button>
                </div>
              </div>
            </Card>
          </a>

          <a href="https://youtube.com/@codandosemcodar?sub_confirmation=1" className="block">
            <Card className="aspect-square p-4 sm:p-6 bg-red-50/50 hover:bg-red-50 transition-colors">
              <div className="flex flex-col h-full">
                <div className="bg-red-500 rounded-lg p-1.5 w-fit mb-2 sm:mb-4">
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xs sm:text-sm font-medium mb-1">Canal do Youtube</h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 mb-1">Conteúdo longo, já se inscreve.</p>
                  <Button className="mt-1 sm:mt-2 bg-red-500 hover:bg-red-600 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 h-auto">
                    Inscrever
                  </Button>
                </div>
              </div>
            </Card>
          </a>

          <a href="https://instagram.com/codandosemcodar" className="block">
            <Card className="aspect-square p-4 sm:p-6 bg-red-50/50 hover:bg-red-50 transition-colors">
              <div className="flex flex-col h-full">
                <div className="bg-pink-500 rounded-lg p-1.5 w-fit mb-2 sm:mb-4">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xs sm:text-sm font-medium mb-1">Instagram (bastidores)</h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 mb-1">Tudo que acontece por trás da telas.</p>
                  <Button className="mt-1 sm:mt-2 bg-pink-500 hover:bg-pink-600 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 h-auto">
                    Seguir
                  </Button>
                </div>
              </div>
            </Card>
          </a>
        </div>
      </div>

      {/* Website Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Meu site</h2>
        <div className="grid grid-cols-1 gap-4">
          <a href="https://codandosemcodar.com.br/?utm_campaign=tiktok_bio_perfil" className="block">
            <Card className="p-4 sm:p-6 bg-blue-50/50 hover:bg-blue-50 transition-colors">
              <div className="flex flex-col h-full">
                <div className="bg-blue-500 rounded-lg p-1.5 w-fit mb-2 sm:mb-4">
                  <Newspaper className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm sm:text-sm font-bold mb-1">codandosemcodar.com.br</h3>
                  <p className="text-[10px] sm:text-xs text-gray-500">Prompts aqui, e aprenda a criar aplicativos web sem precisar programar</p>
                </div>
              </div>
            </Card>
          </a>
        </div>
      </div>

      {/* Tool Recommendations Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Recomendações de Ferramentas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <a href="https://cursor.sh/?ref=tiktok_bio" className="block">
            <Card className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col h-full">
                <img src="https://cursor.sh/favicon.ico" alt="Cursor" className="w-8 h-8 mb-2" />
                <h3 className="font-medium mb-1">Cursor</h3>
                <p className="text-sm text-gray-600">Editor de código com IA</p>
              </div>
            </Card>
          </a>

          <a href="https://lovable.dev/?ref=tiktok_bio" className="block">
            <Card className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col h-full">
                <img src="https://lovable.dev/favicon.ico" alt="Lovable.dev" className="w-8 h-8 mb-2" />
                <h3 className="font-medium mb-1">Lovable.dev</h3>
                <p className="text-sm text-gray-600">Da ideia ao app</p>
              </div>
            </Card>
          </a>

          <a href="https://v0.dev/?ref=tiktok_bio" className="block">
            <Card className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col h-full">
                <img src="https://v0.dev/favicon.ico" alt="" className="w-8 h-8 mb-2" />
                <h3 className="font-medium mb-1">v0.dev</h3>
                <p className="text-sm text-gray-600">Gerador de componentes UI com IA da Vercel</p>
              </div>
            </Card>
          </a>

          <a href="https://bolt.new/?ref=tiktok_bio" className="block">
            <Card className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col h-full">
                <img src="https://bolt.new/favicon.ico" alt="" className="w-8 h-8 mb-2" />
                <h3 className="font-medium mb-1">Bolt.new</h3>
                <p className="text-sm text-gray-600">Crie e compartilhe snippets de código instantaneamente</p>
              </div>
            </Card>
          </a>

          <a href="https://excalidraw.com/?ref=tiktok_bio" className="block">
            <Card className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col h-full">
                <img src="https://excalidraw.com/favicon.ico" alt="Excalidraw" className="w-8 h-8 mb-2" />
                <h3 className="font-medium mb-1">Excalidraw</h3>
                <p className="text-sm text-gray-600">Quadro virtual para fazer diagramas</p>
              </div>
            </Card>
          </a>

          {/* <Card className="p-4">
            <div className="flex flex-col h-full">
              <img src="https://railway.app/favicon.ico" alt="Railway" className="w-8 h-8 mb-2" />
              <h3 className="font-medium mb-1">Railway</h3>
              <p className="text-sm text-gray-600">Plataforma moderna para deploy de apps</p>
              <a href="https://railway.app/?ref=tiktok_bio" className="mt-auto pt-2 text-blue-600 hover:underline text-sm">Acessar</a>
            </div>
          </Card> */}
        </div>
      </div>

          <Card className="p-6 sm:p-8 bg-emerald-700 text-white text-center">
            <p className="text-base sm:text-lg">
              Ferramentas escolhidas e testadas múltiplas vezes pelo próprio Giampaolo
            </p>
          </Card>
        </div>
  )
}

