import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./styles/globals.css";
import "./styles/theme.css";
import Menu from "./components/Menu/Menu";
import Logo from "./components/Logo/Logo";
import Links from "./components/Links/Links";
import Footer from "./components/Footer/Footer";
import TopBar from "./components/TopBar/TopBar";

const roboto = Nunito({ weight: ["400", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafał Bogusz - Software Developer",
  description: "Rafał Bogusz - Software Developer Portfolio Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <TopBar>
          <Logo />
          <Menu />
          <Links />
        </TopBar>
        {children}
        <Footer />
      </body>
    </html>
  );
}
