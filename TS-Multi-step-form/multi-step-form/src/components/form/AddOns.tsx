import { useContext } from "react";
import FormDetailWrapper from "../FormDetailWrapper";
import { CheckBoxAddOn } from "../UI/CheckBoxAddOn";
import { StoreCtx } from "../../context/store.context";

const AddOns = () => {
    const {addOnsOption} = useContext(StoreCtx);
    const addOnsOptionLength = addOnsOption.length;
    return ( 
        <FormDetailWrapper
            title="Pick add-ons"
            subtitle="Add-ons help enhance your gaming experience"
        >
            <div
                className="
                    flex  flex-col gap-y-4 mt-6
                "
            >
                 
                <CheckBoxAddOn title="Online service" subtitle="Acces to multiplayer games" monthlyPrice="1" yearlyPrice="10" />
                <CheckBoxAddOn title="Large storage" subtitle="Extra 1TB of cloud save" monthlyPrice="2" yearlyPrice="20"  />
                <CheckBoxAddOn title="Customizable Profile" subtitle="Custom theme on your profile" monthlyPrice="2" yearlyPrice="20" />
            </div>
                     
        </FormDetailWrapper>
     );
}
 
export default AddOns;