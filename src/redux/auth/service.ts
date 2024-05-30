import axiosClient from '../../api/axiosClient';
import { AuthModel, LoginPayload } from './type';


export async function login(payload: LoginPayload) {
    return await axiosClient.post<LoginPayload>('/clients/web/login', payload);
}

export async function getProfile() {
    return await axiosClient.get<[AuthModel]>('/profile');
}
