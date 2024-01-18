interface IProps {
    children: React.ReactNode
}

const Container = (props:IProps) => {
    return ( 
        <div
            className="
                w-screen h-screen bg-pastelBlue  overflow-hidden
                flex justify-center 
                sm:flex-row sm:items-center sm:justify-center
            "
        >
            {props.children}
        </div>
     );
}
 
export default Container;