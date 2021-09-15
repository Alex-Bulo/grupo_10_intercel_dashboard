import { useEffect, useState,  } from 'react'
import TopBar from './TopBar'
import ContentRowTop from './ContentRowTop'
import ProductList from './ProductList'
import LastProductInDB from './LastProductInDB.js'
import Footer from './Footer'
import {Route, Switch} from 'react-router-dom'


function ContentWrapper (props) {

    const PRODUCTS_API = 'http://localhost:3001/api/products'
    
    const [productsDB, setProductsDB] = useState(null)

    const apiCall = async () =>{
        
        const products = await fetch(PRODUCTS_API)
        const productsInfo = await products.json()

        setProductsDB(productsInfo)
    }

    useEffect(()=>{
        apiCall()
        setInterval(apiCall, 1000 * 60 * 1)
        }, [])
    
        return(
            <div className="d-flex flex-column" id="content-wrapper">

                <div id="content">
                    <TopBar />
                    
                    <Switch>
                        <Route path="/" exact >
                            {productsDB ? <ContentRowTop/> : ''}
                        </Route>
                        
                        <Route path="/lastProduct">
                            {productsDB ? <LastProductInDB data={productsDB}/>:''}
                        </Route>

                        <Route path="/products" component={ProductList}/>

                    </Switch>                    
                </div>

                <Footer />


    		</div>  

        )

}

export default ContentWrapper