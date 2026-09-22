import type { Metadata } from 'next';
import { Manrope, DM_Serif_Display } from 'next/font/google';
import './globals.css';

const sans = Manrope({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const serif = DM_Serif_Display({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });
export const metadata: Metadata = {
  title: 'BEMVI · Fisioterapia e Pilates em Criciúma',
  description: 'Reabilitação e Pilates clínico em Criciúma. Conheça a BEMVI, suas profissionais e converse pelo WhatsApp para solicitar informações sobre atendimento.',
  robots: { index: false, follow: false },
  openGraph: { title: 'BEMVI · Se cuidar para viver bem', description: 'Fisioterapia e Pilates em Criciúma.', locale: 'pt_BR', type: 'website' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR" className={`${sans.variable} ${serif.variable}`}><body>{children}</body></html>;
}
