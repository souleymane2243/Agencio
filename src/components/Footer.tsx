
     export function Footer() {
        return (
             <footer className="bg-gray-950 text-white">
               <div className="w-full h-96">
              <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.123456789!2d-82.4239!3d42.9839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s4239+Lapeer+Rd%2C+Port+Huron%2C+MI+48060!5e0!3m2!1sfr!2sus!4v1234567890"
               width="100%"
               height="100%"
               style={{ border: 0 }}
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
              />
          </div>
          <div className="text-center py-6 border-t border-gray-800">
             <p>Copyright © All rights reserved.</p>
          </div>
            </footer>
           )
       }