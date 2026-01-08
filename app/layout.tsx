import type { Metadata } from "next";
import { Encode_Sans_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const encodeSansCondensed = Encode_Sans_Condensed({
  variable: "--font-encode-sans-condensed",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dcartdevelopment.com",
  description: "Portfolio website for dcartdevelopment - showcasing projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${encodeSansCondensed.variable} ${jetBrainsMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
