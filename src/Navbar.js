import "./Peliculitas.css"
import Logo from "./Logo.png"
import ImagenDePerfil from "./user (1).png"
import NavList from "./components/NavList"

import InputReusable from "./components/InputReusable"

function Navbar  ()  {
    
    return ( 
        
        <div className="nav">
            <div className="navdiv">
            <img src= {Logo}  className="logo" alt="Logo"></img>
            <ul>
                
            <NavList info = {"Home"} Info="/"/>
            <NavList info = {"Películas"} Info="/Películas"/>
            <NavList info = {"Categorías"} Info="/Categorías"/>
            

           
            </ul>
            </div>

            <div className="navdiv">
            <InputReusable text="Serie, Peliculita"/>
            <img src={ImagenDePerfil} className="perfil" alt="Perfil" style={{paddingRight: "2rem"}}></img>
            </div>

        </div>
        
     );
}
 
export default Navbar;