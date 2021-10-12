import { Link } from "react-router-dom";

const LINK = ({className, info, Info}) => {
    return ( 
    <Link className={className} to={Info}>{info} </Link> );
}
 
export default LINK;