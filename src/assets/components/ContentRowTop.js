import { Component, useState, useEffect } from 'react'

import ContentRowTotals from './ContentRowTotals.js'
import LastProductInDB from './LastProductInDB.js'
import CategoriesInDB from './CategoriesInDB.js'



function ContentRowTop (props) {
		const PRODUCTS_API = 'http://localhost:3001/api/products'
		const USERS_API = 'http://localhost:3001/api/users'

		// traer la info de la BDD
		const [totals, setTotals] = useState([])

		useEffect( ()=>{
			let totalsInfo = []

			fetch(PRODUCTS_API)
				.then(res => res.json())
				.then( productsInfo => {

					totalsInfo.push({
						titulo:'Celulares en Stock',
						colorBorde: '#4e73df',
						cifra: productsInfo.count,
						icono: 'fa-mobile'
					},{
						titulo:'Marcas en Stock',
						colorBorde: 'green',
						cifra: productsInfo.countByBrand.length,
						icono: 'fa-copyright'
					},{
						titulo:'Marcas en Stock',
						colorBorde: 'green',
						cifra: productsInfo.countByBrand.length,
						icono: 'fa-copyright'
					})
					
					// console.log('INFO', totalsInfo);
				})
				
				setTotals([totalsInfo])
//ERROR: loop infinito al pasar totals. Si no se pasa nada, no se setea Totals (queda null al pasar al componente)
		} , [])
		// console.log(totals);


		let RowInfo = [
			{titulo:'Movies in Data Base',colorBorde:'#4e73df',cifra:'21',icono:'fa-film'},
			{titulo:'Total Awards',colorBorde:'green',cifra:'79',icono:'fa-award'},
			{titulo:'Actors Quantity',colorBorde:'red',cifra:'49',icono:'fa-user-friends'}
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