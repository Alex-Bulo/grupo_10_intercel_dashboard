import { Component } from 'react'

class Celda extends Component{

    render(){
        return(
    
            <tr>
                <td>{this.props.titulo}</td>
                <td>{this.props.duracion}</td>
                <td>{this.props.rating}</td>
                <td>
                    <ul>
                        {this.props.generos.map(g => <li>g</li>)}
                    </ul>
                    </td>
                
                <td>{this.props.premios}</td>
            </tr>


        )
    }
}

export default Celda