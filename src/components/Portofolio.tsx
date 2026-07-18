

   import { useState } from 'react'

       const categories = ['All', 'Marketing', 'Development', 'Optimization', 'Integration']

         const projects = [
           { id: 1, image: '/images/portfolio-1.png', category: 'Marketing' },
           { id: 2, image: '/images/portfolio-2.png', category: 'Development' },
           { id: 3, image: '/images/portfolio-3.png', category: 'Optimization' },
           { id: 4, image: '/images/portfolio-4.png', category: 'Integration' },
          { id: 5, image: '/images/portfolio-5.png', category: 'Marketing' },
          { id: 6, image: '/images/portfolio-6.png', category: 'Development' },
          { id: 7, image: '/images/portfolio-7.png', category: 'Optimization' },
          { id: 8, image: '/images/portfolio-8.png', category: 'Integration' },
          { id: 9, image: '/images/portfolio-9.png', category: 'Marketing' },
         ]

export function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section className="py-20 bg-gray-100" id='portfolio'>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-10">Our Portfolio</h2>
        <div className="flex justify-center gap-8 mb-10">
          {categories.map((cat) => (
            <button
        key={cat}
      onClick={() => setActive(cat)}
     className={`font-bold text-xl transition duration-300 hover:text-green-500 ${active === cat ? 'text-green-500' : 'text-gray-800'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <div key={project.id} className=" relative overflow-hidden rounded-xl group">
              <img
                src={project.image}
                alt={project.category}
                className="w-full h-64 object-cover hover:scale-105 transition duration-300"
              />
               <div className='absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-80 transition duration-300 flex items-center justify-center'>
                 <span className='text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition duration-300'>+</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}        
  export default Portfolio 