import { Post } from "@/lib/types"
import { useNavigate } from "react-router-dom"
import PostOpts from "./PostOpts"

interface PostProp{
    post: Post
}
export default function PostCard({post} : PostProp){
    const imageurl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLD5nnwiIVghAnUvEfMyQegTTpjb9-QuHpMg&s'
    const navigate = useNavigate()
    const slice = (str: string, size: number)=>{
        if(!str) return ''
        const newStr = str.slice(0, size)
        if(str.length > size) return newStr + '....'
        return newStr
    }
    return (
        <>
            <div onClick={()=> (navigate(`/posts/${post.id}`))}
            className="relative flex flex-row w-full bg-slate-500 border h-[250px] border-indigo-300 rounded-lg overflow-hidden">
                <div
                className=" w-[40%] bg-gray-50 ">
                    <img src={imageurl} className="w-full h-[100%]" alt="" />
                </div>
                <div className=" flex flex-col justify-center bg-white w-full px-3 py-2 border-inherit gap-3 h-[100%">
                        <h3 className="text-xl w-fit text-indigo-700 text-center px-2 rounded-full bg-slate-100">SmartPhones</h3>
                        <p className="text font-semibold font-roboto">{slice(post.title, 90).toLocaleUpperCase()}</p>
                        <hr  className="my-2"/>
                        <p className="text font-light font-roboto w-full">{slice(post.body, 90)}</p>
                        <p className="font-light font-roboto">12 March 2024</p>
                </div>
                <div className="absolute top-3 right-5 " onClick={e=> e.stopPropagation()}>
                    <PostOpts deleteUrl={`/posts/${post.id}/delete`} editUrl={`/posts/${post.id}/edit`} />
                </div>
            </div>
        </>
    )
}