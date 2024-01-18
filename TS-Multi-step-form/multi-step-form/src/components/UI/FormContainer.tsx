import SvgWrapper from "../SvgWrapper";
import { useContext } from 'react';
import { StoreCtx } from "../../context/store.context";
import ComponentMapperArray from "../data/ComponentMapper";
import ActionBtns from "./ActionBtn";

const FormWrapper = () => {
    const { counter } = useContext(StoreCtx)
    return ( 
        <main
            className
            ="
                w-full h-max relative
                flex flex-col  bg-inherit
                items-center justify-center
                overflow-hidden
            "
        >
           <div
            className="
                w-full h-screen relative 
                flex flex-col items-center  bg-inherit rounded-md
                sm:flex-row sm:items-start sm:p-1 sm:bg-white sm:shadow-md sm:w-max sm:gap-8 sm:h-full
            "
           >
                <div
                    className="
                        w-full h-full flex flex-col items-center bg-inherit 
                        sm:flex-row sm:items-start sm:p-3 sm:bg-white sm:gap-8
                    "
                >
                    <SvgWrapper />
                    <div
                        className="
                            max-w-[900px] h-max  px-2 py-3 bg-white shadow-md rounded-md mx-3 
                            absolute z-20 top-[80px] flex flex-col
                            sm:shadow-none sm:min-w-[500px] sm:h-full sm:relative sm:top-0 sm:z-0 sm:mx-0
                        "
                    >
                        {ComponentMapperArray[counter].element}

                       
                    </div>
                </div>

                <div
                    className="
                        w-full h-max  absolute right-0 bottom-0 bg-white px-2
                        sm:w-[550px] sm:py-5 sm:px-6
                    "
                >
                    <ActionBtns />
                </div>

           </div>
        </main>
    );
}
 
export default FormWrapper;