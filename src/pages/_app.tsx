import "styles/index.css";
import "styles/layout-bg.css";
import type { AppProps } from "next/app";
import AppLayout from "layout/AppLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
