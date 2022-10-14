import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Container } from '../container/container';

export const Layout = ({ children }) => {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <main className="grow bg-gray-50">
        <Container className="flex flex-col">{children}</Container>
      </main>
      <Footer />
    </div>
  );
};
