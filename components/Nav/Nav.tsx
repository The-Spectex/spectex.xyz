import React from 'react'
import Image from 'next/image'

const Nav = () => {
    const logo = "https://cdn.spectex.xyz/images/logo/logo_nav.png"
  return (
    <nav className='pt-5 pb-3 bg-blue-bg' data-aos="slide-down" data-aos-duration="1000">
        <div className='flex justify-around'>
            <div className='flex space-x-5'>
                <div>
                    <Image src={logo} height={50} width={50} alt='logo'/>        
                </div>
                <div className='font-black text-2xl pt-2'>SPECTEX</div>
            </div>
            <div className='pt-2'>
                <ul className='flex space-x-5'>
                    <li className='font-semibold'>Home</li>
                    <li className='font-semibold'>Services</li>
                    <li className='font-semibold'>Projects</li>
                    <li className='font-semibold'>Contact</li>
                    <li className='font-semibold'>About</li>
                </ul>
            </div>
            <div className='pt-2'>
                <ul className='flex space-x-5'>
                    <li className='font-semibold'>Login</li>
                    <li className='font-semibold'>Signup</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav