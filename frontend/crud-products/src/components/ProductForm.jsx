import { useEffect, useState } from "react"
import { createProduct, getProduct, updateProduct } from "../api/products"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import toast from "react-hot-toast"

export const ProductForm = () => {

    const [product, setProduct] = useState({
        nombre: '',
        precio: 0,
        descripcion: ''
    })

    const navigate = useNavigate()
    const param = useParams()

    useEffect(() => {   
        const loadProducts = async () => {
            if(param.id){
                const response = await getProduct(param.id)
                setProduct(response.data)
            }
        }
        loadProducts()
    }, [param.id])
    

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(param.id) {
            await updateProduct(param.id, product)
            toast.success('Producto actualizado exitosamente')
        }else{
            await createProduct(product)
            toast.success('Producto creado exitosamente')
        }
        navigate('/')
    }

    const cancelUpdate = async(e) => {
        e.preventDefault()
        navigate('/')
        toast.error('Accion cancelada')
    }

    return (
        <div className="bg-gray-800 p-5 rounded-lg m-5">
            <form >
                <div className="mb-4">
                    <label className="block text-sm font-bold text-white">Nombre</label>
                    <input
                        value={product.nombre}
                        type="text"
                        onChange={(e) => setProduct({ ...product, nombre: e.target.value })}
                        className="w-full mt-1 p-2 border border-gray-300 text-white rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold text-white">Precio</label>
                    <input
                        value={product.precio}
                        type="number"
                        onChange={(e) => setProduct({ ...product, precio: e.target.value })}
                        className="w-full mt-1 p-2 border border-gray-300 text-white rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold text-white">Descripcion</label>
                    <textarea
                        value={product.descripcion}
                        onChange={(e) => setProduct({ ...product, descripcion: e.target.value })}
                        className="w-full mt-1 p-2 border border-gray-300 text-white rounded">
                    </textarea>
                </div>
                <div className="mt-4">
                    <button onClick={handleSubmit} className="m-1 bg-green-600 text-white px-4 py-2 rounded-lg" >Guardar</button>
                    <button onClick={cancelUpdate} className="m-1 bg-gray-600 text-white px-4 py-2 rounded-lg" >Cancelar</button>
                </div>
            </form>
        </div>
    )
}
