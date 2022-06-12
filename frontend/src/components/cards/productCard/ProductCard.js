import React from 'react'

import {Link} from "react-router-dom"
import "./ProductCard.css"

function ProductCard({data}) {
  const {_id ,name,image , shortDesc} = data || {name : "" , image : "https://img-b.udemycdn.com/course/750x422/1366270_7e59_9.jpg"  , shortDesc : ""}

  return (
    <Link to = {"/product/" + _id} className='link productcard'>
        <img className='productcard--img' src={ image || "https://img-b.udemycdn.com/course/750x422/1366270_7e59_9.jpg" } alt="" />
        <div className='productcard--content'>
          <h4 className='productcard--title'>
              {name} 
          </h4>
          <p className='productcard--details'>
              {shortDesc}
          </p>
          <button className='btn btn_sample btn_btn_raduis'>
              حمل الآن
          </button>
        </div>

    </Link>
  )
}

export default ProductCard