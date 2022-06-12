import { Link } from "react-router-dom"
import "./Navbar.css"


function Navbar({bgColor, langBg }) {

    return (
    <div 
        className='navbar-container' 
        style = {{background : bgColor }}
    >
        <div className='navbar'>
            <Link to = "/" className='navbar--logo'>
                <img src="/images/logo.png" alt="" /> 
            </Link>
            <div className='nav--items'>
                <Link to = "/" className="link nav--item">الرئيسية</Link>
                <Link to = "/categories" className="link nav--item"> القوائم</Link>
                <a href = "#contact" className="link nav--item"> التواصل</a>
                <div className="nav--item"> 
                    <select 
                        style={{background : langBg}}
                    >
                        <option value="" selected disabled hidden>إختر اللغة</option>
                        <option value="ar">العربية</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar