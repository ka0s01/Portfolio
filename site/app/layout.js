import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const clash = localFont({
  src: [
    { path: "./fonts/clash-600.woff2", weight: "600" },
    { path: "./fonts/clash-700.woff2", weight: "700" },
  ],
  variable: "--font-clash",
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "./fonts/satoshi-400.woff2", weight: "400" },
    { path: "./fonts/satoshi-500.woff2", weight: "500" },
    { path: "./fonts/satoshi-700.woff2", weight: "700" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  // TODO: swap for the real domain once Aaron buys one
  metadataBase: new URL("https://aaronvarghese.dev"),
  title: "Aaron Varghese — AI / ML & full-stack developer",
  description:
    "CS undergrad at VIT Chennai building AI/ML systems — LLM agents, RAG pipelines, and the tools around them.",
  openGraph: {
    title: "Aaron Varghese — AI / ML & full-stack developer",
    description:
      "CS undergrad at VIT Chennai building AI/ML systems — LLM agents, RAG pipelines, and the tools around them.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#05090d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${clash.variable} ${satoshi.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen bg-abyss font-sans text-ink">
        {/* ambient aurora — fixed, behind everything */}
        <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
          <span className="au au-1" />
          <span className="au au-2" />
          <span className="au au-3" />
        </div>
        {children}
        {/* film grain over everything — kills the flat-gradient AI look */}
        <div aria-hidden className="grain" />
      </body>
    </html>
  );
}
