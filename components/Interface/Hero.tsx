import Image from 'next/image'
import React from 'react'
import HeroImg from "@/public/img/hero.svg"

const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div className='lg:w-[10%] md:w-[20%] w-[38%] relative'>
                    <Image
                        className="mb-10 object-cover object-center rounded"
                        alt="hero"
                        src={HeroImg}
                        priority
                    />
                </div>
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-5xl text-3xl mb-4 font-light text-gray-900">experience <span className='font-medium'>seamless health insurance</span></h1>
                    <p className="mb-8 leading-relaxed sm:text-3xl text-xl font-light text-gray-900">and get cash-back rewards for shopping online</p>
                    <div className="flex flex-col justify-center w-full space-y-1">
                        <button className="w-fit mx-auto leading-relaxed rounded-2xl bg-black text-gray-100 border-0 py-3 px-3 focus:outline-none text-lg font-light ">Download plazza</button>
                        <p className=' text-[13px] text-black'>1 month free trial</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero