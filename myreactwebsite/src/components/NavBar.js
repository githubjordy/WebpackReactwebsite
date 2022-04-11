import React from 'react'
import "../components/NavBar.css"
import {menuitems} from './navbar-menu-items.js'
import logo from "../images/logo192.png"




export default function NavBar(props) {

 
  console.log("NavBar called");
  console.log(props.toggle);
  const ShowBurgerMenu = ()=> {
    // const user = useContext(UserContext);
       props.setToggle(!props.toggle);
       console.log("showburgermeneu")
       let requiredelement;
       let classitems;
      
         console.log("toggled on")
         classitems = document.getElementsByClassName("mobile-nav");      
         requiredelement = classitems[0];
         requiredelement.style.display = "block";
     
      //  }
       //console.log("Clicked");
     }
  
  
  return (
    <div className="header">
       
    

        <nav className='mynavbar'>
        <img src={logo} className="logo" alt="reactlogo"></img>

        <div className="hamburgermenu" onClick={ShowBurgerMenu}>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </div>  
        <ul className='mynavbar-ul'>   
        {
            menuitems.map((item,index)=>{
                return(
                  <li key={index} className="mynavbar-ul-li">
                      <a className={item.cName} href={item.url}>
                         {item.title}
                      </a>
                       {/* <div className="line1"></div>  */}
                  </li>
                )

            })


        }
        </ul>
        </nav>
    </div>
  )
}
