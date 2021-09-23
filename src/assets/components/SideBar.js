import { Link } from 'react-router-dom'
import logo from '../images/Logo.svg'

function SideBar (props) {
        return (
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={logo} alt="Intercel" />
                    </div>
                </Link>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item active">
                    <Link to="/" className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Intercel</span></Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">Menu</div>

                {/* <!-- Nav Item - Charts --> */}
                <li className="nav-item">
                    <Link className="nav-link text-gray-800" to="/lastProduct">
                        <i className="fas fa-mobile-alt"></i>
                        <span>Último Producto</span></Link>
                </li>

                {/* <!-- Nav Item - Tables --> */}
                <li className="nav-item">
                    <Link to="/brands" className="nav-link text-gray-800">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Marcas</span></Link>
                </li>

                {/* <!-- Nav Item - Tables --> */}
                <li className="nav-item">
                    <Link to="/products/list/1" className="nav-link text-gray-800">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Productos</span></Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>

        )
}

export default SideBar
