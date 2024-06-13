import Container from '../Container';
import Logo from '../Logo';
import FooterSocials from './FooterSocials';

export default function Footer() {
  return (
    <footer data-testid="footer-test" className="border-0 border-t border-border py-8">
      <Container>
        <div className="flex flex-col items-center justify-between sm:flex-row gap-6">
          <p className="flex-1 order-3 sm:order-2">All rights reserved. @João Pinheiro Dev</p>
          <div className="flex-1 order-1 sm:order-2">
            <Logo size="sm" />
          </div>
          <div className="flex-1 order-2 sm:order-2">
            <FooterSocials />
          </div>
        </div>
      </Container>
    </footer>
  );
}
