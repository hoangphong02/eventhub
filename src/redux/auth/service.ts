import axiosClient from '../../api/axiosClient';
import { LoginPayload } from './type';


export async function login(payload: LoginPayload) {
    return await axiosClient.post<LoginPayload>('/clients/web/login', payload);
}

