import styles from "./ProfileCard.module.css"
import {getProfileInfo} from "@/src/api/profile";
import Button from "@/src/components/ui/Button";

export default async function ProfileCard () {
    const {
        id,
        full_name,
        city,
        country,
        bio,
    } = await getProfileInfo();

    return (
        <div className={styles.profileCard}>
            <div className={styles.profilePhoto}>

            </div>
            <div className={styles.profileInfo}>
                <div className={styles.profileTitle}>
                    <h3 className={styles.profileUserName}>{full_name}</h3>
                    <Button
                        name='поменять данные'
                        href='profile/editor'
                    />
                </div>
                <div className={styles.profileUserFrom}>
                    <p className={styles.profileUserSection}></p>
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