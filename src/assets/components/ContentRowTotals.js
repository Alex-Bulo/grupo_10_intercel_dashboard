import { Component } from 'react'
import PropTypes from 'prop-types'


class ContentRowTotals extends Component {

    render(){


        return(
            <>
                {this.props.data.map( (info,i) => {
                    return(

                            <div key={`row-${i}`} className="col-md-4 mb-4">

                                    <div className="card border-left-primary shadow h-100 py-2" style={{borderLeftColor:`${info.colorBorde}`}}>
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{info.titulo}</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{info.cifra}</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className={`fas ${info.icono} fa-2x text-gray-300`}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        )



                })}
            </>
        )
    }   
}


ContentRowTotals.propTypes = {
    data: PropTypes.array
}


export default ContentRowTotals