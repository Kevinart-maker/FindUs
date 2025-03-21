import Image from "next/image";
import Navbar from './../components/layout/Navbar';
import HomeFilters from './../components/layout/HomeFilters';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <section>
      <Navbar />
      <HomeFilters />
      <Footer />
    </section>
  );
}
