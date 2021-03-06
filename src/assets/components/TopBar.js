import { useState, useEffect } from 'react'


function TopBar (props) {

	const {users} = props.data

	const [user, setUser] = useState('')

	useEffect( async ()=>{

		let userInfo = await fetch(`${users[2].detail}`)
		userInfo = await userInfo.json()
		
		setUser({...userInfo})
	} ,[])
	

    return (
            
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
			{props.children}
			{/* <!-- Sidebar Toggle (Topbar) --> */}
			<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
				<i className="fa fa-bars"></i>
			</button>

			{/* <!-- Topbar Navbar --> */}
			<ul className="navbar-nav ml-auto">

					{/* <!-- Nav Item - Alerts --> */}
					<li className="nav-item dropdown no-arrow mx-1">
						<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
							<i className="fas fa-bell fa-fw"></i>
							{/* <!-- Counter - Alerts --> */}
							<span className="badge badge-danger badge-counter">1+</span>
						</a>
					</li>

					{/* <!-- Nav Item - Messages --> */}
					<li className="nav-item dropdown no-arrow mx-1">
						<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
							<i className="fas fa-envelope fa-fw"></i>
							{/* <!-- Counter - Messages --> */}
							<span className="badge badge-danger badge-counter">2</span>
						</a>
					</li>

				<div className="topbar-divider d-none d-sm-block"></div>

				{/* <!-- Nav Item - User Information --> */}
				<li className="nav-item dropdown no-arrow">
					<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
							<span className="mr-2 d-none d-lg-inline text-gray-600 small">{ user ? `${user.users.name} ${user.users.lastName}` : "" } </span>
						<img className="img-profile rounded-circle" src={user ? `${user.users.photo}` : ""} alt="usuario" width="80" />
					</a>
				</li>

			</ul>

		</nav>

    )
}



export default TopBar