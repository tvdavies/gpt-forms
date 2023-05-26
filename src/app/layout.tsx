import { TopNav } from "@/components/TopNav";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GPT Forms",
  description: "Interact with GPT-4 through simple forms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
