import React from 'react'
import Image from 'next/image'

const Hero2 = () => {
    return (
        <div className='pt-16 mr-36 pb-20 text-center items-center justify-center'>
            <div className='flex justify-around'>
                <div>
                    <Image
                        src={'https://cdn.spectex.xyz/images/web/hero-2-image.png'}
                        width={500}
                        height={500}
                        alt={'Hero Image'}
                    />
                </div>
                <div className="h-[450px] min-h-[1em] w-px self-stretch bg-blue-button-primary shadow-button-glow ">
                </div>
                <div className='pt-24 pb-5'>
                    <div className='text-center'>
                        <h2 className='flex space-x-2 font-bold text-4xl'>
                            Let the <div className='px-2 text-blue-text-teal'>professionals</div>
                        </h2>
                        <h2 className='font-bold text-4xl'>do the work</h2>
                    </div>
                    <p className='pt-8 font-medium text-sm text-center'>At Spectex, we provide expert IT solutions tailored to your <br />
                        needs. Our seasoned professionals ensure flawless<br />
                        execution from start to finish. With a comprehensive range<br />
                        of services including network management, cloud <br />
                        computing, cybersecurity, and software development, we <br />
                        free up your resources and drive your business forward. <br />
                        Partner with us to unlock the potential of technology</p>
                </div>
            </div>
        </div>
    )
}

export default Hero2