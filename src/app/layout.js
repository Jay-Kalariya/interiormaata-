// import { Inter } from 'next/font/google'
"use client";
import Form from "@/Common/Form/page";
import Headers from "@/Common/headers/index";
import Footer from "@/Common/Footer/page";
// const inter = Inter({ subsets: ['latin'] })
import { usePathname } from "next/navigation";
import "./globals.css";

// export const metadata = {
//   title: "Interiormaata",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const location = usePathname();
  console.log("link", location);
  return (
    <html lang="en">
      <body>
        <Headers />
        {children}
        {location != "/" && (
          <>
            <Form />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
