const usdPriceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

export default function Calculations() {
    return (
        <div className="space-y-3 text-base">
            <div className="flex justify-between text-zinc-500">
                <span>{'Subtotal'}</span>
                <span>{usdPriceFormatter.format(205)}</span>
            </div>
            <div className="flex justify-between text-zinc-500">
                <span>{'Envío'}</span>
                <span className="text-zinc-900 font-bold">{'Gratis'}</span>
            </div>
            <div className="flex justify-between text-zinc-500">
                <span>{'Impuesto'}</span>
                <span>{usdPriceFormatter.format(16.40)}</span>
            </div>
        </div>
    );
}