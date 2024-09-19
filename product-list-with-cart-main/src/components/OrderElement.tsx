import { ReactSVG } from "react-svg";
import { ProductContext, TOrders } from "../store/store";
import { useContext } from "react";

export default function OrderElement({order, includeThumbnail} : { order: TOrders, includeThumbnail: boolean}) {
    const totalPrice = order.quantity * order.product.price
    const {orderActions: {deleteOrder}} = useContext(ProductContext);
  return (
    <div className="w-full flex items-center justify-between p-2 bg-amber-700/10 rounded-md">
        <div className="w-full flex space-x-3">
              {includeThumbnail ? <span className="size-16 rounded-md">
               <img src={order.product.image.thumbnail}  className="size-full object-cover rounded-md" />
              </span> : (<></>)} 
              <div className="space-y-2">
                  <p className="text-foreground text-xl font-medium">{order.product.name}</p>
                  <span className="space-x-3 flex">
                      <p className="text-amber-800 font-medium">{order.quantity}x</p>
                      <p className="text-gray-400">@ ${order.product.price}</p>
                      <p className="text-amber-800 font-medium">${totalPrice}</p>
                  </span>
              </div>
        </div>
          <button className="size-max rounded-full ring-1 flex items-center justify-center p-2" onClick={() => deleteOrder(order.product.name)}>  
            <ReactSVG src="./assets/images/icon-remove-item.svg" />
        </button>
    </div>
  )
}
