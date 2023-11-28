import { I18N_FILES } from "@/i18n/config";
import { getRequestConfig } from "next-intl/server";

export const loadMessages = async (locale: string) => {
  const namespaces = [];

  for (const file of I18N_FILES) {
    try {
      const fileContent = (await import(`./locales/${locale}/${file}.json`))
        .default;
      const namespace = file.toLowerCase().replace(".json", "");

      namespaces.push({
        namespace,
        content: fileContent,
      });
    } catch (error) {}
  }

  return namespaces.reduce(
    (acc, { namespace, content }) => ({
      ...acc,
      [namespace]: content,
    }),
    {}
  );
};

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: await loadMessages(locale),
  };
});
