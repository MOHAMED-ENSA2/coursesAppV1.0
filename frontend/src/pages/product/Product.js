import React, {useEffect, useState} from 'react'
import {useParams } from 'react-router-dom'

import http from '../../services/http'
import configData from "../../config/configData.json"
import Header from '../../components/header/Header'
import ProductContent from '../../components/products/productContent/ProductContent'
import TopDownloaded from '../../components/products/TopDownloaded'
import SearchBar from '../../components/search/SearchBar'
import './Product.css'

function Product() {
  const [title , setTitle] = useState("")
  const {id} = useParams()
  useEffect(() => {
        http.get(configData.apiEndpoint + "/products/getProduct/" + id)
            .then((res) => setTitle(res.data.name))
            .catch(error => console.log(error))
  } , [])

  return (
    <div className='product-container'>
      <Header title={title} />
      <div className='product'>
          <ProductContent />
          <div className='product--extra'>
              <div className='product--search'>
                  <h3>البحث عن دورات </h3>
                  <div className='product--searchbar'>
                    <div className='product--searchbar-container'>
                        <SearchBar/>
                    </div>
                  </div>
              </div>
              <div className='product--sameCtg'>
                    <h3>الأكثر تحميلا </h3>
                   <TopDownloaded ignoreParams = {true} />
              </div>
              <div className='product--sameCtg'>
                    <h3>آخر الإضافات </h3>
                   <TopDownloaded ignoreParams = {true} />
              </div>
          </div>
      </div>
      </div>
  )
}


export default Product