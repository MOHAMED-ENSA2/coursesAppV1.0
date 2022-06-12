import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header({title}) {

  return (
    <div className='header-container'>
        <div className="header">
            <h1>
                {title}
            </h1>
            <p className='header--tags'>
              <Link  to = "/" className='link header--tag'>الرئيسية</Link>
              <span className='header--tag'>|</span>
              <Link to = "/categories" className='link header--tag'>القوائم</Link>
            </p>
        </div>
    </div>
  )
}

export default Header

