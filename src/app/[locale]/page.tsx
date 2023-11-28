import React from "react";
import { useTranslations } from "next-intl";

function Home() {
  const t = useTranslations("test");

  return (
    <div className="flex flex-col space-y-1 items-center justify-center w-full h-screen">
      <p>The boilerplate work!</p>
      <p>{t("text")}</p>
    </div>
  );
}

export default Home;
