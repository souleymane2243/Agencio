import { serviceCard } from "./constante";

const Services =() =>{
 return(
        <section className="bg-gray-50" id="services">
          <h2 className="text-5xl font-bold text-center mb-10">Our Services</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 my-20 mx-10 ">
        {serviceCard.map((item,index)=>(
          <div key={index} className="flex flex-col items-center justify-center sm:justify-start sm:items-start p-4 hover:bg-white hover:shadow-md">
            <img src={item.icones} alt={item.title}  className="my-4"/>
            <h2 className="my-2 font-bold text-2xl">{item.title}</h2>
            <p className="opacity-70">{item.description}</p>
          </div>
        ))}
    </div>
     </section>
 )
}
export default Services