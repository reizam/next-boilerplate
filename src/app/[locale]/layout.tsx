import Providers from "@/providers";
import type { Metadata } from "next";

import "@/styles/globals.css";
import { LOCALES } from "@/i18n/config";
import { notFound } from "next/navigation";
import { loadMessages } from "@/i18n";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Next - Boilerplate",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: Partial<(typeof LOCALES)[number]>;
  };
}

async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  if (!LOCALES.includes(locale)) {
    notFound();
  }

  const messages = await loadMessages(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
