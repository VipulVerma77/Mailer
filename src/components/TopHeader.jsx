import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { CustomButton } from '../components';
import {hero,sty} from "../assets/index"
import { circles } from "../config/navLink";

const TopHeader = ({text,subText=""}) => {
       const [showDecorations, setShowDecorations] = useState(false);
      useEffect(() => {
        setShowDecorations(true);
      }, []);
  return (
    <div>
      <div className="relative overflow-hidden">
                {/* Decorations with lower z-index */}
                <div className="absolute inset-0 overflow-hidden z-0">
                   {circles.map((circle) => (
                    <Transition
                      key={circle.id}
                      show={showDecorations}
                      enter="transition-all duration-1000 ease-out"
                      enterFrom="opacity-0 scale-50"
                      enterTo="opacity-100 scale-100"
                      className={`absolute ${circle.position} ${circle.size} ${circle.animation}`}
                    >
                      <div className={`rounded-full ${circle.style} bg-transparent`}></div>
                    </Transition>
                  ))}
              
          
                  {/* Left floating image - Now properly wrapped */}
                  <Transition
                    show={showDecorations}
                    enter="transition-all duration-1000 ease-out delay-300"
                    enterFrom="opacity-0 -translate-x-5"
                    enterTo="opacity-100 translate-x-0"
                    className="absolute left-10 top-1/3 w-16 h-16 md:block hidden" // Hide on mobile
                  >
                    <div className="animate-float">
                      <img 
                        src={sty} 
                        alt="Decoration"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </Transition>
                </div>
                
          
                {/* Hero Section with higher z-index */}
                <div className="h-[50vh] relative">
                  <div className="max-w-7xl mx-auto">
                    <div className="flex  lg:flex-col md:flex-col flex-col items-center justify-center h-100">
                      {/* Text content */}
                     <h1 className="text-2xl text-bold text-gray-600 text-center">{text} </h1>
                     <h1 className="text-3xl md:text-5xl text-bold text-gray-600 text-center">{subText} </h1>
          
                      {/* Image */}
                      
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default TopHeader
