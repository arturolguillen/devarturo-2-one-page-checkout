import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "Devarturo - Streetwear Lab",
};

const SpaceGrotesk = Space_Grotesk({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${SpaceGrotesk.className} antialiased bg-zinc-50 text-zinc-900`}
        >
            <body className="flex flex-col min-h-dvh">{children}</body>
        </html>
    );
}
