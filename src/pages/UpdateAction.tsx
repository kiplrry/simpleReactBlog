import { updatePost } from "@/utils/storage"
import { redirect } from "react-router-dom"
export async function action({request , params}){
    const formdata = await request.formData()
    const post = Object.fromEntries(formdata) as unknown as NewPost
    if(post && post.body && post.title){
        await updatePost(params.postId, post)
    }
    return redirect('/posts')
}