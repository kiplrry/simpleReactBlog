import Navbar from "@/components/NavBar";
import PostCard from "@/components/PostCard";
import { Post } from "@/lib/types";
import { Form, Link, useLoaderData } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { getPosts } from "@/utils/storage";

export async function loader(){
    try {
        // const res  = await fetch('https://jsonplaceholder.typicode.com/posts')
        // const posts: Post[] = await res.json()
        const posts = await getPosts()
        if(posts){
            // const allPosts = [...localPosts, ...posts]
            console.log({posts})
            return { posts }
        }
        return {'err': null}
    }
    catch (err){
        if(err instanceof Error){
            return {'err': err.message}
        }
    }
    
}

interface LoaderData { 
    posts?: Post[] | undefined;
    err?: string;
}
export default function PostsPage(){
    const { posts, err } = useLoaderData() as LoaderData
    const [filtered, setFiltered] = useState(posts)
    const [filter, setFilter] = useState('')
    useEffect(()=>{
        if(!posts) return
        const _filtered = posts.filter(post=>{
            return post.title.toLowerCase().includes(filter.trim().toLowerCase())
        })
        setFiltered(_filtered)
    }, [posts, filter])
    return (
        <>
        <div className="w-full flex flex-col justify-center items-center pt-8">
                <Form action="">
                <div className="flex items-center justify-center">
                <Input type="text" role="search" placeholder="Search" 
                className="inline w-full m-3 " name="search" value={filter} onChange={(e) => setFilter(e.currentTarget.value)}/>
                </div>
                </Form>
            <div className="w-[70%] flex flex-col justify-center items-center gap-8">
                {/* { filtered  && filtered.map((post)=>{
                    return <PostCard post={post} key={post.id}/>
                })} */}
                {
                    filtered && filtered?.length > 0 ? filtered.map((post)=>{
                        return <PostCard post={post} key={post.id}/>
                    }) :
                    <span>No posts available. <Link className="text-indigo-400" to="/create">Create one</Link></span>
                }
                {
                    err && <h1>{err}</h1>
                }
            </div>
        </div>
        </>
        
    )
}
