import styles from "./ProfileCard.module.css"
import EditProfileIcon from "@/src/shared/ui/icons/EditProfileIcon";
import AddNewPhoto from "@/src/features/profile-edit/ui/AddNewPhoto";

interface ProfileDataTypes {
    id: number | string;
    full_name: string;
    city: string;
    country?: string;
    bio: string;
    photo: string;
}

export default function ProfileCard({ initialData }: { initialData: ProfileDataTypes }) {
    const {
        id,
        full_name,
        city,
        country,
        bio,
        photo,
    } = initialData;

    console.log('Профиль', photo);

    return (
        <div className={styles.profileCard}>
            <AddNewPhoto
                fullName={full_name}
                photo={photo}
            />
            <div className={styles.profileInfo}>
                <div className={styles.profileTitle}>
                    <h3 className={styles.profileUserName}>{full_name}</h3>
                    <EditProfileIcon />
                </div>
                <div className={styles.profileUserFrom}>
                    <p className={styles.profileUserSection}>Город</p>
                    <p className={styles.profileUserFromInfo}>{`${city} ${country}`}</p>
                </div>
                <div className={styles.profileUserAbout}>
                    <p className={styles.profileUserSection}>О себе</p>
                    <p className={styles.profileUserAboutInfo}>{bio}</p>
                </div>
            </div>
        </div>
    )
}