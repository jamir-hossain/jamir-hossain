import "styles/index.css";
import "styles/layout-bg.css";
import type { AppProps } from "next/app";
import AppLayout from "layout/AppLayout";
import Head from "next/head";
import { AppContextProvider } from "contexts/AppContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jamir Hossain</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AppContextProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AppContextProvider>
    </>
  );
}

export default MyApp;
