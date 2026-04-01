"use client"

import {useEditProfile} from "@/src/features/profile-edit/ui/useEditProfile";
import styles from "@/src/features/profile-edit/ui/ProfileEditor.module.css"
import InputForm from "@/src/shared/ui/InputForm";
import TextAreaForm from "@/src/shared/ui/TextAreaForm";
import Button from "@/src/shared/ui/Button";
import AddNewPhoto from "@/src/features/profile-edit/ui/AddNewPhoto";

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
            <AddNewPhoto
                photo={initialData.photo}
                fullName={initialData.full_name}
            />
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