import type { Metadata } from "next";
import "./globals.css";
import SessionWrapper from "./lib/SessionWrapper";
import { UserProvider } from './context/UserContext'

export const metadata: Metadata = {
  title: "App Socialflow",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <SessionWrapper>
      <html lang="en">
        <body>
          <UserProvider>
            {children}
          </UserProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
