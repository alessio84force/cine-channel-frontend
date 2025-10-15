import CreatorOnboardingClient from '@/components/CreatorOnboardingClient';

export const metadata = {
  title: 'Crear canal · Cine-Channel',
  description: 'Configura tu canal y completa el pago único de 9,99 €.'
};

export default async function CreatorOnboardingPage({ params }: { params: Promise<{ locale: string }> }) {
  return <CreatorOnboardingClient locale={(await params).locale} />;
}
