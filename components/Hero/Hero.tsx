import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
            <div className='pt-10 mx-10'>
                <div className='flex justify-around'>
                    <div className='pt-16'>
                        <div>
                            <div className='flex text-6xl font-bold '>
                                Building <div className='text-blue-text-green px-4'>your future</div>
                            </div>
                            <div className='text-6xl font-bold'>
                                with <div className='text-6xl font-bold bg-gradient-to-r from-blue-button-primary via-teal-400 to-green-300 inline-block text-transparent bg-clip-text'>Technology</div>
                            </div>
                        </div>

                        <p className='font-medium text-lg pt-8'>We&apos;re dedicated to building the digital future. Whether <br />
                            you need custom software, cloud services,or anything in <br />
                            between, we&apos;ve got you covered.Let&apos;s unleash the power <br />
                            of technology and shapethe future together.</p>
                        <div className='flex space-x-5 pt-8 text-center items-center justify-center'>
                            <button className='bg-blue-button-primary pt-3 pb-3 px-6 rounded-lg font-bold shadow-button-glow'>PROJECTS</button>
                            <button className='font-bold'>SERVICES</button>
                        </div>
                    </div>

                    <div
                        className="h-[450px] min-h-[1em] w-px self-stretch bg-blue-button-primary shadow-button-glow "></div>
                    <div>
                        <Image
                            src={'https://cdn.spectex.xyz/images/web/hero-image.png'}
                            width={500}
                            height={500}
                            alt={'Hero Image'}
                        />
                    </div>
                </div>
            </div>
    )
}

export default Hero