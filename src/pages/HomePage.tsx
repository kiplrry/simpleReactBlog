import { useEffect, useState } from "react";



interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

export default function HomePage(){
    const [posts, setPosts] = useState<Post[]>([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            setPosts(json)
        })
    }, [])
    return (
        <>
        <HomeHero/>
        <HomeTrendingSection posts={posts} />
        </>
    )
}

function HomeHero(){
    return (
    <section>
        <div className={`flex flex-col items-center min-h-[400px] h-fit w-full bg-gradient-to-r from-sky-500 to-indigo-500 px-10 pt-[80px] pb-[40px]`}>
            <div>
                <h1 className="text-xl text-center  sm:text-3xl mb-5 text-white">Welcome To Larry Blogs</h1>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </section>
    )
}
interface TrendingProps{
    posts: Post[]
}

function HomeTrendingSection({posts}: TrendingProps){
    return (
        <section>
        <div className={`flex flex-col items-center min-h-[400px] h-fit w-full  px-10 pt-[50px] pb-[40px]`}>
            <div className="w-full">
                <h2 className="text-2xl font-bold text-start border-l-4 w-fit rounded-xl left-1 border-green-500 p-2">All Posts</h2>
                <div className="mt-10 flex flex-col gap-5">
                    {
                        posts.slice(0, 10).map((post)=>{
                            return (
                                <PostCard key={post.id} post={post} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
    )
}

function Card(){
    const imageurl = 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2t0b3AlMjBwY3xlbnwwfHwwfHx8MA%3D%3D'
    return (
        <div style={{backgroundImage: `url(${imageurl})`}}
            className="w-[280px] overflow-hidden flex flex-col justify-end items-center mx-4 h-[300px] bg-black bg-cover rounded-[10px]">
            <div className=" flex flex-col justify-center bg-white w-full px-3 py-2 border-inherit gap-3 h-[50%]">
                <h3 className="text-xl w-fit text-indigo-700 text-center px-2 rounded-full bg-slate-100">SmartPhones</h3>
                <p className="text font-semibold font-roboto">Top 5 best Phones in the market</p>
                <p className="font-light font-roboto">12 March 2024</p>
            </div>
        </div>
    )
}
interface PostProp{
    post: Post
}
function PostCard({post} : PostProp){
    const imageurl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLD5nnwiIVghAnUvEfMyQegTTpjb9-QuHpMg&s'
    return (
        <>
        <div className="flex flex-row w-full bg-slate-500 border h-[250px] border-indigo-300 rounded-lg overflow-hidden">
            <div
            className=" w-[40%] bg-gray-50 ">
                <img src={imageurl} className="w-full h-[100%]" alt="" />
            </div>
            <div className=" flex flex-col justify-center bg-white w-full px-3 py-2 border-inherit gap-3 h-[100%">
                    <h3 className="text-xl w-fit text-indigo-700 text-center px-2 rounded-full bg-slate-100">SmartPhones</h3>
                    <p className="text font-semibold font-roboto">{post.title.toLocaleUpperCase()}</p>
                    <hr  className="my-2"/>
                    <p className="text font-light font-roboto w-full">{post.body.slice(40)}</p>
                    <p className="font-light font-roboto">12 March 2024</p>
            </div>
        </div>
        </>
    )
}