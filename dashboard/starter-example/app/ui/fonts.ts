import { Inter, Lusitana } from 'next/font/google';
 
// the main font for the app
// in this case we are using latin subset
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });