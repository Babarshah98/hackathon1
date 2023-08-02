import React from 'react'
import Product from '../view/product'
import logo from '../assets/12.jpg'
import logo1 from '../assets/13.jpg'
import logo2 from '../assets/22.jpeg'
import { Button } from '@/components/ui/button'
import { LuShoppingCart } from 'react-icons/lu'
import { Details } from '../utils/mock'
import Link from 'next/link'
import { Item } from '@radix-ui/react-navigation-menu'
import { StaticImageData } from 'next/image'
import product from '../view/product'

 

const promotion = (props:{title?: string, price?: number, img?:string |StaticImageData, category?:string , id?:number}) =>{
  
     const newDetails=Details.slice(0,3);  
  return (
   
    <div className='mt-10'>
      <h1 className='font-lg text-blue-900 flex justify-center font-semibold mt-8'>
        
      PROMOTIONS
      </h1>
      <p className='text-2xl mt-6 font-bold  flex justify-center '>
      Our Promotions Events
      </p>
      <Link href={`/Products/${props.id}`}>
    <div className='flex  mt-16 py-5 justify-between'>
    {
      newDetails.map((item) => (
        <Product  key={item.id} title={item.name} price={item.price} img={item.imge}  id={item.id}/>
      ))

    }



        {/* <Product title='pents' price={140} img={logo}/>
        <Product  title='Shirt' price={130} img={logo1} />       
        <Product title='Jacket' price={200} img={logo2}/>     
        <Product title='pents' price={140} img={logo}/>       
        <Product  title='pents' price={140} img={logo}/>  
        <Product title='pents' price={140} img={logo}/>
         */}

      
    </div>
    </Link>
    </div>
    
  )
}

export default promotion

