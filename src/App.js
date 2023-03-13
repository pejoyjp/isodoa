import { useState,useEffect} from 'react'
import {MdOutlineLightMode,MdOutlineNightlight} from 'react-icons/md'
import SunCalc from 'suncalc'
import aot from './imgs/aot.png'
import logo from './imgs/logo.jpeg'
import lain from './imgs/lain.png'
import spider from './imgs/spider.png'
import handgun from './imgs/handgun.png'
function App() {
 
  const [darkToggle, setDarkToggle] = useState(false)
  

  useEffect(()=>{
    const now = new Date();
    const times = SunCalc.getTimes(now);
    const sunrise = times.sunrise;
    const sunset = times.sunset;
    if (now >= sunrise && now <= sunset) {
      setDarkToggle(false)
    } else {
      setDarkToggle(true)
    }
  },[])

  return (
    <main className= {` text-4xl h-screen font-Prompt relative
    ${darkToggle?"bg-slate-800 text-white"
              :"bg-gray-50 "}`}>
        <div className='absolute bottom-10 left-[-20px] rotate-[170deg]'>
        <img src={lain}
          alt="lain"
          width={120}
          height={100}

        />
        </div>

        <div className='flex justify-center flex-col relative'>
        <div className='absolute top-50 right-4 rotate-45'>
        <img src={spider}
            alt="hh"
            width={70}
            height={70}
        
        />
        </div>



        <div className={`flex w-full justify-between p-3 border-b-2 ${darkToggle?"border-white":" border-gray-500"}`} >
        <div className={`text-3xl bg-gradient-to-r ${darkToggle?"from-cyan-500 to-blue-500 ":"from-pink-500 to-violet-500"}
            text-transparent bg-clip-text`}>
        {
        darkToggle?<>Лаку ноћ</>:<>Добро јутро</>
        }

        </div>

        <div className={`${darkToggle?"text-white":" text-slate-800"} flex`} 
          onClick={()=>setDarkToggle(!darkToggle)}>
        {
        darkToggle? <MdOutlineLightMode size={40}/>
                  : <MdOutlineNightlight size={40}/>
        }        
        </div>
        </div>

        <div className='flex justify-center flex-col items-center mt-5'>


        <img
          src={logo}
          alt="logo"
          width={130}
          height={130}
          className='rounded-full'
        />

        <div className='font-Tilt text-4xl mt-4'>
        @verfalen
        </div>
        </div>



        <div className='flex justify-center mt-10 flex-col items-center gap-8'>

        <button 
        className='bg-red-300 w-11/12 rounded-2xl animate-bounce p-4
                  

        '>
        <a href="https://myanimelist.net/profile/verfalen">MAL</a>
        </button>

        <button 
        className='bg-red-400 w-11/12 rounded-2xl p-4 shadow-2xl
                flex items-center justify-evenly relative
        '>
        <a href="https://anilist.co/user/verfallen/">Anilist</a>
        <img src={handgun}
            alt="handgun"
            width={60}
            height={60}
            className='absolute left-8 top-2'

        />
        </button>

        <button 
        className='bg-red-500 w-11/12 rounded-2xl p-4 shadow-2xl relative
        '>
        <a href="https://open.spotify.com/user/31knr5sebyrx6dziw66jfphr3lva?si=cipJD--QQ8ik9vyVC1pfBA&nd=1">Spotify</a>
        <img src={aot}
            alt="aot"
            width={60}
            height={60}
            className='absolute right-8 top-2'

        />
        </button>



        </div>

        </div>
        </main>
  )
}

export default App
