import { Award } from 'lucide-react'

export function Skills() {
  const skills = [
    "JavaScript", "React", "Node.js", "TypeScript",
    "HTML/CSS", "Git", "RESTful APIs", "Database Design",
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-start gap-8">
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <Award className="w-16 h-16 text-primary mb-4" />
          <h2 className="text-3xl font-bold">SKILLS</h2>
        </div>
        <div className="md:w-2/3">
          <h3 className="text-2xl font-semibold mb-4">Areas of Expertise</h3>
          <ul className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

