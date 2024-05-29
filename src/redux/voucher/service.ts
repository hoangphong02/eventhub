import axiosClient from '../../api/axiosClient';
import { VoucherModel } from './type';

export async function getAllVouchers() {
    return await axiosClient.get<VoucherModel[]>('/vouchers');
}
