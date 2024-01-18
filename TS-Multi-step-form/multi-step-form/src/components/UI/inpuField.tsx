//@Todo: Check on how one can pass generic types in props
//@Todo: Check on how form validation is done using zod

interface IInputField {
    id:string;
    stateValue: string;
    setStateValue: React.Dispatch<React.SetStateAction<string>>;
    placeholder: string;
    label:string;
    type: "text" | "email" | "password";
    required:boolean;
}

const InputField = (props: IInputField) => {
    return ( 
        <span
            className='
                flex flex-col gap-1 
                w-full
            '
        >
            <label 
                htmlFor={props.id}
                className='
                    text-base text-blue-950
                '
            >
                {props.label}
            </label>
            <input
                className='
                    w-full p-2 outline outline-1 outline-gray-400 
                    placeholder:text-base placeholder:text-gray-500 placeholder:font-bold
                    rounded-md
                '
                value={props.stateValue}
                onChange={(e) => props.setStateValue(e.target.value)}
                type={props.type}
                placeholder={props.placeholder}
                required={props.required}
                id={props.id}
            />
        </span>

     );
}
 
export default InputField;