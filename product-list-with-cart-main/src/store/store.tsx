import React, { createContext, useReducer } from "react";
import generateUniqueId from "../utils/idGenerator";
export type TStoreContext = {
    products: TProducts[],
    orders: TOrders[],
    isModalOpen: boolean
   productActions: {
    addProducts: (products: TProducts[]) => void,
    getProduct: (productName: string) => TProducts | undefined
    removeAllProducts: () => void 
  },
  orderActions: {
    createOrder: (orderItem: TOrders) => void,
    listOrders: () => TOrders[] | undefined,
    getOrder: (productName: string) => TOrders | undefined,
   updateOrder: (orderId: string, quantity: number) => void,
  deleteOrder: (productName:string) => void,
  calculateTotal: () => number;
  },
  modalActions: {
    openModal: () => void;
    closeModal: () => void;
  }
 
}

export type TProducts = {
  productId?: string
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
};

export type TOrders = {
  orderId?: string;
  product: TProducts;
  quantity: number;
};

export type TModalState = {
  isOpen: boolean;
}

type TAction =
  | { type: "createProducts"; fetchedProducts: TProducts[] } |
   { type: "getProduct", productName: string}
  | { type: "createOrders"; createdOrder: TOrders }
  | { type: "updateOrder"; updateOrderId: string; updateQuantity: number }
  | { type: "deletOrder"; productName: string } | { type: "removeAllOrders"} | {type: "getOrder", productName: string} | {type: "openModal"} | {type: "closeModal"}

type TStoreValues = { orders: TOrders[]; products: TProducts[], isModalOpen: boolean };

export const ProductContext = createContext<TStoreContext>({
  products: [] as TProducts[],
  orders: [] as TOrders[],
  isModalOpen: false,
  productActions: {
    addProducts: (products: TProducts[]) => { console.log(products)},
    getProduct: (productName: string) => {
      console.log(productName)
       return {
        price: 0,
        image: {
            thumbnail: "",
            desktop: "", 
            mobile: "",
            tablet: ""
        },
        name: "",
        category: ""
       }
    },
    removeAllProducts: () => {}, 
  },
  orderActions: {
    createOrder: (orderItem: TOrders) => {
      console.log(orderItem)
    },
    listOrders: () => {return []},
    getOrder: (productName: string) => {
      console.log(productName)
        return {
            orderId: "",
            product: {
                name: "", 
                price: 0, 
                image: {
                    tablet: "",
                    thumbnail: "", 
                    desktop: "",
                    mobile: ""
                }, 
                category: ""
            }, 
            quantity: 0
        }
    },
   updateOrder: (orderId: string, quantity: number) => {
    console.log(orderId, quantity)
   },
  deleteOrder: (productName:string) => {
    console.log(productName)
  },
  calculateTotal: () => 0
  },
  modalActions: {
    openModal() {
      
    },
    closeModal() {
      
    },
  }
});

function storeReducer(
  state: TStoreValues,
  action: TAction
): TStoreValues {
  switch (action.type) {
    case "createProducts":
      return {
        ...state,
        products: [...state.products, ...action.fetchedProducts],
      };
    case "createOrders":
      return {
        ...state,
        orders: [...state.orders, {
            ...action.createdOrder,
            orderId: generateUniqueId(),
        } ],
      };
    case "updateOrder":
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.orderId === action.updateOrderId
            ? { ...order, quantity: action.updateQuantity }
            : order
        ),
      };
    case "deletOrder":
      return {
        ...state,
        orders: state.orders.filter(
          (order) => order.product.name !== action.productName
        ),
      };
    case "removeAllOrders": 
      return {
        ...state,
        orders: []
      }
    case "openModal": 
      return {
        ...state,
        isModalOpen: true
      }
    case "closeModal":
      return {
        ...state,
        isModalOpen: false
      }

    default:
      return state;
  }
}

function StoreContext({ children }: { children: React.ReactElement }) {
  const initState: TStoreValues = {
    orders: [],
    products: [],
    isModalOpen: false
  };

  const [state, dispatch] = useReducer(storeReducer, initState);

  const values: TStoreContext = {
      products: state.products,
      orders:state.orders,
      isModalOpen: state.isModalOpen,
      productActions: {
          addProducts: (products: TProducts[]) => {
            return dispatch({ type: "createProducts", fetchedProducts: products})
           },
          getProduct: (productName: string) => {
            const foundProduct = state.products.find((product) => product.name === productName)
            return foundProduct
           },
          removeAllProducts: () => dispatch({ type: "removeAllOrders"})
      },
      orderActions: {
          createOrder: (orderItem: TOrders) => {
             console.log(state.orders) 
            return dispatch({ type: "createOrders", createdOrder: orderItem}) 
            },
          listOrders: () => { return state.orders },
          getOrder: (productName: string) => { 
            const foundOrder = state.orders.find((order) => order.product.name === productName) 
            return foundOrder
           },
          deleteOrder: ( productName: string) => { return dispatch({type: "deletOrder", productName: productName})},
          updateOrder: (orderId: string, quantity: number) => { return dispatch({ type: "updateOrder", updateOrderId: orderId, updateQuantity: quantity}) },
          calculateTotal: () => {
            const total = state.orders.reduce((accum, val) => {
              accum += val.quantity * val.product.price;
             return accum
            }, 0)
            return parseFloat(total.toFixed(2))
          }
      },
      modalActions: {
        openModal: () => dispatch({type: "openModal"}), 
        closeModal: () => dispatch({type: "closeModal"})
      }

  } 
   return (
    <ProductContext.Provider value={values}>
      {children}
    </ProductContext.Provider>
  );
}

export default StoreContext;
