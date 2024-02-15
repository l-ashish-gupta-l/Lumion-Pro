import React, { useEffect, useState } from 'react'


function Getreadyeye() {

    const [rotate, setrotate] = useState(0)
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltay = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltay, deltaX) * 180 / Math.PI;
            setrotate(angle - 180);
        })
    }, [])

    return (
        <div className='relative bg-[#CDEA68]'>
            <div data-scroll data-scroll-speed=".5" className='Background rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] px-5 pt-10 pb-24 lg:p-20 '>
                <h1 className='font-[Founders] text-[19vw]  lg:text-[16vw] leading-none text-center text-[#212121]'>READY</h1>
                <h1 className='font-[Founders] text-[19vw]  lg:text-[16vw] leading-[8vh] lg:leading-[20vh] text-center  text-[#212121]'>TO START</h1>
                <h1 className='font-[Founders] text-[19vw]  lg:text-[16vw] leading-none text-center  text-[#212121]'>THE PROJECT <span className='font-[Neue] -ml-1 font-bold lg:-ml-5 text-[.9em]'>?</span> </h1>
            </div>
            <div className='absolute w-full h-full top-0 left-0 flex justify-center items-end gap-5  '>

                <div className='w-[20vw] h-[20vw] lg:w-[13vw] lg:h-[26vh] rounded-full  bg-white flex justify-center items-center'>
                    <div className=' w-[15vw] h-[15vw] cursor-pointer lg:w-[10vw] lg:h-[10vw] relative flex justify-center items-center bg-zinc-900 rounded-full  font-[Neue] text-white lg:text-sm text-[.5em]   '>

                        <div style={{ transform: `translate(-50% ,-50%) rotate(${rotate}deg)` }} className='line absolute p-1 line top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5'>
                            <div className='w-3 h-3  lg:w-5 lg:h-5  bg-zinc-300 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='w-[20vw] h-[20vw] lg:w-[13vw] lg:h-[26vh] rounded-full  bg-white flex justify-center items-center'>
                    <div className=' w-[15vw] h-[15vw] cursor-pointer lg:w-[10vw] lg:h-[10vw] relative flex justify-center items-center bg-zinc-900 rounded-full  font-[Neue] text-white lg:text-sm text-[.5em]   '>

                        <div style={{ transform: `translate(-50% ,-50%) rotate(${rotate}deg)` }} className='line absolute p-1 line top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5'>
                            <div className='w-3 h-3  lg:w-5 lg:h-5  bg-zinc-300 rounded-full'></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Getreadyeye