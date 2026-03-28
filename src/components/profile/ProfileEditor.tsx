"use client"

import {useEditProfile} from "@/src/hooks/useEditProfile";
import styles from "@/src/components/profile/ProfileCard.module.css";
import InputForm from "@/src/components/ui/InputForm";
import Button from "@/src/components/ui/Button";

export default function ProfileEditor({ initialData }) {

    const {
        fullName,
        setFullName,
        cityName,
        setCityName,
        aboutInfo,
        setAboutInfo,
        handleSaveEditProfile,
    } = useEditProfile(initialData)

    return (
        <div className={styles.profileCard}>
            <div className={styles.profilePhoto}>

            </div>
            <div>
                <form onSubmit={handleSaveEditProfile}>
                    <InputForm
                        id='fullName'
                        label='ФИО'
                        type='text'
                        value={fullName}
                        required={true}
                        onChange={
                            (e) => {
                                setFullName(e.target.value);
                            }
                        }
                    />
                    <InputForm
                        id='cityName'
                        label='Город'
                        type='text'
                        value={cityName}
                        required={true}
                        onChange={
                            (e) => {
                                setCityName(e.target.value);
                            }
                        }
                    />
                    <InputForm
                        id='aboutInfo'
                        label='О себе'
                        type='text'
                        value={aboutInfo}
                        onChange={
                            (e) => {
                                setAboutInfo(e.target.value);
                            }
                        }
                    />
                    <div>
                        <p>Смена пароля</p>
                        <div>
                        </div>
                    </div>
                    <div>
                        <Button
                            name='Назад'
                        />
                        <Button
                            typeButton={'submit'}
                            name='Сохранить'
                            variant='filled'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}