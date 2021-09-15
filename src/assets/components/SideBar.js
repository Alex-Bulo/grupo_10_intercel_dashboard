import { Link } from 'react-router-dom'
import logo from '../images/Logo.svg'

function SideBar (props) {
        return (
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={logo} alt="Intercel" />
                    </div>
                </a>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Intercel</span></a>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">Acciones</div>

                {/* <!-- Nav Item - Pages --> */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Páginas</span>
                    </a>
                </li>

                {/* <!-- Nav Item - Charts --> */}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Gráficos</span></a>
                </li>

                {/* <!-- Nav Item - Tables --> */}
                <li className="nav-item">
                    <Link to="/products" className="nav-link">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Productos</span></Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>

        )
}

export default SideBar
