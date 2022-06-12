import React from 'react'

import withApiRequest from '../../components/HOC/withApiRequest'
import BasiCard from '../../components/cards/basiCard/BasiCard'
import ProductCard from '../../components/cards/productCard/ProductCard'
import Email from '../../components/email/Email'
import Hero from '../../components/hero/Hero'
import Herob from '../../components/hero/Herob'
import Heroc from '../../components/hero/Heroc'
import Section from '../../components/section/Section'
import "./Home.css"

function Home({data}) {

  return (
    <div className='home-container'>
      <div className='home'>
        <Hero/>
        <Section title="كل الأقسام" link = "/categories" url = "/categories/getAll" Component = {BasiCard}/>
        <Herob/>
        <Section title="آخر الإضافات" link = "/products" url = "/products/earliest" Component = {ProductCard}/>
        <Heroc/>
        <Section title="الأعلى تقييما" link = "/products" url = "/products/topRated" Component = {ProductCard}/>
        <Email/>
      </div>
    </div>
  )
}

export default  Home