import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
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
                        <ItemCount stock={item.stock} />
                        </div>
                    </div>
                </div>

        </div>
        
    )

}

export default ItemDetail