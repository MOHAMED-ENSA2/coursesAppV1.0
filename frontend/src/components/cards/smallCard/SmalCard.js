import React from 'react'

import './SmallCard.css' 

function SmalCard({data}) {
  const { _id , name , create_at, image} = data

  return (
    <a href = {'/product/' + _id} className='link smallcard'>
        <img src={image || "https://downloadfreecourse.com/uploads/images/2021/10/webp/image_140x98_61767232e2201.webp"} alt="" />
        <div className='smallcard--content'>
          <h4>{name}</h4>
          <p>
          {create_at?.slice(0,10)}
          </p>
        </div>
    </a>
  )
}

export default SmalCard