import { useState, useEffect } from 'react'
// import Celda from './Celda'
import '../css/ProductList.css'


function ProductList (props){

    const PRODUCTS_API = 'http://localhost:3001/api/products'
		
    const [products, setProducts] = useState(null)

    const apiCall = async () =>{
        
        const products = await fetch(PRODUCTS_API)
        const productsInfo = await products.json()
        
        setProducts(productsInfo)        
    }

    useEffect(()=>console.log('hola'), [products])

    const refresh = () => {
        apiCall()
        console.log(products);
    }


    return(
        <section className="ProductList">
            <i onClick={refresh} className="fas fa-sync-alt" style={{marginLeft:'15px', cursor:'pointer'}}></i>
                {/* <p>{products && products.products[0].id}</p> */}
                {products &&
                    products.products.map( (cel,i) => {
                      return(  
                        <article key={`${cel.id}-${i}`}>
                            <p>{cel.brand}</p>
                            <p>{cel.model}</p>
                            <p>{cel.price}</p>
                        </article>
                      )
                    })
                }

                    {/* {products.products.map( (cel,i) => {
                        <article key={`${cel.id}-${i}`}>
                            <p>{cel.brand}</p>
                            <p>{cel.model}</p>
                            <p>{cel.price}</p>
                        </article>
                        
                    })
                } */}
                        
                
        </section>
    )

}

export default ProductList