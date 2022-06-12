import React from 'react'
import { Link } from 'react-router-dom'

import "./SubCtgCard.css"

function SubCtgCard({data}) {
  return (
    <div className='subctgcard'>
        
        <div className='subctgcard--header'>
            <div className='subctgcard--icon' >
                <i className="fa-solid fa-code"></i>
            </div>
            <Link to = { "/categorie/" + data["id"]} className='link subctgcard--ctg'>{Object.keys(data)[1]}</Link>
        </div>
        
        <div className='subctgcard--items'>
          { 
            data[Object.keys(data)[1]].map((elm,index) => {
              return(
                <Link to = { "/categorie/" +  elm._id} key={index} className="link subctgcard--item"><i className="fa-solid fa-circle-plus"></i> <span>{elm.name}</span></Link>
              )
            })
          }
        </div>
    </div>
  )
}

export default SubCtgCard