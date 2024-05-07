import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartStoreProvider } from "@/providers/cart-store.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ceezer marketplace",
  description: "Browse projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartStoreProvider>{children}</CartStoreProvider>
      </body>
    </html>
  );
}
