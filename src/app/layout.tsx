import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/provider/theme";
import { StateProvider } from "@/components/provider/state";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aragorn - Gandalf's Eye",
  description: "Dive Into Your Digital Trails With Aragorn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            <TooltipProvider>
              {children}
            </TooltipProvider>
          </ThemeProvider>
        </StateProvider>
      </body>
    </html>
  );
}
