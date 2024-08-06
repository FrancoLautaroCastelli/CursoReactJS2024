import { useContext }   from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";



const Cart = () =>{
    const {cart, removeItem, clear, sumProducts, totalProducts} = useContext(CartContext);


    if (totalProducts() == 0){
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black-100">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" 
              alt="Carrito vacío" 
              className="w-24 h-24 mb-4"
            />
            <h1 className="text-2xl font-bold text-white-800 mb-4">
              Tu carrito está vacío
            </h1>
            <Link to={"/"} className="btn btn-wide">
              Ir al inicio
            </Link>
          </div>
           
        )
    }
    return (
    <div className="overflow-x-auto text-center">
        <table className="table">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio x Unidad</th>
                    <th>Precio Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {cart.map (item => (
                    <tr key={item.id}>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                src={item.pictureUrl}
                                alt={item.title} />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{item.title}</div>
                            <div className="text-sm opacity-50">{item.category}</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        ${item.price}
                        <br />
                        <span className="badge badge-ghost badge-sm">{item.quantity}</span>
                        </td>
                        <td>${item.price * item.quantity}</td>
                        <th>
                            <button className="btn btn-ghost" onClick={() => {removeItem(item.id)}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg> 
                            </button>
                        
                        </th>               
                    </tr>
            ))}
            </tbody>
            
            <tfoot>
                <tr>
                    <th>TOTAL A PAGAR</th>
                    <th></th>
                    <th>${sumProducts()}</th>
                    <th>           
                        <button className="btn btn-ghost" onClick={clear} title="Vaciar Carrito"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg> 
                        </button>           
                    </th>  
                </tr>
            </tfoot>
        </table>
        <Link to={"/checkout"} className="btn btn-wide" title="Vaciar Carrito">Gestionar compra</Link> 
    </div>
    )
}

export default Cart