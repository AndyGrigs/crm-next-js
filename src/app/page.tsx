import AddCompanyButton from '@/app/components/add-company-button';
import Sidebar from './components/sidebar';
import Header from './components/header';

export default function Home() {
  return (
    <main>
      <Header />
      <Sidebar />
      <AddCompanyButton />
    </main>
  );
}
