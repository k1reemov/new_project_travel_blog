import {getPostInfo} from "@/src/api/posts";
import {PostPageType} from "@/src/types/types";
import Button from "@/src/components/ui/Button";
import PostComments from "@/src/app/posts/components/PostComments";
import postStyle from "./PostInfo.module.css"
import Image from "next/image";

export default async function PostInfo({postId}) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const post: PostPageType = await getPostInfo(postId)

    return (
        <div className={postStyle.PostInfoPage}>
            <Image
                className={postStyle.PostInfoImg}
                src={`${API_URL}${post.photo}`}
                alt={post.title}
                width={370}
                height={288}
            />
            <div className={postStyle.PostContainer}>
                <div className={postStyle.PostInfoCard}>
                    <h3 className={postStyle.PostInfoTitle}>{`${post.city} ${post.title}`}</h3>
                    <p className={postStyle.PostInfoDescription}>{post.description}</p>
                </div>
                <PostComments comments={post.comments} />
                <div className={postStyle.Buttons}>
                    <Button
                        href={''}
                        name={'Назад'}
                    />
                    <Button
                        href={''}
                        name={'Ваше впечатление об этом месте'}
                        variant='filled'
                    />
                </div>
            </div>
        </div>
    )
}