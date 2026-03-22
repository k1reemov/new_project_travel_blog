import {PostType} from "@/src/types/types";
import styles from "./PostCard.module.css"
import {API_URL} from "@/src/api/posts";
import Button from "@/src/components/ui/Button";
import Image from "next/image";

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
            <Image
                className={styles.postImg}
                src={`${API_URL}${photo}`}
                alt={title}
                width={370}
                height={288}
            />
            <div className={styles.postInfo}>
                <div className={styles.postHeader}>
                    <h3 className={styles.postTitle}>{title}</h3>
                    <p className={styles.postDescription}> {excerpt}</p>
                </div>
                <div className={styles.postFooter}>
                    <p className={styles.postLocation}>{county}, {city}</p>
                    <Button
                        href={`posts/${id}`}
                        name={'Подробнее'}
                        variant={'link'}
                    />
                </div>
            </div>
        </div>
    );
}