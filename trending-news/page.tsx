import Head from "next/head"
import NewsCard from "@/components/news-card"

const trendingNews = [
  {
    title: "The Rise of E-Sports in Modern Athletics",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D",
    category: "E-Sports",
    date: "February 16, 2024",
    excerpt: "Exploring the growing influence of competitive gaming in the world of sports.",
    slug: "rise-of-esports",
  },
  {
    title: "Breaking Records: The Evolution of Olympic Swimming",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dpbW1pbmd8ZW58MHx8MHx8fDA%3D",
    category: "Swimming",
    date: "February 17, 2024",
    excerpt: "A deep dive into how technology and training have transformed competitive swimming.",
    slug: "evolution-olympic-swimming",
  },
  {
    title: "The Mental Game: Psychology in Professional Tennis",
    image:
      "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVubmlzJTIwcHN5Y2hvbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Tennis",
    date: "February 18, 2024",
    excerpt: "Analyzing the crucial role of mental strength in tennis performance at the highest level.",
    slug: "psychology-professional-tennis",
  },
  // Add more trending news items as needed
]

export default function TrendingNews() {
  return (
    <>
      <Head>
        <title>Trending News | Sports News</title>
        <meta
          name="description"
          content="Stay updated with the latest trending sports news and stories from around the world."
        />
        <meta name="keywords" content="trending sports news, latest sports updates, popular sports stories" />
      </Head>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Trending News</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {trendingNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </div>
    </>
  )
}

