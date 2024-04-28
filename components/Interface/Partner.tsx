import Image from 'next/image'
import React from 'react'
import Company1 from "@/public/img/company1.svg"
import Company2 from "@/public/img/company2.svg"
import Company3 from "@/public/img/company3.svg"
import Company4 from "@/public/img/company4.svg"

const Partner = () => {
    return (
        <section className="text-slate-100 bg-black body-font lg:px-44">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-5xl text-3xl font-extralight title-font mb-4 text-white">Our experts help you buy the right health insurance from the brand of your choice</h1>

                </div>
                <div className="flex flex-wrap -m-4 mb-5 justify-center">
                    <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image
                                alt="team"
                                className="object-contain object-center rounded-lg w-full h-32 mb-4"
                                src={Company1}
                            />

                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image
                                alt="team"
                                className="object-contain object-center rounded-lg w-full h-32 mb-4"
                                src={Company2}
                            />
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image
                                alt="team"
                                className="object-contain object-center rounded-lg w-full h-32 mb-4"
                                src={Company3}
                            />
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image
                                alt="team"
                                className="object-contain object-center rounded-lg w-full h-32 mb-4"
                                src={Company4}
                            />
                        </div>
                    </div>

                </div>
                <div className='flex justify-center w-full mt-10'>
                <h2 className=' font-bold sm:text-3xl text-xl text-center text-slate-100'>Zero spam. Connect with comfort.</h2>
                </div>
                <div className='grid mt-10 grid-cols-4'>
                    <p className='flex text-center justify-center lg:col-span-1 md:col-span-2 col-span-4 font-medium sm:text-3xl text-xl text-slate-100 w-full mt-10 '>Whatsapp</p>

                    <p className='flex text-center justify-center font-medium sm:text-3xl text-xl text-slate-100 w-full mt-10 lg:col-span-1 md:col-span-2 col-span-4'>Phone</p>

                    <p className='flex text-center justify-center font-medium sm:text-3xl text-xl text-slate-100 w-full mt-10 lg:col-span-1 md:col-span-2 col-span-4'>Zoom Call</p>
                    <p className='flex text-center justify-center font-medium sm:text-3xl text-xl text-slate-100 w-full mt-10 flex-col space-y-1 lg:col-span-1 md:col-span-2 col-span-4 '>At home<span className='text-sm'>(Bangalore only)</span></p>
                </div>
            </div>
        </section>
    )
}

export default Partner