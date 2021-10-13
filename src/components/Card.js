import React from 'react'
//props-types es una dependencia que nos permite agregar propiedades por defecto 
import PropTypes from 'prop-types'
//importamos los estilos
import './Cards.css'

//hacemos un destructurin. pasamos las props a card el cual es un objeto con varias propiedades, el destructurin basicamente es pasar los la propiedad que queremos
function Card({title, imageURL, content}) {
    return (
        <div className="card text-center bg-dark card aniamte__animated animate__fadeInUp">
            <div className="overflow">
                <img src={imageURL} className="card-img-top"></img>
            </div>
           <div className="card-body text-light">
               <h4 className="card-title">{title}</h4>
               <p className="card-text text-secundary">
                   {
                       //si el contenido exito muestralo, sino muestra el otro
                       content ? content : "El texto no se encontro"
                   }
                </p>
               <a href="#!" className="btn btn-outline-secondary rounded-0">
                   Leer Más
               </a>
           </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageURL: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default Card
