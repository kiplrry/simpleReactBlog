import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
import { Link, NavLink } from "react-router-dom" 
const NavClass = ({isActive}) => {
        const color = isActive ? "text-indigo-500" : ""
        return `text-xl ${color}`
    }

export default function NavMenu(){
    return (
        <>
        <NavigationMenu className="content-center">
        <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
                <NavLink to='/' className={NavClass}>Home</NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavLink className={NavClass} to="/posts">Posts</NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavLink className={NavClass} to="/create">Create Post</NavLink>
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
        </>
    )
}