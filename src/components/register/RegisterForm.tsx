"use client"

import {useAuthForm} from "@/src/hooks/useAuthForm";
import Button from "@/src/components/ui/Button";
import InputForm from "@/src/components/ui/InputForm";
import styles from "./RegisterForm.module.css"

export default function RegisterForm() {
    const {
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
    } = useAuthForm();

    return (
        <div className={styles.formRegister}>
            <div className={styles.formContainer}>
                <h3 className={styles.formTitle}>Регистрация</h3>
                <form onSubmit={handleSubmitRegister}>
                    <InputForm
                        className={styles.emailInputForm}
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
                    <div className={styles.passwordForm}>
                        <InputForm
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
                        <InputForm
                            id={'confirmPassword'}
                            label={'Повторите пароль'}
                            type='password'
                            placeholder={'Повторите пароль'}
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                setHasError(false);
                            }}
                        />
                    </div>
                    <Button
                        name="Зарегистрироваться"
                        variant="filled"
                        typeButton="submit"
                    />
                </form>
            </div>
        </div>
    )
}