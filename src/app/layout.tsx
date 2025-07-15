import type { Metadata } from "next";
import "../app/styles/global.css";
// import Navbar from "../app/components/Navbar";
// import Footer from "../app/components/Footer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Fornxt - IT Solutions",
  description: "Leading provider of IT solutions and innovations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
