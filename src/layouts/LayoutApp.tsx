import Footer from '@/components/others/Footer';
import Header from '@/components/others/Header';
import { ModeToggle } from '@/components/others/ModeToggle';
import SafeAreaView from '@/components/others/SafeAreaView';
import ScrollToTop from '@/components/others/ScrollToTop';
import { Toaster } from '@/components/ui/Sonner';
import { ILayoutAppProps } from '@/types/layouts/LayoutApp';
import { ScrollRestoration } from 'react-router-dom';

export default function LayoutApp({ children, headerHasOnlyLogo }: ILayoutAppProps) {
  return (
    <>
      <Header onlyHeaderLogo={headerHasOnlyLogo} />
      <SafeAreaView>
        <main className="min-h-main pt-10 sm:pt-16">{children}</main>
      </SafeAreaView>
      <Footer />
      <Toaster />
      <ModeToggle />
      <ScrollToTop />
      <ScrollRestoration />
    </>
  );
}
