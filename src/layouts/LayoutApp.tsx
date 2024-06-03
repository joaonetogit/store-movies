import Footer from '@/components/others/Footer';
import Header from '@/components/others/Header';
import { ModeToggle } from '@/components/others/ModeToggle';
import { Toaster } from '@/components/ui/Sonner';
import { ILayoutAppProps } from '@/types/layouts/LayoutApp';

export default function LayoutApp({ children }: ILayoutAppProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Toaster />
      <ModeToggle />
    </>
  );
}
