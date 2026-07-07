
export type Props ={
    text:string
    color:string
}

export default function Title({text,color}:Props) {
  return (
    <section >
      <h1 className={`text-2xl font-extrabold text-center text-gray-500 ${color}`}>{text}</h1>

    </section>
  )
}
