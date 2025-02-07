import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card" 
import Image from "next/image"
import { Youtube, Newspaper } from "lucide-react"

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
        <h2 className="text-lg font-semibold">Conteúdos Gratuitos</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card className="aspect-square p-4 sm:p-6 bg-red-50/50">
            <div className="flex flex-col h-full">
              <div className="bg-orange-500 rounded-lg p-1.5 w-fit mb-2 sm:mb-4">
                <Newspaper className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xs sm:text-sm font-medium mb-1">Newsletter do Henri</h3>
                <p className="text-[10px] sm:text-xs text-gray-500 truncate">henriarmelin.substack.com</p>
              </div>
            </div>
          </Card>

          <Card className="aspect-square p-4 sm:p-6 bg-red-50/50">
            <div className="flex flex-col h-full">
              <div className="bg-red-500 rounded-lg p-1.5 w-fit mb-2 sm:mb-4">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xs sm:text-sm font-medium mb-1">Canal do Youtube</h3>
                <Button className="mt-1 sm:mt-2 bg-red-500 hover:bg-red-600 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 h-auto">
                  Subscribe 469K
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Tool Recommendations Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Recomendações de Ferramentas</h2>
        <div className="space-y-4">
          <Card className="relative aspect-video overflow-hidden">
            <Image src="/placeholder.svg" alt="Tools stack" fill className="object-cover" />
            <div className="absolute bottom-4 left-4">
              <Button variant="secondary">Clique aqui</Button>
            </div>
          </Card>

          <Card className="p-6 sm:p-8 bg-emerald-700 text-white text-center">
            <p className="text-base sm:text-lg">
              Clique e conheça nossa curadoria premium de ferramentas, escolhidas a dedo pelo próprio Giampaolo
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}

