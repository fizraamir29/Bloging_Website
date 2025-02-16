import Head from "next/head"
import Image from "next/image"

const clubsData = [
  {
    name: "Manchester City",
    logo: "https://images.unsplash.com/photo-1590764258299-0f91fa7f95e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuY2hlc3RlciUyMGNpdHl8ZW58MHx8MHx8fDA%3D",
    stats: { mp: 38, w: 28, d: 5, l: 5, f: 73, a: 32, gd: 41 },
  },
  {
    name: "Arsenal",
    logo: "https://images.unsplash.com/photo-1623781670422-4f9808763605?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJzZW5hbHxlbnwwfHwwfHx8MA%3D",
    stats: { mp: 38, w: 26, d: 6, l: 6, f: 68, a: 31, gd: 37 },
  },
  {
    name: "Liverpool",
    logo: "https://images.unsplash.com/photo-1566465559199-2c84880a903e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGl2ZXJwb29sfGVufDB8fDB8fHww",
    stats: { mp: 38, w: 25, d: 8, l: 5, f: 70, a: 35, gd: 35 },
  },
  // Add more clubs data as needed
]

export default function ClubsRanking() {
  return (
    <>
      <Head>
        <title>Clubs Ranking | Sports News</title>
        <meta
          name="description"
          content="View the latest rankings of top sports clubs based on their performance statistics."
        />
        <meta name="keywords" content="sports clubs ranking, team statistics, league table, performance metrics" />
      </Head>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Clubs Ranking</h1>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">Club</th>
                <th className="p-4">MP</th>
                <th className="p-4">W</th>
                <th className="p-4">D</th>
                <th className="p-4">L</th>
                <th className="p-4">F</th>
                <th className="p-4">A</th>
                <th className="p-4">GD</th>
              </tr>
            </thead>
            <tbody>
              {clubsData.map((club, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={club.logo || "/placeholder.svg"}
                        alt={`${club.name} logo`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {club.name}
                  </td>
                  <td className="text-center p-4">{club.stats.mp}</td>
                  <td className="text-center p-4">{club.stats.w}</td>
                  <td className="text-center p-4">{club.stats.d}</td>
                  <td className="text-center p-4">{club.stats.l}</td>
                  <td className="text-center p-4">{club.stats.f}</td>
                  <td className="text-center p-4">{club.stats.a}</td>
                  <td className="text-center p-4">{club.stats.gd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

