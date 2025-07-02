const SectionBienvenida = () => {
  return (
    <section id="inicio" className="w-full h-[40vh] md:h-[80vh] bg-gradient-to-b from-[#0f172a] to-blue-900">
      <video 
        src="/5756199-hd_1920_816_24fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center  text-white h-[40vh] md:h-[80vh]">
        <h1 className="text-2xl md:text-4xl font-bold drop-shadow-lg">¡Bienvenido a Gainz Tracker!</h1>
        <p className="text-lg  mt-2 drop-shadow-lg">Tu progreso fitness empieza aquí.</p>
      </div>
    </section>
  );
}

export default SectionBienvenida;