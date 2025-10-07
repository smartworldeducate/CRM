import AuthLayout from "@/components/layout/authlayout/AuthLayout";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Tabs from "@/components/layout/Tabs";
import { ReduxProvider } from "@/redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
export const metadata = {
  title: "CRM Enterprise App",
  description: "Next.js + Tailwind CRM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/styles.css" />
      </head>

      <body className="flex h-screen w-screen overflow-hidden">
        	<Theme>
        <ReduxProvider>
          {/* <Sidebar />
          <div className="flex-1 flex flex-col h-full">
            <Tabs />
            <main className="flex-1 overflow-y-auto p-6 bg-white">
              {children}
            </main>
          </div> */}
          <AuthLayout>{children}</AuthLayout>
       

        </ReduxProvider>
        <Script src="/assets/js/core.bundle.js" strategy="beforeInteractive" />
        </Theme>
      </body>
    </html>
  );
}
