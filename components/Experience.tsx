import { Briefcase } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovators Inc",
      period: "January 2018 - Present",
      responsibilities: [
        "Lead development of scalable web applications",
        "Mentor junior developers and conduct code reviews",
        "Implement best practices and modern technologies",
        "Collaborate with cross-functional teams to deliver high-quality software",
      ],
    },
    // Add more experiences as needed
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-start gap-8">
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <Briefcase className="w-16 h-16 text-primary mb-4" />
          <h2 className="text-3xl font-bold">WORK EXPERIENCE</h2>
        </div>
        <div className="md:w-2/3">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <h3 className="text-2xl font-semibold">{exp.title}</h3>
              <p className="text-primary mb-2">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
              <ul className="list-disc pl-5">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="mb-2">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

