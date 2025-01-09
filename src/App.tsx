import bgImg from './assets/images/IMG_9155.jpg'
import gsap from 'gsap'
import { GridLines, Loader } from './components'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
function App() { 

  return (
    <div className="relative w-full h-screen  bg-white dark:bg-black">
     {/* first layer, image background */}
     <img src={bgImg} className='w-full h-full object-cover object-top' alt='Background image' />
     {/* Grid Layer */}
     {/* Overlay Layer */}
     <div className="w-full h-full absolute top-0 left-0 bg-black/90"></div>
     {/* Lines Layer */}
     <GridLines />
     {/* Loader */}
     <Loader />
    </div>
  )
}

export default App
