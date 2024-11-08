import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from 'next';
import './globals.css';
import ThemedLayout from '@/components/ThemedLayout';

export const metadata: Metadata = {
  title: 'Aren Kerr',
  description: 'Portfolio site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemedLayout>{children}</ThemedLayout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
