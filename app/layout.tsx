import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Aside from "@/components/aside";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: 'Zapps | %s',
    default: 'Zapps'
  },
  description: "Web apps created by zsphinx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased md:!overflow-auto bg-stone-300`}
      >
        <main className="container flex max-w-screen-2xl justify-center mx-auto">
          <Aside />
          <section className=" mx-auto basis-full p-2 min-h-dvh">

            <section className="bg-neutral-100 rounded-lg overflow-clip min-h-[calc(100dvh-16px)]">

              <nav className="w-full bg-black/10 md:hidden">
                <Link href='/' className="block leading-10 text-2xl text-center font-black px-2 text-gray-900 font-geistMono select-none" draggable={true}>ZAPPS</Link>
              </nav>
              {children}
            </section>

          </section>
        </main>
      </body>
    </html>
  );
}
