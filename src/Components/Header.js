import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <header>
      <nav>
        <div id="logo"><img src="/logo.png" alt='logo' /></div>
          <Nav />
      </nav>
    </header>
  )
}

export default Header