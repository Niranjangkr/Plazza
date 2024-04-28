import Image from 'next/image'
import React from 'react'

const Feature = () => {
    return (
        <section className=" body-font lg:px-44">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full md:mb-20 mb-8">
                    <h1 className="md:text-5xl sm:text-3xl text-2xl font-light title-font mb-4">Spend zero time managing your insurance We take care of everything.</h1>
                </div>
                <div className="flex flex-wrap -m-4 mb-5 justify-center space-x-8">
                    <div></div>
                    <div className="md:p-4 p-3 lg:w-1/4 md:w-1/2 ">
                        <p className="h-full flex flex-col items-center  md:text-2xl sm:text-lg text-base font-medium">
                            Automatic renewals to avoid policy lapse
                        </p>
                    </div>
                    <div className="md:p-4 p-3 lg:w-1/4 md:w-1/2 ">
                        <p className="h-full flex flex-col items-center  md:text-2xl sm:text-lg text-base font-medium">
                            Top-up policy for changing life needs
                        </p>
                    </div>
                    <div className="md:p-4 p-3 lg:w-1/4 md:w-1/2 ">
                        <p className="h-full flex flex-col items-center md:text-2xl sm:text-lg text-base font-medium">
                            Recommend and port insurance if there's a need
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Feature