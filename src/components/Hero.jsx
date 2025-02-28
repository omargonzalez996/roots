import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/video/flag.mp4" type="video/mp4" />
      </video>

      {/* Capa oscura para mejor contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Contenedor principal */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-12">
        {/* Columna del Slogan */}
        <div className="text-white text-center md:text-left md:w-1/2 py-10 px-20 space-y-5">
          <div className="flex items-center w-full">
            <span className="text-lg font-semibold">Texas Best Roofers</span>
            <hr className="flex-1 ml-4 border-gray-400" />
          </div>
          <h1 className="text-8xl md:text-6xl">SOUTHERN ROOTS</h1>
          <p>
            Roofing replacement mastered—our Texas roofing company team
            delivers the best craftsmanship for your home. Experience swift,
            detailed service with a personal touch from our dedicated
            professionals.
          </p>
        </div>

        {/* Columna del Formulario */}
        <div className="bg-base-100 p-6 md:p-8 rounded-2xl shadow-lg md:w-1/3 w-full mt-8 md:mt-0">
          <h2 className="text-xl font-semibold mb-4">Contáctanos</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Tu Nombre"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Tu Correo"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Tu Mensaje"
              className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
