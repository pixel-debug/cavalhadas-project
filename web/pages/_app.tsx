import type { AppProps } from "next/app";
import "../assets/globals.css";
import { Body } from "@/components/basicPage/body";
import { Footer } from "@/components/basicPage/footer";
import { Header } from "@/components/basicPage/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Body>
        <Component {...pageProps} />;
      </Body>
      <Footer />
    </div>
  );
}
