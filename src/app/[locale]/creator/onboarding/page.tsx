import { redirect } from "next/navigation";

type Params = { locale?: string };

export default function Page({ params }: { params: Params }) {
  const lang = (params?.locale || "es") as string;
  redirect(`/${lang}/signin?callbackUrl=/${lang}/creator/onboarding`);
}
