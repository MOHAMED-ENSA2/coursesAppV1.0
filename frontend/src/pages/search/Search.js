import React from 'react'
import {useLocation, useSearchParams } from 'react-router-dom'

import Header from '../../components/header/Header'
import Pagination from '../../components/pagination/Pagination'
import SearchContent from "../../components/search/SeachContent"
import SearchBar from '../../components/search/SearchBar'
import "./Search.css"

function Search() {
  const {search} = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
        <Header title={" نتائج البحث  : " + searchParams.get("value")} />
        <div className='search--searchbar'>
          <SearchBar/>
        </div>
        <SearchContent params = {search}  />
    </div>
  )
}

export default Search