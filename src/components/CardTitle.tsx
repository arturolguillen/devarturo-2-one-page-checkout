export default function CardTitle({ children }: {
    children: React.ReactNode;
}) {
    return (
        <h2 className="text-xl font-semibold">{children}</h2>
    );
}