 
import matter from 'gray-matter';
import React from 'react'
import getDynamicBoxMetadata from '../../utils/getDynamicBoxMetadata';
import DynamicBox from '../../components/DynamicBox';
import NavbarDoc from '../../components/NavbarDoc';
import { ReactLenis } from "lenis/dist/lenis-react";


export default function Home (){
  const postMatadata =  getDynamicBoxMetadata ("content/Docs")
  

 
  return(
    <div>
       <NavbarDoc />
    
    {<div className="container">
          {postMatadata.map((post, postIndex) => {
            return (
              <DynamicBox key={postIndex} post={post} />
            )
          })}
    </div>}
   
    <div>
       
    
   
    </div>
    </div>

  )
}

