"use client";

import { createContext, useContext } from "react";
import { useCheckout } from "@/hooks/useCheckout";

type CheckoutContextValue = ReturnType<typeof useCheckout>;

const CheckoutContext = createContext<CheckoutContextValue | null>(null);

export default function CheckoutProvider({ children }: { children: React.ReactNode }) {
    const checkout = useCheckout();

    return (
        <CheckoutContext.Provider value={checkout}>
            {children}
        </CheckoutContext.Provider>
    );
}

export function useCheckoutContext() {
    const checkout = useContext(CheckoutContext);

    if (!checkout) {
        throw new Error("useCheckoutContext must be used within CheckoutProvider");
    }

    return checkout;
}
