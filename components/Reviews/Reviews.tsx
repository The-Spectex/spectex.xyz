import React from 'react'
import Image from 'next/image'

const Reviews = () => {
    return (
        <div>
            <div className='flex pb-20 justify-around'>
                <div>
                    <Image className='pt-10'
                        src={'https://cdn.spectex.xyz/images/web/reviews.png'}
                        width={500}
                        height={500}
                        alt={'Reviews'}
                    />
                </div>
                <div className='pt-32'>
                    <div className='text-center items-center justify-center font-bold text-4xl'>
                        <h2>
                            YOU DON&apos;T HAVE TO
                        </h2>
                        <h2 className='text-blue-button-primary'>
                            TAKE OUR WORD FOR IT
                        </h2>
                    </div>
                    <div>
                        <h2 className='font-medium text-xl pt-10 align-middle text-center'>
                            Listen to our customers and see <br />their review
                        </h2>
                    </div>
                </div>
            </div>
            {/* REVIEW CARDS */}
            <div className='flex justify-around pb-10'>
                <div className='pt-10 rounded-xl pb-10 mx-5  text-center font-medium bg-blue-panel-bg bg-opacity-25 shadow-panel-glow'>
                    <p className='mx-2'>
                        I had the pleasure of working with Spectex <br />
                        for our web development needs, and <br />
                        I must say they exceeded our expectations. <br />
                        Their team demonstrated a high level <br />
                        of professionalism and technical expertise <br />
                        throughout the project. They were responsive <br />
                        to our feedback, implemented changes promptly, <br />
                        and delivered a visually appealing and  <br />
                        functional website.
                    </p>
                    <div className='pt-4'>
                        <h2 className='font-medium text-medium'>
                            - Dilshad Zaman Khan
                        </h2>
                        <p className='text-sm'>Artist, Enrepreneur</p>
                    </div>
                </div>
                <div className='pt-10  rounded-xl pb-10 mx-5 text-center font-medium bg-blue-panel-bg bg-opacity-25 shadow-panel-glow'>
                    <p className='mx-2'>
                        Spectex&apos;s SEO services have had a positive impact <br />
                        on our website&apos;s visibility. While it took some time <br />
                        to see significant improvements, we appreciate the <br />
                        thorough analysis they conducted and the tailored <br />
                        strategies they implemented.
                    </p>
                    <div className='pt-24'>
                        <h2 className='font-medium text-medium'>
                            - Md. Shafiqul Islam
                        </h2>
                        <p className='text-sm'>CEO, ENiGMA</p>
                    </div>
                </div>
                <div className='pt-10 rounded-xl pb-10 mx-5 text-center font-medium bg-blue-panel-bg bg-opacity-25 shadow-panel-glow'>
                    <p className='mx-2'>
                        Spectex has been a great partner for us. <br />
                        They have helped us grow our business <br />
                        and have been very accommodating <br />
                        to our needs. They are very professional <br />
                        and responsive. I would highly recommend <br />
                        them to anyone looking for a reliable <br />
                        web development company.
                    </p>
                    <div className='pt-16'>
                        <h2 className='font-medium text-medium'>
                            - Alex Knox
                        </h2>
                        <p className='text-sm'>CTO, Sec Digital</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews