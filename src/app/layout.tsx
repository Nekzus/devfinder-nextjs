import "./globals.css";

import type { Metadata } from "next";
import { Navbar } from "@/components";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className=""
    >
      <body
        suppressHydrationWarning={true}
        className={robotoMono.className}
      >
        <div className="grid min-h-screen place-content-center bg-blue-50 p-4 dark:bg-blue-950">
          <div className="sm:w-[500px] md:w-[600px] lg:w-[700px]">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
