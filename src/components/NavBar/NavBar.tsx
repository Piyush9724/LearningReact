import React from 'react'

interface NavBarProps {
    cartItemsCounts: number
}

const NavBar = ({cartItemsCounts}: NavBarProps) => {
  return (
    <div>NavBar: {cartItemsCounts}</div>
  )
}

export default NavBar