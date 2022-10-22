import "swiper/css";
import "styles/index.css";
import "styles/layout-bg.css";
import "nprogress/nprogress.css";
import "simplebar/dist/simplebar.min.css";
import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import type { AppProps } from "next/app";
import AppLayout from "layout/AppLayout";
import { AppContextProvider } from "contexts/AppContext";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

nProgress.configure({ showSpinner: false });

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
