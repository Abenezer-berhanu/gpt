import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='w-full flex flex-col items-center gap-3 py-5'>
        <Image src={'/gpt_logo.jpeg'} alt='logo' width={1000} height={500} className="w-16 h-16 object-cover rounded-full"/>
        <p className='text-lg font-semibold tracking-wider'>Your everyday AI companion</p>
    </div>
  )
}

export default Header