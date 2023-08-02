import React from 'react'
import Image, { StaticImageData } from 'next/image'
import logo from '../assets/12.jpg'
import { Button } from '@/components/ui/button'
import { LuShoppingCart } from 'react-icons/lu'
import Link from 'next/link'

const product = (props:{title: string, price: number, img:string |StaticImageData, category?:string , id:number}) => {
  return (
    <Link href={`/Products/${props.id}`}>
    
    <div className='py-5'>
        <Image src={props.img}
        alt='post'
        width={330}
        height={450}/>
        <h1 className='font-bold text-lg mt-2'>
        {props.title}
    </h1>
    
    <p className='font-bold text-lg'>
        ${props.price}
    </p>
    <p className='font-bold text-lg'>
        {props.category}
    </p>
    <Button className=' mt-6 relative h-7 px-6 text-sm bg-blue-500 text-white flex items-center justify-start '>
                <LuShoppingCart size={14} className='mr-2 ' />
                Add to Cart</Button>
    
    
    </div>
    </Link>
    )
    }
      
   

export default product
