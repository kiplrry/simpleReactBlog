import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import NavMenu from "./NavMenu"

export default function Navbar(){
    return  (
        <>
        <div className="flex w-full items-center justify-between py-3 px-10 border border-blue-100 ">
        <div className="flex justify-start items-center grow">
                <h2 className="text-xl border border-dashed text-slate-700 mr-7">LARX</h2>
                <Input type="text" role="search" placeholder="Search" 
                className="inline w-1/4"/>
        </div>
        <div>
            <Button variant="link">Login/Register</Button>
        </div>
        </div>
        <div className="flex w-full items-center justify-center py-3 px-10 border border-b-slate-400 ">
            <div>
                <NavMenu />
            </div>
        </div>
        </>
    )
}