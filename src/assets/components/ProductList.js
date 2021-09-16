import '../css/ProductList.css'


function ProductList (props){
    const {products} = props.data
    
    return(
        <section className="ProductList">

                {products && 
                    products.map( (cel,i) => {
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
                    })
                }

                        
                
        </section>
    )

}

export default ProductList