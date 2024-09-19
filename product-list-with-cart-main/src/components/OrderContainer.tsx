import { useContext } from "react"
import { ProductContext } from "../store/store"
import { ReactSVG } from "react-svg";
import OrderElement from "./OrderElement";

export default function OrderContainer() {
    const {orders, orderActions: {deleteOrder, calculateTotal}, modalActions: {openModal}} = useContext(ProductContext);
  return (
    <div className="w-full min-h-5 max-h-[350px] sm:w-[350px] rounded-md bg-white space-y-2 p-4">
        <p className="text-2xl text-amber-800 font-bold">{`Your Cart (${orders.length})`}</p>
        {orders.length <= 0 ? (
            <div className="w-full flex flex-col items-center justify-center space-y-3">
                <ReactSVG src="./assets/images/illustration-empty-cart.svg" />
                <p className="text-amber-700"> Your added items will appear here</p>
            </div>
        ) : ( <div className="space-y-3 flex flex-col items-center">
            {orders.map((order) => (<OrderElement order={order} includeThumbnail={ false} />))}
            <div className="flex w-full justify-between">
                <p className="text-base text-foreground ">Order Total</p>
                <p className = "text-2xl text-foreground font-bold">{ `$${calculateTotal()}`}</p>
            </div>
            <button className="min-w-[300px] rounded-2xl bg-amber-800 p-3 text-slate-50 cursor-pointer" onClick={openModal}> Complete order</button>
        </div>)}
    </div>
  )
}
