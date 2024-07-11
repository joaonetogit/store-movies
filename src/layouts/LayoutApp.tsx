import Footer from '@/components/custom/Footer';
import Header from '@/components/custom/Header';
import { ModeToggle } from '@/components/custom/ModeToggle';
import SafeAreaView from '@/components/custom/SafeAreaView';
import ScrollToTop from '@/components/custom/ScrollToTop';
import { Toaster } from '@/components/ui/Sonner';
import { ILayoutAppProps } from '@/types/layouts/LayoutApp';
import { ScrollRestoration } from 'react-router-dom';

export default function LayoutApp({ children, headerHasOnlyLogo }: ILayoutAppProps) {
  return (
    <div className="flex min-h-svh flex-col justify-between">
      <Header onlyHeaderLogo={headerHasOnlyLogo} />
      <SafeAreaView>
        <main className="pt-10">{children}</main>
      </SafeAreaView>
      <Footer />
      <Toaster />
      <ModeToggle />
      <ScrollToTop />
      <ScrollRestoration />
    </div>
  );
}
