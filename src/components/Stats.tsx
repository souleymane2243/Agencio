 
        const stats = [
      {
         number: "375+",
         title: "Projects",
        },
      {
       number: "247+",
       title: "Clients",
      },
     {
       number: "13+",
       title: "Countries",
     },
     {
      number: "18+",
      title: "Team",
    },
   ];
               const Stats = () => {
           return (
          <section className="py-20 bg-gray-50">
              <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map ((item,index) =>(
                    <div
                     key={index}
                     className="bg-white rounded-lg shadow-lg p-10 text-center"
                    >
                        <h2 className="text-4xl font-bold text-green-500 ">
                            {item.number}

                        </h2>
                         
                         <h3 className="mt-4 text-3xl font-bold text-gray-900">
                            {item.title}
                         </h3>

                    </div>
                ))}
                
                </div> 
          </section>
        );
       };

          export default Stats;