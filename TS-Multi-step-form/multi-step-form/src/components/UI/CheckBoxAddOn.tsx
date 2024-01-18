import { useContext, useState } from "react"
import { StoreCtx } from "../../context/store.context";

interface IAddOnsCheckBox {
    title:string;
    subtitle:string;
    monthlyPrice:string;
    yearlyPrice:string;
    checked?:boolean;
}

export const CheckBoxAddOn = (props:IAddOnsCheckBox) => {
    const [isChecked,setIsChecked] = useState(props.checked);
    const {billingPlanType,setAddOnsOption,addOnsOption} = useContext(StoreCtx);
    const handleCheck = () => setIsChecked(!isChecked);
    console.log(addOnsOption);

    const isMonthlyBillingType = () => billingPlanType == "monthly";
  return (
    <div
        className="
            min-w-full h-max flex items-center justify-center gap-x-2
        "
    >
        <label
            htmlFor={props.title}
            className="
                border-2 border-lightGray  rounded-md px-2 py-2
                has-[:checked]:bg-magnolia has-[:checked]:border-purplishBlue has-[:checked]:border-2
                flex items-center justify-between min-w-[335px] h-max 
                sm:justify-between sm:w-full
                
            "
        >
            <div
                className="
                    flex gap-x-4 items-center
                "
            >
            <input
                type="checkbox"
                value={props.title} 
                id={props.title}
                className="
                    w-5 h-5 checked:accent-purplishBlue
                "
                onClick={
                    () => {
                        setAddOnsOption({
                            id:props.title,
                            subtitle:props.subtitle,
                            checked:isChecked,
                            price: billingPlanType === "monthly" ? Number(props.monthlyPrice) : Number(props.yearlyPrice),
                            option:props.title
                        })
                    }
                }
            />


            <div
                className="
                    flex flex-col
                "
            >
                <span
                    className="
                        text-lg text-marineBlue font-bold
                    "
                >
                    {props.title}
                </span>
                <span
                    className="
                        text-base text-coolGray font-semibold
                    "
                >
                    {props.subtitle}
                </span>
            </div>
            </div>

            <span
                className="
                    text-purplishBlue font-semibold
                "
            >
                {`+$${isMonthlyBillingType() ? props.monthlyPrice : props.yearlyPrice}/${isMonthlyBillingType() ? "mo" : "yr"}`}
            </span>
        </label>

    </div>
  )
}
