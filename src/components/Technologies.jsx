import {RiReactjsLine } from "react-icons/ri"
import { SiSelenium, SiPython,} from "react-icons/si";
import { FaJava} from "react-icons/fa"; 

const Technologies = () => {
    return (
      <div className="border-b border-neutral-800 pb-24">
          <h1 className="my-20 text-center text-4xl">Technologies</h1>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div> 
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiSelenium className="text-7xl" tstyle={{ color: '#43B02A' }}/>
            </div> 
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiPython className="text-7xl" style={{ color: '#3776AB' }}/>
            </div> 
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaJava className="text-7xl" style={{ color: '#5382A1' }}/>
            </div> 
          </div>
        
      </div>
    )
  }
  
  export default Technologies