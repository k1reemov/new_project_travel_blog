import Post from "@/src/components/Post";
import styles from "./PostList.module.css"

export interface PostType {
    id: number;
    title: string;
    excerpt: string;
    county?: string;
    city?: string;
    photo: string;
}

export default async function PostsList() {

    const responce = await fetch(
        'https://travelblog.skillbox.cc/api/posts'
    )

    const posts: PostType[] = await responce.json();

    return (
        <div className={styles.PostList}>
            {posts.map((post: PostType) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}