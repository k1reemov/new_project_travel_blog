"use client"

import Button from "@/src/shared/ui/Button";
import {useLoginForm} from "@/src/features/auth/ui/LoginForm/useLoginForm";
import InputForm from "@/src/shared/ui/InputForm";
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
    } = useLoginForm();

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
                            href={'/register'}
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