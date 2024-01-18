import { useContext } from "react";
import { StoreCtx, TBillingPlan } from "../../context/store.context";
import { Switch } from "../../../@/components/ui/switch";
import {Label} from '../../../@/components/ui/label';


const SwitchPlan = () => {
    const {billingPlanType, setTypeOfPlan} = useContext(StoreCtx);
 
    return ( 
        <div
            className="
                w-full p-3 flex items-center justify-around
                bg-magnolia rounded-md mt-4
            "
        >
            <button
                className={`text-base font-bold ${billingPlanType === "monthly" ? `text-marineBlue` : `text-coolGray`}`}
                onClick={() => setTypeOfPlan("monthly")}
                id="toogle-switch"
            >
                Monthly
            </button>
        
            <button
                className={`text-base font-bold ${billingPlanType === "yearly" ? `text-marineBlue` : `text-coolGray`}`}
                onClick={() => setTypeOfPlan("yearly")}
                id="toogle-switch"
            >
                Yearly
            </button>
        </div>
     );
}
 
export default SwitchPlan;