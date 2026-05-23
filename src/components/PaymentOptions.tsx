"use client";

import clsx from "clsx";
import { CreditCard } from "lucide-react";
import { useState } from "react";

const paymentOptions = [
    {
        value: "credit_card",
        label: "Credit Card",
        icon: <CreditCard />,
    },
    {
        value: "paypal",
        label: "PayPal",
        icon: null,
    }
];

export default function PaymentOptions() {
    const [selectedPayment, setSelectedPayment] = useState(paymentOptions[0].value);

    return (
        <div className="flex flex-col gap-2">
            {paymentOptions.map(option => (
                <label
                    key={option.value}
                    htmlFor={option.value}
                    className={clsx({
                        'flex items-center gap-3 p-4 border rounded bg-indigo-50/30 cursor-pointer min-h-16 hover:border-indigo-600 transition-colors': true,
                        'border-zinc-200': selectedPayment !== option.value,
                        'border-indigo-600': selectedPayment === option.value,
                    })}
                >
                    <input
                        type="radio"
                        name="payment"
                        id={option.value}
                        value={option.value}
                        className="radio"
                        checked={selectedPayment === option.value}
                        onChange={() => setSelectedPayment(option.value)}
                    />
                    <span className="text-indigo-600">{option.icon}</span>
                    <span className="text-xs font-semibold uppercase tracking-widest">{option.label}</span>
                </label>
            ))}
        </div>
    );
}