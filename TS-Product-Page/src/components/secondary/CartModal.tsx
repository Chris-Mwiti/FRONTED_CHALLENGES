import { useContext } from "react"
import { ProductStoreCtx } from "../../context/store.context"
import DeleteIcon from "../../assets/DeleteSvg";


const CartModal = () => {
    const {cart,closeCartModal,removeFromCart,cartModal} = useContext(ProductStoreCtx);
    console.log(cart);
    if(Array.isArray(cart)){
        return (
            <div
                className={`
                    ${cartModal ? "flex" : "hidden"}
                    flex-col space-y-5 top-10 
                    w-full min-h-11 bg-white shadow-lg absolute z-40 rounded-md p-5
                    divide-y-2 divide-dGrayishBlue
                    sm:right-32 sm:top-32 sm:w-[350px]
                `}
                
            >
                <p className="text-vDarkBlue font-bold">Cart</p>
                {cart.map(items => (
                    <div
                        className="
                            w-full flex justify-between items-center mb-3
                        "
                        key={items.title}
                    >
                        <div
                            className="
                                w-12 h-12
                            "
                        >
                            <img src={items.images[0]} alt="image" className="w-full h-full object-contain rounded-md" />
                        </div>
                        <div
                            className="flex flex-col gap-y-2"
                        >
                            <p className="text-dGrayishBlue">{items.title}</p>
                            <span className="flex gap-x-1 items-center">
                                <span className="flex gap-x-3 items-center">
                                    <p className="text-dGrayishBlue">{`$${items.price}.00 * ${items.counter}` }</p>
                                    <p className="text-vDarkBlue">{ `$${Number(items.price)* items.counter}.00`}</p>
                                </span>
                            </span>
                        </div>
                        <span onClick={() => removeFromCart(items.title)} className="w-5 h-5">
                            <DeleteIcon />
                        </span>
                    </div>
                ))}
                <button className="w-full py-2 flex items-center justify-center rounded-md bg-orange text-white" onClick={closeCartModal}>
                    Checkout
                </button>
            </div>
        )
    }else {
        return (
            <div
                className="
                    w-[120px] min-h-11 bg-white shadow-lg absolute z-40 rounded-md p-3
                "
            >
                <div
                    className="
                        w-full flex justify-between items-center
                    "
                >
                    <div
                        className="
                            w-6 h-6
                        "
                    >
                        <img src={cart.images[0]} alt="image" className="w-full h-full object-contain" />
                    </div>
                    <div
                        className="flex flex-col gap-y-2 justify-center"
                    >
                        <p className="text-lGrayishBlue">{cart.title}</p>
                        <span className="flex gap-x-1 items-center justify-center">
                            <p className="text-lGrayishBlue">{`$${cart.price}.00 * ${cart.counter}` }</p>
                            <p className="text-vDarkBlue">{ `$${Number(cart.price)* cart.counter}.00`}</p>
                        </span>
                    </div>
                    <span onClick={() => removeFromCart(cart.title)}>
                        <DeleteIcon />
                    </span>
                </div>
            </div>
        )
    }
    
}

export default CartModal