import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {ImBooks} from 'react-icons/im'
import {FaTools} from 'react-icons/fa'
import {IoMdContacts} from 'react-icons/io'
import {useState} from 'react'
const Nav = () => {
  const[activeNav, setActiveNav]=useState('#')
  return (
    <nav> 
      <a href="#" onClick={()=> setActiveNav('#')}className={activeNav==='#'? 'active':''       }><AiFillHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')}className={activeNav==='#about'? 'active':''}><FaUser/></a>
      <a href="#experience"onClick={()=> setActiveNav('#experience')}className={activeNav==='#experience'? 'active':''}><ImBooks/></a>
      <a href="#services"onClick={()=> setActiveNav('#services')}className={activeNav==='#services'? 'active':''}><FaTools/></a>
      <a href="#contact"onClick={()=> setActiveNav('#contact')}className={activeNav==='#contact'? 'active':''}><IoMdContacts/></a>




 </nav>
  )
}

export default Nav