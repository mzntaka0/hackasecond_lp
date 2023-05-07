import React from "react";
import Script from "next/script";

type Props = {
  measurementId: string;
};

export const Component: React.FC<Props> = (props) => {
  const { measurementId } = props;

  if (process.env.NODE_ENV !== "production" || !measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
};

export default Component;
