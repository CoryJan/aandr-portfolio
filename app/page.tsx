
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="p-6 space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Cory Jan</h1>
        <p className="text-lg mt-2">Music. Storytelling. Style. Vision.</p>
        <p className="text-base mt-1 text-muted-foreground">Creative Director & A&R</p>
      </section>
      <section className="flex justify-center">
        <Image 
          src="/portfolio_images/page1_img1.jpeg" 
          alt="Hero Visual" 
          width={800} 
          height={600} 
          className="rounded-2xl shadow-lg" 
        />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <Image 
              src="/portfolio_images/page2_img1.jpeg" 
              alt="4BARS4 Collection" 
              width={500} 
              height={350} 
              className="rounded-xl" 
            />
            <h2 className="text-xl font-semibold mt-4">4BARS4 COLLECTION</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A sci-fi fashion concept inspired by cinematic world-building and sound-based storytelling.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <Image 
              src="/portfolio_images/page3_img1.jpeg" 
              alt="Styling - Lonelee" 
              width={500} 
              height={350} 
              className="rounded-xl" 
            />
            <h2 className="text-xl font-semibold mt-4">STYLING PROJECT – LONELEE</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Direction and styling for the artist Lonelee’s project 'LEDGE' and 'LOVE PHOBIA'.
            </p>
          </CardContent>
        </Card>
      </section>
      <section className="text-center mt-10">
        <h2 className="text-xl font-semibold">Let’s Connect</h2>
        <p className="text-sm text-muted-foreground mt-1">coryjan.contact@gmail.com</p>
        <Link href="https://instagram.com/cory_jan_ll" className="inline-block mt-2">
          <Button variant="outline">@cory_jan_ll</Button>
        </Link>
      </section>
    </main>
  )
}
