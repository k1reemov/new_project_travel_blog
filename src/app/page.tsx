import PostsCardsList from "@/src/widgets/posts-list/PostsCardsList";
import Button from "@/src/shared/ui/Button";

export default function Home() {

    return (
        <div>
            <PostsCardsList />
            <div className="container">
                <Button name={'Добавить мое путешествие'}/>
            </div>
        </div>
  );
}
