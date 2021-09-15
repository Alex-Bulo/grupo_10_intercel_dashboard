import { Component, useState, useEffect } from 'react'

import ContentRowTotals from './ContentRowTotals.js'
import LastProductInDB from './LastProductInDB.js'
import CategoriesInDB from './CategoriesInDB.js'



function ContentRowTop (props) {
	
		const PRODUCTS_API = 'http://localhost:3001/api/products'
		const USERS_API = 'http://localhost:3001/api/users'
		
		const [productsDB, setProductsDB] = useState(null)
		const [celTotal, setCelTotal] = useState('')
		const [brandTotal, setBrandTotal] = useState('')
		const [modelTotal, setModelTotal] = useState('')
		const [userTotal, setUserTotal] = useState('')
		const [allBrandsModels, setAllBrandsModels] = useState([])

		let totals = [
			{titulo:'Celulares en Stock',colorBorde:'#4e73df',cifra:celTotal,icono:'fa-mobile'},
			{titulo:'Marcas en Stock',colorBorde:'green',cifra:brandTotal,icono:'fa-copyright'},
			{titulo:'Modelos en Stock',colorBorde:'grey',cifra:modelTotal,icono:'fa-snowflake'},
			{titulo:'Usuarios Registrados',colorBorde:'red',cifra:userTotal,icono:'fa-user-friends'}
		]

		const apiCall = async () =>{
			
			const products = await fetch(PRODUCTS_API)
        	const productsInfo = await products.json()
							
			const users = await fetch(USERS_API)
			const usersInfo = await users.json()

			
			return [productsInfo,usersInfo]	
		}

		const settingStates = async () =>{
			const [products, users] = await apiCall()
			setProductsDB(products)
			
			setCelTotal([products.count])
			setBrandTotal([products.countByBrand.length])
			
			setAllBrandsModels([...products.countByBrand])
			
			let modelsInStock = products.countByBrand.reduce( (acum,p) => p.models.length + acum,0)
			setModelTotal([modelsInStock])
			
			setUserTotal([users.count])
			console.log('DONE STATES');
		}

		useEffect(()=>{
			settingStates()
			setInterval(settingStates, 1000 * 60 * 1)
			}, [])
	
		const refresh = () => {
			settingStates()
			console.log('REFRESH');
		}

        return(

            <div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Intercel Dashboard<i onClick={refresh} className="fas fa-sync-alt" style={{marginLeft:'15px', cursor:'pointer'}}></i></h1>
					</div>
				
					{/* <!-- Content Row Movies--> */}
					<div className="row">
						<ContentRowTotals data={totals}/>
					
					</div>
					{/* <!-- Content Row Last Movie in Data Base --> */}
					<div className="row">
						
						{productsDB ? <LastProductInDB data={productsDB}/>:''}

						<CategoriesInDB data={allBrandsModels} />	
						

					</div>
			</div>

            
	)

}

export default ContentRowTop
