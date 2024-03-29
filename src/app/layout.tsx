import React from "react";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

import { staticPath } from "lib/$path";
import Analytics from "components/common/Analytics";
import "./globals.css";
import { MuiSetup } from "./MuiSetup";
//import theme from "./theme";

export const metadata: Metadata = {
  title: "Hack a second 水野多加雄`",
  icons: [{ rel: "shortcut icon", url: staticPath.favicon_ico }],
  //themeColor: theme.palette.primary.main,
};

// NOTE: https://github.com/mui/material-ui/issues/34898
function RootLayout({ children }: { children: React.ReactNode }) {
  const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";

  return (
    <html lang="en" suppressHydrationWarning>
      {/* TODO: modify here ref. https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#modifying-head
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta name="emotion-insertion-point" content="" />
      </Head>*/}
      <body>
        <Analytics measurementId={MEASUREMENT_ID} />
        <MuiSetup>{children}</MuiSetup>
      </body>
    </html>
  );
}

export default RootLayout;
