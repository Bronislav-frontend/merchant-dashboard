import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import MainLayout from "../components/MainLayout";
import Container from "../components/Container";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#4285F4" height={0} />
      <MainLayout>
        <Container>
          <Component {...pageProps} />
        </Container>
      </MainLayout>
    </>
  );
}
