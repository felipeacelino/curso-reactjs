import React from 'react'
import Link from './Link'

const Menu = () => {
  return (
    <ul>
      <li><Link href="/" text="Home" /></li>
      <li><Link href="/produtos" text="Produtos" /></li>
    </ul>
  )
}

export default Menu