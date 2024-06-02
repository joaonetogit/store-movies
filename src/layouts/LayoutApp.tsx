import Footer from '@/components/others/Footer';
import Header from '@/components/others/Header';
import { ILayoutAppProps } from '@/types/layouts/LayoutApp';

export default function LayoutApp({ children }: ILayoutAppProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
