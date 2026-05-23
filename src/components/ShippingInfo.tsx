import Card from "./Card";
import CardBody from "./CardBody";
import CardTitle from "./CardTitle";
import FormGroup from "./FormGroup";
import FormLabel from "./FormLabel";

export default function ShippingInfo() {
    return (
        <Card>
            <CardBody>
                <CardTitle>{'Información de Envío'}</CardTitle>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormGroup>
                        <FormLabel htmlFor="first_name">{'Nombre'}</FormLabel>
                        <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            className="input"
                            placeholder={'Nombre'}

                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="last_name">{'Apellido'}</FormLabel>
                        <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            className="input"
                            placeholder={'Apellido'}
                            autoComplete="off"
                        />
                    </FormGroup>
                    <div className="md:col-span-2">
                        <FormGroup>
                            <FormLabel htmlFor="address">{'Dirección'}</FormLabel>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                className="input"
                                placeholder={'Empieza a escribir tu dirección...'}
                                autoComplete="off"
                            />
                        </FormGroup>
                    </div>
                    <FormGroup>
                        <FormLabel htmlFor="city">{'Ciudad'}</FormLabel>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            className="input"
                            placeholder={'Ciudad'}
                            autoComplete="off"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="zip">{'Código Postal'}</FormLabel>
                        <input
                            type="text"
                            name="zip"
                            id="zip"
                            className="input"
                            placeholder={'Código Postal'}
                            autoComplete="off"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="state">{'Estado'}</FormLabel>
                        <input
                            type="text"
                            name="state"
                            id="state"
                            className="input"
                            placeholder={'Estado'}
                            autoComplete="off"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="country">{'País'}</FormLabel>
                        <select name="country" id="country" className="select">
                            <option value={'Estados Unidos'}>{'Estados Unidos'}</option>
                            <option value={'México'}>{'México'}</option>
                            <option value={'Canadá'}>{'Canadá'}</option>
                        </select>
                    </FormGroup>
                    <div className="md:col-span-2">
                        <FormGroup>
                            <FormLabel htmlFor="phone">{'Nro. de Teléfono'}</FormLabel>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                className="input"
                                placeholder={'+1 (555) 000-0000'}
                                autoComplete="off"
                            />
                        </FormGroup>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}