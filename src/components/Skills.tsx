

    const skills = [
  { title: 'Market Analysis', percentage: 100 },
  { title: 'Optimization', percentage: 90 },
  { title: 'Integration', percentage: 80 },
  { title: 'Development', percentage: 50 },
]

         function CircleProgress({ percentage }: { percentage: number }) {
        const radius = 50
     const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

            return (
             <svg width="120" height="120" viewBox="0 0 120 120">
           <circle
        cx="60" cy="60" r={radius}
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="8"
      />
      <circle
        cx="60" cy="60" r={radius}
        fill="none"
        stroke="#22c55e"
        strokeWidth="11"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
      />
      <text
        x="60" y="65"
        textAnchor="middle"
        fill="#22c55e"
        fontSize="30"
        fontWeight="bold"
      >
        {percentage}
      </text>
    </svg>
  )
}
        export function Skills() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <CircleProgress percentage={skill.percentage} />
              <h3 className="text-3xl font-bold">{skill.title}</h3>
              <p className="text-gray-500 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
        export default Skills 
      
