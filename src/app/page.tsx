import PostsList from "@/src/components/PostsList";
import Button from "@/src/components/Button";
import styles from "./addNewPostButton.module.css"

export default function Home() {

    return (
        <div>
            <PostsList />
            <div className="container">
                <Button name={'Добавить мое путешествие'} className={styles.addNewPostButton}/>
            </div>
        </div>
  );
}
