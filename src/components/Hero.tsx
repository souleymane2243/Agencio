export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img src="public/images/bg-header.png"alt="hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold">
          <span className="text-blue-500">Creative</span> & Innovative
          <br />
          Digital Agency
        </h1>
      </div>
               
    </section>
  )
}