import React from 'react'
import Card1 from "../assest/card1.png"
function Features() {
    return (
        <div className='w-full py-20  bg-zinc-800'>
            <div className='w-full px-16 pb-10 border-b-[1px] border-zinc-600'>
                <h1 className='text-6xl font-[Neue]'>Featured projects</h1>
            </div>
            <div className='px-16 '>
                <div className=' relative cards w-full flex gap-5 mt-10 '>

                    <div className='  cardbox w-1/2 h-[75vh] flex items-center justify-center '>

                        <h1 className='absolute text-[#CDEA68] z-10 text-9xl ml-[50%] font-[Founders]'>
                            {"FYDE".split("").map((item, index) => <span key={index} className=''>{item}</span>)}
                        </h1>

                        <div className='card w-full h-full rounded-xl overflow-hidden scale-100'  >
                            <img src={Card1} alt="card1" className='object-cover' />

                        </div>
                    </div>
                    <div className='cardbox w-1/2 h-[75vh] flex items-center justify-center  '>
                        <h1 className='absolute text-[#CDEA68] z-10 text-9xl mr-[50%] font-[Founders]'>
                            {"VISE".split("").map((item, index) => <span key={index} className=''>{item}</span>)}
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