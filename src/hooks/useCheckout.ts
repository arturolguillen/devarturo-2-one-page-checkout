import { useEffect, useRef, useState } from "react";

export type CheckoutStatus = "idle" | "loading" | "success";

export function useCheckout() {
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

    return {
        status,
        isIdle,
        isLoading,
        isSuccess,
        handleCheckoutClick,
    };
}
