import Navbar from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { Outlet } from "react-router-dom";


export default function MainPage(){
    
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Toaster/>
        </>
    )
}