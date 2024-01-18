import { TBillingPlanOption } from "../../context/store.context";
import { useContext } from "react";
import { StoreCtx } from "../../context/store.context";

interface IOptionFieldProps {
    icon: React.ReactNode;
    metadata:{
        title:TBillingPlanOption;
        monthlyPrice:string;
        yearlyPrice:string;
    }
}

const OptionField = (props:IOptionFieldProps) => {
    const {billingPlanType, setBillingPlan,billingPlan} = useContext(StoreCtx);
    console.log(billingPlan);

    const handleSetBillingPlan = () => {
        if(billingPlanType === "monthly"){
            return setBillingPlan({
                price:Number(props.metadata.monthlyPrice),
                option:props.metadata.title
            })
        }
        setBillingPlan({
            price:Number(props.metadata.yearlyPrice),
            option:props.metadata.title
        })
    }
    return ( 
        <li
            className="
                    w-full flex items-center p-3 relative 
                    sm:max-w-[200px]
                "
            >
                <input
                    id={`plan-${props.metadata.title}`}
                    type="checkbox"
                    className="
                        w-[70px] h-max border peer absolute z-10 mx-auto invisible
                        left-1/2 -translate-x-1/2
                    "
                    onClick={handleSetBillingPlan}
                    
                />
                <label
                    htmlFor={`plan-${props.metadata.title}`}
                    className="
                        w-full min-h-[50px] border rounded-md p-3
                        flex  items-center gap-5
                        peer-checked:ring-1 peer-checked:ring-purplishBlue peer-checked:bg-gray-500/5
                        sm:flex-col sm:justify-around sm:items-start sm:min-h-[170px]
                    "
                >
                    {props.icon}
                    <div
                        className="
                            flex flex-col
                        "
                    >
                        <p
                            className="
                                text-lg text-blue-950 font-bold
                            "
                        >
                            {props.metadata.title}
                        </p>
                        <p
                            className="
                                text-base text-gray-400
                            "
                        >
                            {billingPlanType === "monthly" ? `$${props.metadata.monthlyPrice}/mo` : `$${props.metadata.yearlyPrice}/yr`}
                        </p>
                        <p
                            className="
                                text-sm text-blue-950 font-semibold
                            "
                        >
                            {billingPlanType === "yearly" ? "2 months free" : "" }
                        </p>
                    </div>
                </label>
            </li>
    );
}
 
export default OptionField;