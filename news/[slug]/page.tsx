import Image from "next/image"
import { notFound } from "next/navigation"
import Head from "next/head"

const blogPosts = [
  {
    title: "The Rise of E-Sports in Modern Athletics",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D",
    category: "E-Sports",
    date: "February 16, 2024",
    content:
      "E-Sports has seen a meteoric rise in recent years, challenging traditional notions of athleticism and competition. This article explores the growing influence of competitive gaming in the world of sports, examining its impact on youth engagement, the development of new skills, and its potential inclusion in major sporting events like the Olympics. We'll delve into the training regimens of professional gamers, the massive audiences these events attract, and the economic opportunities emerging in this rapidly evolving field.",
    slug: "rise-of-esports",
    metaDescription:
      "Explore the rise of E-Sports and its impact on modern athletics. Learn about competitive gaming, its influence on youth, and its potential Olympic future.",
    keywords: "E-Sports, competitive gaming, modern athletics, Olympic games, professional gamers",
  },
  {
    title: "Breaking Records: The Evolution of Olympic Swimming",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dpbW1pbmd8ZW58MHx8MHx8fDA%3D",
    category: "Swimming",
    date: "February 17, 2024",
    content:
      "The world of competitive swimming has undergone a remarkable transformation over the past few decades. This article takes a deep dive into how technology and training have revolutionized the sport. From the development of streamlined swimsuits to advanced pool designs that reduce water resistance, we explore the cutting-edge innovations that have led to countless broken records. We also examine the evolution of training techniques, nutrition, and recovery methods that allow modern swimmers to push the boundaries of human performance in the water.",
    slug: "evolution-olympic-swimming",
    metaDescription:
      "Discover how technology and training have transformed Olympic swimming. Learn about innovations in swimwear, pool design, and athlete preparation.",
    keywords: "Olympic swimming, swimming technology, record-breaking, athlete training, pool design",
  },
  {
    title: "The Mental Game: Psychology in Professional Tennis",
    image:
      "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVubmlzJTIwcHN5Y2hvbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Tennis",
    date: "February 18, 2024",
    content:
      "Tennis is as much a mental game as it is physical. This article analyzes the crucial role of mental strength in tennis performance at the highest level. We explore the psychological strategies employed by top players, the impact of pressure on decision-making, and the importance of mental resilience in long, grueling matches. Through interviews with sports psychologists and professional players, we uncover the mental techniques that separate champions from contenders in the high-stakes world of professional tennis.",
    slug: "psychology-professional-tennis",
    metaDescription:
      "Understand the psychological aspects of professional tennis. Explore mental strategies, pressure management, and resilience in high-stakes matches.",
    keywords: "tennis psychology, mental strength, professional tennis, sports psychology, mental resilience",
  },
  {
    title: "Sustainable Stadiums: The Future of Sports Venues",
    image:
      "https://images.unsplash.com/photo-1577223625816-7546f13a8796?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhZGl1bXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Architecture",
    date: "February 19, 2024",
    content:
      "As the world becomes increasingly conscious of environmental issues, the sports industry is stepping up to the plate. This article examines the innovative eco-friendly designs and operations being implemented in modern sports stadiums. From solar-powered facilities to advanced waste management systems, we explore how these sustainable practices are not only reducing the carbon footprint of major sporting events but also setting new standards for large-scale entertainment venues worldwide.",
    slug: "sustainable-stadiums",
    metaDescription:
      "Explore the future of sports venues with sustainable stadiums. Learn about eco-friendly designs, solar power, and advanced waste management in modern arenas.",
    keywords:
      "sustainable stadiums, eco-friendly sports venues, green architecture, solar-powered facilities, waste management",
  },
  // ... (include all 30 blog posts here with their respective meta descriptions and keywords)
]

export default function NewsArticle({ params }: { params: { slug: string } }) {
  const article = blogPosts.find((post) => post.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      <Head>
        <title>{article.title} | Sports News</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.keywords} />
      </Head>
      <article className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="mb-4 text-gray-600">
          <span>{article.date}</span> | <span>{article.category}</span>
        </div>
        <div className="relative w-full aspect-video mb-8">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="prose max-w-none">
          <p>{article.content}</p>
        </div>
      </article>
    </>
  )
}

