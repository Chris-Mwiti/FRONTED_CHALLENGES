import FormDetailWrapper from "../FormDetailWrapper";
import { useContext } from 'react';
import InputField from "../UI/inpuField";
import { StoreCtx  } from "../../context/store.context";

const PersonalInfoForm = () => {
    const {setName,setEmail,setPhone,name,email,phone } = useContext(StoreCtx);

    return ( 
        <FormDetailWrapper
            title="Personal Info"
            subtitle= "Please provide your name, email address and phone number"
        >
            <div
                className="
                    w-full h-max flex flex-col gap-5
                "
            >
                <InputField 
                    id="name" 
                    stateValue={name} 
                    setStateValue={setName} 
                    placeholder="e.g. Stephen King" 
                    label="Name" 
                    type="text" 
                    required={true} 
                />
                <InputField
                    id="email"
                    stateValue={email}
                    setStateValue={setEmail}
                    placeholder="e.g. stephenking@lorem.com"
                    label="Email Address"
                    type="email"
                    required={true}
                />
                <InputField 
                    id="phone"
                    stateValue={phone}
                    setStateValue={setPhone}
                    placeholder="e.g +1 234 567 890"
                    label="Phone Number"
                    type="text"
                    required={true}
                />

            </div>
        </FormDetailWrapper>
    );
}
 
export default PersonalInfoForm;