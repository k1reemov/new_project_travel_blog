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
                    <div className={postStyle.PostInfoTitle}>
                        <p></p>
                        <h3>{post.title}</h3>
                    </div>
                    <p className={postStyle.PostInfoDescription}>{post.description}</p>
                </div>
                <PostComments comments={post.comments} />
                <div className={postStyle.Buttons}>
                    <Button name={'Назад'} className={buttonStyle.backToHomeButton} />
                    <Button name={'Ваше впечатление об этом месте'} className={buttonStyle.addNewCommentButton} />
                </div>
            </div>
        </div>
    )
}