
import { Navbar } from './components/navbar'
import { Hero } from './components/Hero'
import Services from './components/service-composant'
import Title from './components/Title'
import { About } from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portofolio'
import Stats from "./components/Stats";
import { Team } from './components/Team'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'


function App() {
  return (
    <div>
      <Navbar />
      <section id='home'>
       <Hero /> 
      </section>
      <section id='about us'>
        <About />
      </section>
      
      <Services />
       <Title color={'text-5xl mt-20 text-slate-900'} text={'Our Skills'}/>
       <Skills />
      <Portfolio />
      <Stats />
       <Team />
        <Pricing />
        <Testimonials />
        <Contact />
        <Footer />
        
    </div>
  )
}

export default App