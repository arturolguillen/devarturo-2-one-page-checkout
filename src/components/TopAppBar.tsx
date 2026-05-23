export default function TopAppBar({ children }: {
    children: React.ReactNode;
}) {
    return (
        <header className="bg-zinc-50 border-b border-zinc-50 sticky top-0 z-50">
            <div className="flex justify-between items-center w-full px-4 md:px-8 max-w-7xl mx-auto h-20">
                {children}
            </div>
        </header>
    );
}