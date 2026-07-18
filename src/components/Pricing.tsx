
        import { Check } from 'lucide-react'
 
          const plans = [
          {
             title: 'Regulars Package',
             price: '$289',
             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sint?',
             features: [
              'Lorem ipsum dolor sit amet.',
              'Lorem ipsum.',
              'Lorem ipsum dolor amet.',
              'Lorem ipsum dolor sit amet.',
              'Lorem ipsum dolor sit.',
              ],
       highlight: false,
          },
         {
            title: 'Standard Package',
            price: '$541',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quae.',
            features: [
           'Lorem ipsum dolor sit amet.',
           'Lorem ipsum.',
           'Lorem ipsum dolor amet.',
           'Lorem ipsum dolor sit amet.',
           'Lorem ipsum dolor sit.',
           ],
           highlight: true,
          },
         {
             title: 'Premium Package',
             price: '$756',
             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, hic!',
            features: [
              'Lorem ipsum dolor sit amet.',
               'Lorem ipsum.',
              'Lorem ipsum dolor amet.',
             'Lorem ipsum dolor sit amet.',
          'Lorem ipsum dolor sit.',
            ],
    highlight: false,
  },
]

            export function Pricing() {
              return (
            <section className="py-20 text-green-200" id="pricing">
           <div className="max-w-6xl mx-auto px-6">
             <h2 className="text-5xl font-bold text-center mb-16 text-black">Pricing Plan</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 ${plan.highlight ? 'bg-blue-500 text-white scale-105' : 'bg-white text-gray-800'}`}
            >
              <h3 className={`text-3xl font-bold mb-4 ${plan.highlight ? 'text-green-300' : 'text-blue-600'}`}>
                {plan.title}
              </h3>
              <p className="text-5xl font-bold mb-4">{plan.price}</p>
              <p className={`mb-6 text-center ${plan.highlight ? 'text-white' : 'text-gray-500'}`}>
                {plan.description}
              </p>
              <ul className="space-y-3 text-lg">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="text-green-400" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}