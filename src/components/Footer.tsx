export default function Footer({ children }: {
    children: React.ReactNode;
}) {
    return (
        <footer className="border-t border-zinc-200 bg-zinc-50 mt-16">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full py-6 px-4 md:px-8 max-w-7xl mx-auto space-y-6 lg:space-y-0">
                {children}
            </div>
        </footer>
    );
}