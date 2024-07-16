import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

import { Noto_Sans_HK } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Noto_Sans_HK({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className="p-1 m-1">
  <main className={`${inter.className}`}>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </main>
  </div>
  )
}
