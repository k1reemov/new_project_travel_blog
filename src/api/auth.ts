import {API_URL} from "@/src/api/posts";

type SetErrorFn = (value: boolean) => void;

export async function loginUser(email: string, pass: string, setHasError: SetErrorFn) {
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

        console.log("Статус ответа:", response.status);

        if (!response.ok) {
            const errorData = await response.json();
            console.log("Сервер отказал:", errorData);
        } else {
            const data = await response.json();
            console.log("Успех!");
        }
    } catch (error) {
        setHasError(true);
        console.log("Нет!");
    }
}

export async function registerUser(email: string, pass: string, setHasError: SetErrorFn) {
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

        console.log("Статус ответа:", response.status);

        if (!response.ok) {
            const errorData = await response.json();
            console.log("Сервер отказал:", errorData);
        } else {
            const data = await response.json();
            console.log("Успех!");
        }
    } catch (error) {
        setHasError(true);
        console.log("Нет!");
    }
}