"use client";

import { usdPriceFormatter } from "@/helpers";
import { ChevronUp } from "lucide-react";

export default function StickyOrderTotal({ onToggle }: {
    onToggle: () => void;
}) {
    return (
        <div className="flex justify-between items-center cursor-pointer" onClick={onToggle}>
            <div className="flex flex-col">
                <span className="text-xl font-bold">{'Total'}</span>
                <span className="text-xl font-bold text-zinc-900 tracking-tighter">{usdPriceFormatter.format(221.40)}</span>
            </div>
            <div className="flex items-center gap-1 text-zinc-500">
                <span>{'Ver detalles'}</span>
                <ChevronUp />
            </div>
        </div>
    );
}