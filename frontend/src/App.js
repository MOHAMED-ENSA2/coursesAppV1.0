import { useEffect, useState , useRef } from "react";
import {Routes , Route} from "react-router-dom"

import './App.css';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Products from './pages/products/Products';
import Categories from './pages/categories/Categories';
import Navbar from "./components/navBar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollTop from "./components/ScrollTop";
import SubCategories from "./pages/categories/SubCategories";
import Search from "./pages/search/Search";

function App() {
  const [bgColor , setBgColor ] = useState({ bg : "transparent" , langBg : "rgb(var(--secondary-color))" })
  const app = useRef()
  useEffect(() => {
    document.addEventListener("scroll" , e =>  {
        if(app.current.getBoundingClientRect().top === 0 )  setBgColor({ bg : "transparent" , langBg : "rgb(var(--secondary-color))" })
        else  setBgColor({ bg : "white" , langBg : "rgb(var(--third-color) )"  })
    })         
  } , [])

  return (
      <div className="App"  ref=  {app} >
          <ScrollTop/>
          <Navbar  bgColor={bgColor.bg} langBg = {bgColor.langBg} />
          <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/product/:id' element = {<Product/>} />
            <Route path='/products' element = {<Products/>} />
            <Route path='/categorie/:id' element = {<Categories/>} />
            <Route path='/categories' element = {<SubCategories/>} />
            <Route path='/search' element = {<Search/>} />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
