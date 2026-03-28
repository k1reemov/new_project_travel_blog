'use server'

import {API_URL} from "@/src/api/posts";
import { cookies } from 'next/headers';

type SetErrorFn = (value: boolean) => void;

export async function loginUser(email: string, pass: string) {
    try {
        const response = await fetch(`${API_URL}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: pass,
            }),
        });

        const data = await response.json();

        console.log("=== ОТВЕТ ОТ API ===", response.status, data);


        if (data.token) {
            const cookieStore = await cookies();
            cookieStore.set('auth_token', data.token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            });
            return { success: true };
        }

    } catch (error) {
        console.log("Сработало исключение:", error);
    }
}

export async function registerUser(email: string, pass: string) {
    try {
        const response = await fetch(`${API_URL}/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: pass,
            }),
        });


        const data = await response.json();

        console.log("=== ОТВЕТ ОТ API ===", response.status, data);


        if (data.token) {
            const cookieStore = await cookies();
            cookieStore.set('auth_token', data.token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            });
            return { success: true };
        }

    } catch (error) {
        console.log("Сработало исключение:", error);
    }
}