import Card from "./Card";
import CardBody from "./CardBody";
import CardTitle from "./CardTitle";

export default function OrderSummary({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="sticky top-24 shadow-black/5">
            <Card>
                <CardBody>
                    <CardTitle>{'Resumen del Pedido'}</CardTitle>
                    <div className="space-y-8">{children}</div>
                </CardBody>
            </Card>
        </div>
    );
}