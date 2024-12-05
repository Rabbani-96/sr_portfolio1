import PageTransition from "@/components/PageTransition";
import { JetBrains_Mono } from "next/font/google";
import StairTransition from "@/components/StairTransition";
import "./globals.css";

//Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  Weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Rabbani Shaik",
  description: "Rabbani Shaik Portfolio",
}; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
