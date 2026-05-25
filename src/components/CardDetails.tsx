import { CreditCard } from "lucide-react";
import FormGroup from "./FormGroup";
import FormLabel from "./FormLabel";

export default function CardDetails() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="md:col-span-2">
                <FormGroup>
                    <FormLabel htmlFor="card_number">{'Número de tarjeta'}</FormLabel>
                    <div className="relative">
                        <input
                            type="text"
                            className="input pl-11"
                            id="card_number"
                            placeholder={'0000 0000 0000 0000'}
                        />
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
                    </div>
                </FormGroup>
            </div>
            <FormGroup>
                <FormLabel htmlFor="card_expiry">{'Fecha de expiración'}</FormLabel>
                <input
                    type="text"
                    className="input"
                    id="card_expiry"
                    placeholder={'MM/AA'}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="card_cvc">{'CVC'}</FormLabel>
                <input
                    type="text"
                    className="input"
                    id="card_cvc"
                    placeholder={'123'}
                />
            </FormGroup>
            <div className="md:col-span-2">
                <FormGroup>
                    <FormLabel htmlFor="cardholder_name">{'Nombre del titular'}</FormLabel>
                    <input
                        type="text"
                        className="input"
                        id="cardholder_name"
                        placeholder={'Nombre como aparece en la tarjeta'}
                    />
                </FormGroup>
            </div>
        </div>
    );
}