
import React from 'react';
import Header from './components/header';
import SectionBienvenida from './components/WelcomeSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import SeccionEmpiezaAhora from './components/SeccionEmpiezaAhora';

export default function Home() {
  return (
    <>
      <Header />

      {/* Sección 1: Bienvenida */}
      <SectionBienvenida />

      {/* Sección 2: Servicios o funcionalidades */}
    <FeaturesSection />

      {/* Sección 3: Contacto o llamada a la acción */}
     <SeccionEmpiezaAhora />

       <Footer>

       </Footer>

    </>
  );
}
