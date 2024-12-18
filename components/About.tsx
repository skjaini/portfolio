import { Button } from "@/components/ui/button"
import { User } from 'lucide-react'

export function About() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-start gap-8">
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <User className="w-16 h-16 text-primary mb-4" />
          <h2 className="text-3xl font-bold">ABOUT</h2>
        </div>
        <div className="md:w-2/3">
          <h3 className="text-2xl font-semibold mb-4">Software Engineer</h3>
          <p className="mb-6">
            This is the space to introduce visitors to the business or brand, briefly explain
            who's behind it, what it does and what makes it unique. Share its core values and
            what this site has to offer.
          </p>
          <Button variant="outline" className="rounded-full">
            LINKEDIN
          </Button>
        </div>
      </div>
    </div>
  )
}

