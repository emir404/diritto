import type { Metadata, Viewport } from "next";
import { Fraunces, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"], // optical sizing — high-contrast display cut at large sizes
  variable: "--font-fraunces",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dirittoeconsulenza.it"),
  title: {
    default: "diritto&consulenza — Network multidisciplinare | Bologna · Lecce · Milano",
    template: "%s — diritto&consulenza",
  },
  description:
    "Network multidisciplinare di avvocati dal 2009. Diritto di famiglia e successioni, malasanità, diritto bancario, proprietà intellettuale, impresa. Sedi a Bologna, Lecce e Milano.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "diritto&consulenza",
    title: "diritto&consulenza — Network multidisciplinare",
    description:
      "Un network di specialisti in tutta Italia. Con empatia e competenza, in ogni passo.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4ebe9",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="it"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${poppins.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col overflow-x-clip bg-[var(--dl-paper)] text-[var(--dl-ink)]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--dl-accent)] focus:px-4 focus:py-2 focus:text-[var(--dl-paper)]"
        >
          Salta al contenuto
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
