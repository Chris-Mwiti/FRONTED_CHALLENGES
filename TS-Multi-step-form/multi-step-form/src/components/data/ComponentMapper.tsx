import ThankYouSvg from "../assets/ThankYou";
import AddOns from "../form/AddOns";
import { Congratulation } from "../form/Congratulation";
import PersonalInfoForm from "../form/PersonalInfo";
import PlanForm from "../form/Plan";
import { Summary } from "../form/Summary";

interface IComponentMapperArray {
    id:number;
    element: React.ReactNode
}

const ComponentMapperArray:IComponentMapperArray[] = [
    {
        id:0,
        element: <PersonalInfoForm />
    },
    {
        id:1,
        element: <PlanForm />
    },
    {
        id:2,
        element: <AddOns />
    },
    {
        id:3,
        element: <Summary />
    },
    {
        id: 4,
        element: <Congratulation />
    }
]

export default ComponentMapperArray