import PostInfo from "@/src/components/posts/PostInfo";

export default async function PagePost({params}) {
    const {id} = await params;

    return (
        <PostInfo postId = {id} />
    )
}