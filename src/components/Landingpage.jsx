import React from 'react'
import { PiArrowDownLeftLight } from "react-icons/pi";
import { motion } from 'framer-motion'
import Heropage_headingimg from "../assest/Heropage-heading.jpg"

function Landingpage() {
   
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full h-screen pt-1 overflow-hidden">
            <div className="textstructure mt-36 px-5 lg:px-12  ">
                {["WE CREATE", "eye-Opening", "presentations"].map((item, index) => {
                    return (
                        <div className="masker  flex items-center  ">
                            {index == 1 && (<motion.div initial={{ width: "0" }} animate={{ width: 100 }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className="lg:w-[8vw] h-10 flex items-center justify-center lg:h-[12vh] bg-black mt-4 rounded-lg mr-2  overflow-hidden">
                                <img src={Heropage_headingimg} alt="Heropage-headingImg" className='w-full h-full  object-cover' />
                            </motion.div>)}
                            <h1 key={index} className="text-[18vw] leading-[15vw] whitespace-nowrap  lg:text-[10vw] lg:leading-[7vw] tracking-normal  font-medium font-[Founders] uppercase">{item}</h1>
                        </div>)
                })}
            </div>
            <div className="border-t-[.5px] py-2 px-5 lg:px-12 mt-10  border-zinc-400 lg:mt-28 lg:flex lg:items-center lg:justify-between">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) =>
                    <p className="text-base font-light tracking-tight mt-10 lg:mt-0 leading-none font-[Neue]">
                        {item}
                    </p>)}
                <div className="start flex lg:justify-center lg:items-center gap-2 mt-10 lg:mt-0 group">
                    <div className="px-5 py-1 font-['Neue'] border-[1px] border-zinc-700 cursor-pointer rounded-full text-base uppercase hover:bg-[#212121] hover:text-white origin-center duration-500 group-hover:bg-[#212121] group-hover:text-white">
                        Start the project
                    </div>
                    <div className="lg:p-[.5vw] hidden font-['Neue'] lg:flex justify-center cursor-pointer items-center border-[1px] border-zinc-700 rounded-full text-lg uppercase group-hover:bg-[#212121] group-hover:text-white origin-center duration-500">
                        <PiArrowDownLeftLight className="rotate-180 text-base" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Landingpage