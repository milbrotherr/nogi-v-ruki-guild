import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Гильдия «Ноги в Руки»',
  description: 'История, летописи и музыка гильдии «Ноги в Руки».',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
