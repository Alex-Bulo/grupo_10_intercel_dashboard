import { Component } from 'react'
import TopBar from './TopBar'
import ContentRowTop from './ContentRowTop'
import ProductList from './ProductList'
import Footer from './Footer'
import {Route, Switch} from 'react-router-dom'


function ContentWrapper (props) {
    
        return(
            // <p>hola</p>
            <div className="d-flex flex-column" id="content-wrapper">

                <div id="content">
                    <TopBar />
                    
                    <Switch>
                        <Route path="/" exact component={ContentRowTop}/>
                        <Route path="/products" component={ProductList}/>

                    </Switch>                    
                </div>

                {/* <Tabla /> */}
                <Footer />


    		</div>  

        )

}

export default ContentWrapper