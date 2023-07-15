import React from 'react'
import Image from 'next/image'

const Services = () => {
    return (
        <div className='pb-10'>
            <div className='pb-10 flex space-x-3 text-center items-center justify-center'>
                <h1 className=' font-bold text-5xl text-center'>OUR </h1>
                <h1 className='text-blue-text-green font-bold text-5xl'>SERVICES</h1>
            </div>
            <div className='ml-32'>
                <div className='flex justify-around'>
                    <div className='pt-20'>
                        <div className='flex space-x-3 text-center items-center justify-center font-bold text-4xl'>
                            <h2>
                                Web
                            </h2>
                            <h2 className='text-blue-text-teal'>
                                Development
                            </h2>
                        </div>
                        <div>
                            <p className='font-medium text-lg pt-10 align-middle text-center'>
                                Looking for top-notch web development services? <br />
                                Look no further than Spectex. Our team of skilled <br />
                                developers is dedicated to crafting dynamic and <br />
                                responsive websites tailored to your unique business <br />
                                needs.
                            </p>
                        </div>
                    </div>
                    <div
                        className="h-[450px] min-h-[1em] w-px self-stretch bg-blue-button-primary shadow-button-glow "></div>
                    <div>
                        <Image
                            src={'https://cdn.spectex.xyz/images/web/web-development.png'}
                            width={500}
                            height={500}
                            alt={'Web Development'}
                        />
                    </div>
                </div>
                <div className='flex pt-10 mr-36 justify-around'>
                    <div>
                        <Image className='pt-10'
                            src={'https://cdn.spectex.xyz/images/web/ui-ux-designing.png'}
                            width={500}
                            height={500}
                            alt={'UI/ UX Designing'}
                        />
                    </div>
                    <div
                        className="h-[450px] min-h-[1em] w-px self-stretch bg-blue-button-primary shadow-button-glow "></div>
                    <div className='pt-20'>
                        <div className='flex space-x-3 text-center items-center justify-center font-bold text-4xl'>
                            <h2 className='text-purple-700'>
                                UI/ UX
                            </h2>
                            <h2>
                                Designing
                            </h2>
                        </div>
                        <div>
                            <p className='font-medium text-lg pt-10 align-middle text-center'>
                                Elevate your digital presence with Spectex&apos;s<br />
                                exceptional UI/UX design services. Our<br />
                                talented team of designers combines <br />
                                creativity with user-centric approaches to<br />
                                deliver captivating and intuitive user <br />
                                interfaces.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex pt-10 justify-around'>
                    <div className='pt-20'>
                        <div className='text-center items-center justify-center font-bold text-4xl'>
                            <h2 className='text-yellow-400'>
                                SEARCH ENGINE
                            </h2>
                            <h2>
                                OPTIMIZATION
                            </h2>
                        </div>
                        <div>
                            <p className='font-medium text-lg pt-10 align-middle text-center'>
                                Boost your online visibility and drive organic traffic <br />
                                with Spectex&apos;s expert SEO optimization services. <br />
                                Our team of SEO specialists is dedicated to improving <br />
                                your website&apos;s search engine rankings and increasing <br />
                                your online presence.
                            </p>
                        </div>
                    </div>
                    <div
                        className="h-[450px] min-h-[1em] w-px self-stretch bg-blue-button-primary shadow-button-glow "></div>
                    <div>
                        <Image className='pt-10'
                            src={'https://cdn.spectex.xyz/images/web/seo.png'}
                            width={500}
                            height={500}
                            alt={'SEO'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services