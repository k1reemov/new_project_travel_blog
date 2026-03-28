'use server'

import { revalidatePath } from "next/cache";
import { API_URL } from "@/src/api/posts";
import { cookies } from "next/headers";

export async function getProfileInfo() {
    const cookieStore = await cookies();

    const token = cookieStore.get('auth_token')?.value;

    const response = await fetch(`${API_URL}/api/user`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return response.json();
}

export async function putEditProfileInfo(fullName, cityName, aboutInfo) {
    const cookieStore = await cookies();

    const token = cookieStore.get('auth_token')?.value;

    const response = await fetch(`${API_URL}/api/user`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
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
        revalidatePath('/profile/editor');
    }

    if (!response.ok) {
        console.error("Текст ошибки от бекенда:", await response.text());
    }
    return response.json();
}