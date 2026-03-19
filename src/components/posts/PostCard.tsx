import {PostType} from "@/src/types/types";
import styles from "./PostCard.module.css"
import {API_URL} from "@/src/api/posts";
import Button from "@/src/components/ui/Button";

export default function PostCard({ post }: { post: PostType }) {
    const {
        id,
        title,
        excerpt,
        county,
        city,
        photo,
    } = post

    return (
        <div className={styles.postCard}>
            <img className={styles.postImg} src={`${API_URL}${photo}`}/>
            <div className={styles.postInfo}>
                <div className={styles.postHeader}>
                    <h3 className={styles.postTitle}>{title}</h3>
                    <p className={styles.postDescription}> {excerpt}</p>
                </div>
                <div className={styles.postFooter}>
                    <p className={styles.postLocation}>{county}, {city}</p>
                    <Button
                        page={`posts/${id}`}
                        name={'Подробнее'}
                        className={styles.postTakeMoreInfo}
                    />
                </div>
            </div>
        </div>
    );
}