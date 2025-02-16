import Head from "next/head"
import NewsCard from "@/components/news-card"

const recentNews = [
  {
    title: "Sustainable Stadiums: The Future of Sports Venues",
    image:
      "https://images.unsplash.com/photo-1577223625816-7546f13a8796?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhZGl1bXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Architecture",
    date: "February 19, 2024",
    excerpt: "Examining eco-friendly innovations in stadium design and operations.",
    slug: "sustainable-stadiums",
  },
  {
    title: "The Art of the Pitch: Baseball's Most Elusive Throws",
    image:
      "https://images.unsplash.com/photo-1508344928928-7165b67de128?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFzZWJhbGx8ZW58MHx8MHx8fDA%3D",
    category: "Baseball",
    date: "February 20, 2024",
    excerpt: "Delving into the science and skill behind baseball's most challenging pitches.",
    slug: "art-of-pitching",
  },
  {
    title: "Nutrition Revolution: Fueling the Modern Athlete",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnV0cml0aW9ufGVufDB8fDB8fHww",
    category: "Nutrition",
    date: "February 21, 2024",
    excerpt: "How cutting-edge nutritional science is enhancing athletic performance.",
    slug: "nutrition-revolution",
  },
  // Add more recent news items as needed
]

export default function RecentNews() {
  return (
    <>
      <Head>
        <title>Recent News | Sports News</title>
        <meta
          name="description"
          content="Get the most recent sports news and updates from various sporting events and athletes."
        />
        <meta name="keywords" content="recent sports news, latest sports updates, current sports events" />
      </Head>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Recent News</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {recentNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </div>
    </>
  )
}

