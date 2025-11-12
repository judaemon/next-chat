import { useTranslations } from "next-intl";

export default function DashboardPage() {
  const t = useTranslations("header");

  return (
    <div>
      <h1>translated: {t("welcome")}</h1>
      <p>This is the DashboardPage inside DashboardLayout</p>
    </div>
  );
}
