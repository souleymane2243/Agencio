
                  import { useState } from 'react'

const slides = [
  {
    testimonials: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sequi voluptatem explicabo vero non. At ducimus alias, doloribus corporis harum nam. Molestias doloremque quaerat odio consectetur quasi, culpa sit distinctio!',
        name: 'Carlie Addison',
        role: 'manager',
        image: '/images/author1.jpg',
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sequi voluptatem explicabo vero non. At ducimus alias, doloribus corporis harum nam. Molestias doloremque quaerat odio consectetur quasi, culpa sit distinctio!',
        name: 'Olivia Grosh',
        role: 'manager',
        image: '/images/author2.jpg',
      },
    ],
  },
  {
    testimonials: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sequi voluptatem explicabo vero non. At ducimus alias, doloribus corporis harum nam. Molestias doloremque quaerat odio consectetur quasi, culpa sit distinctio!',
        name: 'Richard Nautz',
        role: 'manager',
        image: '/images/author3.jpg',
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sequi voluptatem explicabo vero non. At ducimus alias, doloribus corporis harum nam. Molestias doloremque quaerat odio consectetur quasi, culpa sit distinctio!',
        name: 'Carlie Addison',
        role: 'manager',
        image: '/images/author1.jpg',
      },
    ],
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-6xl font-bold text-center mb-16">Testimonials</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {slides[current].testimonials.map((t, index) => (
            <div key={index}>
              <p className="text-gray-500 mb-8 text-lg">{t.text}</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-20 h-19 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-xl">{t.name}</p>
                  <p className="text-gray-500 text-lg">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition duration-300 ${current === index ? 'bg-gray-700' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}