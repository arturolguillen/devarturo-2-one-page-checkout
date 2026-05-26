export default function PromoCode() {
    return (
        <div className="flex gap-2 border-t border-zinc-200 pt-4">
            <input
                type="text"
                name="promo-code"
                id="promo-code"
                placeholder={'Código promocional'}
                className="input"
            />
            <button
                type="button"
                className="bg-zinc-100 text-zinc-900 text-xs font-semibold uppercase tracking-widest px-4 rounded hover:bg-zinc-200 transition-colors cursor-pointer"
            >
                {'Aplicar'}
            </button>
        </div>
    );
}