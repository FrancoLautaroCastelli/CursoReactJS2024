import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { addDoc,collection,  getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () =>{
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const {id} = useParams();

    // useEffect(() => {
    //     const promesa = new Promise (resolve => {
    //         setTimeout(()=>{
    //             resolve (id ? arrayProductos.filter(item => item.category == id) : arrayProductos)
    //         }, 2000)
    //     })

    //     promesa.then (response => {
    //         setItems(response)
    //     })
    // }, [id])
    

    //CARGA DE DATOS A FIREBASE
    // useEffect(() => {
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "items");

    //     arrayProductos.forEach(item => {
    //         addDoc(itemsCollection, item)
    //     })
        
    //     console.log("Se cargaron los datos")
    // },[])
    
    // acceder a una coleccion
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
        getDocs(q).then(snapShot => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(documento => ({id:documento.id, ...documento.data()})));
                setLoading(false);
            } else {
                console.error("Error! No existe la Colección 'items'!");
            }
        })
    }, [id])

    return(
        <>
        {loading? <Loading/> :
            <div className="container mx-auto py-8" style={{paddingLeft:"80px"}}>
                    <div className="grid grid-cols-3 gap-4">
                         <ItemList items = {items} /> 
                    </div>
            </div>
        }
        </>
        
    )
}
export default ItemListContainer;