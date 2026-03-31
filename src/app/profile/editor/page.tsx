import ProfileEditor from "@/src/app/profile/editor/components/ProfileEditor";
import {getProfileInfo} from '@/src/entities/user/api/actions'
export default async function ProfileEditorPage() {
    const profileData = await getProfileInfo();

    console.log(profileData)
    return (
        <>
            <ProfileEditor initialData={profileData} />
        </>
    )
}