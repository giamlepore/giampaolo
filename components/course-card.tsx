import Link from 'next/link'

interface CourseCardProps {
  icon: string
  name: string
  description: string
  link: string
  price?: string
  waitlist?: boolean
  available?: boolean
}

export function CourseCard({
  icon,
  name,
  description,
  link,
  price,
  waitlist = false,
  available = false,
}: CourseCardProps) {
  return (
    <Link
      href={link}
      className="block p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-16 h-16">
            <img src={icon} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <div>
                {waitlist && (
                  <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 rounded">
                    Lista de espera
                  </span>
                )}
                {available && (
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded">
                    Disponível
                  </span>
                )}
                <h3 className="font-semibold dark:text-white mt-1">{name}</h3>
              </div>
              <div className="text-sm text-purple-600 dark:text-purple-400">{price}</div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

