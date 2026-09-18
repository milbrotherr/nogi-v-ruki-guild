import type { Metadata } from 'next';
import './globals.css';
import SiteLoader, { loaderStart, loaderStyles } from './site-loader';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Гильдия «Ноги в Руки»',
  description: 'История и летописи гильдии игровой и гик-культуры «Ноги в Руки».',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head><style dangerouslySetInnerHTML={{ __html: loaderStyles }} /><script dangerouslySetInnerHTML={{ __html: loaderStart }} /></head>
      <body>{children}<SiteLoader /></body>
    </html>
  );
}
