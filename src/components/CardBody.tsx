export default function CardBody({ className, children }: {
    className?: React.HTMLAttributes<HTMLDivElement>["className"];
    children: React.ReactNode;
}) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}