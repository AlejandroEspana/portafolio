import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../globals.css";

export const metadata: Metadata = {
  title: "Alejandro España - Portafolio",
  description: "Portafolio web de Alejandro España, Desarrollador de Software",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap" rel="stylesheet" />
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (sessionStorage.getItem('theme') === 'light') {
                  document.documentElement.classList.add('light');
                }
              } catch (e) {}
            `
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen relative antialiased transition-colors duration-500 bg-[var(--color-background-main)]">
        
        {/* Background Gradients */}
        <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--color-accent-sphere)] blur-[150px] opacity-[0.03] pointer-events-none z-0"></div>
        <div className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[var(--color-accent-sphere)] blur-[150px] opacity-[0.02] pointer-events-none z-0"></div>

        <Navbar lang={lang} />
        <main className="flex-1 w-full max-w-7xl mx-auto flex flex-col items-center">
          {children}
        </main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
