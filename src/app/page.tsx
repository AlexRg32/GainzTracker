import React from 'react';
import Header from './components/header';
import SectionBienvenida from './components/WelcomeSection';
import FeaturesSection from './components/FeaturesSection';

export default function Home() {
  return (
    <>
      <Header />

      {/* Sección 1: Bienvenida */}
      <SectionBienvenida />

      {/* Sección 2: Servicios o funcionalidades */}
    <FeaturesSection />

      {/* Sección 3: Contacto o llamada a la acción */}
      <section id="contact" className=" p-10 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Get Started Today</h2>
          <p className="mb-6 text-gray-600">Join thousands of users and level up your fitness game.</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition">Create Account</button>
        </div>
      </section>
    </>
  );
}
