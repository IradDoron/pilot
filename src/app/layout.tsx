import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Pilot of Drubakuna',
	description: 'A pilot and testing for the drubakuna project',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
