
import { MapPin, Phone, Clock,  } from 'lucide-react'

    
export function Contact() {
  return (
    <section className="bg-gray-950 text-white py-20" id='contact'>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-6xl font-bold mb-10">Contact</h2>
        <div className="flex flex-col lg:flex-row gap-16">

          <div className="flex flex-col gap-6 lg:w-1/2">
            <div className="flex items-center gap-3 text-lg">
              <MapPin className="text-white " size={20} />
              <span>4239 Lapeer Rd, Port Hurons, MI 48060</span>
            </div>
            <div className="flex items-center gap-3 text-lg  hover:text-green-500">
              <Phone className="text-white" size={20} />
              <span>+1 (800) 478-42-51</span>
            </div>
            <div className="flex items-center gap-3 text-lg  hover:text-green-500">
              <Phone className="text-white" size={20} />
              <span>+1 (800) 479-43-52</span>
            </div>
            <div className="flex items-center gap-3 text-lg ">
              <Clock className="text-white" size={20} />
              <span>We are open Mn-Fr: 10am - 8pm</span>
            </div>
            {/* <div className="flex gap-6 mt-4">
              <Facebook size={22} />
              <Twitter size={22} />
              <Instagram size={22} />
              <Youtube size={22} />
            </div> */}
          </div>
          <div className="lg:w-280  flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="bg-gray-100 text-gray-900 rounded-lg p-4 outline-none" />
              <input type="text" placeholder="Last Name" className="bg-gray-100 text-gray-900 rounded-lg p-4 outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Phone" className="bg-gray-100 text-gray-900 rounded-lg p-4 outline-none" />
              <input type="email" placeholder="Email" className="bg-gray-100 text-gray-900 rounded-lg p-4" />
            </div>
            <textarea
              placeholder="Message"
              rows={5}
              className="bg-gray-100 text-gray-800 rounded-lg p-4 outline-none resize-none"
            />
            <button className="bg-blue-500 text-white py-3 px-8 rounded-lg w-fit hover:bg-blue-600 transition duration-300">
              Submit Message
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}