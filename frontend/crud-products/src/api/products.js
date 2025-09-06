import axios from 'axios'

const productApi = axios.create(
    {
        baseURL : 'http://localhost:8000/api/producto/'
    }
)

export const getProducts = () => productApi.get()
export const getProduct = (id) => productApi.get(`${id}`)
export const createProduct = (product) => productApi.post('', product)
export const updateProduct = (id, product) => productApi.put(`/${id}/`, product)
export const deleteProduct = (id) => productApi.delete(`/${id}/`)