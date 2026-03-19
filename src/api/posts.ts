export const API_URL = 'https://travelblog.skillbox.cc';

export async function getPosts() {
    const response = await fetch(`${API_URL}/api/posts`);

    if (!response.ok) throw new Error('Failed to fetch posts');

    return response.json();
}

export async function getPostInfo(id ) {
    const response = await fetch(`${API_URL}/api/posts/${id}`);

    if (!response.ok) throw new Error('Failed to fetch posts');

    return response.json();
}
