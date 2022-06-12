import React , { useState } from 'react'
import ProductCard from '../cards/productCard/ProductCard'
import withApiRequest from '../HOC/withApiRequest'
import Pagination from '../pagination/Pagination'
import NoResults from './NoResults'
import "./SearchContent.css"

function SeachContent({data}) {
  const pageSize = 6
  const numberOfPages = Math.ceil(data.length / pageSize )
  const [page, setPage] = useState(1)

  return (
    <div className='seachContent'>
    {     
      data.length === 0 ?
      <div className='seachContent--noresults'><NoResults/></div>  :  
      <div className='seachContent--results'>
        <div className='seachContent--content'>
          { data.slice((page - 1)*pageSize ,(page - 1)*pageSize + pageSize ).map((elm,index)=>  <ProductCard key = {index} data = {elm} />)}
        </div>
        <div className='categories--pagination'>
           <Pagination nbPage = { numberOfPages} setPage = {setPage} />
        </div>
      </div>
    }
    </div>
  )
}

export default withApiRequest("/products/search" , SeachContent)