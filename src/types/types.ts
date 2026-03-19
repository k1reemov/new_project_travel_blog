export interface PostType {
    id: number;
    title: string;
    excerpt: string;
    county?: string;
    city?: string;
    photo: string;
}

export interface PostPageType {
    id: number;
    title: string;
    description: string;
    county: string;
    city: string;
    photo: string;
    comments: CommentType[];
    userInfo: UserInfoType;
}

export interface CommentType {
    author_name: string;
    comment: string;
    created_at: string;
}

export interface UserInfoType {
    full_name: string;
    city: string;
    bio: string;
}