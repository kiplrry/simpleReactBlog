import { deletePost } from "@/utils/storage"
import { redirect } from "react-router-dom"
 
export async function action ({ params, request }){
    const {postId}: {postId: string} = params
    console.log(request)
    console.log(postId)
    await deletePost(postId)
    return redirect('/posts')
}