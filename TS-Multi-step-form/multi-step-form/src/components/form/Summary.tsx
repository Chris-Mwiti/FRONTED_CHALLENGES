import { useContext } from "react"
import FormDetailWrapper from "../FormDetailWrapper"
import { IAddOnsPlan, IBillingPlan, StoreCtx } from "../../context/store.context"

export const Summary = () => {
    const {billingPlan,addOnsOption,billingPlanType,redirectCounter} = useContext(StoreCtx);
    const isBillingMonthly = () => billingPlanType == "monthly";
    const handleBillingCurrency = (billingPlan:IBillingPlan) => {
        if(isBillingMonthly()){
            return `$${billingPlan.price}/mo`;
        }
        return `$${billingPlan.price}/yr`;
    }
    const handleAddOnsBillingChange = (option:IAddOnsPlan) => {
        if(isBillingMonthly()){
            return `+$${option.price}/mo`;
        }
        return `+$${option.price}/yr`;
    }

    const calculateTotalBilling = () => {

        const addOnsBilling = addOnsOption.reduce((total,curr) => total + curr.price, 0);
        const billingPlanTotal = billingPlan.reduce((total,curr) => total + curr.price, 0);
        const total = addOnsBilling + billingPlanTotal;

        if(isBillingMonthly()) return `+$${(total)}/mo`;

        return `+$${total}/yr`;
    }
    
  return (
    <FormDetailWrapper title="Finishing up" subtitle="Double-check everything looks OK before confirming">
       <div
            className="
                w-full h-max flex flex-col gap-y-3 items-center
            "
       >
            <div
                className="
                    w-full h-max bg-magnolia flex flex-col gap-y-2 p-3 rounded-md
                "
            >
                {billingPlan.map(plan => (
                    <div
                        className="
                            w-full flex justify-between 
                        "
                    >
                        <span
                            className="
                                flex flex-col gap-y-0.5
                            "
                        >
                            <p
                                className="
                                    text-marineBlue font-bold
                                "
                            >
                                {plan.option}{`${isBillingMonthly() ? "(Monthly)" : "(Yearly)"}`}
                            </p>
                            <p
                                className="
                                    text-coolGray underline cursor-pointer
                                "
                                    onClick={() => redirectCounter(2)}
                                >
                                    Change
                                </p>
                        </span>
                        <p
                            className="
                                text-marineBlue font-bold
                            "
                        >
                            {handleBillingCurrency(plan)}
                        </p>
                    </div>
                ))}

                <div
                    className="
                        w-full bg-inherit flex flex-col gap-y-3 
                    "
                >
                    {addOnsOption.map(option => (
                        <div
                            className="
                                w-full flex justify-between
                            "
                        >
                            <p
                                className="
                                    text-coolGray
                                "
                            >
                                {option.id}
                            </p>
                            <p
                                className="
                                    text-marineBlue 
                                "
                            >
                                {handleAddOnsBillingChange(option)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <span
                className="
                    w-full flex justify-between items-center
                "
            >
                <p className="text-coolGray mt-5">
                    {`Total${isBillingMonthly() ? "(per month)" : "(per year)"}`}
                </p>
                <p className="text-purplishBlue font-bold">
                    {calculateTotalBilling()}
                </p>
            </span>
       </div>
    </FormDetailWrapper>
  )
}
