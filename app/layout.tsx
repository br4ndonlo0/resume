import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Brandon Loo | Portfolio",
  description: "Computer Science @ NTU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <div className="container max-w-[1000px] mx-auto px-8 pt-10 pb-4">
          <nav className="flex justify-center items-center gap-9">
            <Link href="/" className="text-[var(--text-muted)] hover:text-[var(--text-main)] no-underline text-[1.05rem] font-medium transition-colors duration-200">Home</Link>
            <Link href="/#experience" className="text-[var(--text-muted)] hover:text-[var(--text-main)] no-underline text-[1.05rem] font-medium transition-colors duration-200">Experience</Link>
            <Link href="/#projects" className="text-[var(--text-muted)] hover:text-[var(--text-main)] no-underline text-[1.05rem] font-medium transition-colors duration-200">Projects</Link>
            <Link href="/#leadership" className="text-[var(--text-muted)] hover:text-[var(--text-main)] no-underline text-[1.05rem] font-medium transition-colors duration-200">Life</Link>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
