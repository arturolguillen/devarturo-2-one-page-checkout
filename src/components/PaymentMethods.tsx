import Card from "./Card";
import CardBody from "./CardBody";
import CardDetails from "./CardDetails";
import CardTitle from "./CardTitle";
import PaymentOptions from "./PaymentOptions";

export default function PaymentMethods() {
    return (
        <Card>
            <CardBody>
                <CardTitle>{'Métodos de Pago'}</CardTitle>
                <PaymentOptions />
                <CardDetails />
            </CardBody>
        </Card>
    );
}