import Link from 'next/link'

interface ProjectCardProps {
  icon: string
  name: string
  description: string
  subDescription?: string
  link: string
  price?: string
  acquired?: boolean
  discontinued?: boolean
}

export function ProjectCard({
  icon,
  name,
  description,
  subDescription,
  link,
  price,
  acquired,
  discontinued,
}: ProjectCardProps) {
  return (
    <Link
      href={link}
      className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8">
              <img src={icon} alt="" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="font-semibold dark:text-white">{name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {price && <div className="text-sm text-purple-600 dark:text-purple-400">{price}</div>}
            {acquired && (
              <span className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded">
                Acquired
              </span>
            )}
            {discontinued && (
              <span className="text-xs bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 px-2 py-1 rounded">
                Discontinued
              </span>
            )}
          </div>
        </div>
        {subDescription && (
          <p className="text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-3">
            {subDescription}
          </p>
        )}
      </div>
    </Link>
  )
}

