import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/'>Real Estate</Link>
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to=''>Log In</Link>
          <Link className='hover:bg-violet-800 bg-violet-700 text-white px-4 py-3 rounded-lg transition' 
            to=''>Sign Up</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
