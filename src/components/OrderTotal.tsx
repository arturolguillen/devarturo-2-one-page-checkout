"use client";

import clsx from "clsx";
import { usdPriceFormatter } from "@/helpers";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type CheckoutStatus = "idle" | "loading" | "success";

export default function OrderTotal() {
    const [status, setStatus] = useState<CheckoutStatus>("idle");
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const isIdle = status === "idle";
    const isLoading = status === "loading";
    const isSuccess = status === "success";

    const handleCheckoutClick = () => {
        if (!isIdle) {
            return;
        }

        setStatus("loading");
        timeoutRef.current = setTimeout(() => {
            setStatus("success");
            timeoutRef.current = null;
        }, 2000);
    };

    return (
        <>
            <div className="flex justify-between items-end border-t border-zinc-900 pt-4">
                <span className="text-xl font-bold">{'Total'}</span>
                <span className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tighter">{usdPriceFormatter.format(221.40)}</span>
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
        </>
    );
}