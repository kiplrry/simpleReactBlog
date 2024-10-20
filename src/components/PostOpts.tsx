import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast"
import { Link, useSubmit } from "react-router-dom"


export default function PostOpts({deleteUrl, editUrl}:{deleteUrl: string, editUrl: string}){
    const submit = useSubmit()
    const {toast} = useToast()
    return (
    <DropdownMenu>
    <DropdownMenuTrigger>...</DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuItem>
            <Link to={editUrl}>Edit</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className=" text-red-400 " 
        onClick={()=>{
            submit(null, {
                action: deleteUrl,
                method: "post"
            })
            toast({title: <span className="text-red-400">Post deleted</span>})
        }}>
            Delete
        </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>)
}