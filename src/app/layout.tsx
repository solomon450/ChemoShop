import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/Navbar";
import { QueryProvider } from "@/components/providers/QueryProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChemTrade Pro | B2B Chemical Marketplace",
  description:
    "Connecting global manufacturers with verified suppliers. Browse chemicals, request quotes, and manage your supply chain.",
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans text-body-md antialiased selection:bg-secondary selection:text-primary-foreground`}
      >
        <QueryProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            {/* Footer */}
            <footer className="bg-surface-container-lowest border-t border-outline-variant w-full mt-auto">
              <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-8 max-w-[1440px] mx-auto gap-6">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-label-md font-bold text-on-surface">
                    ChemTrade Pro
                  </span>
                  <span className="text-body-sm text-on-surface-variant">
                    &copy; 2024 ChemTrade Pro B2B Marketplace. All rights reserved.
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    className="text-on-surface-variant hover:text-secondary text-body-sm transition-colors"
                    href="#"
                  >
                    Terms of Service
                  </a>
                  <a
                    className="text-on-surface-variant hover:text-secondary text-body-sm transition-colors"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                  <a
                    className="text-on-surface-variant hover:text-secondary text-body-sm transition-colors"
                    href="#"
                  >
                    Safety Compliance
                  </a>
                  <a
                    className="text-on-surface-variant hover:text-secondary text-body-sm transition-colors"
                    href="#"
                  >
                    SDS Database
                  </a>
                  <a
                    className="text-on-surface-variant hover:text-secondary text-body-sm transition-colors"
                    href="#"
                  >
                    Contact Support
                  </a>
                </div>
                <div className="flex gap-4">
                  <a
                    className="text-outline hover:text-secondary transition-colors"
                    href="#"
                  >
                    <GlobeIcon className="h-5 w-5" />
                  </a>
                  <a
                    className="text-outline hover:text-secondary transition-colors"
                    href="#"
                  >
                    <RssIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}

/* Small inline SVG icons for the footer (avoids importing lucide in layout) */
function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function RssIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  );
}
