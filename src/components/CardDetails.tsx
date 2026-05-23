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
        </div>
    );
}