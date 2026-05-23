export default function Card({ children }:
    Readonly<{
        children: React.ReactNode
    }>) {
    return (
        <div className="bg-white rounded border border-zinc-200 space-y-4">
            {children}
        </div>
    );
}