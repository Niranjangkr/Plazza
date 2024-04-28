import React from 'react'

const Pricing = () => {
    return (
        <section className=" body-font lg:px-44">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full md:mb-20 mb-10">
                    <h1 className="md:text-5xl sm:text-3xl text-2xl font-light title-font mb-4 flex flex-col space-y-2">
                        <span>Complete peace of mind</span>
                        <span className=' line-through' style={{ textDecorationColor: 'red' }}>at ₹199/month</span>
                    </h1>
                </div>
                <div className="flex flex-col text-center w-full md:mb-20 mb-10">
                <p className="md:text-5xl sm:text-3xl text-2xl font-light title-font mb-4">Plazza subscription is <b className='font-bold'>free</b> for first 1000 customers</p>
                </div>
            </div>
        </section>
    )
}

export default Pricing