import { LockKeyhole } from "lucide-react"

export default function TopAppBarSteps() {
    return (
        <div className="flex items-center gap-4 text-zinc-500">
            <div className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">
                <span className="size-6 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center">{'1'}</span>
                <span>{'Carrito'}</span>
                <div className="w-8 h-px bg-zinc-200 mx-2"></div>
                <span className="size-6 rounded-full bg-zinc-900 text-white border border-zinc-900 flex items-center justify-center">{'2'}</span>
                <span className="text-zinc-900 font-bold">{'Checkout'}</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-zinc-900">
                <LockKeyhole size={16} />
                <span className="hidden sm:block">{'Pago seguro'}</span>
            </div>
        </div>
    );
}