import { useState, useEffect } from 'react'
import TopBar from './TopBar'
import ContentRowTop from './ContentRowTop'
import ProductList from './ProductList'
import Footer from './Footer'
import {Route, Switch} from 'react-router-dom'


function ContentWrapper (props) {

    const PRODUCTS_API = 'http://localhost:3001/api/products'
		
    const [products, setProducts] = useState(null)

    const apiCall = async () =>{
        
        const products = await fetch(PRODUCTS_API)
        const productsInfo = await products.json()
        
        setProducts(productsInfo)        
    }

    useEffect( ()=>{
        apiCall()
        setInterval(apiCall, 1000 * 60 * 5)
    }, [])
    
    const refresh = () => {
        apiCall()
        console.log('REFRESH');
    }

        return(

            <div className="d-flex flex-column" id="content-wrapper">

                <div id="content">
                    <TopBar>
                    
                        <i onClick={refresh} className="fas fa-sync-alt" style={{marginLeft:'15px', cursor:'pointer'}}></i>
                    
                    </TopBar>
                    
                    <Switch>
                        <Route path="/" exact component={ContentRowTop}/>
                        
                        <Route path="/products"> 
                            {products ? <ProductList data={products}/>:''}
                        </Route>

                    </Switch>                    
                </div>

                <Footer />


    		</div>  

        )

}

export default ContentWrapper