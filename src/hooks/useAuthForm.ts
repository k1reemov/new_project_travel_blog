import { useState } from 'react';
import {loginUser, registerUser} from "@/src/api/auth";

export async function useAuthForm() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword , setConfirmPassword ] = useState('');
    const [hasError, setHasError] = useState(false);

    const handleSubmitLogin = async (e: React.FormEvent) => {
        e.preventDefault(); // Останавливаем перезагрузку страницы
        console.log("Логин:", login);
        await loginUser(login, password);
    };

    const handleSubmitRegister = async (e: React.FormEvent) => {
        e.preventDefault(); // Останавливаем перезагрузку страницы
        console.log("Логин:", login);
        await registerUser(login, password);
    };

    return {
        login,
        setLogin,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        hasError,
        setHasError,
        handleSubmitLogin,
        handleSubmitRegister,
    }

}