import React, { useState } from 'react'
import Card1 from "../assest/card1.png"
import { motion } from "framer-motion"
function Features() {
    const [ishovery1, setishovery1] = useState(false)
    const [ishovery2, setishovery2] = useState(false)




    return (
        <div className='w-full py-20'>
            <div className='w-full px-16 pb-10 border-b-[1.5px] border-zinc-300'>
                <h1 className='text-6xl font-[Neue]'>Featured projects</h1>
            </div>
            <div className='px-16 '>
                <div className=' relative cards w-full flex gap-5 mt-10 '>

                    <div onMouseEnter={() => setishovery1(true)} onMouseLeave={() => setishovery1(false)} className=' cardbox w-1/2 h-[75vh] flex items-center justify-center '>

                        <h1 className='absolute text-[#CDEA68] z-10 flex text-9xl ml-[50%] font-[Founders] overflow-hidden'>
                            {"FYDE".split("").map((item, index) =>
                                <motion.span initial={{ y: "100%" }} animate={ishovery1 ? ({ y: "0" }) : ({ y: "100%" })}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }} key={index} className='inline-block '>{item}</motion.span>)}
                        </h1>

                        <motion.div initial={{ scale: 1 }} animate={ishovery1 ? ({ scale: ".9" }) : ({ scale: "1" })}
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: "3" }} className='card w-full h-full rounded-xl overflow-hidden '  >
                            <img src={Card1} alt="card1" className='object-cover' />

                        </motion.div>
                    </div>
                    <div onMouseEnter={() => setishovery2(true)} onMouseLeave={() => setishovery2(false)} className='cardbox w-1/2 h-[75vh] flex items-center justify-center  '>
                        <h1 className='absolute text-[#CDEA68] z-10 text-9xl mr-[50%] flex font-[Founders] overflow-hidden'>
                            {"VISE".split("").map((item, index) => <motion.span initial={{ y: "100%" }} animate={ishovery2 ? ({ y: "0" }) : ({ y: "100%" })}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }} key={index} className='inline-block '>{item}</motion.span>)}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden scale-100'  >
                            <img src={Card1} alt="card1" className='object-cover' />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Features