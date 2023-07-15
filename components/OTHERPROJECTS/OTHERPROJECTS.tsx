import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const OTHERPROJECTS = () => {
    return (
        <div>
            <div className='flex justify-around '>
                <div className='bg-blue-panel-bg  pt-6 pb-6 rounded-2xl bg-opacity-25 shadow-panel-glow'>
                    <div className='flex space-x-4 mx-4'>
                        <div>
                            <Image
                                src={'https://cdn.spectex.xyz/images/web/typescript.png'}
                                width={150}
                                height={150}
                                alt={'Typescript'}
                                className='pt-10'
                            />
                        </div>
                        <div className='pt-24 text-2xl'>
                            <h1 className='font-bold text-2xl'>TYPESCRIPT TUTORIAL</h1>
                        </div>
                    </div>
                    <div className='pt-10 font-medium pb-10'>
                        <p className='text-center align-middle items-center justify-center'>
                        Welcome to our TypeScript Tutorial, where we are <br />
                         thrilled to offer you a transformative experience <br />
                          that will empower you as a developer. By delving <br />
                           into the world of typed JavaScript through <br />
                           TypeScript, we aim to provide you with the <br />
                           invaluable knowledge and tools to level up <br />
                           your coding skills and enhance your productivity.
                        </p>
                    </div>
                    <div className='pb-5'>
                    <Link href={'https://github.com/ashiqtasdid/basic-typescript-tutorial'} target='_blank'><div className='bg-blue-button-primary shadow-button-glow px-2 pb-2 pt-2 text-center align-middle items-center justify-center cursor-pointer font-medium mx-44'>LEARN</div></Link>
                    </div>
                </div>
                <div className='bg-blue-panel-bg pt-12 pb-12 rounded-2xl px-20 bg-opacity-25 shadow-panel-glow'>
                    <div className='space-y-5 text-5xl text-center align-center justify-center items-center text-gray-500 pt-28'>
                    <div>NOT</div>
                    <div>ANNOUNCED</div>
                    <div>YET</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OTHERPROJECTS