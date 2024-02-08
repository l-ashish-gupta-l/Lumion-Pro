import React from 'react'
import { PiArrowDownLeftLight } from "react-icons/pi";
import { motion } from 'framer-motion'
import Heropage_headingimg from "../assest/Heropage-heading.jpg"
function Landingpage() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full h-screen pt-1 ">
            <div className="textstructure mt-36 px-12">
                {["WE CREATE", "eye-Opening", "presentations"].map((item, index) => {
                    return (
                        <div className="masker w-fit flex items-center">
                            {index == 1 && (<motion.div initial={{ width: "0" }} animate={{ width: "8.5vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className="w-[8vw] h-[6.1vw] mt-4 rounded-lg mr-2 overflow-hidden">
                                <img src={Heropage_headingimg} alt="Heropage-headingImg" className='w-full h-full object-cover' />
                            </motion.div>)}
                            <h1 key={index} className="text-[10vw] leading-[7vw] tracking-normal  font-medium font-[Founders] uppercase">{item}</h1>
                        </div>)
                })}
            </div>
            <div className="border-t-[.5px] py-2 px-12   border-zinc-400 mt-28 flex items-center justify-between">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) =>
                    <p className="text-base font-light tracking-tight leading-none font-[Neue]">
                        {item}
                    </p>)}
                <div className="start flex justify-center items-center gap-2">
                    <div className=" px-5 py-1 font-['Neue']  border-[1px] border-zinc-700 rounded-full text-base uppercase ">Start the project</div>
                    <div className=" p-[.5vw] font-['Neue'] flex justify-center items-center  border-[1px] border-zinc-700 rounded-full text-lg uppercase">
                        <PiArrowDownLeftLight className="rotate-180 text-base" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Landingpage