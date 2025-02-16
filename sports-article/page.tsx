import Image from "next/image"
import Link from "next/link"

const articles = [
  {
    title: "5 Exercises Basketball Players Should Be Using To Develop Strength",
    image: "/placeholder.svg?height=200&width=300",
    author: "John Doe",
    category: "Basketball",
    excerpt:
      "Learn about the essential exercises that can help basketball players build strength and improve their game.",
    slug: "basketball-exercises",
  },
  {
    title: "The Evolution of Football Tactics",
    image: "/placeholder.svg?height=200&width=300",
    author: "Jane Smith",
    category: "Football",
    excerpt: "A deep dive into how football tactics have evolved over the decades.",
    slug: "football-tactics",
  },
  // Add more articles
]

export default function SportsArticle() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Sports Articles</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <Link key={index} href={`/sports-article/${article.slug}`} className="group">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-black/50 text-white text-sm px-2 py-1 rounded">
                {article.category}
              </div>
            </div>
            <h3 className="font-semibold mb-2 group-hover:text-gray-600">{article.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full" />
              <span className="text-sm text-gray-600">{article.author}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

