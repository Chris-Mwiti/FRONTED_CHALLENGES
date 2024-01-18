import { ReactNode, createContext,useReducer } from 'react'
import  { IGlobalActions } from '../global/actions';

export type TBillingPlan = "monthly" | "yearly";
export type TBillingPlanOption = "Arcade" | "Advanced" | "Pro";
type TAddOnsOptions = "Online Service" | "Large Storage" | "Customizable Profile";
export interface IBillingPlan {
    price:number;
    option:string;
}

export interface IAddOnsPlan {
    id: string;
    subtitle:string;
    option: string;
    price: number
    checked:boolean;
}

interface IStoreContext {

    //Steps Counter
    counter:number;
    increaseCounter: () => void;
    decreaseCounter: () => void;
    redirectCounter: (step:number) => void;

    //Form
    name:string;
    setName: (name:string) => void
    email: string;
    setEmail: (email: string) => void
    phone:string;
    setPhone: (phone:string) => void
    
    //Plan
    billingPlanType: TBillingPlan
    setTypeOfPlan: (plan: TBillingPlan) => void
    billingPlan:IBillingPlan[]
    setBillingPlan: (billingPlan: IBillingPlan) => void

    //Add Ons
    addOnsOption: IAddOnsPlan[];
    setAddOnsOption: (addOnsOption: IAddOnsPlan) => void

}

type TStoreStates = Omit<IStoreContext, "setName" | "setEmail" | "setPhone" | "setAddOnsOption" | "setBillingPlan" | "setTypeOfPlan" | "increaseCounter" | "decreaseCounter" | "redirectCounter">
// type TReducerPayloads = Omit<TStoreStates, "addOnsOption"> & { addOnsPlan: IAddOnsPlan}

type TReducerActionsPayload = {
    type: keyof IGlobalActions,
    [key:string]: any
} 


export const StoreCtx = createContext<IStoreContext>({
    counter: 0,
    increaseCounter: () => {},
    decreaseCounter: () => {},
    redirectCounter: (step:number) => {console.log(step)},
    name: "",
    setName: (name:string) => {console.log(name)},
    email: "",
    setEmail: (email: string) => {console.log(email)},
    phone: "",
    setPhone: (phone: string) => {console.log(phone)},

    billingPlanType: "monthly",
    setTypeOfPlan: (plan: TBillingPlan) => {console.log(plan)},
    billingPlan : [],
    setBillingPlan: (billingPlan: IBillingPlan) => {console.log(billingPlan)},

    addOnsOption : [],
    setAddOnsOption: (addsOnOption: IAddOnsPlan) => {console.log(addsOnOption)}
})

const StoreInitState: TStoreStates = {
   counter: 0,
   name: "",
   email: "",
   phone: "",
   billingPlan: [],
   billingPlanType: "monthly",
   addOnsOption: []
}


const StoreReducer = (state: TStoreStates,action: TReducerActionsPayload) => {
    switch(action.type){
        case 'SET_NAME' :{
            return {
                ...state,
                name: action.name!
            }
        }

        case 'SET_EMAIL': {
            return {
                ...state,
                email: action.email!
            }
        }

        case 'SET_PHONE': {
            return {
                ...state,
                phone: action.phone!
            }
        }

        case 'SET_PLAN': {
            return {
                ...state,
                billingPlanType: action.billingPlanType!
            }
        }

        case 'SET_BILLING': {
            const isBillingPlanChecked = state.billingPlan.find(value => value.option == action.billingPlan.option);
            if(isBillingPlanChecked){
                console.log("true");
                const newBillingPlan = state.billingPlan.filter(value => value.option != action.billingPlan.option);
                return {
                    ...state,
                    billingPlan: newBillingPlan
                }
            }
            return {
                ...state,
                billingPlan: [...state.billingPlan,action.billingPlan]
            }
        }

        case 'SET_ADD_ONS': {
            const isAddOnChecked = state.addOnsOption.find(option => option.id === action.addOnsPlan!.id)
            if(isAddOnChecked){
                const filteredAddOns = state.addOnsOption.filter(option => option.id !== action.addOnsPlan!.id);
                return {
                    ...state,
                    addOnsOption: filteredAddOns
                }
            }
            return {
                ...state,
                addOnsOption: [...state.addOnsOption, action.addOnsPlan]
            }
        }

        case 'INCREASE_COUNTER': {
            const counterCurrVal = state.counter;
            if(counterCurrVal === 4) return {
                ...state
            };
            return {
                ...state,
                counter: state.counter + 1
            }
        }

        case 'DECREASE_COUNTER': {
            if(state.counter === 0) return {
                ...state
            }
            return{
                ...state,
                counter: state.counter - 1
            }
        }

        case 'REDIRECT_COUNTER': {
            if(action.step > 3 || action.step < 0) return {...state}

            return {
                ...state,
                counter: action.step
            }
        }

    }
}

const StoreContextApi = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(StoreReducer, StoreInitState);

    const StoreCtxValues: IStoreContext = {
        counter: state.counter,
        name: state.name,
        email: state.email,
        phone: state.phone,
        billingPlan: state.billingPlan,
        billingPlanType: state.billingPlanType,
        addOnsOption: state.addOnsOption,

        setName: (name: string) => {
            dispatch({type: "SET_NAME", name: name  })
        },
        setEmail: (email: string) => {
            dispatch({type: "SET_EMAIL", email: email})
        },
        setAddOnsOption: (addOnsOption: IAddOnsPlan) => {
            dispatch({type: "SET_ADD_ONS", addOnsPlan: addOnsOption})
        },
        setBillingPlan: (billingPlan: IBillingPlan) => {
            dispatch({type: "SET_BILLING", billingPlan: billingPlan})
        },
        setPhone: (phone: string) => {
            dispatch({type: "SET_PHONE", phone: phone})
        },
        setTypeOfPlan:(plan: TBillingPlan) => {
            dispatch({type: "SET_PLAN", billingPlanType: plan})
        },
        increaseCounter: () => {
            dispatch({type: "INCREASE_COUNTER"})
        },
        decreaseCounter: () => {
            dispatch({type: "DECREASE_COUNTER"})
        },
        redirectCounter: (step:number) => {
            dispatch({type: "REDIRECT_COUNTER", step: step})
        }       
    }
    return ( 
        <StoreCtx.Provider value={StoreCtxValues}>
           {children} 
        </StoreCtx.Provider>
    );
}
 
export default StoreContextApi;