import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/placeholder.svg"
              alt="Profile"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">John Doe</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Creative Developer & Designer
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="rounded-full px-8">
            Get in Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 gap-2"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="translate-y-[1px]"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}

