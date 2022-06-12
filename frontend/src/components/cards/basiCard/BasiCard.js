import React, {useState , useEffect} from 'react'
import {Link} from "react-router-dom"

import { GiOpenBook } from 'react-icons/gi';
import "./BasiCard.css"

function BasiCard({data}) {
  const {_id , name , icon } = data
  return (
    <Link className='basicard' to = {'/categorie/' + _id} >
        <div className='basicard--image'>
            {/* <GiOpenBook size={30} style = {{ color : "rgb(var(--third-color))"}}/> */}
            <i className={icon}  style = {{ color : "rgb(var(--third-color))" , fontSize : "26px"}} ></i>
        </div>
        <div className='basiCard--text'>
            <div className='basiCard--title'>
                {name}
            </div>
            <div className='basiCard--more'>
                +1200 دورة وكتاب
            </div>
        </div>
    </Link>
  )
}

export default BasiCard