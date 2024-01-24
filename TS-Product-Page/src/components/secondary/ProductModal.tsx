import { useContext } from "react"
import CloseIcon from "../../assets/Close"
import { ProductStoreCtx } from "../../context/store.context"
import ProductGallery from "../primary/ProductGallery"
import { ProductInfoContextProvider } from "../../context/product.context"

const ProductModal = () => {
  const {closeGalleryModal,galleryModal} = useContext(ProductStoreCtx)
  return (
    <div
      className={`
      ${galleryModal ? "flex" : "hidden"}
        w-screen h-screen bg-black opacity-[0.99] flex-col space-y-2 items-center justify-center absolute z-30
      `}
    >
      <div
        className="w-max h-max relative"
      >
        <div className="absolute right-1 w-max h-max -top-5" onClick={closeGalleryModal}>
          <CloseIcon />
        </div>
          <ProductInfoContextProvider>
            <ProductGallery />
          </ProductInfoContextProvider>
      </div>
    </div>
  )
}

export default ProductModal