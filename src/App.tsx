import bgImg from './assets/images/IMG_9155.jpg'
import gsap from 'gsap'
import { GridLines, HEROGRID, Loader } from './components'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)
function App() { 

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // const setLoading = 
  
    return () => {
      
    }
  }, [1000])
  

  return (
    <div className="relative w-full h-screen  bg-white dark:bg-black">
     {/* first layer, image background */}
     <img src={bgImg} className='absolute z-[0] w-full h-full object-cover object-top' alt='Background image' />
     {/* Grid Layer */}
     <HEROGRID />
     {/* Lines Layer */}
     <GridLines />
     {/* Loader */}
     <Loader />
    </div>
  )
}

export default App
