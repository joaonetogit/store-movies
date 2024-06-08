import Container from '../Container';
import FooterSocials from './FooterSocials';

export default function Footer() {
  return (
    <footer data-testid="footer-test" className="border-0 border-t border-border py-10">
      <Container>
        <div className="flex items-center justify-between">
          <p>All rights reserved. @João Pinheiro Dev</p>
          <FooterSocials />
        </div>
      </Container>
    </footer>
  );
}
