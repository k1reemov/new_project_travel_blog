import PostCard from "@/src/entities/post/ui/PostCard";
import styles from "./PostsCardsList.module.css"
import {getPosts} from "@/src/entities/post/api/posts";
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