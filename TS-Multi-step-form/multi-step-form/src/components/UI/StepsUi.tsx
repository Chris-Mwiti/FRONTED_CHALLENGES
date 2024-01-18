import Steps from "./Steps";

const StepsUi = () => {
    return ( 
        <div
            className="
                absolute z-10 flex w-full h-full gap-5 justify-center mt-2
                sm:flex-col sm:w-max sm:h-max sm:items-center sm:m-0
                p-4
            "
        >
            <Steps step="1" metadata={{subtitle: "STEP 1", title: "YOUR INFO"}} />
            <Steps step="2" metadata={{subtitle: "STEP 2", title: "SELECT PLAN"}} />
            <Steps step="3" metadata={{subtitle: "STEP 3", title: "ADD-ONS"}} />
            <Steps step="4" metadata={{subtitle: "STEP 4", title: "SUMMARY"}} />
        </div>
     );
}
 
export default StepsUi;