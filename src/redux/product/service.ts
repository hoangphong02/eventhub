import axiosClient from '../../api/axiosClient';
import { ProductModel } from './type';

export async function getAllProducts() {
    return await axiosClient.get<ProductModel[]>('products');
}

export async function deleteProduct(id: string) {
    return await axiosClient.delete<void>('product/' + id);
}

export async function postProduct(newProduct: ProductModel) {
    return await axiosClient.post<ProductModel>('products', newProduct);
}

export async function updateProduct(updateProduct: ProductModel) {
    return await axiosClient.put<void>(`foods/${updateProduct.id}`, updateProduct);
}