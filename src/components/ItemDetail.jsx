import { useContext } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "./context/CartContext"

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item,quantity);
    }
    return (
        
        <div className="container mx-auto py-4" style={{padding:"5%"}}>

                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                        src={item.pictureUrl}
                        alt={item.title} />
                    </figure>
                    <div className="card-body">
                        <h1 className="card-title">{item.titel}</h1>
                        <p>{item.description}</p>
                        <strong>${item.price}</strong>
                        <div className="card-actions justify-end">
                        <ItemCount stock={item.stock} onAdd={onAdd}/>
                        </div>
                    </div>
                </div>

        </div>
        
    )

}

export default ItemDetail