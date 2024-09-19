import { useContext, useState } from "react";
import { ReactSVG } from "react-svg";
import { ProductContext } from "../store/store";

export default function CartButton({productName, isSelected}: {productName : string, isSelected: boolean}) {
    const [quantity, setQuantity] = useState(0);
    const {orderActions: {getOrder, createOrder,deleteOrder, updateOrder }, productActions: {getProduct}}  = useContext(ProductContext);
    const cartOrder = getOrder(productName);
    const increaseQuantity = () => {
        setQuantity(prev => prev + 1)
        if(quantity == 0){
            const foundProduct = getProduct(productName)
            if(foundProduct){
             createOrder({
                quantity: quantity, 
                product: foundProduct
             }) 
            }
        }else {
            updateOrder(cartOrder?.orderId!, quantity)
        }
    }
    
    const decreaseQuantity = () => {
        setQuantity(prev => prev === 0 ? prev : prev - 1)
        if(quantity === 0){
            deleteOrder(productName)
        }else{
            updateOrder(cartOrder?.orderId!, quantity)
        }
    }
  return (
    <div className="min-w-max w-32 rounded-2xl group [&>button]:hidden flex items-center justify-center p-2 absolute hover:bg-amber-950 ring-2 ring-amber-900 translate-x-1/2 -translate-y-4 z-10 bg-white">
        <button className={` w-full rounded-full group-hover:block ${isSelected ? "block" : "hidden"}`}>
            <div className="flex justify-between">
                <button className="p-2 rounded-full ring-1 ring-white" onClick={decreaseQuantity}>
                    <ReactSVG src="./assets/images/icon-decrement-quantity.svg" />
                </button>
                <p className="text-slate-200 font-medium">{quantity}</p>
               <button className="p-2 rounded-full ring-1 ring-white" onClick={increaseQuantity}>
                <ReactSVG src="./assets/images/icon-increment-quantity.svg" />  
               </button> 
            </div>
        </button>
        <span className="w-full group-hover:hidden flex space-x-2">
          <ReactSVG src="./assets/images/icon-add-to-cart.svg" className="mr-2" />
          <p className="text-foreground"> Add to cart</p>
        </span>
    </div>
  )
}
