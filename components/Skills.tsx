import './Skills.css'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js',
  'Node.js', 'Python', 'PostgreSQL', 'MongoDB'
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
