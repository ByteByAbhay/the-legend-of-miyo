import type { Metadata } from "next";
import { Inter, Bungee } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const bungee = Bungee({ weight: "400", subsets: ["latin"], variable: "--font-bungee" });

export const metadata: Metadata = {
    title: "Mitul (Miyo) - The Legend",
    description: "Miyo Official Website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} ${bungee.variable}`}>
                {children}
            </body>
        </html>
    );
}
