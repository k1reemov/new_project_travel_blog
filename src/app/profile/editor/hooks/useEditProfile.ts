import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {postEditProfileInfo} from '@/src/entities/user/api/actions'

export function useEditProfile(initialData) {
    const router = useRouter();

    const {
        full_name,
        city,
        country,
        bio,
        photo,
    } = initialData;

    const [fullName, setFullName] = useState(full_name);
    const [cityName, setCityName] = useState(city);
    const [aboutInfo, setAboutInfo] = useState(bio);

    const handleSaveEditProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Сохранено:");
        await postEditProfileInfo(fullName, cityName, aboutInfo);
        router.push('/profile');
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
