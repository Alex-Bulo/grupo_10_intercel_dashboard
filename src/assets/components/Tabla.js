import { Component } from 'react'
import Celda from './Celda'

const tableContent = [
    {titulo:'Peli 1', duracion:180, rating:8.1, generos:['Drama','Accion'],premios:3},
    {titulo:'Peli 2', duracion:120, rating:7.2, generos:['Comedia','Aventura', 'Fantasia'],premios:1},
    {titulo:'Peli 3', duracion:140, rating:9.3, generos:['Documental'],premios:7},
    {titulo:'Peli 4', duracion:155, rating:8.4, generos:['Fantasia','Accion'],premios:0},
]

class Tabla extends Component{
    render(){
        return(
            <table>
    
                <tr class='header'>
                    <th>Titulo</th>
                    <th>Duracion</th>
                    <th>Rating</th>
                    <th>Genero</th>
                    <th>Premios</th>
                </tr>

                {tableContent.map ((cell,i) => {
                    return(

                        <Celda key={`${cell.titulo}-${1}`}
                            titulo={cell.titulo}
                            duracion={cell.duracion}
                            rating={cell.rating}
                            generos={cell.generos}
                            premios={cell.premios}
                        />


                    )
                })}

            </table>
        )
    }

}

export default Tabla