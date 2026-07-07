
  export function About() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
        <div className="relative w-full lg:w-1/2">
          <img
            src="/images/image-1.png"alt="about"
            className="w-115 h-127 rounded-xl"
          />
          <div className="absolute bottom-4 left-0 bg-green-400 text-white p-6 rounded-tr-xl w-37 h-40">
            <p className="text-5xl font-bold">12</p>
            <p className="text-2xl">Years Experience</p>
          </div>
        </div>
                         
                 <div className="w-full lg:w-1/2">
          <h2 className="text-5xl font-bold mb-6">About Creative Agency</h2>
          <p className="text-gray-500 text-md mb-4 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptates porro.Unde nemo ipsum maxime libero architecto voluptates, voluptatem assumenda ullam natus consequuntur blanditiis quaerat deserunt perferendis rerum nobis non?</p>
          <p className="text-gray-500 mb-4 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nemo debitis libero sed quidem ducimus ratione maiores, ex deleniti vitae reprehenderit  perferendis magni tempore rerum cumque iusto! Omnis, nisi eaque!</p>
          <p className="text-gray-500 mb-8 text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, facere numquam  a itaque inventore saepe quo adipisci sed ipsam, quaerat, molestias vero! Ad esse, amet dolorum qui iure ex odio.</p>
          <div className="flex items-center gap-4">
            <img
              src="/images/founder.jpg"
              alt="Richard Nautz"
              className="w-14 h-14 rounded-full object-cover"
            />
               <div>
                 <p className="font-bold text-lg">Richard Nautz</p>
                 <p className="text-gray-500">Founder & SEO</p>
                  </div>
                     </div>
                 </div>

                </div>
                      </section>
              )
         }