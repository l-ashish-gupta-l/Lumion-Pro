import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
function Landingpage() {
    return (
        <div className="w-full h-screen bg-zinc-900 pt-1 ">
            <div className="textstructure mt-40 px-20">
                {["WE CREATE", "eye-Opening", "presentations"].map((item, index) => {
                    return (
                        <div className="masker w-fit flex items-center">
                            {index == 1 && (<div className="w-[10vw] h-[6.1vw] bg-red-500 mt-4 rounded-lg mr-2">

                            </div>)}
                            <h1 key={index} className="text-[10vw] leading-[7vw] tracking-normal  font-medium font-[Founders] uppercase">{item}</h1>
                        </div>)
                })}
            </div>
            <div className="border-t-2 py-2 px-20  border-zinc-800 mt-20 flex items-center justify-between">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) =>
                    <p className="text-lg font-light tracking-tight leading-none font-[Neue]">
                        {item}
                    </p>)}
                <div className="start flex gap-2">
                    <div className="px-5 py-2 font-['Neue']  border-[1px] border-zinc-700 rounded-full text-lg uppercase ">Start the project</div>
                    <div className="p-3 font-['Neue']  border-[1px] border-zinc-700 rounded-full text-lg uppercase">
                        <FaArrowUpLong size={20} className="rotate-45" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Landingpage