import CartIcon from "../../assets/CartIcon"
import DesktopNavLinks from "../secondary/DesktopNavLinks";
import { useContext } from "react";
import HamburgureIcon from "../../assets/HamburgureIcon";
import { ProductStoreCtx } from "../../context/store.context";
import Logo from "../../assets/Logo";

const Navbar = () => {
  const {openDrawer,openCartModal,cart} = useContext(ProductStoreCtx);
  const items = () => {
    if(Array.isArray(cart)){
      return cart.length;
    } return 1
  }
  return (
    <div
      className="
        w-full min-h-6 border flex items-center justify-between py-3 px-8
        divide-y
      "
    >

      <div
        className="
          flex items-center space-x-6 relative
        "
      >
        <div
          className="
            flex items-center
            border border-yellow-200 w-7 h-7
            sm:hidden
          "
          onClick={() => openDrawer()}
        >
          <HamburgureIcon />
        </div>
        <p
          className="text-vDarkBlue font-bold text-[24px]"
        >
          <Logo />
        </p>
        {<DesktopNavLinks />}
      </div>
      <div
        className="
          flex gap-x-8 items-center
        "
      >
        <div className="relative w-max h-max cursor-pointer" onClick={openCartModal}>
          <span className="w-5 h-3 bg-orange rounded-full text-white text-[12px] flex items-center justify-center absolute z-10 -right-2 -top-1">
            {
              items()
            }
          </span>
          <CartIcon />
        </div>
        <div className="w-7 h-7 rounded-full hover:ring-2 hover:ring-orange cursor-pointer transition ease-in">
          <img src='/images/image-avatar.png' alt="avatar" />
        </div>
      </div>
    </div>
  )
}

export default Navbar