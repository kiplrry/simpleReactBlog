import localforage from "localforage";
import { Post } from "@/lib/types";

interface NewPost{
    title: string,
    body: string
}

export async function createPost(post: NewPost, userId?: number) : Promise<Post> {
    const posts = await getPosts()
    const id = Math.random().toString(36).substring(2, 9);
    const newPost = {...post, userId: userId || 1, id }
    posts.unshift(newPost)
    await setPosts(posts)
    return newPost
}
async function setPosts(post: Post[]) {
    return await localforage.setItem('posts', post)
}

export async function updatePost(postId: string | number, update : {title:string, body: string}) {
    const posts = await getPosts()
    if(!posts) return
    const _posts = posts.map(post=>{
        if(postId == post.id){
            console.log('updated')
            return {...post, ...update}
        }
        return post
    })
    
    await setPosts(_posts)
}
export async function getPosts(){
    const posts: Post[] = await localforage.getItem("posts") || [];
    return posts
}

export async function getPost(postId: string) {
    const posts = await getPosts()
    if(!postId) return null
    if(!posts) return null
    const post = posts.filter(post=>{
        return post.id == postId
    })
    return post[0]
}
export async function deletePost(postId: string | number) {
    if(!postId) return null
    const posts = await getPosts()
    if(posts){
        const _posts = posts.filter(post=> post.id != postId)
        await setPosts(_posts)
    }
}