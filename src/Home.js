
import Peliculas from "./Peliculas";
import Cuadro from "./Cuadro";
import "./Peliculitas.css"
import useFetch from "./useFetch";

const Home = () => {

    const { data }  = useFetch()

    return ( 
        <>

         <Cuadro />
        <div className="cajadepelis1">
        {data && data.peliculas.slice(0,3).map((movie, index) => {
            return <Peliculas Categoria1={movie.categoria1} Categoria2={movie.categoria2} URL={movie.foto} Nombre={movie.nombre} INFO={movie.descripcion}/>
        })}
        </div>

        <div className="cajadepelis1">
        {data && data.peliculas.slice(3,7).map((movie, index) => {
            return <Peliculas Categoria1={movie.categoria1} Categoria2={movie.categoria2} URL={movie.foto} Nombre={movie.nombre} INFO={movie.descripcion}/>
        })}
        </div> 
        </>
         );
        
}
 
export default Home;