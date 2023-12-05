import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@my/components/Header";
import Footer from "@my/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Pendataan SDGs | Desa Sidorejo",
  description: "Desa Sidorejo, Kec. Lampung Timur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
