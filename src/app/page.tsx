import PostsCardsList from "@/src/components/posts/PostsCardsList";
import Button from "@/src/components/ui/Button";

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
