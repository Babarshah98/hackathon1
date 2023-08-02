import { StaticImageData } from "next/image"
export type User={
    id:number,
    name:string,
    type?:string,
    category:string,
    price:number,
    imge: string | StaticImageData 
}