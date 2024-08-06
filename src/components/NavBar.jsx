import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import { useContext } from "react"
import { CartContext } from "./context/CartContext"


const NavBar = () => {
  const {totalProducts} = useContext (CartContext);
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="navbar-start lg:hidden">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Camisetas Locales</a></li>
                <li><a>Camisetas Internacionales</a></li>
              </ul>
            </div>
          </div>
          {/* <a className="btn btn-ghost text-xl">The Shirt</a> */}
          <Link to={"/"}>
            <img src="/images/logo.png"  style={{borderRadius: "50%", height:"50px", width:"50px"}}></img>
          </Link>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><NavLink to={"/category/local"}>Camisetas Locales</NavLink></li>
              <li><NavLink to={"/category/internacional"}>Camisetas Internacionales</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <CartWidget />
            {/* <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">{totalProducts()} Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">Ver carrito</button>
                </div>
              </div>
            </div> */}
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

              
            </div>
            {/* <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Perfil
                  <span className="badge">Nuevo</span>
                </a>
              </li>
              <li><a>Configuración</a></li>
              <li><a>Salir</a></li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
