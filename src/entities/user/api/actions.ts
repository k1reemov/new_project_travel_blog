'use server'

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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

export async function postEditProfileInfo(
    fullName: string,
    cityName: string,
    aboutInfo: string,
) {
    const cookieStore = await cookies();

    const rawToken = cookieStore.get('auth_token')?.value;
    const token = rawToken ? decodeURIComponent(rawToken) : '';

    const formData = new FormData();
    formData.append('full_name', fullName);
    formData.append('city', cityName);
    formData.append('bio', aboutInfo);

    const response = await fetch(`${API_URL}/api/user`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
        },
        body: formData,
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

export async function postNewProfilePhoto(fullName, avatarFile) {
    const cookieStore = await cookies();

    const rawToken = cookieStore.get('auth_token')?.value;
    const token = rawToken ? decodeURIComponent(rawToken) : '';

    const formData = new FormData();

    formData.append('full_name', fullName);
    formData.append('photo', avatarFile);


    const response = await fetch(`${API_URL}/api/user`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
        },
        body: formData,
    });

    console.log("Бекенд статус:", response.status);

    if (!response.ok) {
        const errText = await response.text();
        console.error("Текст ошибки от бекенда:", errText);
        return { error: errText };
    }

    return response.json();
}