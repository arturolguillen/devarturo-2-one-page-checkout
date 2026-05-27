"use client";

import clsx from "clsx";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useCheckoutContext } from "@/components/CheckoutProvider";

export default function PayButton() {
    const { isIdle, isLoading, isSuccess, handleCheckoutClick } = useCheckoutContext();

    return (
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
    );
}