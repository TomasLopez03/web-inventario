import { getProducts, deleteProduct } from "../api/products"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export const ProductList = () => {

    const [products, setProducts] = useState([])

    const loadProducts = async () => {
        const response = await getProducts()
        setProducts(response.data)
    }
    const navigate = useNavigate()
    const handleDelete = async (id) => {
        await deleteProduct(id)
        setProducts(products.filter(product => product.id !== id))
        toast.success('Producto eliminado exitosamente')
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <div className="m-8">
            <h1 className="text-3xl font-bold text-sky-900">Productos disponibles</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5 text-white">
                {products.map(product => (
                    <div key={product.id} className="bg-sky-900 p-4 rounded-lg shadow"> 
                        <p>{product.nombre}</p>
                        <p><span className="font-bold mr-2">Precio: </span>{'$'+product.precio}</p>
                        <p>{product.descripcion}</p>
                        <div className="mt-4">
                            <button onClick={() => navigate(`/editar-producto/${product.id}`)} className="hover:bg-green-700 bg-green-600 px-2 py-1 rounded-lg">Editar</button>
                            <button onClick={() => handleDelete(product.id)} className="hover:bg-red-800  ml-3 bg-red-700 px-2 py-1 rounded-lg">Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
