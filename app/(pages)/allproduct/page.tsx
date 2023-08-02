import Link from "next/link";
import { Details } from "@/app/utils/mock";
import Product from "@/app/view/product";

export const generateMetadata=() => {
    return{
        title:"All Products"
    }
}
export default function allproduct() {
    return(
        <>
        <div className='flex  mt-16 py-10 justify-evenly flex-wrap'>
    {
      Details.map((item) => (
        <Product  
         key={item.id} 
         title={item.name} 
         price={item.price} 
         img={item.imge} 
         category={item.category} 
         id={item.id}/>
      ))
    }
    
    </div>
       
        <Link href='/'>
            Go to Home
        </Link>


        </>
    )

    
}