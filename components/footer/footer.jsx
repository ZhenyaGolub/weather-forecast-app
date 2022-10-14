import { Container } from '../container/container';

export const Footer = () => {
  return (
    <footer className="py-[10px] bg-sky-400">
      <Container>
        <div className="flex justify-center items-center">
          <span className="text-white font-medium sm:text-[20px]">
            Thank{' '}
            <a
              className="font-bold underline"
              href="https://icons8.com/"
              target="_blank"
            >
              icons8.com
            </a>{' '}
            for icons
          </span>
        </div>
      </Container>
    </footer>
  );
};
