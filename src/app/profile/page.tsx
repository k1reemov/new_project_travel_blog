import ProfileCard from "@/src/app/profile/components/ProfileCard";
import {getProfileInfo} from "@/src/entities/user/api/actions";

export default async function ProfilePage() {
    const profileData= await getProfileInfo();

    return (
        <>
            <ProfileCard initialData={profileData}/>
        </>
    )
}