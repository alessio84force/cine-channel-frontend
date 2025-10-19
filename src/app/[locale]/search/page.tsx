import SearchClient from '@/components/SearchClient';

export const metadata = {
  title: 'Buscar · Cine-Channel',
  description: 'Busca canales por título y categoría.'
};

export default async function SearchPage() {
  return <SearchClient />;
}
