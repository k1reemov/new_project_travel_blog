"use client"

import Button from "@/src/components/ui/Button";
import {useAuthForm} from "@/src/hooks/useAuthForm";
import InputForm from "@/src/components/ui/InputForm";
import styles from "./LoginForm.module.css"

export default function AuthForm() {
    const {
        login,
        setLogin,
        password,
        setPassword,
        hasError,
        setHasError,
        handleSubmitLogin,
    } = useAuthForm();

    return (
        <div className={styles.formLogin}>
            <div className={styles.formContainer}>
                <h3 className={styles.formTitle}>Вход в профиль</h3>
                <form onSubmit={handleSubmitLogin}>
                    <InputForm
                        className={styles.inputForm}
                        id='email'
                        label='Email'
                        type='email'
                        value={login}
                        onChange={(e) => {
                            setLogin(e.target.value);
                            setHasError(false);
                        }}
                        placeholder='Введите почту'
                    />
                    <InputForm
                        className={styles.inputForm}
                        id={'password'}
                        label='Пароль'
                        type='password'
                        placeholder={'Введите пароль'}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setHasError(false);
                        }}
                    />
                    <div className={styles.buttonsContainer}>
                        <Button
                            href={'register/'}
                            name={'Зарегистрироваться'}
                        />
                        <Button
                            typeButton={'submit'}
                            name={'Войти'}
                            variant={'filled'}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}