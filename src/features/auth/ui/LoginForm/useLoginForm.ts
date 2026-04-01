import { useState } from 'react';
import {loginUser} from "@/src/features/auth/api/auth.actions";

export function useLoginForm() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(false);

    const handleSubmitLogin = async (e: React.FormEvent) => {
        e.preventDefault(); // Останавливаем перезагрузку страницы
        console.log("Логин:", login);
        await loginUser(login, password);
    };

    return {
        login,
        setLogin,
        password,
        setPassword,
        hasError,
        setHasError,
        handleSubmitLogin,
    }

}