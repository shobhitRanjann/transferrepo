import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "tambola",
  description: "Generated for tambola players",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
 </>
  );
}
