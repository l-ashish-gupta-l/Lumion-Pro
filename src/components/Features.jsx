import React, { useState } from 'react'
import Card1 from "../assest/card1.png"
import { motion } from "framer-motion"


function Features() {
    const [ishovery1, setishovery1] = useState(false)
    const [ishovery2, setishovery2] = useState(false)
    return (
        <div className='w-full lg:py-20 '>
            <div className='w-full px-5 lg:px-16 pb-10 border-b-[1.5px] border-zinc-300'>
                <h1 className='text-3xl lg:text-6xl font-[Neue]'>Featured projects</h1>
            </div>
            <div className='lg:px-16 px-5'>
                <div className=' relative cards w-full h-full lg:flex lg:gap-5 mt-5   '>
                    <div className='lg:w-1/2  lg:flex lg:flex-col     '>
                        <div className='px-4 py-2 flex justify-start items-center   '>
                            <div className='w-3 h-3 rounded-full bg-black'></div>
                            <h1 className='ml-2 font-[Neue] text-sm'>FYDE</h1>
                        </div>
                        <div onMouseEnter={() => setishovery1(true)} onMouseLeave={() => setishovery1(false)} className=' cardbox w-full  flex items-center justify-center '>

                            <h1 className='absolute text-[#CDEA68] hidden z-10 lg:flex text-9xl ml-[50%] font-[Founders] overflow-hidden'>
                                {"FYDE".split("").map((item, index) =>
                                    <motion.span initial={{ y: "100%" }} animate={ishovery1 ? ({ y: "0" }) : ({ y: "100%" })}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }} key={index} className='inline-block '>{item}</motion.span>)}
                            </h1>

                            <motion.div initial={{ scale: "1" }} animate={ishovery1 ? ({ scale: ".9" }) : ({ scale: "1" })}
                                transition={{ ease: 'easeInOut', duration: "5" }} className='card w-full h-full rounded-xl overflow-hidden  transition-transform '  >
                                <img src={Card1} alt="card1" className='object-cover' />

                            </motion.div>
                        </div>
                        <div className='p-2 flex  '>
                            <h1 className='ml-2 px-3 py-1   rounded-3xl font-[Neue] text-sm border-black border-[1.5px]'>AUDIT</h1>
                            <h1 className='ml-2 px-3 py-1   rounded-3xl font-[Neue] text-sm border-black border-[1.5px]'>AUDIT</h1>
                            <h1 className='ml-2 px-3 py-1   rounded-3xl font-[Neue] text-sm border-black border-[1.5px]'>AUDIT</h1>
                        </div>
                    </div>
                    <div className='lg:w-1/2  lg:flex lg:flex-col     '>
                        <div className='px-4 py-2 flex justify-start items-center   '>
                            <div className='w-3 h-3 rounded-full bg-black'></div>
                            <h1 className='ml-2 font-[Neue] text-sm'>FYDE</h1>
                        </div>
                        <div onMouseEnter={() => setishovery2(true)} onMouseLeave={() => setishovery2(false)} className=' cardbox w-full  flex items-center justify-center '>

                            <h1 className='absolute text-[#CDEA68] hidden z-10 lg:flex text-9xl mr-[50%] font-[Founders] overflow-hidden'>
                                {"FYDE".split("").map((item, index) =>
                                    <motion.span initial={{ y: "100%" }} animate={ishovery2 ? ({ y: "0" }) : ({ y: "100%" })}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }} key={index} className='inline-block '>{item}</motion.span>)}
                            </h1>

                            <motion.div initial={{ scale: "1" }} animate={ishovery2 ? ({ scale: ".9" }) : ({ scale: "1" })}
                                transition={{ ease: 'easeInOut', duration: "5" }} className='card w-full h-full rounded-xl overflow-hidden  transition-transform '  >
                                <img src={Card1} alt="card1" className='object-cover' />

                            </motion.div>
                        </div>
                        <div className='p-2 flex  '>
                            <h1 className='ml-2 px-3 py-1   rounded-3xl font-[Neue] text-sm border-black border-[1.5px]'>AUDIT</h1>
                            <h1 className='ml-2 px-3 py-1   rounded-3xl font-[Neue] text-sm border-black border-[1.5px]'>AUDIT</h1>
                            <h1 className='ml-2 px-3 py-1   rounded-3xl font-[Neue] text-sm border-black border-[1.5px]'>AUDIT</h1>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Features