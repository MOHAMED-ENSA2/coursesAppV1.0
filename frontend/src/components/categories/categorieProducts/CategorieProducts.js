import React, { useState } from 'react'
import ProductCard from '../../cards/productCard/ProductCard'
import withApiRequest from '../../HOC/withApiRequest'
import Pagination from '../../pagination/Pagination'
import NoResults from '../../search/NoResults'

import './CategorieProducts.css'

function CategorieProducts({data}) {
  const pageSize = 6
  const numberOfPages = Math.ceil(data.length / pageSize )
  const [page, setPage] = useState(1)

  return (
    <div className='allproducts'>
    {  data?.length === 0 ? 
        <div className='allproducts--noresults'>
          <NoResults/> 
        </div> : 
        <div className='allproducts--results'>
          <div className='allproducts--content'>
            { data.slice((page - 1)*pageSize ,(page - 1)*pageSize + pageSize ).map((elm,index)=> <ProductCard key = {index} data = {elm }  /> )}
          </div>
          <div className='allproducts--pagination'>
            <Pagination nbPage = {numberOfPages} setPage = {setPage} />
          </div> 
        </div>
    } 
    </div>
  )
}

export default withApiRequest("/categories/products" ,CategorieProducts)