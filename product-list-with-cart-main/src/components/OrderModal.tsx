import { useContext } from "react"
import { ProductContext } from "../store/store"
import { ReactSVG } from "react-svg"
import OrderElement from "./OrderElement"

export default function OrderModal() {
    const { orderActions:{calculateTotal},  modalActions: {closeModal}, orders} = useContext(ProductContext)

  return (
    <div className="w-full flex items-center justify-center bg-black/25  absolute z-10 top-0 overflow-hidden min-h-full">
        <div className="w-full sm:w-[400px] p-3 min-h-[100px] space-y-4 bg-white rounded-md">
            <ReactSVG src={"./assets/images/icon-order-confirmed.svg"} />
            <p className="text-xl text-foreground font-bold">Order Confirmed</p>
            <p className="text-muted-foreground font-medium">We hope you enjoy your meal</p>

            <div className="w-full space-y-3 flex flex-col items-center">
                {orders.map((order) => <OrderElement order={order} includeThumbnail={true} />)}
            </div>
            <div className="flex w-full justify-between">
                  <p className="text-base text-foreground ">Order Total</p>
                  <p className="text-2xl text-foreground font-bold">{`$${calculateTotal()}`}</p>
              </div>
              <button className="min-w-[300px] w-full  rounded-2xl bg-amber-800 p-3 text-slate-50 cursor-pointer" onClick={closeModal}>Start new order</button>
            </div>
      </div>
  )

}
