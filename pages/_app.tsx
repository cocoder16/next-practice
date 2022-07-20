import "styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export function reportWebVitals(metric: any) {
  console.log("[Report Web Vitals]", metric);
}

export default MyApp;
