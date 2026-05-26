import Link from "next/link";

const menuItems = [
    {
        href: '#',
        text: 'Privacidad',
    },
    {
        href: '#',
        text: 'Términos',
    },
    {
        href: '#',
        text: 'Devoluciones',
    }
];

export default function FooterMenu() {
    return (
        <div className="flex flex-col text-center gap-6 text-xs font-semibold uppercase tracking-widest text-zinc-500 sm:flex-row sm:text-left">
            {menuItems.map(item => (
                <Link
                    key={item.text}
                    href={item.href}
                    className="hover:text-indigo-600 transition-colors duration-200"
                >
                    {item.text}
                </Link>
            ))}
        </div>
    );
}