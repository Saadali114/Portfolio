import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saad Ali | Full-Stack Developer & BSc Computer Science Student",
  description:
    "Portfolio of Saad Ali, a BSc Computer Science student and Full-Stack Developer based in Mumbai, India. Building practical web applications and exploring AI-powered solutions.",
  keywords: [
    "Saad Ali",
    "Full-Stack Developer",
    "BSc Computer Science",
    "Mumbai Developer",
    "Next.js Developer",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "ILDRVS",
    "AI Vision",
    "OCR",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Saad Ali" }],
  creator: "Saad Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saadali114.github.io/Portfolio",
    title: "Saad Ali | Full-Stack Developer & BSc Computer Science Student",
    description:
      "BSc Computer Science student and Full-Stack Developer focused on building practical web applications and exploring AI-powered solutions.",
    siteName: "Saad Ali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Ali | Full-Stack Developer",
    description:
      "BSc Computer Science student and Full-Stack Developer building practical web applications.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#090a0f] text-[#f3f4f6] min-h-screen antialiased selection:bg-indigo-600/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
