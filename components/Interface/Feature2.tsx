import Image from 'next/image'
import React from 'react'

const Feature2 = () => {
    return (
        <section className="text-slate-100 bg-black body-font lg:px-44">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="sm:text-5xl text-3xl font-medium title-font mb-4 text-white">We do your claims, end to end,<br className='lg:flex hidden' /> till money hits your bank.</h2>
                    <p className='sm:text-5xl text-3xl font-extralight title-font text-white'>Speaking to your insurer is now<br className='lg:flex hidden' /> optional.</p>
                </div>
                <div className="flex flex-wrap -m-4 mb-5 justify-center items-center space-y-8">
                    <div></div>
                    <p className="h-full flex flex-col  md:text-center text-2xl font-normal max-w-44 w-[200px]">
                        File claims
                    </p>
                    <p className="h-full flex flex-col  md:text-center text-2xl font-normal max-w-44 w-[200px]">
                        Help with documentation
                    </p>
                    <p className="h-full flex flex-col md:text-center text-2xl font-normal max-w-44  w-[200px]">
                        Follow up
                    </p>
                    <p className="h-full flex flex-col  md:text-center text-2xl font-normal max-w-44 w-[200px]">
                        Fight your case
                    </p>

                </div>
            </div>
        </section>
    )
}

export default Feature2