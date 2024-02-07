import React from 'react'
function Marquee() {
    return (
        <div className='bg-[#004D43] w-full  py-10 rounded-tl-2xl rounded-tr-2xl'>
            <div className='border-t-2 border-b-2 leading-none border-zinc-300 flex whitespace-nowrap overflow-hidden '>
                <h1 className='text-[20vw] leading-none  mr-10 uppercase font-semibold font-[Founders]' >We are Ochi</h1>
                <h1 className='text-[20vw] leading-none  uppercase font-semibold font-[Founders]' >We are Ochi</h1>
            </div>
        </div>
    )
}

export default Marquee