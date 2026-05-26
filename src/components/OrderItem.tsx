import { usdPriceFormatter } from "@/helpers";
import type { Product } from "@/products";
import Image from "next/image";

export default function OrderItem({ product }: {
    product: Product;
}) {
    const { image, name, color, size, quantity, price } = product;

    return (
        <div className="flex gap-4">
            <div className="w-20 h-24 bg-zinc-100 rounded overflow-hidden shrink-0">
                <Image
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover grayscale"
                />
            </div>
            <div className="flex flex-col grow justify-between py-1">
                <div className="space-y-1">
                    <h3 className="text-base font-bold text-zinc-900">{name}</h3>
                    <p className="text-xs text-zinc-500">{`Color: ${color} | Talla: ${size}`}</p>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-xs text-zinc-500">{`Qty: ${quantity}`}</span>
                    <span className="text-base font-bold text-zinc-900">{usdPriceFormatter.format(price)}</span>
                </div>
            </div>
        </div>
    );
}