import Container from './Container';

export default function Footer() {
  return (
    <footer data-testid="footer-test" className="border border-t border-border py-10">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <p>All rights reserved</p>
          <p>@João Pinheiro Dev</p>
        </div>
      </Container>
    </footer>
  );
}
