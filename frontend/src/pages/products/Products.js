import React from 'react'
import Header from '../../components/header/Header'
import AllProducts from '../../components/products/AllProducts'

import "./Products.css"

function Products() {
  return (
    <div>
      <Header title="جميع الدوارات والكتب" />
      <AllProducts/>
    </div>
  )
}

export default Products