import FormDetailWrapper from "../FormDetailWrapper";
import OptionField from "../UI/Option";
import SwitchPlan from "../UI/Switch";
import AdvancedIcon from "../assets/AdvancedIcon";
import ArcadeIcon from "../assets/ArcadeIcon";
import ProIcon from "../assets/ProIcon";

const PlanForm = () => {
    return ( 
        <FormDetailWrapper
            title="Select your plan"
            subtitle="You have the option of monthly or yearly billing."
        >
          <ul
            className="
                w-full h-max
                flex flex-col
                sm:flex-row
                mt-4
            "
          >
            <OptionField 
                key={"Arcade"}
                metadata={{title:"Arcade", monthlyPrice:"9", yearlyPrice:"90"}} 
                icon={<ArcadeIcon />}
            />
            <OptionField 
                key={"Advanced"}
                metadata={{title: "Advanced", monthlyPrice:"12", yearlyPrice:"120"}}
                icon={<AdvancedIcon />}
            />
            <OptionField
                key={"Pro"}
                metadata={{title: "Pro", monthlyPrice:"15", yearlyPrice:"150"}}
                icon={<ProIcon />}
            />
          </ul>

          <SwitchPlan />
        </FormDetailWrapper>
    );
}
 
export default PlanForm;