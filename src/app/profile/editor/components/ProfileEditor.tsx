"use client"

import {useEditProfile} from "@/src/app/profile/editor/hooks/useEditProfile";
import {useRef} from "react";
import styles from "@/src/app/profile/editor/components/ProfileEditor.module.css"
import InputForm from "@/src/components/ui/InputForm";
import TextAreaForm from "@/src/components/ui/TextAreaForm";
import Button from "@/src/components/ui/Button";
import Image from "next/image";
import AddNewPhoto from "@/src/app/profile/components/AddNewPhoto";

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
            <AddNewPhoto photo={initialData.photo}/>
            <div className={styles.profileInfoCard}>
                <form onSubmit={handleSaveEditProfile}>
                    <InputForm
                        className={styles.profileInfoForm}
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
                        className={styles.profileInfoForm}
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
                    <TextAreaForm
                        className={styles.profileInfoForm}
                        id='aboutInfo'
                        label='О себе'
                        maxLength={600}
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