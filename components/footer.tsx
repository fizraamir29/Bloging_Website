import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Link href="#" className="hover:text-gray-600">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-gray-600">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-gray-600">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((page) => (
              <Button key={page} variant="outline" size="sm">
                {page}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

