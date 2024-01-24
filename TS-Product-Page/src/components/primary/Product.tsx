import { ProductInfoContextProvider } from "../../context/product.context"
import ProductInfo from "../secondary/ProductInfo"
import ProductGallery from "./ProductGallery"

const Product = () => {
  return (
    <div
        className="
            w-full h-max flex flex-col space-y-6
            sm:flex-row sm:space-x-7 sm:px-14 sm:py-3
        "
    >
        <ProductInfoContextProvider>
            <ProductGallery />
            <ProductInfo />
        </ProductInfoContextProvider>
    </div>
  )
}

export default Product