import Navbar from "./Navbar"
import Product from "./Product"

const Main = () => {
  return (
    <div
        className="
            w-full h-max bg-white shadow-md 
            sm:max-w-[1200px] sm:min-h-[550px] overflow-hidden
        "
    >
      <Navbar />
      <Product />
    </div>
  )
}

export default Main