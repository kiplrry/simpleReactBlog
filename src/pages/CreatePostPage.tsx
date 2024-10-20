import Navbar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { NewPost, Post } from "@/lib/types";
import { createPost, getPost, updatePost } from "@/utils/storage";
import { useState } from "react";
import { Form, LoaderFunctionArgs, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { ActionFunctionArgs, useSubmit } from "react-router-dom";


interface PostForm {
    form: NewPost,
}

export async function action({ request }: ActionFunctionArgs){
    const formdata = await request.formData()
    const post = Object.fromEntries(formdata) as unknown as NewPost
    console.log('created')
    if(post && post.body && post.title){
        await createPost(post)
    }
    return redirect('/posts')
}

export async function loader({params}: LoaderFunctionArgs) {
    if(!params.postId) return null
    const post = await getPost(params.postId)
    console.log(post)
    return post || null
}

export default function CreatePostPage(){
    const navigate = useNavigate()
    const submit = useSubmit()
    const [err, setErr] = useState('')
    const post = useLoaderData() as unknown as Post
    console.log(post)

    const handleSubmit = (form: HTMLFormElement)=>{
        const postData = new FormData(form)
        const { title, body } = Object.fromEntries(postData) as unknown as NewPost
        if(title && body) {
            setErr('')
            console.log('dadadada')
            submit(postData, {
                method: 'post'
            })
            return
        }
        setErr('incomplete data')
    }
    return (
        <>
        <div className="w-full flex flex-col justify-center items-center pt-8">
            <div className="w-4/5 flex justify-center flex-col items-center">
                <h2>{post ? 'Update post' : "Create A New Post"}</h2>
                <hr className="w-full"/>
                <div className="w-full">
                    <Form method="post" className="flex flex-col" onSubmit={e=> {
                            e.preventDefault()
                            handleSubmit(e.currentTarget)
                        }}>
                        <input type="text" name="title" id='posttitle' className="h-10 my-5 text-2xl p-3 border rounded-md"  placeholder="Post Title" defaultValue={post && post.title}/>
                        <div className="flex flex-col">
                            <label htmlFor="postbody" className="my-3 text-xl" >Post Content</label>
                            <textarea name="body" id="body" className="border border-indigo-100 focus:shadow-indigo-300 h-[300px] p-3 text-xl" placeholder="Create post content here"
                            defaultValue={post && post.body}></textarea>
                        </div>
                        { err && <p>{err}</p>}
                        <div className="flex gap-3">
                            <Button variant='destructive' className="my-3" type="button" onClick={()=> {navigate(-1)}}>Cancel</Button>
                            <Button className="my-3" type="submit">Create</Button>
                        </div>
                    </Form>
                    
                </div>
            </div>
        </div>
        </>
    )
}