import { X } from "lucide-react";
import CardTitle from "./CardTitle";
import OrderItems from "./OrderItems";
import products from "@/products";
import OrderItem from "./OrderItem";
import PromoCode from "./PromoCode";
import Calculations from "./Calculations";
import OrderTotal from "./OrderTotal";
import clsx from "clsx";

export default function StickyOrderDrawer({ isOpen, onClose }: {
    isOpen: boolean;
    onClose: () => void;
}) {
    return (
        <div className={clsx({
            'fixed inset-0 z-50 bg-white shadow-xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]': true,
            'translate-y-full': !isOpen,
        })}>
            <div className="max-w-150 mx-auto flex flex-col h-dvh">
                <header className="p-4 flex justify-between items-center">
                    <CardTitle>{'Resumen del Pedido'}</CardTitle>
                    <button type="button" onClick={onClose}>
                        <X />
                    </button>
                </header>
                <div className="p-4 space-y-8 flex-1 overflow-y-auto">
                    <OrderItems>
                        {products.map(product => (
                            <OrderItem key={product.id} product={product} />
                        ))}
                    </OrderItems>
                    <PromoCode />
                    <Calculations />
                    <OrderTotal />
                </div>
                <footer className="p-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="uppercase tracking-widest py-4 w-full rounded font-bold transition-all duration-300 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 cursor-pointer"
                    >
                        {'Volver al Checkout'}
                    </button>
                </footer>
            </div>
        </div>
    );
}