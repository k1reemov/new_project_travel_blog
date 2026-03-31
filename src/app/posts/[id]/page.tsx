import PostInfo from "@/src/app/posts/components/PostInfo";

export default async function PagePost({params}) {
    const {id} = await params;

    return (
        <PostInfo postId = {id} />
    )
}