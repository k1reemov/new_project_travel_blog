import PostsCardsList from "@/src/app/posts/components/PostsCardsList";
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
