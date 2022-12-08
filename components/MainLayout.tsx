import React from "react";
import Head from "next/head";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>Merchant Dashboard</title>
        <meta name="keywords" content="some text" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default MainLayout;
