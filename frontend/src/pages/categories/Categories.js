import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import http from '../../services/http'
import configData from "../../config/configData.json"
import CategorieProducts from '../../components/categories/categorieProducts/CategorieProducts'
import Filter from '../../components/filter/Filter'
import Header from '../../components/header/Header'
import Pagination from '../../components/pagination/Pagination'

import './Categories.css'

function Categories() {
  const [title , setTitle] = useState("")
  const {id} = useParams()

  useEffect(() => {
    http.get(configData.apiEndpoint + "/categories/get/" + id)
    .then((res) => setTitle(res.data.name))
    .catch(error => console.log(error))
  } , [])

  return (
    <div className='categories-container'>
        <Header title={"جميع الدورات والكتب لقسم " + title}/>
        <div className='categories--filter'>
          <Filter/>
        </div>
          <CategorieProducts/>
        <div className='categories--pagination'>
          <Pagination/>
        </div>
    </div>
  )
}


export default Categories