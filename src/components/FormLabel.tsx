export default function FormLabel({ htmlFor, children }: {
    htmlFor?: React.LabelHTMLAttributes<HTMLLabelElement>["htmlFor"];
    children: React.ReactNode;
}) {
    return (
        <label
            htmlFor={htmlFor}
            className="text-xs uppercase tracking-widest text-zinc-500 font-semibold block"
        >
            {children}
        </label>
    );
}