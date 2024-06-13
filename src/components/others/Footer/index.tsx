import Container from '../Container';
import Logo from '../Logo';
import FooterSocials from './FooterSocials';

export default function Footer() {
  return (
    <footer data-testid="footer-test" className="border-0 border-t border-border py-8">
      <Container>
        <div className="flex items-center justify-between">
          <p className="flex-1">All rights reserved. @João Pinheiro Dev</p>
          <Logo size='sm' />
          <FooterSocials />
        </div>
      </Container>
    </footer>
  );
}
