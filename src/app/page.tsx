import PostsCardsList from "@/src/components/posts/PostsCardsList";
import Button from "@/src/components/ui/Button";
import styles from "../components/ui/Button.module.css"

export default function Home() {

    return (
        <div>
            <PostsCardsList />
            <div className="container">
                <Button name={'Добавить мое путешествие'} className={styles.addNewPostButton}/>
            </div>
        </div>
  );
}
