"use client"

import Tarjeta from './Tarjeta'


const FeaturesSection = () => {
  //pecho, hombro, triceps, espalda, biceps, piernas
  return (
    <section id="features" className="p-10 bg-[#0f172a] text-[#f1f5f9] md:pt-25 ">
      <h1 className='text-center pb-10 text-2xl font-bold'>Pulsa un músculo para anotar tus RM</h1>
  <div className="flex flex-col  bg-samber-100 md:flex-row gap-10 justify-between items-center ">
    
    <Tarjeta
      nombre="Pectoral"
      icono={ <p className="text-4xl">💪</p> }
      onClick={() => console.log('Pecho clicked')}
    >
    </Tarjeta>
    <Tarjeta
      nombre="Bíceps"
      icono={ <p className="text-4xl">💪</p> }
      onClick={() => console.log('Pecho clicked')}
    >
    </Tarjeta>
    <Tarjeta
      nombre="Tríceps"
      icono={ <p className="text-4xl">💪</p> }
      onClick={() => console.log('Pecho clicked')}
    >
    </Tarjeta>
    <Tarjeta
      nombre="Hombros"
      icono={ <p className="text-4xl">💪</p> }
      onClick={() => console.log('Pecho clicked')}
    >
    </Tarjeta>
    <Tarjeta
      nombre="Espalda"
      icono={ <p className="text-4xl">💪</p> }
      onClick={() => console.log('Pecho clicked')}
    >
    </Tarjeta>
    <Tarjeta
      nombre="Piernas"
      icono={ <p className="text-4xl">💪</p> }
      onClick={() => console.log('Pecho clicked')}
    >
    </Tarjeta>
    
  </div>
</section>
  );
};
export default FeaturesSection;
