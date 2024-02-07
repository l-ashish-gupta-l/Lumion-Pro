import React from 'react'
import Img from "../assest/photo-1.jpg"
function About() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl  text-black'>
            <h1 className='font-[Neue] pt-24 pb-10 px-20 w-[93%] tracking-normal leading-[4vw] text-[3.8vw] text-[#212121] '>
                Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
            </h1>
            <div className='border-t-[1px]  px-20 pt-5 pb-20  flex justify-between border-b-[1px] border-[#464C30]'>
                <div className='text-[#464C30] font-[Neue] font-light '>What you can expect:</div>
                <div className='text-[#464C30] h-[70%] text-base font-[Neue] font-light w-[20%] ml-[30vw] '>
                    <p>
                        We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                    <p className='mt-10'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                </div>
                <div className='text-[#464C30]  mr-20 flex text-left flex-col justify-end  items-center font-[Neue] font-light w-[5%] '>
                    s:
                    {["Instagram", "Behance", "Facebook", "Linkedin"].map((item, index) => <a key={index}>{item}</a>)}
                </div>
            </div>
            <div className='  px-20 py-5   flex justify-between'>
                <div className='w-1/2'>
                    <h1 className='text-5xl font-[Neue] mt-5'>Our approach:</h1>
                    <button className='px-8 uppercase py-3 rounded-full flex items-center justify-center gap-5 font-[Neue] text-white bg-zinc-900 mt-5'> Read more
                        <div className='w-2 h-2 bg-zinc-300 rounded-full'></div>
                    </button>
                </div>
                <div className='w-1/2 h-[60vh] bg-black rounded-xl overflow-hidden '>
                    <img src={Img} alt='Photo-1 ' className='object-cover object-top' />
                </div>

            </div>

        </div>

    )
}

export default About