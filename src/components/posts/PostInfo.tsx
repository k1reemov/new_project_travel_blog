import {API_URL, getPostInfo} from "@/src/api/posts";
import {PostPageType} from "@/src/types/types";
import Button from "@/src/components/ui/Button";
import PostComments from "@/src/components/posts/PostComments";
import postStyle from "./PostInfo.module.css"
import buttonStyle from "@/src/components/ui/Button.module.css";

export default async function PostInfo({postId}) {

    const post: PostPageType = await getPostInfo(postId)



    return (
        <div className={postStyle.PostInfoPage}>
            <img className={postStyle.PostInfoImg} src={`${API_URL}${post.photo}`}/>
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