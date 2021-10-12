import { Link } from "react-router-dom";
import "../Peliculitas.css"

const NavList = ({info, Info}) => {
  
    return (               
                    <li>
                    <Link to={Info}>{info} </Link>                   
                    </li>
    );
}
 
export default NavList;