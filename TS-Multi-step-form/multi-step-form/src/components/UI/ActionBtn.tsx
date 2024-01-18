import { useContext } from "react";
import { StoreCtx } from "../../context/store.context";

const ActionBtns = () => {
    const { counter, decreaseCounter, increaseCounter } = useContext(StoreCtx);

    return ( 
        <div
            className="
                w-full flex justify-between items-center p-2 
                bottom-0 mt-3 mb-2 
                sm:mt-10 
            "
        >
            <button
                className={
                    `
                     ${counter === 0 ? "invisible" : "visible"}
                     p-3 flex items-center justify-center text-coolGray rounded-md hover:bg-magnolia
                    `
                }
                onClick={decreaseCounter}
            >
                Go Back
            </button>

            <button
                className={
                    `
                        ${counter === 4 ? "invisible" : "visible"}
                        ${counter === 3 ? "bg-purplishBlue hover:bg-opacity-50" : "bg-marineBlue"}
                        flex py-2 px-6 items-center justify-center text-lightGray rounded-md
                    `
                }
                onClick={increaseCounter}
            >
                {counter === 3 ? "Confirm" : "Next Step"}
            </button>
        </div>
    );
}
 
export default ActionBtns;