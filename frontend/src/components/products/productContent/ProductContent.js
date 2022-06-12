import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import withApiRequest from '../../HOC/withApiRequest'

import './ProductContent.css'

function ProductContent({data }) {

  return (
    <div className='product--content'>
        <h2>
          {data.name}
        </h2>
        <img className='product--image' src={data.image || "https://img-c.udemycdn.com/course/750x422/1653432_3a57_3.jpg"} alt="" />
        <div className='product--text'>
          {data?.author && 
            <>
              <h3>مقدم الدورة</h3>
              <Link to = "/" className = "link" style={{color : "rgb(var(--third-color))"}}>{data?.author?.name}</Link>
            </>
           }
          <h3>وصف الدورة</h3>
          <p>
              {data.description}
          </p>
          <h3>
            تحميل الدورة
          </h3>
          <a  className='btn btn_sample product--content_dowload' href={data.link} target = '_blank'>
            تحميل مباشر  
          </a>
          <a className='btn btn_sample btn_torent product--content_dowload' href={data.link} target = '_blank' >
            تحميل تورنت 
          </a>
        </div>
      </div>
  )
}

export default withApiRequest("/products/getProduct"  , ProductContent)