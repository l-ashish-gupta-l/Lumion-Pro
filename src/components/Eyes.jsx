import React, { useEffect, useState } from 'react'

function Eyes() {
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
        <div className='w-full h-screen overflow-hidden'>
            <div className='h-full w-full flex justify-center items-center bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] relative'>
                <div className='absolute flex gap-20 w-[50vw] px-20 py-5 h-[40vh]  '>
                    <div className=' w-[40vw] h-full rounded-full  bg-white flex justify-center items-center'>
                        <div className='w-[10vw] h-[10vw] relative bg-zinc-900 rounded-full  font-[Neue] '>
                            <div style={{ transform: `translate(-50% ,-50%) rotate(${rotate}deg)` }} className='line absolute p-1 line top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5'>
                                <div className=' w-5 h-5  bg-zinc-300 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-[40vw] h-full rounded-full  bg-white flex justify-center items-center'>
                        <div className='w-[10vw] h-[10vw] relative bg-zinc-900 rounded-full  font-[Neue] '>
                            <div style={{ transform: `translate(-50% ,-50%) rotate(${rotate}deg)` }} className='line absolute p-1 line top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5'>
                                <div className=' w-5 h-5  bg-zinc-300 rounded-full'></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Eyes