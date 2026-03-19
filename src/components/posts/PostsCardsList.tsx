import PostCard from "@/src/components/posts/PostCard";
import styles from "./PostsCardsList.module.css"
import {getPosts} from "@/src/api/posts";
import {PostType} from "@/src/types/types";

export default async function PostsCardsList() {

    const posts: PostType[] = await getPosts();

    return (
        <div className={styles.PostList}>
            {posts.map((post: PostType) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}