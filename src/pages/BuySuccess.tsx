import Container from '@/components/others/Container';
import LayoutApp from '@/layouts/LayoutApp';

export default function BuySuccess() {
  return (
    <LayoutApp headerHasOnlyLogo>
      <Container>
        <div className="-mt-[15vh] h-screen flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center mb-8">Thank you for your purchase!</h2>
          <p className="text-lg text-center">
            Your order has been successfully placed. We will send you an email with the order
            details.
          </p>
        </div>
      </Container>
    </LayoutApp>
  );
}
