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
        <section className="ProductList">

                {listProducts && 
                    <>
                    {listProducts.products.map( (cel,i) => {
                      return(  
                        <article className="productCard" key={`${cel.id}-${i}`}>
                            <div>
                                <p>{cel.brand}</p>
                                <p>{cel.model}</p>
                                <p>USD$ {cel.price}</p>
                            </div>
                            <img src={cel.image}/>
                            <p>{cel.offer ? 'En Oferta' : ''}</p>
                            <a href={`http://localhost:3001/products/${cel.id}/editProduct`} target="_blank"><button>To Edit</button></a>
                        </article>
                      )
                    })}
                <Link to={listProducts.previous}>Anterior</Link>
                <Link to={listProducts.next}>Siguiente</Link>
                </>
                }
            
                
        </section>
    )

}

export default ProductList