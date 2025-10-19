import ChannelSettingsClient from '@/components/ChannelSettingsClient';

export const metadata = {
  title: 'Ajustes del canal · Cine-Channel',
  description: 'Configura tu canal y tu precio mensual.'
};

export default async function ChannelSettingsPage({ params }: { params: { locale: string; slug: string } }) {
  const { locale, slug } = params;
  return <ChannelSettingsClient locale={locale} slug={slug} />;
}
