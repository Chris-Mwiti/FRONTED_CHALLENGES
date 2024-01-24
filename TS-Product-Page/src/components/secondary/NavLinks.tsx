import { useState } from "react";
import CloseIcon from "../../assets/Close";
import useWindowSize from "../../hooks/useWindowSize";

interface INavLinksProps {
    display:boolean;
}

const NavLinks = (props:INavLinksProps) => {
    const [isOpen,setIsOpen] = useState(false);
    const openDrawer = () => setIsOpen(prev => !prev);
    const {width} = useWindowSize();
  return (
    <div
        className={`
            ${props.display ? "flex" : "hidden"}
            h-screen items-start justify-center  z-20 bg-white p-2
            sm:w-max sm:h-max sm:bg-inherit sm:p-0 sm:z-0 border border-red
             ${isOpen ? "w-screen" : "hidden"}
            ${width > 375 ? "relative z-0" : "absolute"}
        `}
    >
        <div
            className="
                w-full h-full flex flex-col gap-y-4
            "
        >
            <div
                className="w-3 h-3 sm:hidden"
                onClick={openDrawer}
            >
                <CloseIcon />
            </div>
            <ul
                className="
                    w-full
                    flex flex-col gap-y-2
                    sm:flex-row sm:gap-x-2 sm:gap-y-0
                "
            >
                <li
                    className="
                        text-vDarkBlue text-lg font-bold cursor-pointer
                        sm:text-lGrayishBlue sm:text-base sm:font-normal
                    "
                > 
                    Collections
                </li>
                <li
                    className="
                        text-vDarkBlue text-lg font-bold cursor-pointer
                        sm:text-lGrayishBlue sm:text-base sm:font-normal
                    "
                >
                    Men
                </li>
                <li
                    className="
                        text-vDarkBlue text-lg font-bold cursor-pointer
                        sm:text-lGrayishBlue sm:text-base sm:font-normal
                    "
                >
                    Women
                </li>
                <li
                    className="
                        text-vDarkBlue text-lg font-bold cursor-pointer
                        sm:text-lGrayishBlue sm:text-base sm:font-normal
                    "
                >
                    About
                </li>
                <li
                    className="
                        text-vDarkBlue text-lg font-bold cursor-pointer
                        sm:text-lGrayishBlue sm:text-base sm:font-normal
                    "
                >
                    Contact
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavLinks