import React, { useEffect, useRef, useState } from 'react'
import video from "../assest/Main-HQ-1.mp4"
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

    const div_ref = useRef(null);


    const [X, setX] = useState("0");
    const [Y, setY] = useState("0");
    useEffect(() => {

        div_ref.current.addEventListener("mousemove", (e) => {
            setX(e.clientX - 100);
            setY(e.clientY - 100);
        })

    }, [])

    const [vissible, setvissible] = useState("hidden")
    const videoRef = useRef(null);

    const togglePauseAndVisibility = () => {
        const video = videoRef.current;

        if (video.paused) {
            video.play();
            setvissible("visible");
        } else {
            video.pause();
            setvissible("hidden");
        }
    };



    return (
        <div className='relative w-full h-[50vh] lg:h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.7" className='h-[50vh] lg:h-full lg:w-full flex justify-center items-center bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] relative'>
                <div className='absolute flex gap-10 lg:gap-20 w-1/2 h-1/3 lg:w-[50vw] lg:h-[40vh]  lg:px-20 py-5    '>
                    <div className='w-full rounded-full  bg-white flex justify-center items-center'>
                        <div onClick={togglePauseAndVisibility} className=' w-[15vw] h-[15vw] lg:w-[10vw] lg:h-[10vw] relative flex justify-center items-center bg-zinc-900 rounded-full  font-[Neue] text-white lg:text-sm text-[.5em]   '>
                            PLAY
                            <div style={{ transform: `translate(-50% ,-50%) rotate(${rotate}deg)` }} className='line absolute p-1 line top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5'>
                                <div className='w-3 h-3  lg:w-5 lg:h-5  bg-zinc-300 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full rounded-full  bg-white flex justify-center items-center'>
                        <div onClick={togglePauseAndVisibility} className=' w-[15vw] h-[15vw] lg:w-[10vw] lg:h-[10vw] relative bg-zinc-900 rounded-full  font-[Neue] text-white flex justify-center items-center lg:text-sm text-[.5em]  '>
                            PLAY
                            <div style={{ transform: `translate(-50% ,-50%) rotate(${rotate}deg)` }} className='line absolute p-1 line top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5'>
                                <div className='w-3 h-3  lg:w-5 lg:h-5  bg-zinc-300 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={div_ref} className={`absolute left-0 top-0 w-full h-full  ${vissible} `}>
                <div className="relative w-full h-full overflow-hidden bg-red-500">
                    <button onClick={togglePauseAndVisibility} className={`absolute z-30 top-[85%] left-[80%] px-2 py-1 bg-black font-[Neue] rounded-2xl text-white`}>
                        PAUSE
                    </button>
                    <video ref={videoRef} src={video} className="z-10 object-cover w-full h-full" autoPlay={true} loop muted />
                </div>
            </div>

        </div>
    )
}

export default Eyes