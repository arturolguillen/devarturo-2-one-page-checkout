import { usdPriceFormatter } from "@/helpers";

export default function OrderTotal() {
    return (
        <div className="flex justify-between items-end border-t border-zinc-900 pt-4">
            <span className="text-xl font-bold">{'Total'}</span>
            <span className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tighter">{usdPriceFormatter.format(221.40)}</span>
        </div>
    );
}