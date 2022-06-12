import React from 'react'
import SubCategorieContent from '../../components/categories/subCategorie/SubCategorieContent'
import Header from '../../components/header/Header'

function SubCategories() {
  return (
    <div className='categories-container'>
        <Header title="كل الأقسام" />
        
        <SubCategorieContent/>
    </div>
  )
}

export default SubCategories