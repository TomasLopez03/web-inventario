import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <nav className='text-gray-800 py-4 mb-2'>
            <div className="container mx-auto flex justify-between items-center ">
                <Link to="/" className="text-3xl font-bold" >Productos App</Link>
                <div>
                    <Link to="/nuevo-producto" className="hover:bg-green-700 bg-green-600 text-white px-4 py-2 rounded-lg" >Nuevo Producto</Link>
                </div>
            </div>
        </nav>
    )
}
