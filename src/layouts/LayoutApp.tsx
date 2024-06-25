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
