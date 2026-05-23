import Card from "./Card";
import CardBody from "./CardBody";
import CardTitle from "./CardTitle";
import FormGroup from "./FormGroup";
import FormLabel from "./FormLabel";

export default function ContactInfo() {
    return (
        <Card>
            <CardTitle title={'Información de Contacto'} />
            <CardBody className="space-y-4">
                <FormGroup>
                    <FormLabel htmlFor="email">{'Correo Electrónico'}</FormLabel>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="input"
                        placeholder="Ingresa tu correo electrónico"
                        autoComplete="off"
                    />
                </FormGroup>
            </CardBody>
        </Card>
    );
}