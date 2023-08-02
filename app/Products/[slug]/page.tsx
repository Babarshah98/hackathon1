import { Details } from "@/app/utils/mock";
import Product from "@/app/view/product";
import { Item } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import Image from 'next/image'
import Quantity from "@/app/components/quantity";
import { LuShoppingCart } from "react-icons/lu";
import { Button } from "@/components/ui/button";

const getproductdetail= (id:number | string)=>

{
     return Details.filter((item) => item.id == id)
}

const sizes=['XS','S','M','L','XL']

export default function Page({params}: {params :{slug:string}}) {
    const result= getproductdetail(params.slug )
    return (
        
        <div>
            {result.map((products)=> (
                <div key={products.id} className="flex space-x-10 mt-20">
                    {/* Left Image */}
                    <div >
                     <Image src={products.imge} alt={products.name} width={550} height={700}/>
                    </div>
                    {/* Right Text */}
                    <div>
                     <div>
                        <h1 className="text-2xl font-semibold text-gray-500">
                            {products.name}
                        </h1>
                        <h2 className="text-lg font-semibold text-gray-300 mt-1">
                            {products.type}
                        </h2>
                     </div>
                     {/* variant */}
                        <div> 
                            <h3 className="font-semibold mt-6 text-sm">SELECT SIZE</h3>
                            </div>
                            <div className="flex gap-x-4 ">
                            {sizes.map((item) => (
                            <div className="w-7 h-7 rounded-full flex item-center justify-center
                             text-justify border hover:shadow-xl duration-300 mt-2 cursor-pointer">
                                <span className="text-lg font-semibold text-gray-500">{item}</span>
                                </div>         
                        ))}
                                </div>
                                {/* quantity */}
                                <div className="flex items-center mt-6 gap-x-3  ">
                                    <h3 className=" font-semibold text-sm ">Quantity:</h3>
                                    <Quantity />
                                </div>
                                <div className="flex gap-x-5 mt-16 item-center justify-center">
                                <div>
                                <Button className='  relative h-12 px-8 font-semibold text-lg bg-blue-500 text-white flex items-center'>
                <LuShoppingCart size={28} className=' mr-3' />
                Add to Cart</Button>

                                </div>
                                <div className="flex items-center font-semibold text-2xl">
                                    ${products.price.toFixed(2)}
                                </div>
                                
                        </div>
                    </div>
                        

                </div>

               
                
            ))}

        </div>
        

        
    )

    
}