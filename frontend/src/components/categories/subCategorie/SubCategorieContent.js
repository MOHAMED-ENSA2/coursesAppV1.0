import React from 'react'
import SubCtgCard from "../../cards/subCtgCard/SubCtgCard"
import withApiRequest from '../../HOC/withApiRequest'

function SubCategorieContent({data}) {
  return (
    <div>
         <div className='categories'>
            {  data.map((elm,index) =>  <SubCtgCard key={index} data = {elm}/>) }
        </div>
    </div>
  )
}

export default withApiRequest("/categories/subs" ,SubCategorieContent)