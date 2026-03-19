import {PostType} from "@/src/components/PostsList";
import styles from "./Post.module.css"
import Link from "next/link";

export default function Post({ post }: { post: PostType }) {
    const {
        id,
        title,
        excerpt,
        county,
        city,
        photo,
    } = post

    const RES_URL = 'https://travelblog.skillbox.cc';

    return (
        <div className={styles.postCard}>
            <img className={styles.postImg} src={`${RES_URL}${photo}`}/>
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