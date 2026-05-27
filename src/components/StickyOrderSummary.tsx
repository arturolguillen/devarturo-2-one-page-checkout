"use client";

import { useState, useEffect } from "react";
import PayButton from "./PayButton";
import StickyOrderDrawer from "./StickyOrderDrawer";
import StickyOrderTotal from "./StickyOrderTotal";

export default function StickyOrderSummary() {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;

        if (isDrawerOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isDrawerOpen]);

    return (
        <div className="fixed bottom-0 inset-x-0 border-t z-40 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.05)] bg-white border-zinc-200 lg:hidden">
            <div className="max-w-150 mx-auto p-4 flex flex-col gap-4">
                <StickyOrderTotal onToggle={() => setIsDrawerOpen(true)} />
                <PayButton />
            </div>
            <StickyOrderDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            />
        </div>
    );
}