import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom'


function Head({ title,link}) {

  return (
    <div className='head'>
        <h2 className='head--title'>
           {title}
        </h2>
        <Link to = {link} className='link head--more'>
            <div>المزيد</div>
            <AiOutlineArrowLeft/>
        </Link>
    </div>
  )
}

export default Head