import { useContext, useState } from "react"
import { ProductInfoContext } from "../../context/product.context"
import { ProductStoreCtx } from "../../context/store.context";
import ShoppingIcon from "../../assets/ShoppingIcon";
import MinusIcon from "../../assets/MinusIcon";
import AddIcon from "../../assets/AddIcon";

const ProductInfo = () => {
  const {title,price,info,discount,thumbnailImages,images} = useContext(ProductInfoContext);
  const {addToCart} = useContext(ProductStoreCtx);

  const [counter,setCounter] = useState(0);
  const increaseCounter = () => setCounter(prev => prev + 1);
  const decreaseCounter = () => setCounter(prev => {
    if(prev == 0) return prev;
    return prev - 1;
  })

  const calculateOriginalPrice = () => {
    const standardPrice = Number(price);
    const discountedPrice = standardPrice * (100  / discount); 

    return  discountedPrice;
  }
  const product = {
    title,
    price,
    info,
    discount,
    thumbnailImages,
    images,
    counter
  }
  return (
    <div
      className="
        w-full p-3 flex flex-col space-y-3
        sm:max-w-md 
      "
    >
      <p
        className="
          text-orange font-bold
        "
      >
        SNEAKER COMPANY
      </p>
      <p
        className="
          text-vDarkBlue text-[28px] font-black
        "
      >
        {title}
      </p>
      <p
        className="
          text-dGrayishBlue font-medium
        "
      >
        {info}
      </p>
      <div
        className="
          w-full flex justify-between items-center
          sm:w-max sm:flex-col sm:justify-center sm:space-y-2 sm:items-start 
        "
      >
        <span
          className="
            flex gap-x-3 items-center
          "
        >
          <p
            className="
              text-vDarkBlue font-black text-[30px]
            "
          >
            {`$${price}.00`}
          </p>
          <div
            className="
              py-1 px-2 bg-paleOrange flex items-center rounded-md
            "
          >
            <p className="text-orange font-bold">
              {`${discount}%`}
            </p>
          </div>
        </span>
        <p
          className="
            text-grayishBlue line-through font-bold
          "
        >
          {`$${calculateOriginalPrice()}.00`}
        </p>
      </div>

      <div
        className="
          w-full items-center 
          flex gap-x-3 flex-col space-y-3 
          sm:flex-row sm:justify-center sm:items-center sm:space-y-0
        "
      >
        <div
          className="
            w-full sm:w-[160px] rounded-md 
            py-3 px-6 flex items-center justify-between
            bg-lGrayishBlue
          "
        >
          <button
            className="bg-inherit text-orange font-bold"
            onClick={decreaseCounter}
          >
            <MinusIcon />
          </button>
          <p className="text-vDarkBlue font-bold">{counter}</p>
          <button
            className="bg-inherit text-orange font-bold"
            onClick={increaseCounter}
          >
            <AddIcon />
          </button>
        </div>
        <button className="flex rounded-md sm:w-[250px] w-full items-center justify-center text-white py-3 gap-x-2 bg-orange shadow-md shadow-orange
          hover:opacity-80 transition-opacity ease-in delay-75 duration-100 cursor-pointer
        "  onClick={() => addToCart(product)}>
          <ShoppingIcon />
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  )
}

export default ProductInfo