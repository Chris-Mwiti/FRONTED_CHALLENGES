import axios from "axios"
import { ProductContext, TProducts } from "../store/store"
import { useContext } from "react"
import ProductContainer from "./ProductContainer";
import { useQuery } from "@tanstack/react-query";
import OrderContainer from "./OrderContainer";



export default function Main() {
    const {productActions: {addProducts}} = useContext(ProductContext)
    const {isLoading} = useQuery({
        queryKey: ["Products"],
        queryFn: () => axios.get<TProducts[]>("http://localhost:1105/products").then((res) => {
            addProducts(res.data) 
            res.data
        }),
    })
 
    if(isLoading){
        return <p className="text-lg font-medium ">Loading...</p>
    }
  return (
    <div
        className="
           flex flex-col gap-8 w-full min-h-full p-8 bg-amber-200/10 items-center 
            sm:flex-row sm:items-start 
        "
    >
        <ProductContainer  />
        <OrderContainer />
    </div>
  )
}
