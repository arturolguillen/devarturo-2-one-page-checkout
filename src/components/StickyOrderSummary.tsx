import StickyOrderTotal from "./StickyOrderTotal";

export default function StickyOrderSummary() {
    return (
        <div className="fixed bottom-0 inset-x-0 border-t z-40 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.05)] bg-white border-zinc-200 lg:hidden">
            <StickyOrderTotal />
        </div>
    );
}