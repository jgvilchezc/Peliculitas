import "./Peliculitas.css"
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Home";
import PathPeliculas from "./components/PathPeliculas";
import PathCagetorias from "./components/PathCategorias";
import VerPeli from "./components/VerPeli";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


function App () {
    
    const firebaseConfig = {
        apiKey: "AIzaSyBz-VovbRUga2fdFDYiYgP23TiAWHU9w10",
        authDomain: "peliculitas-5d6b4.firebaseapp.com",
        projectId: "peliculitas-5d6b4",
        storageBucket: "peliculitas-5d6b4.appspot.com",
        messagingSenderId: "851949010402",
        appId: "1:851949010402:web:071f19b4d47870b26a4dbb",
        measurementId: "G-VRJL78F26K"
      };
      
      const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

    return ( 
<Router>
        <div>
            <Navbar/>

        <Switch>

        <Route exact path="/">
            <Home/>
        </Route>

        <Route path="/Películas">
            <PathPeliculas/>
        </Route>
        
        <Route path="/Categorías">
            <PathCagetorias/>    
        </Route>

        <Route path="/Ver">
            <VerPeli/> 
        </Route>

        <Route path="/Categorias/Acción">
            <VerPeli/> 
        </Route>
        
        </Switch>


         
         
        </div>

</Router>    
     );
     
}
 
export default App;