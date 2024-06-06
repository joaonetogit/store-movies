import Footer from '@/components/others/Footer';
import Header from '@/components/others/Header';
import { ModeToggle } from '@/components/others/ModeToggle';
import { Toaster } from '@/components/ui/Sonner';
import { ILayoutAppProps } from '@/types/layouts/LayoutApp';

export default function LayoutApp({ children, headerHasOnlyLogo }: ILayoutAppProps) {
  return (
    <>
      <Header onlyHeaderLogo={headerHasOnlyLogo} />
      <main className="mb-[5vh] mt-[15vh]">{children}</main>
      <Footer />
      <Toaster />
      <ModeToggle />
    </>
  );
}
