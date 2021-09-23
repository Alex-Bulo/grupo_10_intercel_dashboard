import { useEffect, useState } from 'react'
const moment = require('moment')

function LastProductInDB (props) {
console.log(props);
    const [lastCel, setLastCel] = useState(null)

    useEffect( async ()=>{
                    
            const {products} = props.data
            let lastProduct = products.reduce( (acum,p) => moment(p.updatedAt).isAfter(acum.updatedAt) ? p : acum, {updatedAt:'1800-01-01'})
            
            let lastCelInfo = await fetch(`${lastProduct.detail}`)
            lastCelInfo = await lastCelInfo.json()
    
            setLastCel({...lastCelInfo})
        
    },[props.data])

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
                    <p style={{fontWeight:'bold',textAlign:'right', marginRight:'15px', color: '#71D894'}}>{lastCel?`$ ${lastCel.price}`:''}</p>
                    <a className="btn btn-danger" target="_blank" href={lastCel?`${lastCel.webLink}`:''}>Ver en página</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDB