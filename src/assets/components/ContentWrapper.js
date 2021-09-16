import { useState, useEffect } from 'react'
import TopBar from './TopBar'
import ContentRowTop from './ContentRowTop'
import ProductList from './ProductList'
import Footer from './Footer'
import {Route, Switch} from 'react-router-dom'


function ContentWrapper (props) {

    const PRODUCTS_API = 'http://localhost:3001/api/products'
	const USERS_API = 'http://localhost:3001/api/users'
	
    const [products, setProducts] = useState(null)
    const [users, setUsers] = useState(null)

    const apiCall = async () =>{
        
        const productsDB = await fetch(PRODUCTS_API)
        const productsInfo = await productsDB.json()
        setProducts(productsInfo)
        
        
        const usersDB = await fetch(USERS_API)
        const usersInfo = await usersDB.json()
        setUsers(usersInfo)
        
    }

    let timingApiCalls =()=> setInterval(apiCall, 1000 * 60 * 5)

    useEffect( ()=>{
        apiCall()
        timingApiCalls()
        return function (){
            timingApiCalls = console.log('unmount')
        } 
    }, [])
    
    const refresh = () => {
        apiCall()
        console.log('Refreshed');
    }

        return(

            <div className="d-flex flex-column" id="content-wrapper">

                <div id="content">
                    { users ? <TopBar data={users}>
                    
                        <i onClick={refresh} className="fas fa-sync-alt" style={{marginLeft:'15px', cursor:'pointer'}}></i>
                    
                    </TopBar> : ''}
                    
                    <Switch>
                        <Route path="/" exact> 
                            {(products&&users) ? <ContentRowTop data={[products,users]}/>:''}
                        </Route>
                        
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