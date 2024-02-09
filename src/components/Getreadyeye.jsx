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
        <div className='relative'>
            <div data-scroll data-scroll-speed=".5" className='Background  bg-[#CDEA68] p-20 '>
                <h1 className='font-[Founders] text-[16vw] leading-none text-center text-[#212121]'>READY</h1>
                <h1 className='font-[Founders] text-[16vw] leading-[20vh] text-center  text-[#212121]'>TO START</h1>
                <h1 className='font-[Founders] text-[16vw] leading-none text-center  text-[#212121]'>THE PROJECT </h1>
            </div>
            <div className='absolute left-[55%] top-[50%]  -translate-x-1/2 -translate-y-1/2 flex gap-10 w-[50vw] px-20 py-5  '>
                <div className=' w-[12vw] h-[12vw]  rounded-full  bg-white flex justify-center items-center'>
                    <div className='w-[8vw] h-[8vw] relative bg-zinc-900 rounded-full  font-[Neue] '>
                        <div style={{ transform: `translate(-50% ,-50%) rotate(${rotate}deg)` }} className='line absolute p-1 line top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5'>
                            <div className=' w-5 h-5  bg-zinc-300 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='  w-[12vw] h-[12vw] rounded-full  bg-white flex justify-center items-center'>
                    <div className='w-[8vw] h-[8vw] relative bg-zinc-900 rounded-full  font-[Neue] '>
                        <div style={{ transform: `translate(-50% ,-50%) rotate(${rotate}deg)` }} className='line absolute p-1 line top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5'>
                            <div className=' w-5 h-5  bg-zinc-300 rounded-full'></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>












    )
}

export default Getreadyeye