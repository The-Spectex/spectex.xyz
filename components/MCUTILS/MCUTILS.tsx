import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MCUTILS = () => {
  return (
    <div>
      <div className='bg-blue-panel-bg mx-14 rounded-2xl bg-opacity-25 shadow-panel-glow'>
        <div className='flex justify-around pt-28 pb-44'>
          <div className='pt-14'>
            <div className='flex space-x-3 text-center item-center align-middle justify-center'>
              <h1 className='text-5xl font-bold text-green-500'>MINECRAFT</h1>
              <h1 className='text-5xl font-bold text-yellow-600'>UTILITIES</h1>
            </div>
            <p className='text-center text-lg pt-5 font-medium'>A feature-rich bot for Minecraft tools & utilities. Easily, <br />
              get real-time information about a Minecraft Server, <br />
              Player Skin, UUID & much more!</p>
            <div className='flex space-x-5 item-center text-center align-middle justify-center pt-3'>
            <Link href={'https://discord.com/oauth2/authorize?client_id=810192936472936480&scope=bot&permissions=7168'} target='_blank'><div className='bg-blue-discord px-5 cursor-pointer text-xl font-medium pt-2 pb-2 rounded-xl shadow-discord-glow'>INVITE</div></Link>
              <div className='bg-blue-secondary-button cursor-pointer px-2 pt-2 pb-2 rounded-xl text-xl font-medium'>COMMANDS</div>
            </div>
          </div>
          <div>
            <Image
              src={'https://cdn.spectex.xyz/images/web/mc-utils.png'}
              width={250}
              height={250}
              alt={'MCUTILS'}
              className='pt-10 drop-shadow-image-glow'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MCUTILS