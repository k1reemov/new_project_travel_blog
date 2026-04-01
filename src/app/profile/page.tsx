import ProfileCard from "@/src/entities/user/ui/ProfileCard";
import {getProfileInfo} from "@/src/entities/user/api/actions";

export default async function ProfilePage() {
    const profileData= await getProfileInfo();

    return (
        <>
            <ProfileCard initialData={profileData}/>
        </>
    )
}