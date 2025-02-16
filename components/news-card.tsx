import Image from "next/image"
import Link from "next/link"

interface NewsCardProps {
  title: string
  image: string
  category: string
  date: string
  excerpt: string
  slug: string
}

export default function NewsCard({ title, image, category, date, excerpt, slug }: NewsCardProps) {
  return (
    <Link href={`/news/${slug}`} className="group">
      <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-black/50 text-white text-sm px-2 py-1 rounded">{category}</div>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-gray-500">{date}</p>
        <h3 className="font-semibold text-lg group-hover:text-gray-600">{title}</h3>
        <p className="text-gray-600 line-clamp-2">{excerpt}</p>
      </div>
    </Link>
  )
}

