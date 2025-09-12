"use client";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Chatbox from "@/components/Chatbox"
 

export default function Home() {
  // Functions
  

  // JSX
  return (
    <div className="min-h-screen w-full bg-[#efefef]">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Logo</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Log In</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Sign Up</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex flex-col items-center">
        <h1 className="p-4 pt-4 text-center text-2xl font-bold md:text-4xl">
          New Chat
        </h1>

        <Chatbox />
      
      </div>
    </div>
  );

}
