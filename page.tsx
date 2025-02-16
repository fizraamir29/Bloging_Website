import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NewsCard from "@/components/news-card"
import Pagination from "@/components/pagination"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import Head from "next/head"

const blogPosts = [
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
  {
    title: "The Global Impact of African Football Talent",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWZyaWNhbiUyMGZvb3RiYWxsfGVufDB8fDB8fHww",
    category: "Football",
    date: "February 22, 2024",
    excerpt: "Tracing the influence of African players in shaping the world's most popular sport.",
    slug: "african-football-talent",
  },
  {
    title: "Extreme Sports: Pushing the Limits of Human Endurance",
    image:
      "https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV4dHJlbWUlMjBzcG9ydHN8ZW58MHx8MHx8fDA%3D",
    category: "Extreme Sports",
    date: "February 23, 2024",
    excerpt: "Exploring the thrills and risks of extreme sports and their growing popularity.",
    slug: "extreme-sports-endurance",
  },
  {
    title: "The Science of Speed: Innovations in Track and Field",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhY2slMjBhbmQlMjBmaWVsZHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Track and Field",
    date: "February 24, 2024",
    excerpt: "How technology is helping athletes break speed barriers on the track.",
    slug: "science-of-speed",
  },
  {
    title: "Women in Sports: Breaking Barriers and Setting New Standards",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBpbiUyMHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Gender Equality",
    date: "February 25, 2024",
    excerpt: "Celebrating the achievements and ongoing challenges for women in professional sports.",
    slug: "women-in-sports",
  },
  {
    title: "The Evolution of Sports Medicine: Keeping Athletes in the Game",
    image:
      "https://images.unsplash.com/photo-1597647579571-7e596666290a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwbWVkaWNpbmV8ZW58MHx8MHx8fDA%3D",
    category: "Sports Medicine",
    date: "February 26, 2024",
    excerpt: "Advancements in medical treatments and rehabilitation techniques for athletes.",
    slug: "sports-medicine-evolution",
  },
  {
    title: "Virtual Reality in Sports Training: A Game-Changer",
    image:
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlydHVhbCUyMHJlYWxpdHklMjBzcG9ydHN8ZW58MHx8MHx8fDA%3D",
    category: "Technology",
    date: "February 27, 2024",
    excerpt: "How VR is revolutionizing the way athletes prepare for competition.",
    slug: "vr-sports-training",
  },
  {
    title: "The Business of Sports: Understanding the Billion-Dollar Industry",
    image:
      "https://images.unsplash.com/photo-1504674900247-0b3a9ae01d4a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwYnVzaW5lc3N8ZW58MHx8MHx8fDA%3D",
    category: "Sports Business",
    date: "February 28, 2024",
    excerpt: "An in-depth look at the economics driving professional sports leagues and franchises.",
    slug: "business-of-sports",
  },
  {
    title: "Doping in Sports: The Ongoing Battle for Fair Play",
    image:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc3849b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9waW5nJTIwaW4lMjBzcG9ydHN8ZW58MHx8MHx8fDA%3D",
    category: "Ethics",
    date: "February 29, 2024",
    excerpt: "Examining the challenges and controversies surrounding performance-enhancing drugs in athletics.",
    slug: "doping-in-sports",
  },
  {
    title: "The Rise of Mixed Martial Arts: From Niche to Mainstream",
    image:
      "https://images.unsplash.com/photo-1526111861351-6bbe01a68a2e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW1hfGVufDB8fDB8fHww",
    category: "MMA",
    date: "March 1, 2024",
    excerpt: "Tracing the evolution of MMA and its impact on combat sports.",
    slug: "rise-of-mma",
  },
  {
    title: "Sports Diplomacy: Athletics as a Tool for International Relations",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwZGlwbG9tYWN5fGVufDB8fDB8fHww",
    category: "Politics",
    date: "March 2, 2024",
    excerpt: "How sports events and exchanges are fostering global understanding and cooperation.",
    slug: "sports-diplomacy",
  },
  {
    title: "The Psychology of Fandom: Understanding Sports Supporters",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwZmFuc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Psychology",
    date: "March 3, 2024",
    excerpt: "Delving into the emotional and social aspects of sports fandom.",
    slug: "psychology-of-fandom",
  },
  {
    title: "Adaptive Sports: Redefining Athleticism and Inclusion",
    image:
      "https://images.unsplash.com/photo-1519733870-f96bfcdf2020?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRhcHRpdmUlMjBzcG9ydHN8ZW58MHx8MHx8fDA%3D",
    category: "Adaptive Sports",
    date: "March 4, 2024",
    excerpt: "Showcasing the growth and impact of sports for athletes with disabilities.",
    slug: "adaptive-sports",
  },
  {
    title: "The Art of Sports Photography: Capturing the Perfect Moment",
    image:
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
    category: "Photography",
    date: "March 5, 2024",
    excerpt: "Exploring the techniques and challenges of photographing athletic events.",
    slug: "sports-photography",
  },
  {
    title: "Sports Analytics: The Numbers Behind the Game",
    image:
      "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwYW5hbHl0aWNzfGVufDB8fDB8fHww",
    category: "Analytics",
    date: "March 6, 2024",
    excerpt: "How data analysis is changing strategy and player evaluation across sports.",
    slug: "sports-analytics",
  },
  {
    title: "The Future of Sports Betting: Technology and Regulation",
    image:
      "https://images.unsplash.com/photo-1518133683791-0b9de5a055f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwYmV0dGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Betting",
    date: "March 7, 2024",
    excerpt: "Examining the evolving landscape of sports betting in the digital age.",
    slug: "future-sports-betting",
  },
  {
    title: "Youth Sports: Balancing Competition and Development",
    image:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW91dGglMjBzcG9ydHN8ZW58MHx8MHx8fDA%3D",
    category: "Youth Sports",
    date: "March 8, 2024",
    excerpt: "Addressing the challenges and benefits of organized sports for young athletes.",
    slug: "youth-sports-balance",
  },
  {
    title: "The Evolution of Sports Broadcasting: From Radio to Streaming",
    image:
      "https://images.unsplash.com/photo-1486265979434-68555fde1d2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwYnJvYWRjYXN0aW5nfGVufDB8fDB8fHww",
    category: "Media",
    date: "March 9, 2024",
    excerpt: "Tracing the technological advancements in how we consume sports content.",
    slug: "sports-broadcasting-evolution",
  },
  {
    title: "Sports and Social Media: Changing the Game for Athletes and Fans",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwc29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D",
    category: "Social Media",
    date: "March 10, 2024",
    excerpt: "Exploring how social platforms are reshaping athlete-fan interactions and sports marketing.",
    slug: "sports-social-media",
  },
  {
    title: "The Economics of Hosting Major Sporting Events",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
    category: "Economics",
    date: "March 11, 2024",
    excerpt: "Analyzing the costs and benefits of hosting events like the Olympics and World Cup.",
    slug: "economics-major-sporting-events",
  },
  {
    title: "Sports Injuries: Prevention, Treatment, and Recovery",
    image:
      "https://images.unsplash.com/photo-1544781508-c62f96362e1f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwaW5qdXJ5fGVufDB8fDB8fHww",
    category: "Health",
    date: "March 12, 2024",
    excerpt: "A comprehensive look at managing and minimizing injuries in professional sports.",
    slug: "sports-injuries-management",
  },
  {
    title: "The Role of Coaches: Leadership in Modern Sports",
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwY29hY2h8ZW58MHx8MHx8fDA%3D",
    category: "Coaching",
    date: "March 13, 2024",
    excerpt: "Examining the evolving responsibilities and influence of coaches in team success.",
    slug: "role-of-coaches",
  },
  {
    title: "Sports and Education: The Impact of Athletics on Academic Performance",
    image:
      "https://images.unsplash.com/photo-1541727687969-ce40493cd847?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwZWR1Y2F0aW9ufGVufDB8fDB8fHww",
    category: "Education",
    date: "March 14, 2024",
    excerpt: "Investigating the relationship between sports participation and academic achievement.",
    slug: "sports-and-education",
  },
  {
    title: "The Globalization of Sports: Cultural Exchange Through Athletics",
    image:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xvYmFsJTIwc3BvcnRzfGVufDB8fDB8fHww",
    category: "Culture",
    date: "March 15, 2024",
    excerpt: "How sports are bridging cultural divides and fostering international understanding.",
    slug: "globalization-of-sports",
  },
]

export default function Home({ searchParams }: { searchParams?: { page?: string } }) {
  const currentPage = Number(searchParams?.page) || 1; // Safe access using ?. operator
  const itemsPerPage = 6;
  const totalItems = blogPosts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  return (
    <>
      <Head>
        <title>Sports News - Latest Updates and Analysis</title>
        <meta
          name="description"
          content="Stay up-to-date with the latest sports news, analysis, and in-depth coverage of various athletic events and athletes."
        />
        <meta name="keywords" content="sports news, athletics, e-sports, swimming, tennis, stadium architecture" />
      </Head>
      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 grid md:grid-cols-[2fr,1fr] gap-8">
          <div className="relative bg-gray-100 rounded-lg overflow-hidden min-h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzfGVufDB8fDB8fHww"
              alt="Top scorer in action"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h1 className="text-5xl font-bold mb-4">TOP SCORER TO THE FINAL MATCH</h1>
              <p className="mb-4 text-gray-200">
                The Final award Finals Top Scorer is the individual award for the player that gained the highest points
                in the EuroLeague Finals.
              </p>
              <Link href="/news/top-scorer-final-match">
                <Button variant="secondary">CONTINUE READING</Button>
              </Link>
            </div>
          </div>

          {/* Sidebar Images */}
          <div className="space-y-4">
            <div className="relative h-[240px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzfGVufDB8fDB8fHww"
                alt="Featured news"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[240px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzfGVufDB8fDB8fHww"
                alt="Featured news"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold mb-8">Latest News</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {currentPosts.map((post, i) => (
              <NewsCard key={i} {...post} />
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/" />
        </section>
      </div>
    </>
  );
}
