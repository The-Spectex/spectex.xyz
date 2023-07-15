import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
    return (
        <div className='pt-10 pb-10'>
            <div className='pt-5 pb-5 mx-10 border-blue-nav-glow border shadow-nav-glow bg-blue-nav-color rounded-full bg-opacity-25 '>
                <div className='flex justify-between mx-10'>
                    <div className='flex space-x-3'>
                        <div>
                            <Image
                                src={'https://cdn.spectex.xyz/images/logo/logo_nav.png'}
                                width={40}
                                height={40}
                                alt='Spectex Logo'
                            />
                        </div>
                        <div className='pt-1 font-bold text-2xl'>SPECTEX</div>
                    </div>
                    <div>
                        <ul className='flex space-x-5 text-xl font-bold pt-1'>
                            <li className='cursor-pointer'><Link href={'/'}>HOME</Link></li>
                            <li className='cursor-pointer'>BLOG</li>
                            <li className='cursor-pointer'><Link href={'https://spectex.xyz/#services'}>SERVICES</Link></li>
                            <li className='cursor-pointer'>PRICING</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex space-x-5 text-xl font-bold'>
                            <li className='cursor-pointer pt-1'>LOGIN</li>
                            <button className='bg-blue-button-primary pt-1 px-2 rounded-lg shadow-button-glow'>SIGN UP</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav