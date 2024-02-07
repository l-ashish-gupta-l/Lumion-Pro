import React from 'react'

function Features() {
    return (
        <div className='w-full py-20  bg-zinc-800'>
            <div className='w-full px-16 pb-10 border-b-[1px] border-zinc-600'>
                <h1 className='text-6xl font-[Neue]'>Featured projects</h1>
            </div>
            <div className='px-16 '>
                <div className='cards w-full flex gap-10 mt-10'>
                    <div className='card w-1/2 h-[75vh] rounded-xl  bg-red-500'></div>
                    <div className='card w-1/2 h-[75vh] rounded-xl   bg-red-500'></div>
                </div>
            </div>
        </div>
    )
}

export default Features