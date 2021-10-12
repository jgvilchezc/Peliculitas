
import Peliculas from "../Peliculas";
import "../Peliculitas.css"
import useFetch from "../useFetch";

const PathPeliculas = () => {

    const { data } = useFetch()
    
    return ( 
        <>
            <div className="cajadepelis1">
                
            {data && data.peliculas.slice(0,5).map((movie, index)=>{
                return <Peliculas Categoria1={movie.categoria1} Categoria2={movie.categoria2} URL={movie.foto} Nombre={movie.nombre} INFO={movie.descripcion} />
            })}
            </div>
            <div className="cajadepelis1">
            {data && data.peliculas.slice(1,6).map((movie, index)=>{
                return <Peliculas Categoria1={movie.categoria1} Categoria2={movie.categoria2} URL={movie.foto} Nombre={movie.nombre} INFO={movie.descripcion} />
            })}

            </div>
            <div className="cajadepelis1">
            <Peliculas />
            <Peliculas />
            <Peliculas />
            <Peliculas />
            <Peliculas />
            </div>
            <div className="cajadepelis1">
            <Peliculas />
            <Peliculas />
            <Peliculas />
            <Peliculas />
            <Peliculas />
            </div>
        </>
     );
}
 
export default PathPeliculas;