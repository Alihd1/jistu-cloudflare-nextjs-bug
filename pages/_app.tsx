import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  console.log("process.env.NEXT_RUNTIME == ", process.env.NEXT_RUNTIME);
  return <Component {...pageProps} />;
}
