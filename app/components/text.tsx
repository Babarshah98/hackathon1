
import { relative } from 'path'
import styles from '../components/border.module.css'
import { Pointer } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import logo from '../assets/man-doing-dance-moves-side-view-removebg-preview.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {LuShoppingCart} from 'react-icons/lu'
import Slides from "../components/images";



export default function TypographyDemo1() {
    return (
      <>
      
        
            <section className='flex flex-col lg:flex-row gap-y-10 py-5'>
                <div className='flex-1'>
            <Badge className=' py-3 px-7 rounded-lg bg-blue-100 text-blue-800 text-lg hover:bg-blue-100 mt-10'>Sale 70%</Badge>

                <h1 className="scroll-m-20 text-8xl font-extrabold tracking-tight lg:text-8xl mt-20">
                An Industrial Take on Streetwear
                </h1>
      
                
                <p className='text-lg mt-16'>
                Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                </p>
                
                <Button className=' mt-16 relative h-12 px-8 font-semibold text-lg bg-blue-500 text-white flex items-center justify-center '>
                <LuShoppingCart size={28} className=' mr-3' />
                Go Shopping</Button>

               
                
                
                

                
                </div>

            <div className='h-250 w-250 rounded-full bg-gray-200 flex-1  flex justify-center item-center'>
                
                <Image className='mx-20'
                    src={logo}
                    alt='image'
                    
                    />
            </div>
                
            </section>
            <Slides />
           
            
      
      
      </>
    )
  }
  