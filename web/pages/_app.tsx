import type { AppProps } from "next/app";
import "../assets/globals.css";
import { Body } from "@/components/basicPage/body";
import { Footer } from "@/components/basicPage/footer";
import { Header } from "@/components/basicPage/header";
import { useRouter } from "next/router";
import { AdminProvider } from "@/context/useAdminContext";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLoginPage = router.pathname === "/Login";

  return (
    <AdminProvider>
      <div className="flex flex-col min-h-screen">
        {!isLoginPage && <Header />}
        <Body>
          <Component {...pageProps} />
        </Body>
        {!isLoginPage && <Footer />}
      </div>
    </AdminProvider>
  );
}
