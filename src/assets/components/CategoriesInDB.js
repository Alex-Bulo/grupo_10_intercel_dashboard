
function CategoriesInDB (props) {
        return(
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Marcas in Stock</h5>
                    </div>
                        <div className="card-body">
                            <div className="row">
                                {props.data.map((brand,i) => {
                                    return(
                                        <div key={`${brand.brand}-${i}`}className="col-lg-6 mb-4">
                                            <div className="card bg-dark text-white shadow">
                                                <a className="card-body" style={{textTransform:'capitalize',color:'inherit'}} href={`http://localhost:3001/products/list/${brand.brand}`}>
                                                    <p style={{display:'inline-block', width:'80%', marginBottom:'.1em'}}>{brand.brand} :</p>
                                                    <p style={{display:'inline-block', fontSize:'1.3em', fontWeight:'bold', marginBottom:'.1em'}}>{brand.count}</p>
                                                </a>
                                            </div>
                                        </div>
                                
                                    )
                                    
                                })}
                            </div>
                        </div>
                    </div>
            </div>
        )
}

export default CategoriesInDB