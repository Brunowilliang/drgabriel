import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "Dr Gabriel - Curso de Otoplastia",
	description:
		"Domine a habilidade de otoplastia e saia dos plantões para faturar 6 dígitos por ano",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="">
			<body className={`${roboto.className}`}>{children}</body>
		</html>
	);
}
