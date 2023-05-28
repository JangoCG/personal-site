import "./globals.css";
import { Courier_Prime } from "next/font/google";

const courier_prime = Courier_Prime({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cengiz Gürtusgil™",
  description: "Personal website of Cengiz Gürtusgil"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={courier_prime.className}>{children}</body>
    </html>
  );
}
