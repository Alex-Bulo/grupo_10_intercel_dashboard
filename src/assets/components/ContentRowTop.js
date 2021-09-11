import { Component, useState, useEffect } from 'react'

import ContentRowTotals from './ContentRowTotals.js'
import LastProductInDB from './LastProductInDB.js'
import CategoriesInDB from './CategoriesInDB.js'



function ContentRowTop (props) {
		const PRODUCTS_API = 'http://localhost:3001/api/products'
		const USERS_API = 'http://localhost:3001/api/users'

		// traer la info de la BDD
		const [celTotal, setCelTotal] = useState('')
		const [brandTotal, setBrandTotal] = useState('')
		const [userTotal, setUserTotal] = useState('')

		useEffect( ()=>{
			fetch(PRODUCTS_API)
				.then(res => res.json())
				.then( productsInfo => {
					setCelTotal([productsInfo.count])
					setBrandTotal([productsInfo.countByBrand.length])
				})
				fetch(USERS_API)
				.then(res => res.json())
				.then( usersInfo => {
					setUserTotal([usersInfo.count])
					// setBrandTotal([productsInfo.countByBrand.length])
				})
//ERROR: loop infinito al pasar totals. Si no se pasa nada, se setea Totals 1 vez (pero no se actualizaria si cambia)
		} , [])


		let totals = [
			{titulo:'Celulares en Stock',colorBorde:'#4e73df',cifra:celTotal,icono:'fa-mobile'},
			{titulo:'Marcas en Stock',colorBorde:'green',cifra:brandTotal,icono:'fa-copyright'},
			{titulo:'Usuarios Registrados',colorBorde:'red',cifra:userTotal,icono:'fa-user-friends'}
		]
		// console.log(RowInfo);

        return(

            <div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Intercel Dashboard</h1>
					</div>
				
					{/* <!-- Content Row Movies--> */}
					<div className="row">
						<ContentRowTotals data={totals}/>
					
					</div>
					{/* <!-- Content Row Last Movie in Data Base --> */}
					<div className="row">
					<LastProductInDB />
					<CategoriesInDB />
						
						

					</div>
			</div>

            
	)

}

export default ContentRowTop