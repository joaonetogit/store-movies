import Footer from '@/components/others/Footer';
import Header from '@/components/others/Header';
import { ModeToggle } from '@/components/others/ModeToggle';
import SafeAreaView from '@/components/others/SafeAreaView';
import { Toaster } from '@/components/ui/Sonner';
import { ILayoutAppProps } from '@/types/layouts/LayoutApp';

export default function LayoutApp({ children, headerHasOnlyLogo }: ILayoutAppProps) {
  return (
    <>
      <Header onlyHeaderLogo={headerHasOnlyLogo} />
      <SafeAreaView>
        <main className="min-h-main">{children}</main>
      </SafeAreaView>
      <Footer />
      <Toaster />
      <ModeToggle />
    </>
  );
}
