export default function Card({ children }:
    Readonly<{
        children: React.ReactNode
    }>) {
    return (
        <div className="bg-white rounded border border-zinc-200 space-y-4 focus-within:border-indigo-600 focus-within:ring-indigo-600 font-medium focus-within:ring-1">
            {children}
        </div>
    );
}