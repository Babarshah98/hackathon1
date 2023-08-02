"use client";

import * as React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import logo from "../assets/logo.png";
import TypographyDemo1 from '../components/text'

export default function NavigationMenuDemo() {
  return (
    <nav className="flex py-4 w-full items-center justify-around bg-white">
      {/* Logo  */}
      <Link href='/'>
      <Image src={logo} alt="logo" height={50} width={50} />
      </Link>
      {/* Navgation  */}
      <div className=" w-1/4">
        <NavigationMenu>
          <NavigationMenuList>
            {/* Female  */}
            <NavigationMenuItem>
              <Link href="/femaleproduct" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Female
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* Male  */}
            <NavigationMenuItem>
              <Link href="/maleproduct" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Male
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* Kids  */}
            <NavigationMenuItem>
              <Link href="/kidsproduct" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Kids
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* All Products  */}

            <NavigationMenuItem>
              <Link href="/allproduct" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  All Products
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
      {/* Searchbar  */}
      <div className=" w-1/6">
        <Input type="text" placeholder="Search" />
      </div>
      {/* Cart  */}
      <div className="bg-gray-300 p-3 transition-all relative hover:scale-110 rounded-full">
        <Badge className="bg-red-500  p-0 absolute top-0 right-2 text-sm rounded-full">
          0
        </Badge>
        <ShoppingCart size={24} color="black" />
      </div>
      
    </nav>
  );
}


