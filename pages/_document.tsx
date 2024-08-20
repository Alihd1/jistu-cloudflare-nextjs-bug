import { jitsuHost, jitsuWriteKey } from "@/env";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
                window.jitsuLoaded = function(jitsu) {
                  jitsu.identify("X", { email: "john.doe@gmail.com" });
                };
              `,
          }}
        />
        <script
          async
          src={`${jitsuHost}/p.js`}
          data-write-key={jitsuWriteKey}
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
