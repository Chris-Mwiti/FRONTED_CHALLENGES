import { useContext } from "react"
import { ProductContext, TProducts } from "../store/store"
import ProductCard from "./ProductCard"
import OrderModal from "./OrderModal";

export default function ProductContainer() {
  const {products, isModalOpen} = useContext(ProductContext);
  console.log(isModalOpen)
  return (
   <div
    className="
     space-y-3 
    "
   >
    <p className="text-4xl  text-black font-bold flex items-center relative overflow-hidden">Desserts</p>
        <div
              className="
                 w-full grid grid-cols-1 gap-3
                 md:grid-cols-2
                 lg:grid-cols-3
                 sm:grid-cols-3 
             "
         >
            {products.map(product => (
                <ProductCard product={product} />
            ))}
          </div>
          {isModalOpen ? <OrderModal /> : <></>}
   </div> 
  )
}
