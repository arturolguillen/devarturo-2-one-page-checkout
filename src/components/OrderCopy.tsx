import { LockKeyhole } from "lucide-react";

export default function OrderCopy() {
    return (
        <div className="text-center flex items-center justify-center gap-1 -mt-4">
            <LockKeyhole size={14} className="text-indigo-600" />
            <p className="text-xs text-zinc-500 font-semibold">{'Pago seguro Cifrado'}</p>
        </div>
    );
}