import {CommentType} from "@/src/types/types"
import styles from "./PostComments.module.css"

export default async function PostComments({comments}) {

    return (
        <div>
            {
                comments.map(({author_name, created_at, comment}: CommentType) => (
                    <div className={styles.CommentCard} key={created_at}>
                        <h4 className={styles.CommentAuthor}>{author_name}</h4>
                        <p className={styles.CommentDate}>{new Date(created_at).toLocaleDateString()}</p>
                        <p className={styles.CommentInfo}>{comment}</p>
                    </div>
                ))
            }
        </div>
    )
}