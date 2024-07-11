import Container from '../Container';
import Logo from '../Logo';
import FooterSocials from './FooterSocials';

export default function Footer() {
  return (
    <footer data-testid="footer-test" className="border-0 border-t border-border py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="order-3 flex-1 sm:order-2">All rights reserved. @João Pinheiro Dev</p>
          <div className="order-1 flex flex-1 items-center justify-center sm:order-2">
            <Logo size="sm" />
          </div>
          <div className="order-2 flex-1 sm:order-2">
            <FooterSocials />
          </div>
        </div>
      </Container>
    </footer>
  );
}
