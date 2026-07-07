export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-blue-600 hover:text-gray-100">Agencio commerciale</a>
        <nav className="hidden md:flex items-center gap-8">
    <a href="#" className=" text-gray-100 hover:text-blue-600">Home</a>
     <a href="#" className=" text-gray-100 hover:text-blue-600">About us</a>
          <a href="#" className=" text-gray-100 hover:text-blue-600">Services</a>
        <a href="#" className=" text-gray-100 hover:text-blue-600">Portfolio</a>
          <a href="#" className=" text-gray-100 hover:text-blue-600">Team</a>
         <a href="#" className=" text-gray-100 hover:text-blue-600">Pricing</a>
          <a href="#" className=" hover:text-blue-600 text-gray-100">Contact</a>
        </nav>
      </div>
    </header>
  )
}