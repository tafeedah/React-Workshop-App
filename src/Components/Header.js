import React from "react";


function Header(props){

   const {LogoName} = props

  return (
       
    <header><h1>{LogoName}</h1></header>
        
  )

}



export default Header