import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import "./styles/theme.css";
import Menu from "./components/Menu/Menu";
import Logo from "./components/Logo/Logo";
import Links from "./components/Links/Links";
import Footer from "./components/Footer/Footer";
import TopBar from "./components/TopBar/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafał Bogusz - Software Developer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
