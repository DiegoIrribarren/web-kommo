import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Beneficios from "./components/Beneficios";
import Rubros from "./components/Rubros";
import Proceso from "./components/Proceso";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F3F8F6] text-[#17231F] antialiased">
      <Navbar />
      <main>
        <Hero />
        <Beneficios />
        <Rubros />
        <Proceso />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}