import "./css/style.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  icon: "/images/gallery/icon-app.svg",
  title: "Desa Wisata Kebondowo",
  description:
    "Website Desa Wisata Kebondowo Kecamatan Banyubiru Kabupaten Semarang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        {children}
      </body>
    </html>
  );
}
