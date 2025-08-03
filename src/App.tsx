import { useEffect, useState } from 'react'
import projects from '../data/projects.ts'
import './App.css'

interface ProjectStruct {
  title: string
  description?: string
  link?: string
}

export default function App() {
  const [project, setProject] = useState<ProjectStruct[]>([])

  useEffect(() => {
    setProject(projects)
  }, [])

  return (
    <div className="container py-5">
      <h2 className="mb-5 text-center di">นายเมธี ริ้วบำรุง b6621604661 หมู่ 700</h2>
      <h3 className="mb-5 text-center">Computer Graphic</h3>
      <div className="row g-4">
        {project.map((p, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div
              onClick={() => {
                if (p.link) window.open(p.link, '_blank', 'noopener,noreferrer')
              }}
              className="card shadow-sm h-100 border hover-shadow p-4"
            >
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                {p.description && (
                  <p className="card-text">{p.description}</p>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    className="btn-link"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    เยี่ยมชมโปรเจกต์ →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
