import PostInfo from "@/src/entities/post/ui/PostInfo";

export default async function PagePost({params}) {
    const {id} = await params;

    return (
        <PostInfo postId = {id} />
    )
}