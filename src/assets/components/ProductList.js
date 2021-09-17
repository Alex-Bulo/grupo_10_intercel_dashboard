import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import '../css/ProductList.css'


function ProductList (props){
    const [listProducts, setListProducts] = useState(null)
    const {page} = useParams()
    
    const PAGINATE_API = `http://localhost:3001/api/products/list?page=${page}`
    
    const apiCall = async () =>{    
        const list = await fetch(PAGINATE_API)
        const listInfo = await list.json()
        setListProducts(listInfo)
    }
    
    useEffect(apiCall, [page])


    return(
        <main>
            <section className="ProductList">

                    {listProducts && 
                        <>
                        {listProducts.products.map( (cel,i) => {
                        return(  
                            <article className="productCard" key={`${cel.id}-${i}`}>
                                <img src={cel.image}/>
                                <div>
                                    <p className="model">{cel.model}</p>
                                    <p className="brand">{cel.brand}</p>
                                    <p className="price">USD$ {cel.price}</p>
                                    <p className="offer">{cel.offer ? 'En Oferta' : ''}</p>
                                </div>                                
                                <a href={`http://localhost:3001/products/${cel.id}/editProduct`} target="_blank"><button className="editButton">Editar</button></a>
                            </article>
                        )
                        })}
                        <div className ="previousNextButtons" >
                            <div className ="pageButtons">
                                <Link to={listProducts.previous}> <button className="previous">Anterior</button></Link>
                            </div>
                            <div className ="pageButtons">
                                <Link to={listProducts.next}> <button className="next">Siguiente</button></Link>
                            </div>
                        </div>
                        </>
                    }
            </section>
            
        </main>
    ) 

}

export default ProductList