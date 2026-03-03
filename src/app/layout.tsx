import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notosan - Journey to New Frontiers",
  description: "Experience the ancient hamlet of Noto, Japan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
