'use server'

import { revalidatePath } from "next/cache";
import { API_URL } from "@/src/api/posts";
import { cookies } from "next/headers";

export async function getProfileInfo() {
    const cookieStore = await cookies();

    const rawToken = cookieStore.get('auth_token')?.value;
    const token = rawToken ? decodeURIComponent(rawToken) : '';

    const response = await fetch(`${API_URL}/api/user`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    return response.json();
}

export async function putEditProfileInfo(fullName, cityName, aboutInfo) {
    const cookieStore = await cookies();

    const rawToken = cookieStore.get('auth_token')?.value;
    const token = rawToken ? decodeURIComponent(rawToken) : '';

    const response = await fetch(`${API_URL}/api/user`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            full_name: fullName,
            city: cityName,
            bio: aboutInfo,
        }),
    });

    console.log("Бекенд статус:", response.status);
    if (!response.ok) {
        const errText = await response.text();
        console.error("Текст ошибки от бекенда:", errText);
        return { error: errText };
    }

    revalidatePath('/profile/editor');
    return response.json();
}