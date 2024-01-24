import { createContext } from "react";
import { IProductBio } from "./store.context";

const ProductInfoContext = createContext<IProductBio>({
    images:[],
    thumbnailImages:[],
    title:"",
    price:"",
    discount: 0,
    info:""
});

const ProductInfoContextProvider = ({children} : {children : any}) => {
    const infoValues:IProductBio = {
        images:["./images/image-product-1.jpg", "./images/image-product-2.jpg", "./images/image-product-3.jpg", "./images/image-product-4.jpg"],
        thumbnailImages:["./images/image-product-1-thumbnail.jpg", "./images/image-product-2-thumbnail.jpg", "./images/image-product-3-thumbnail.jpg", "./images/image-product-4-thumbnail.jpg"],
        title: "Fall Limited Edition Sneakers",
        price: "125",
        discount: 50,
        info:"These low-profile sneakers are your perfect casual wear companion. Featuring a duarable rubber outer sole, they'll withstand everything the weather can offer"
    }

    return (
        <ProductInfoContext.Provider value={infoValues}>
            {children}
        </ProductInfoContext.Provider>
    )
}

export {
    ProductInfoContext,
    ProductInfoContextProvider
}