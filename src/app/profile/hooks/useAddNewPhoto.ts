import {useState} from 'react';
import {postNewProfilePhoto} from "@/src/entities/user/api/actions";

export function useAddNewPhoto(fullName) {

    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = e.target.files?.[0];
        if (file) {
            setAvatarFile(file);
            setPreviewUrl(URL.createObjectURL(file));
            await postNewProfilePhoto(fullName, file)
        }
    };

    return {
        avatarFile,
        previewUrl,
        handleFileChange,
    }
}
