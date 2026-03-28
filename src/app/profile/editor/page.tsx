import ProfileEditor from "@/src/components/profile/ProfileEditor";
import { getProfileInfo } from "@/src/api/profile";
export default async function ProfileEditorPage() {
    const profileData = await getProfileInfo();

    console.log(profileData)
    return (
        <>
            <ProfileEditor initialData={profileData} />
        </>
    )
}