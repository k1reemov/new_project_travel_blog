import {PostType} from "@/src/types/types";
import styles from "./PostCard.module.css"
import Link from "next/link";
import {API_URL} from "@/src/api/posts";

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
                    <Link href={`/posts/${id}`} className={styles.postTakeMoreInfo}>Подробнее</Link>
                </div>
            </div>
        </div>
    );
}