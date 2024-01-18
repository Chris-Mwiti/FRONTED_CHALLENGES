import { IProps } from "../interfaces/IComponents";
import ActionBtns from "./UI/ActionBtn";

interface IFormDetailProps extends IProps {
    title:string;
    subtitle:string;

}

const FormDetailWrapper = (props: IFormDetailProps) => {
    return ( 
        <div
            className="
                min-w-full h-full flex flex-col gap-2 
            "
        >   
           <span
            className="flex flex-col w-full gap-2"
           >
            <p
                className="
                    text-2xl text-blue-950 font-bold
                "
            >
                {props.title}
            </p>
            <p
                className="
                    text-base text-gray-300
                "
            >
                {props.subtitle}
            </p>
           </span>

            <div
                className="
                    w-full
                "
            >
                {props.children}
            </div>

        </div>
     );
}
 
export default FormDetailWrapper;