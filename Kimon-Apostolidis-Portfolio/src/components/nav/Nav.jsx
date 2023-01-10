import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {ImBooks} from 'react-icons/im'
import {FaTools} from 'react-icons/fa'
import {IoMdContacts} from 'react-icons/io'


const Nav = () => {
  return (
    <nav> 
      <a href="#"><AiFillHome/></a>
      <a href="#about"><FaUser/></a>
      <a href="#experience"><ImBooks/></a>
      <a href="#services"><FaTools/></a>
      <a href="#contact"><IoMdContacts/></a>


 </nav>
  )
}

export default Nav