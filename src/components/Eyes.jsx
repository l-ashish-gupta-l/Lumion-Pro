import React, { useEffect, useRef, useState } from 'react'
import video from "../assest/Main-HQ-1.mp4"
function Eyes() {
    const [rotate, setrotate] = useState(0)
    const video_div = useRef(null);

    const videodiv = () => {
        if (video_div.current) {
            console.log(video_div.current, 'clicked');
            video_div.current.style.opacity = '100%';
            video_div.current.style.transition = 'opacity 1s ease-in-out';
        }
    };

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
        <div className='relative w-full h-[50vh] lg:h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.7" className='h-[50vh] lg:h-full lg:w-full flex justify-center items-center bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] relative'>
                <div className='absolute flex gap-10 lg:gap-20 w-1/2 h-1/3 lg:w-[50vw] lg:h-[40vh]  lg:px-20 py-5   '>
                    <div className='w-full rounded-full  bg-white flex justify-center items-center'>
                        <div onClick={videodiv} className=' w-[15vw] h-[15vw] lg:w-[10vw] lg:h-[10vw] relative flex justify-center items-center bg-zinc-900 rounded-full  font-[Neue] text-white lg:text-sm text-[.5em]  '>
                            PLAY
                            <div style={{ transform: `translate(-50% ,-50%) rotate(${rotate}deg)` }} className='line absolute p-1 line top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5'>
                                <div className='w-3 h-3  lg:w-5 lg:h-5  bg-zinc-300 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full rounded-full  bg-white flex justify-center items-center'>
                        <div className=' w-[15vw] h-[15vw] lg:w-[10vw] lg:h-[10vw] relative bg-zinc-900 rounded-full  font-[Neue] text-white flex justify-center items-center lg:text-sm text-[.5em]  '>
                            PLAY
                            <div style={{ transform: `translate(-50% ,-50%) rotate(${rotate}deg)` }} className='line absolute p-1 line top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5'>
                                <div className='w-3 h-3  lg:w-5 lg:h-5  bg-zinc-300 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={video_div} className='absolute z-10 w-full h-full top-0 left-0 bg-red-300 overflow-hidden opacity-0 hidden'>
                <div className='w-full h-full relative'>
                    <video src={video} autoPlay loop muted />
                </div>
            </div>


        </div>
    )
}

export default Eyes