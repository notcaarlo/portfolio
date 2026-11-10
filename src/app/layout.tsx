import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carlo Villanueva | Backend Developer & Application Security",
  description:
    "Desarrollador Backend & Especialista en Seguridad de Aplicaciones. Creador de StockGuard E-Commerce (Next.js 15, TypeScript, PostgreSQL 16, Prisma, PGlite, HMAC-SHA256, RBAC).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen relative selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
        {/* Vexoo authentic film grain overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.07]"
          style={{
            backgroundImage: 'url("/noise.png")',
            backgroundRepeat: "repeat",
            backgroundSize: "160px 160px",
          }}
        />
        {children}
      </body>
    </html>
  );
}
