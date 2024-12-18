import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from 'lucide-react'

export function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-start gap-8">
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <Mail className="w-16 h-16 text-primary mb-4" />
          <h2 className="text-3xl font-bold">CONTACT</h2>
        </div>
        <form className="md:w-2/3 space-y-4">
          <Input placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Textarea placeholder="Message" />
          <Button className="w-full">Send Message</Button>
        </form>
      </div>
    </div>
  )
}

