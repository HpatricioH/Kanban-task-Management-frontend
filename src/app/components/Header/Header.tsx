import Image from 'next/image'
import React from 'react'

export default function Header () {
  return (
    <header>
      <nav className='bg-[#2B2C37] p-4'>
        <Image
          src='./logos/logo-mobile.svg'
          alt='kanban logo'
          width={20}
          height={20}
        />
        <p className='capitalize'>platform launch</p>
        <Image
          src='./icons/icon-chevron-down.svg'
          alt='chevron down icon'
          width={10}
          height={10}
        />
      </nav>
    </header>
  )
}
