import Main from "./components/primary/Main"
import CartModal from "./components/secondary/CartModal"
import MobileNavLinks from "./components/secondary/MobileNavLinks"
import ProductModal from "./components/secondary/ProductModal"
import { ProductStoreContext } from "./context/store.context"


function App() {
  return (
   <ProductStoreContext>
      <div
        className="
          w-screen h-screen relative flex
          sm:items-center sm:justify-center
        "
      >
        <Main />
        <MobileNavLinks />
        <ProductModal />
        <CartModal />
      </div>
   </ProductStoreContext>
  )
}

export default App
