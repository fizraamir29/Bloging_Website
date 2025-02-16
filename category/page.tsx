import Image from "next/image"
import Link from "next/link"

const categories = [
  { title: "FOOTBALL", image: "/placeholder.svg?height=200&width=300" },
  { title: "BASKETBALL", image: "/placeholder.svg?height=200&width=300" },
  { title: "CAR SPORT", image: "/placeholder.svg?height=200&width=300" },
  { title: "TABLE TENNIS", image: "/placeholder.svg?height=200&width=300" },
  { title: "TENNIS", image: "/placeholder.svg?height=200&width=300" },
  { title: "BOXING", image: "/placeholder.svg?height=200&width=300" },
  { title: "CRICKET", image: "/placeholder.svg?height=200&width=300" },
  { title: "GOLF", image: "/placeholder.svg?height=200&width=300" },
]

export default function Category() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Sports Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={`/category/${category.title.toLowerCase()}`}
            className="relative group overflow-hidden rounded-lg"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-white font-semibold text-xl">{category.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

