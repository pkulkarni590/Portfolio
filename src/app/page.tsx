import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Photography from "@/components/Photography"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-900 to-black min-h-screen">

      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Photography/>
      <Contact/>
      <Footer/>

    </main>
  )
}