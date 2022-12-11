import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormValuesProvider from "../context/FormProvider";
import MainLayout from "../components/MainLayout";
import Container from "../components/Container";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#4285F4" height={0} />
      <ToastContainer />
      <FormValuesProvider>
        <MainLayout>
          <Container>
            <Component {...pageProps} />
          </Container>
        </MainLayout>
      </FormValuesProvider>
    </>
  );
}
