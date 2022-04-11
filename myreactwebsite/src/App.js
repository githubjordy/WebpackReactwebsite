import './App.css';
import NavBar from './components/NavBar.js';
import Backgroundvideosection from './components/backgroundvideosection.js'
import Section2component from "./components/section2component.js"
import Footer from "./components/footer.js"
import { mobilemenuitems } from '../src/components/navbar-mobile-menu-items'
import { useEffect, useState} from "react";






function App() {

  const [toggle, setToggle] = useState(true);

  const ShowNormalMenu = ()=> {
    setToggle(!toggle)
    console.log("normal menu called");
   
      console.log("no display called");
      let requiredelement;
      let classitems;
      classitems = document.getElementsByClassName("mobile-nav");  
      console.log(classitems);
      requiredelement = classitems[0];
      requiredelement.style.display = "none";
    

  }

  return (
    <div className="App">
     
 
<div className="mobile-nav" onClick={ShowNormalMenu}  >


<ul className="mobile-nav-ul">
 {
      mobilemenuitems.map((item,index)=>{
       return(
         <li key={index} className="mobile-nav-ul-li">
             <a className={item.cName} href={item.url}>
                {item.title}
             </a>
              {/* <div className="line1"></div>  */}
         </li>
       )

   })


 }
</ul>


</div>
      
      <NavBar toggle = {toggle} setToggle ={setToggle}/> 
                 
      <Backgroundvideosection/>
       <Section2component/> 
      <Footer/>

      
  
    </div>
  );
}

export default App;
