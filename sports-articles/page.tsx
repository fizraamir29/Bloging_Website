import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const articles = [
  {
    title: "The Evolution of Sports Broadcasting: From Radio to Streaming",
    image:
      "https://images.unsplash.com/photo-1486265979434-68555fde1d2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwYnJvYWRjYXN0aW5nfGVufDB8fDB8fHww",
    author: "John Smith",
    category: "Media",
    excerpt: "Tracing the technological advancements in how we consume sports content.",
    slug: "sports-broadcasting-evolution",
  },
  {
    title: "The Psychology of Fandom: Understanding Sports Supporters",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwZmFuc3xlbnwwfHwwfHx8MA%3D%3D",
    author: "Emily Johnson",
    category: "Psychology",
    excerpt: "Delving into the emotional and social aspects of sports fandom.",
    slug: "psychology-of-fandom",
  },
  {
    title: "The Business of Sports: Understanding the Billion-Dollar Industry",
    image:
      "https://images.unsplash.com/photo-1504674900247-0b3a9ae01d4a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwYnVzaW5lc3N8ZW58MHx8MHx8fDA%3D",
    author: "Michael Brown",
    category: "Sports Business",
    excerpt: "An in-depth look at the economics driving professional sports leagues and franchises.",
    slug: "business-of-sports",
  },
  // Add more articles as needed
]

export default function SportsArticles() {
  return (
    <>
      <Head>
        <title>Sports Articles | Sports News</title>
        <meta
          name="description"
          content="Read in-depth sports articles covering various aspects of athletics, from psychology to business."
        />
        <meta
          name="keywords"
          content="sports articles, sports analysis, sports psychology, sports business, sports media"
        />
      </Head>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Sports Articles</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link key={index} href={`/sports-articles/${article.slug}`} className="group">
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
    </>
  )
}

