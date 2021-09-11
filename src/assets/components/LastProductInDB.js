import { useEffect, useState } from 'react'
import mandalorian from '../images/mandalorian.jpg'


function LastProductInDB (props) {
    const PRODUCTS_API = 'http://localhost:3001/api/products'

    const [lastCel, setLastCel] = useState(null)

    useEffect( async ()=>{
        let products = await fetch(PRODUCTS_API)
        products = await products.json()
        let lastProduct = products.products.reduce((acum,p)=> p.updatedAt > acum.updatedAt ? p : acum)
    
        let lastCelInfo = await fetch(`${lastProduct.detail}`)
        lastCelInfo = await lastCelInfo.json()
        
        setLastCel({...lastCelInfo})

//ERROR: loop infinito al pasar lastCel. Si no se pasa nada, se setea lastCel 1 vez (pero no se actualizaria si cambia)
    },[])

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último Celular en Base de Datos</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <h6 style={{fontWeight:'bold',textTransform: 'capitalize'}}>{lastCel?`${lastCel.brand} ${lastCel.model} - ${lastCel.ram} ${lastCel.color}`:''}</h6>
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '40rem'}} src={lastCel?`${lastCel.imageOne}`:''} alt=" Star Wars - Mandalorian " />
                    </div>
                    <p>{lastCel?`${lastCel.description}`:''}</p>
                    <p style={{fontWeight:'bold',textAlign:'right', marginRight:'15px'}}>{lastCel?`$ ${lastCel.price}`:''}</p>
                    <a className="btn btn-danger" target="_blank" href={lastCel?`${lastCel.webLink}`:''}>Ver en Web</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDB