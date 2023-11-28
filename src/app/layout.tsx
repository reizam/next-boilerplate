import Providers from "@/providers";
import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Next - Boilerplate",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export default RootLayout;
