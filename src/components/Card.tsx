export default function Card({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-white p-4 md:p-8 rounded border border-zinc-200 space-y-4 relative">
            {children}
        </div>
    );
}