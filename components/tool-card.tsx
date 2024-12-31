import Link from 'next/link'

interface ToolCardProps {
  icon: string
  name: string
  description: string
  link: string
}

export function ToolCard({
  icon,
  name,
  description,
  link,
}: ToolCardProps) {
  return (
    <Link
      href={link}
      className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8">
          <img src={icon} alt="" className="w-full h-full object-contain" />
        </div>
        <div>
          <h3 className="font-semibold dark:text-white">{name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  )
}

