import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import ThemeProvider from "@/providers/themeProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "oatmeal - AI-powered customer support",
  description:
    "oatmeal is an AI-powered customer support platform that helps businesses manage shared inboxes, collaborate with team members, and provide personalized responses to customers.",
  keywords: [
    "web development",
    "AI",
    "MVP",
    "agency",
    "StackMint Studio",
    "landing pages",
    "mobile development",
    "mobile app",
  ],
  authors: [{ name: "Devesh Yadav" }],
  openGraph: {
    title: "oatmeal - AI-powered customer support",
    description:
      "oatmeal is an AI-powered customer support platform that helps businesses manage shared inboxes, collaborate with team members, and provide personalized responses to customers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserrat.variable} ${montserrat.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
