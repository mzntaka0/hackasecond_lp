import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { SnackbarProvider } from "notistack";

import { CustomNextPage } from "types/customNextPage";
import theme from "theme/theme";
import createEmotionCache from "utils/createEmotionCache";
import Layout from "layouts";
import "styles/globals.css";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

type CustomAppProps = MyAppProps & {
  Component: CustomNextPage;
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props: CustomAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const layout = Component.layout || "main";

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{`${Component.title} | Hack a second 水野多加雄`}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <Layout name={layout}>
            <Component {...pageProps} />
          </Layout>
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
