import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Skin Microbiome Explorer',
  description: 'Browse and filter bacteria and fungi of the human skin microbiome',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
