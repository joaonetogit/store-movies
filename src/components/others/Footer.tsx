import Container from './Container';

export default function Footer() {
  return (
    <footer data-testid="footer-test" className="py-10 border border-t border-border">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <p>All rights reserved</p>
          <p>@João Pinheiro Dev</p>
        </div>
      </Container>
    </footer>
  );
}
