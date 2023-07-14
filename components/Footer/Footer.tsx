import React from 'react'
import Image from 'next/image'
import {FaDiscord, FaFacebook, FaTwitter, FaYoutube} from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='pb-10 pt-10'>
        <div className=' bg-blue-panel-bg bg-opacity-30 mx-16 rounded-3xl shadow-button-glow '>
            <div className='flex justify-evenly'>                    
                <div className=''>
                    <Image
                        src={'https://cdn.spectex.xyz/images/logo/logo_nav.png'}
                        width={70}
                        height={70}
                        alt='Spectex Logo'
                        className='pt-8'
                    />
          
                </div>
                <div>
                    <div className='pt-16 pb-10 font-bold'>SERVICES</div>
                    <div className='font-medium pb-10'>
                        <div className='cursor-pointer hover:underline'>Web Development</div>
                        <div className='cursor-pointer hover:underline'>SEO</div>
                        <div className='cursor-pointer hover:underline'>UI/ UX</div>
                        <div className='cursor-pointer hover:underline'>Graphics Designing</div>
                    </div>
                </div>
                <div>
                    <div className='pt-16 pb-10 font-bold'>COMPANY</div>
                    <div className='font-medium pb-10'>
                        <div className='cursor-pointer hover:underline'>Blog</div>
                        <div className='cursor-pointer hover:underline'>Press Release</div>
                        <div className='cursor-pointer hover:underline'>Downloads</div>
                        <div className='cursor-pointer hover:underline'>Privacy Policy</div>
                        <div className='cursor-pointer hover:underline'>Terms & Conditions</div>
                    </div>
                </div>
                <div>
                    <div className='pt-16 pb-10 font-bold'>LINKS</div>
                    <div className='font-medium pb-10'>
                        <div className='cursor-pointer hover:underline'><Link href={'https://discord.gg/jf28jcFJk9'} target='_blank'>Discord</Link></div>
                        <div className='cursor-pointer hover:underline'><Link href={'https://twitter.com/SpectexOfficial'} target={'_blank'}>Twitter</Link></div>
                        <div className='cursor-pointer hover:underline'><Link href={'https://facebook.com/SpectexOfficial'} target='_blank'>Facebook</Link></div>
                        <div className='cursor-pointer hover:underline'><Link href={'https://threads.net/@ashiqtasdid'} target='_blank'>Threads</Link></div>
                        <div className='cursor-pointer hover:underline'><Link href={'https://youtube.com/@ashiqtasdid'} target='_blank'>YouTube</Link></div>
                    </div>
                </div>
            </div>
            <hr
        className=" h-px border-t-0 bg-blue-button-primary shadow-button-glow" />
            <div className='flex pt-6 justify-between mx-10 pb-4'>
                <div>Copyright © 2023 | Spectex - All Rights Reserved</div>
                <div className='flex space-x-3'>
                    <div className='cursor-pointer'><Link href={'https://twitter.com/SpectexOfficial'} target={'_blank'}><FaTwitter/></Link></div>
                    <div className='cursor-pointer'><Link href={'https://discord.gg/jf28jcFJk9'} target='_blank'><FaDiscord/></Link></div>
                    <div className='cursor-pointer'><Link href={'https://facebook.com/SpectexOfficial'} target='_blank'><FaFacebook/></Link></div>
                    <div className='cursor-pointer'><Link href={'https://youtube.com/@ashiqtasdid'} target='_blank'><FaYoutube/></Link></div>
                </div>
            </div>
        </div>
        </div>
    )
}
                

export default Footer