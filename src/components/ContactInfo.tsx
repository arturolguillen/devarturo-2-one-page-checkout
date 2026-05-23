import Link from "next/link";
import Card from "./Card";
import CardBody from "./CardBody";
import CardTitle from "./CardTitle";
import FormGroup from "./FormGroup";
import FormLabel from "./FormLabel";

export default function ContactInfo() {
    return (
        <Card>
            <CardBody>
                <div className="flex justify-between items-center gap-2">
                    <CardTitle>{'Información de Contacto'}</CardTitle>
                    <Link href="#" className="text-xs uppercase tracking-widest text-indigo-600 font-semibold hover:underline">{'Iniciar Sesión'}</Link>
                </div>
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