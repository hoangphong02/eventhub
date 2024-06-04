import axiosClient from '../../api/axiosClient';
import { UserModel } from './type';

export async function getProfile() {
    return await axiosClient.get('/profile');
}
