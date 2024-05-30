import axiosClient from '../../api/axiosClient';
import { VoucherModel } from './type';

export async function getAllVouchers(id: string) {
    return await axiosClient.get<VoucherModel[]>(`/vouchers?shop_id=${id}`);
}
