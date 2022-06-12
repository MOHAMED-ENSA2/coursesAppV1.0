import React from 'react'
import SmalCard from '../cards/smallCard/SmalCard'
import withApiRequest from '../HOC/withApiRequest'

function LatestProducts({data}) {
  return (
    <div className='product--toproducts'>
        { data.map((elm,index) => <SmalCard key={index} data = {elm}/> )} 
    </div>
  )
}

export default withApiRequest("/products/earliest" ,  LatestProducts)