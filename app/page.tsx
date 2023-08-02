import Image from "next/image";
import Link from "next/link";
import TypographyDemo1 from "./components/text";
import Promotion from "./components/promotion";
import Slides from "./components/images";
import logo6 from "./assets/Featured4.webp"
import Product from '../app/view/product'
import logo from '../app/assets/12.jpg'
import Carsousel from "./components/carsousel";


export const generateMetadata=() => {
  return{
      title:"Dino Market | E-commerce"
  }
}



export default function Home() {
  return (
    <>
      <h1 >
        <TypographyDemo1></TypographyDemo1>
      </h1>
      <div>
        <Promotion/>
        </div>
      <div className="mt-10 ">
        <Carsousel/>
      </div>
        
         
                
      
     
    </>
  );
}
