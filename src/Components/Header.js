import React from 'react'
import { LOGO } from '../Utils/constants'

function Header() {
  return (
    <div className='absolute w-44 bg-gradient-to-b from black px-4 py-2'>
     <img src={LOGO} alt="logo" />
    </div>
  )
}

export default Header
