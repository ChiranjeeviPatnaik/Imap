import React from 'react'
import '../assets/logo.svg'
import Logo from '../assets/logo.svg'

const HeaderComponent = () => {
  return (
    <div >
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
              <img src={Logo} alt="log" />
                <a className='navbar-brand' href='/'>EMS</a>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent
