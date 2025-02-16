import Link from "next/link"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  return (
    <div className="flex justify-center space-x-2 mt-8">
      {currentPage > 1 && (
        <Link href={`${basePath}?page=${currentPage - 1}`}>
          <Button variant="outline">Previous</Button>
        </Link>
      )}
      {currentPage < totalPages && (
        <Link href={`${basePath}?page=${currentPage + 1}`}>
          <Button variant="outline">Next</Button>
        </Link>
      )}
    </div>
  )
}

