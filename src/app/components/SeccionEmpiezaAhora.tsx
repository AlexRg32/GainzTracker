'use client';
import { useRouter } from 'next/navigation';

const SeccionEmpiezaAhora = () => {
  const Router = useRouter();
  return (
    <section id="empieza-ahora" className="p-10 bg-[#0f172a] text-[#f1f5f9] mt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Empieza ahora</h2>
        <p className="mb-6">Únete y desbloquea todas las características</p>
        <button 
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={() => Router.push('/login')}>
          Regístrate
        </button>
      </div>
    </section>
  );
}
export default SeccionEmpiezaAhora;