import { Link } from "react-router-dom";

const Item = ({item}) => {

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <Link to={"/item/" + item.id }>
                    <img src={item.pictureUrl} alt={item.title} className="rounded-xl" />
                </Link>
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            <strong>${item.price}</strong>

            </div>
      </div>
    );
}

export default Item