export default function CardBody({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="p-4 md:p-8 space-y-4">
            {children}
        </div>
    );
}