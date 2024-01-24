import { useContext } from "react";
import CloseIcon from "../../assets/Close";
import { ProductStoreCtx } from "../../context/store.context";

const MobileNavLinks = () => {
    const {drawerStatus,closeDrawer} = useContext(ProductStoreCtx)
  return (
    <div
        className={`
            ${drawerStatus ? "translate-x-1" : "-translate-x-full" }
            border-3 border-purple-600 w-screen
            h-screen bg-white
            absolute z-10 p-3
            transition ease-in delay-75 duration-100
            sm:hidden
        `}
    >
       <div
            className="
                w-full h-full flex flex-col gap-y-4
            "
        >
            <div
                className="w-3 h-3 sm:hidden"
                onClick={closeDrawer}
            >
                <CloseIcon />
            </div>
            <ul
                className="
                    w-full
                    flex flex-col gap-y-2
                "
            >
                <li
                    className="
                        text-vDarkBlue text-lg font-bold cursor-pointer
                    "
                > 
                    Collections
                </li>
                <li
                    className="
                        text-vDarkBlue text-lg font-bold cursor-pointer
                    "
                >
                    Men
                </li>
                <li
                    className="
                        text-vDarkBlue text-lg font-bold cursor-pointer
                    "
                >
                    Women
                </li>
                <li
                    className="
                        text-vDarkBlue text-lg font-bold cursor-pointer
                    "
                >
                    About
                </li>
                <li
                    className="
                        text-vDarkBlue text-lg font-bold cursor-pointer
                    "
                >
                    Contact
                </li>
            </ul>
        </div> 
    </div>
  )
}

export default MobileNavLinks