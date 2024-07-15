import { useEffect, useState } from "react";
import arrayProductos from "../assets/json/productos.json"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () =>{
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise (resolve => {
            setTimeout(()=>{
                resolve (id ? arrayProductos.filter(item => item.category == id) : arrayProductos)
            }, 2000)
        })

        promesa.then (response => {
            console.log(response);
            setItems(response)
        })
    }, [id])

    return(
        <div className="container mx-auto py-8" style={{paddingLeft:"80px"}}>
                <div className="grid grid-cols-3 gap-4">
                    <ItemList items = {items} />
                </div>
        </div>
        
    )
}
export default ItemListContainer;