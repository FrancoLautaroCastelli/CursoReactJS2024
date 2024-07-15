import { useEffect, useState } from 'react';
const ItemCount =({stock})=> {

        const [contador, setContador] = useState(1);
        const [itemStock, setItemStock] = useState(stock);

        const incrementar = () => {
            if (contador < itemStock) {
                setContador(contador + 1);
            }
        };
    
        const decrementar = () => {
            if (contador > 1) {
                setContador(contador - 1);
            }
        };

        const onAdd = () => {
            if (contador <= itemStock) {
                setItemStock(itemStock - contador);
                setContador(1);
            }
        };

        useEffect(() =>{
            setItemStock(stock)
        }, [stock])
    return (
        
        <div className="flex items-center justify-center space-x-4">
            {/* Botón "Quitar" */}
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={decrementar}>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M20 12H4"></path>
                </svg>
            </button>

            {/* Botón Contador */}
            <div className="flex items-center space-x-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {contador}
                </button>
            </div>

            {/* Botón "Agregar" */}
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={incrementar}>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
            </button>
            
            <button className="btn btn-wide" onClick={onAdd}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount