import { useContext, useState } from "react"
import { ProductInfoContext } from "../../context/product.context"
import { ProductStoreCtx } from "../../context/store.context";
import PreviousIcon from "../../assets/PreviousIcon";
import NextIcon from "../../assets/NextIcon";

const ProductGallery = () => {
    const {images,thumbnailImages} = useContext(ProductInfoContext);
    const {openGalleryModal} = useContext(ProductStoreCtx);
    const [currentImage,setCurrentImage] = useState(0);
  return (
    <div
        className="
            w-full 
            sm:max-w-md sm:space-y-3 sm:p-3
        "
    >
        <div
            className="
                flex flex-col sm:space-y-3 w-max p-1
            "
        >
            <div
                className="
                    w-full h-max flex flex-col rounded-md relative justify-center
                    sm:w-max
                "
            >
                <div
                    className="w-full flex items-center justify-between absolute z-10 sm:hidden"
                >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white" onClick={() => setCurrentImage(prev => {
                        if(prev === 0) return images.length - 1;
                        return prev - 1;
                    })}>
                        <PreviousIcon />
                    </div>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white" onClick={() => setCurrentImage(prev => {
                        if(prev === images.length - 1) return 0;
                        return prev + 1;
                    })}>
                        <NextIcon />
                    </div>
                </div>
                <img src={images[currentImage]} alt="productImage" width="100%" className="object-cover h-[370px] rounded-md" onClick={openGalleryModal}/>
            </div>
            <div
                className="
                    hidden items-center justify-center space-x-7 flex-1
                    sm:flex
                "
            >
                {thumbnailImages.map((thumbnail,index) => (
                    <div
                        className={
                            `
                                w-14 h-14 rounded-md
                                ${index == currentImage ? "opacity-60 ring ring-orange" : "opacity-100"}
                            `
                        }
                        key={thumbnail}
                        onClick={() => setCurrentImage(index)}
                    >
                        <img src={thumbnail} className="w-full h-full object-contain rounded-md" alt="thumbnail" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProductGallery