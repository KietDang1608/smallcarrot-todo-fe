import { AuthRequest, AuthResponse } from '@/interfaces/auth.interface';
import { BASE_URL } from '.';

export const login = async (payload: AuthRequest): Promise<AuthResponse> => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        credentials: 'include',
    });
    const data = await res.json(); // ⬅️ luôn parse JSON trước

    if (!res.ok) {

        throw new Error(data.message || 'Đăng nhập thất bại!');
    }
    return data as AuthResponse; // ⬅️ ép kiểu dữ liệu trả về
}

export const register = async (payload: AuthRequest) => {
    const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        credentials: 'include',
    });
    const data = await res.json(); // ⬅️ luôn parse JSON trước

    if (!res.ok) {
        throw new Error(data.message || 'Đăng ký thất bại!');
    }
    return data as AuthResponse; 
}

export const redirectToGoogleLogin = () => {
  window.location.href = `${BASE_URL}/auth/google`;
};