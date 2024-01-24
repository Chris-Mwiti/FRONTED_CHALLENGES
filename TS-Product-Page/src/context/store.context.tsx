import { createContext, useReducer } from "react";

interface IGlobalActions {
    openDrawer: string;
    closeDrawer: string;
    addToCart: string;
    removeFromCart: string;
    openGalleryModal: string;
    closeGalleryModal: string;
    openCartModal: string;
    closeCartModal:string
}

export interface IProductBio {
    images:string[],
    thumbnailImages:string[],
    discount:number;
    price:string,
    info:string,
    title:string,
    counter?:number
}



interface IProductState {
    drawerStatus:boolean;
    cart:IProductBio[] | IProductBio;
    galleryModal:boolean;
    cartModal:boolean;
}

interface IProductAction {
    openDrawer: () => void;
    closeDrawer: () => void;
    addToCart: (product:IProductBio) => void;
    removeFromCart: (title:string) => void;
    openGalleryModal: () => void;
    closeGalleryModal: () =>  void;
    openCartModal: () => void;
    closeCartModal: () => void;
}

type TReducerAction = {
    type: keyof IGlobalActions;
    [key:string]: any
}

type TProduct = IProductAction & IProductState

const GLOBAL_ACTIONS = {
    openDrawer: "openDrawer",
    closeDrawer: "closeDrawer",
    addToCart: "addToCart",
    removeFromCart: "removeFromCart",
}


const productInitArg:IProductState = {
    drawerStatus: false,
    cart:[],
    galleryModal:false,
    cartModal:false
}
const ProductStoreCtx = createContext<TProduct>({
    drawerStatus: false,
    cart:[],
    galleryModal:false,
    cartModal:false,
    openDrawer:() => {
    },
    closeDrawer() {
        
    },
    addToCart(product) {
        console.log(product)
    },
    removeFromCart(title) {
       console.log(title) 
    },
    openGalleryModal() {
        
    },
    closeGalleryModal() {
        
    },
    openCartModal() {
        
    },
    closeCartModal() {
        
    },
})

const productReducer = (state:IProductState,action:TReducerAction) => {
    switch(action.type){
        case "openDrawer": 
            return {
                ...state,
                drawerStatus: true
            }
        case "closeDrawer":{
            return {
                ...state,
                drawerStatus: false
            }
        }

        case "addToCart" : {
            if(Array.isArray(state.cart)){
                const isItemInCart = state.cart.find(item => item.title === action.product.title);
                if(isItemInCart){
                    return {
                        ...state
                    }
                }else {
                    return {
                        ...state,
                        cart:[...state.cart,action.product]
                    }
                }

            }
        }
        break

        case "removeFromCart":{
            if(Array.isArray(state.cart)){
                const isItemInCart = state.cart.find(item => item.title === action.title);
                if(isItemInCart){
                    const filteredCart = state.cart.filter(item => item.title !== action.title);
                    return {
                        ...state,
                        cart: filteredCart
                    }
                }
            }else {
                return {
                    ...state,
                    cart:[]
                }
            }
        }
        break

        case "openGalleryModal":{
            return {
                ...state,
                galleryModal: true
            }
        }
        case "closeGalleryModal":{
            return {
                ...state,
                galleryModal: false
            }
        }
        case "openCartModal":{
            return {
                ...state,
                cartModal: true
            }
        }
        case "closeCartModal":{
            return {
                ...state,
                cartModal: false
            }
        }

        default:
            return {
                ...state
            }
        
    }
}



const ProductStoreContext = ({children} : {children: React.ReactNode}) => {
    const [state,dispatch] = useReducer(productReducer,productInitArg);

    const ProductStoreValues:TProduct = {
        drawerStatus: state.drawerStatus,
        cart: state.cart,
        galleryModal:state.galleryModal,
        cartModal: state.cartModal,
        openDrawer: () => {
            dispatch({type:"openDrawer"})
            console.log(state.drawerStatus)
        },
        closeDrawer: () => dispatch({type: "closeDrawer"}),
        addToCart(product) {
            dispatch({type:"addToCart", product:product})
        },
        removeFromCart(title) {
            dispatch({type: "removeFromCart", title})
        },
        openCartModal() {
            dispatch({type: "openCartModal"})
        },
        closeCartModal() {
            dispatch({type: "closeCartModal"})
        },
        openGalleryModal() {
            dispatch({type: "openGalleryModal"})
        },
        closeGalleryModal() {
            dispatch({type: "closeGalleryModal"})
        },
    }
    return (
        <ProductStoreCtx.Provider value={ProductStoreValues}>
            {children}
        </ProductStoreCtx.Provider>
    )
}


export {
    ProductStoreContext,
    GLOBAL_ACTIONS,
    ProductStoreCtx,

}