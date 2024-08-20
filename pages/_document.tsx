import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          type="text/javascript"
          onLoad={() => {
            if (typeof window !== "undefined" && window.jitsuLoaded) {
              window.jitsuLoaded = function (jitsu: any) {
                jitsu.identify("123", { email: "john.doe@gmail.com" });
                // jitsu.track("customEvent", {customParam: Y})
              };
            }
          }}
        />
        <Script
          async
          src="https://st.salla.dev/p.js"
          data-onload="jitsuLoaded"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
