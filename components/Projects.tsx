import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, X, Triangle, Square } from 'lucide-react'
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform Development",
      description: "Developed a scalable e-commerce platform with features like product management, shopping cart, and secure payment integration.",
      icon: <X className="w-6 h-6" />,
      color: "bg-green-100 dark:bg-green-900",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Real-Time Chat Application",
      description: "Built a real-time chat application using WebSockets, featuring instant messaging, user presence, and message history.",
      icon: <Triangle className="w-6 h-6" />,
      color: "bg-purple-100 dark:bg-purple-900",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Professional Affiliates",
      description: "Created a platform for professional networking and affiliate marketing, including user profiles and commission tracking.",
      icon: <Square className="w-6 h-6" />,
      color: "bg-blue-100 dark:bg-blue-900",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-start gap-8">
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <Briefcase className="w-16 h-16 text-primary mb-4" />
          <h2 className="text-3xl font-bold">PROJECTS</h2>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full ${project.color} flex items-center justify-center mr-4`}>
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </CardContent>
              <CardFooter className="bg-muted p-4">
                <Button variant="secondary" className="w-full">MORE INFO</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

