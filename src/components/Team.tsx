
   import { Share2, Globe, Mail, Phone } from 'lucide-react'

    const team = [
  { name: 'Jeremy White', role: 'Consultant', image: '/images/team-2.jpg' },
  { name: 'Sofia Mayer', role: 'Consultant', image: '/images/team-3.jpg' },
  { name: 'Carlie Addison', role: 'Manager', image: '/images/team-4.jpg' },
  { name: 'Richard Nautz', role: 'Founder', image: '/images/team-5.jpg' },
    ]

    export function Team() {
  return (
    <section className="py-20 bg-gray-100" id="team">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-6xl font-bold text-center mb-16">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl group cursor-pointer">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-blue-500 bg-opacity-60 opacity-0 group-hover:opacity-90 transition duration-300 flex flex-col items-center justify-center text-white text-center px-5">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="mb-4 text-lg">{member.role}</p>
                <p className="text-lg mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, dicta.</p>
                <div className="flex gap-4">
                    <Share2 size={20} />
                    <Globe size={20} />
                    <Mail size={20} />
                    <Phone size={20} />
                </div>
              </div>
              <div className="text-center py-4">
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}