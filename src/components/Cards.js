import React from 'react'
import Card from './Card'
//importamos la data de las tarjetas
import data from '../assets/data.json'


function Cards() {
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center p-4">
            <div className="row">
                {
                //para recorrer un arreglo usamos la funcion map
                    data.data.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imageURL={card.image} content={card.content}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
