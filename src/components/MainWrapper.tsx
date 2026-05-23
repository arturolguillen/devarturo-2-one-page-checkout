export default function MainWrapper({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex-1 w-full px-4 md:px-8 max-w-7xl mx-auto py-8 md:py-16 flex flex-col md:flex-row gap-8">
            {children}
        </main>
    );
}