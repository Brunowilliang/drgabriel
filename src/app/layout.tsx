import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/whatsAppButton'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400', '700'],
	preload: true,
})

export const metadata: Metadata = {
	title: 'Dr Gabriel - Curso de Otoplastia',
	description:
		'Domine a habilidade de otoplastia e saia dos plantões para faturar 6 dígitos por ano',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' data-theme='' className='scroll-smooth'>
			<body className={`${roboto.className}`}>
				{children}
				<WhatsAppButton />
			</body>
		</html>
	)
}
