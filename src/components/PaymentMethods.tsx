import Card from "./Card";
import CardBody from "./CardBody";
import CardTitle from "./CardTitle";

export default function PaymentMethods({ children }: Readonly<{ children?: React.ReactNode }>) {
    return (
        <Card>
            <CardBody>
                <CardTitle>{'Métodos de Pago'}</CardTitle>
                {children}
            </CardBody>
        </Card>
    );
}