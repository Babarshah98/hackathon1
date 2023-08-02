import { Details } from "@/app/utils/mock";
import Product from "@/app/view/product";
import Link from "next/link";
export const generateMetadata=() => {
    return{
        title:"Male Product"
    }
}
export default function Male() {
   const Maledetail=Details.filter(item=> item.category==="Male")


    return(
        <>
    
    
        <h1>Male Product</h1>
        <div className='flex  mt-16 py-10 justify-evenly flex-wrap'>
        {
            Maledetail.length>0 ?
            Maledetail.map((item) => (
                <Product  
                   key={item.id} 
                   title={item.name} 
                   price={item.price} 
                   img={item.imge} 
                   category={item.category} 
                   id={item.id}/>


            )): 
                     <p>
                        No Products Found
                    </p>

            }
        </div>
            <Link href='/'>
                    Go to Home
            </Link>
                            


        </>
        )
    

    
}