import { StoreCtx } from "../../context/store.context";
import {useContext} from 'react'

interface IStepMetaData {
    subtitle:string;
    title:string;
}

interface ISteps{
    step:"1" | "2" | "3" | "4",
    metadata:IStepMetaData
}

const Steps = (props: ISteps) => {
    const { counter } = useContext(StoreCtx);

    return ( 
      <div
        className="
          sm:flex sm:gap-3 items-center w-max
          sm:w-[220px]
        "
      >
        <div
          className={
            `w-[40px] h-[40px] rounded-full outline outline-1 outline-white flex items-center justify-center font-bold
             ${counter + 1 === Number(props.step) ? "bg-sky-200 text-black outline-0": "bg-inherit text-white outline-1"}
            `
          }
        >
          {props.step}
        </div>
        <div
          className={
            `hidden flex-col
             sm:flex
            `
          }
        >
          <p
            className="text-base text-gray-400"
          >
            {props.metadata.subtitle}
          </p>
          <p
            className="text-lg text-white font-bold"
          >
            {props.metadata.title}
          </p>
        </div>
      </div>
    );
}
 
export default Steps;