import Container from '@/components/others/Container';
import LayoutApp from '@/layouts/LayoutApp';

export default function BuySuccess() {
  return (
    <LayoutApp headerHasOnlyLogo>
      <Container>
        <div className="-mb-[20vh] -mt-[15vh] flex h-screen flex-col items-center justify-center">
          <h2 className="mb-8 text-center text-3xl font-bold">Thank you for your purchase!</h2>
          <p className="text-center text-lg">
            Your order has been successfully placed. We will send you an email with the order
            details.
          </p>
        </div>
      </Container>
    </LayoutApp>
  );
}
