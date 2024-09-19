import { useState } from "react";
import { TProducts } from "../store/store";
import CartButton from "./CartButton";

export default function ProductCard({product}: {product: TProducts}) {
    const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="flex flex-col justify-center space-y-8 p-2">
        <div className={`size-[250px] border rounded-md relative  cursor-pointer ${isSelected ? "ring-2 ring-amber-800" : ""}`} onClick={() => setIsSelected(prev => !prev)}>
            <img src={product.image.desktop} className="size-full object-cover rounded-md" />
            <CartButton productName={product.name} isSelected={isSelected}/>
        </div>

        <div className="space-y-0.5">
            <p className="text-gray-500 font-base">
                {product.category}
            </p>
              <p className="text-foreground text-lg font-medium">
                  {product.name}
            </p>
            <p className="text-lg text-orange-400 font-bold">${product.price.toFixed(2)}</p>
        </div>
    </div>
  )
}
