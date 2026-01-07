import React from 'react'

const Skills = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-column justify-center items-center" >
      <h1 className="font-semibold">
        Skills
      </h1>
     <div className="flex">
      <div>
        {["React", "Node.js", "Express", "Java", "MongoDB", "UI/UX", "MySQL", "JavaScript"]
          .map(skill => (
            <div key={skill}>
              {skill}
            </div>
          ))}
          
      </div>
      
      <div>
        {["React", "Node.js", "Express", "Java", "MongoDB", "UI/UX", "MySQL", "JavaScript"]
          .map(skill => (
            <div key={skill}>
              {skill}
            </div>
          ))}
          </div>
      </div>

      
    </div>
  )
}

export default Skills
