import React from 'react'
import "../components/section2component.css"
import background0 from "../images/img-1.jpg";
import background1 from "../images/img-2.jpg";
import background2 from "../images/img-3.jpg";
import background3 from "../images/img-4.jpg";
import background4 from "../images/img-5.jpg";
import section2data from "../components/section2text.json";

export default function section2component(props){

    const backgroundimages =[background0,background1,background2,background3, background4];

    let mytext1=" consectetur adipiscing elit, sed do eiusmod tempor incididunt";
    let mytext2= "ullamco laboris nisi ut aliquip ex ea commodo consequat";    
    let mytext3=" voluptatem accusantium doloremque laudantium, totam rem aperiam";
    let mytext4="Ut enim ad minima veniam, quis nostrum exercitationem ullam";
    let mytext5=" Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse";

    let selectingstring = backgroundimages[props.nummer];
    let selectingtext = section2data.data[props.nummer];
    
    
    return(
        
        <div className='Imagedisplays'style={{ backgroundImage: `url(${selectingstring})` }}>  <h1 className="section2header">{selectingtext}</h1></div>    

       
    )}