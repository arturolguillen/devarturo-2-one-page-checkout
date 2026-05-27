"use client";

import clsx from "clsx";
import { usdPriceFormatter } from "@/helpers";
import { ArrowRight, CheckCircle2, ChevronUp, Loader2 } from "lucide-react";
import { useCheckoutContext } from "@/components/CheckoutProvider";

export default function StickyOrderTotal() {
    const { isIdle, isLoading, isSuccess, handleCheckoutClick } = useCheckoutContext();

    return (
        <div className="max-w-150 mx-auto p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center cursor-pointer group">
                <div className="flex flex-col">
                    <span className="text-xl font-bold">{'Total'}</span>
                    <span className="text-xl font-bold text-zinc-900 tracking-tighter">{usdPriceFormatter.format(221.40)}</span>
                </div>
                <div className="flex items-center gap-1 text-zinc-500">
                    <span>{'Ver detalles'}</span>
                    <ChevronUp />
                </div>
            </div>
            <button
                type="button"
                onClick={handleCheckoutClick}
                disabled={!isIdle}
                aria-busy={isLoading}
                className={clsx(
                    "text-white text-sm uppercase tracking-widest py-4 w-full rounded font-bold transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden",
                    isIdle && "bg-indigo-600 hover:bg-indigo-700 cursor-pointer",
                    isLoading && "bg-indigo-600 scale-[0.98] pointer-events-none cursor-not-allowed",
                    isSuccess && "bg-green-500 pointer-events-none cursor-not-allowed"
                )}
            >
                {isIdle && (
                    <>
                        <span>{'Pagar ahora'}</span>
                        <ArrowRight size={18} />
                    </>
                )}
                {isLoading && (<Loader2 size={18} className="animate-spin" />)}
                {isSuccess && (
                    <>
                        <span>{'Pago exitoso'}</span>
                        <CheckCircle2 size={18} />
                    </>
                )}
                <span className="sr-only" aria-live="polite">
                    {isLoading ? "Procesando pago" : isSuccess ? "Pago exitoso" : "Listo para pagar"}
                </span>
            </button>
        </div>
    );
}