import React from 'react'
import "../../Peliculitas.css"

function Dots({
    active = false,
    onClick = () => {},
}) {
    return (
        <div onClick={onClick} className={active ? 'puntito puntitodecolor' : 'puntito'}>
        </div>
    )
}

export default Dots
