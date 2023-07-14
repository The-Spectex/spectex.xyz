import React from 'react'
import Image from 'next/image'

const Newsletter = () => {
    return (
        <div>
            <div className='flex pb-20 justify-around'>
                <div>
                    <Image className='pt-10'
                        src={'https://cdn.spectex.xyz/images/web/newsletter.png'}
                        width={300}
                        height={300}
                        alt={'Newsletter'}
                    />
                </div>
                <div className='pt-32'>
                    <div className='text-center items-center justify-center font-bold text-4xl'>
                        <h2>
                            SUBSCRIBE TO OUR
                        </h2>
                        <h2 className='text-blue-button-primary'>
                            NEWSLETTER
                        </h2>
                    </div>
                    <div>
                        <h2 className='font-medium text-md pt-10 align-middle text-center'>
                            <p>Subscribe the monthly newsletter to get the latest news, updates & offers</p>
                        </h2>
                        <div className='align-middle text-center items-center pt-5'>
                            <input type="email" placeholder='name@domain.com' className='pt-2 pb-2 px-2 rounded-full text-center text-xl bg-blue-panel-bg mx-4' required />


                            <button className='shadow-button-glow bg-blue-button-primary pt-2 pb-2 px-2 rounded-lg'>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter