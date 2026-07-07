
import { Navbar } from './components/navbar'
import { Hero } from './components/Hero'
import Services from './components/service-composant'
import Title from './components/Title'
import { About } from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portofolio'
import Stats from "./components/Stats";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
       <Title color={'text-5xl mt-20 text-slate-900'} text={'Our Skills'}/>
       <Skills />
      <Portfolio />
      <Stats />
        
    </div>
  )
}

export default App