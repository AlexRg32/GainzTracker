
import React from 'react';
import Header from './components/header';
import SectionBienvenida from './components/WelcomeSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />

      {/* Sección 1: Bienvenida */}
      <SectionBienvenida />

      {/* Sección 2: Servicios o funcionalidades */}
    <FeaturesSection />

      {/* Sección 3: Contacto o llamada a la acción */}
      <section id="contact" className="p-10 bg-[#0f172a] text-[#f1f5f9] mt-20">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-semibold text-white mb-4">Empieza ahora</h2>
    <p className="mb-6 text-gray-300">Únete y desbloquea todas las características</p>
    <button className="bg-[#ef4444] text-white px-6 py-2 rounded-xl hover:bg-[#dc2626] transition">
      Crear Cuenta
    </button>
  </div>
</section>

       <Footer>

       </Footer>

    </>
  );
}
