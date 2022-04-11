import React from 'react'
import "../components/section2component.css"
import background from "../images/img-2.jpg";
import Section2component from './section2textcomponent';
export default function section2component(){

    return(
        
        <div className='imagewrapper-section3'>         
       
         <Section2component nummer="0"/> 
         <Section2component nummer="1"/> 
         <Section2component nummer="2"/> 
         <Section2component nummer="3"/> 
         <Section2component nummer="4"/> 
        
       
        
        </div>


    )
}