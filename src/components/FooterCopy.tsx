export default function FooterCopy() {
    const date = new Date();

    return (
        <div className="text-xs font-semibold uppercase tracking-widest text-zinc-500 text-center">
            &copy; {`${date.getFullYear()} Streetwear_lab. Todos los derechos reservados.`}
        </div>
    );
}