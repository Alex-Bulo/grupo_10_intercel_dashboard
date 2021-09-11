import { Component } from 'react'
import TopBar from './TopBar'
import ContentRowTop from './ContentRowTop'
import Tabla from './Tabla'
import Footer from './Footer'


function ContentWrapper (props) {
    
        return(
            // <p>hola</p>
            <div className="d-flex flex-column" id="content-wrapper">

                <div id="content">
                    <TopBar />
                    
                    <ContentRowTop />
                    
                </div>

                <Tabla />
                <Footer />


    		</div>  

        )

}

export default ContentWrapper