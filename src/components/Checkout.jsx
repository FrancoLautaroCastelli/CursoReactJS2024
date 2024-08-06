import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection,  getFirestore,} from "firebase/firestore";
import { Link } from "react-router-dom";


const Checkout = ()=> {
    const {cart, totalProducts,clear, sumProducts} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        if (nombre == "") {
            return false;
        }

        if (email == "") {
            return false;
        }

        if (telefono == "") {
            return false;
        }

        const order = {
            buyer:{name:nombre, phone:telefono, email:email},
            items:cart.map(item => ({id:item.id, title:item.title, price:item.price})),
            total:sumProducts()
        }


        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(response => {
            setOrderId(response.id);
            clear();
        }) 
    }
        if (totalProducts() == 0 && orderId) {
            return (
                <>
                    {orderId ? 
                    <>
                        <div role="alert" className="alert alert-success grid  flex-grow place-items-center text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span> 
                                <div className="alert alert-light p-5 " role="alert">
                                <img 
                                src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" 
                                alt="Carrito vacío" 
                                className="w-24 h-24 mb-4"
                            />
                                    <h3>Gracias por tu compra!</h3>
                                    <p>Tu Número de Compra es: <b>{orderId}</b></p><br />
                                    <Link to={"/"} className="btn btn-accent">
                                        Ir al inicio
                                    </Link>
                                </div> 
                            </span>
                        </div>
                    </>
                    : ""}
                </>
            )
        }

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
            <>
                <div className="flex w-full">
                    <div className="card bg-base-300 rounded-box grid  flex-grow place-items-center text-center">
                        <form>
                        <span className="badge badge-ghost badge-sm">Formulario de compra</span>
                            <label className="input input-bordered flex items-center gap-2">Nombre<input type="text" className="grow" placeholder="Juan Perez" onInput={(e) => {setNombre(e.target.value)}} /></label>
                            <label className="input input-bordered flex items-center gap-2">Email<input type="text" className="grow" placeholder="juanperez@gmail.com" onInput={(e) => {setEmail(e.target.value)}} /></label>
                            <label className="input input-bordered flex items-center gap-2">Telefono<input type="text" className="grow" placeholder="3446123456" onInput={(e) => {setTelefono(e.target.value)}} /></label>
                            <button type="button" className="btn btn-accent" onClick={generarOrden}> Generar orden</button>
                        </form>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="card bg-base-300 rounded-box grid  flex-grow place-items-center">
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
                                    </tr>
                            ))}
                            </tbody>
                            
                            <tfoot>
                                <tr>
                                    <th>TOTAL A PAGAR</th>
                                    <th></th>
                                    <th>${sumProducts()}</th>

                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
               
            </>
            )
    
}
export default Checkout