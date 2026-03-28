import {useState} from 'react';
import {getProfileInfo, putEditProfileInfo} from "@/src/api/profile";

export function useEditProfile(initialData) {
    const {
        full_name,
        city,
        country,
        bio,
    } = initialData;

    const [fullName, setFullName] = useState(full_name);
    const [cityName, setCityName] = useState(city);
    const [aboutInfo, setAboutInfo] = useState(bio);

    const handleSaveEditProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Сохранено:");
        await putEditProfileInfo(fullName, cityName, aboutInfo);
    };

    return {
        fullName,
        setFullName,
        cityName,
        setCityName,
        aboutInfo,
        setAboutInfo,
        handleSaveEditProfile,
    }
}
