import { Inter } from "next/font/google";
import "./globals.css";
import ChatBot from "../components/universal/Chatbot";
import Footer from "../components/universal/Footer";
import NavBar from "../components/universal/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UrbanSnap",
  description: "E-governance website project for DotSlash8.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NavBar />
        {children}
        <ChatBot />
        <Footer />
      </body>
    </html>
  );
}
