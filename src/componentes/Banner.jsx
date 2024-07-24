import React, { useState } from "react";
import '../css/Banner.css';
import back from '../imagenes/slides/back.png';
import next from '../imagenes/slides/next.png';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const titulo = [
    'Prueba1',
    'Prueba2',
    'Prueba3',
    'Prueba4'
  ];

  const descripcion = [
    '1. Vestibulum id imperdiet elit, interdum varius urna. Quisque sit amet vulputate enim. In ullamcorper in est eu malesuada. Maecenas aliquet consequat velit vel porttitor. Praesent cursus justo quis lacus luctus feugiat. Pellentesque id est accumsan, placerat ipsum eu, tincidunt orci. Nullam eget pulvinar risus, ut viverra dui.',
    '2. Vestibulum id imperdiet elit, interdum varius urna. Quisque sit amet vulputate enim. In ullamcorper in est eu malesuada. Maecenas aliquet consequat velit vel porttitor. Praesent cursus justo quis lacus luctus feugiat. Pellentesque id est accumsan, placerat ipsum eu, tincidunt orci. Nullam eget pulvinar risus, ut viverra dui.',
    '3. Vestibulum id imperdiet elit, interdum varius urna. Quisque sit amet vulputate enim. In ullamcorper in est eu malesuada. Maecenas aliquet consequat velit vel porttitor. Praesent cursus justo quis lacus luctus feugiat. Pellentesque id est accumsan, placerat ipsum eu, tincidunt orci. Nullam eget pulvinar risus, ut viverra dui.',
    '4. Vestibulum id imperdiet elit, interdum varius urna. Quisque sit amet vulputate enim. In ullamcorper in est eu malesuada. Maecenas aliquet consequat velit vel porttitor. Praesent cursus justo quis lacus luctus feugiat. Pellentesque id est accumsan, placerat ipsum eu, tincidunt orci. Nullam eget pulvinar risus, ut viverra dui.'
  ];

  const imagenes = [
    require('../imagenes/slides/slide-1.jpeg'),
    require('../imagenes/slides/slide-2.jpg'),
    require('../imagenes/slides/slide-3.jpg'),
    require('../imagenes/slides/slide-4.png')
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % titulo.length);
  };

  const handleBack = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + titulo.length) % titulo.length);
  };

  return (
    <main className="banner">
      <div className="contenedor-slide">
        <div className="contenido-slide">
          <section className="texto-slide">
            <h2>{titulo[currentSlide]}</h2>
            <p>{descripcion[currentSlide]}</p>
          </section>
          <img 
            src={imagenes[currentSlide]} 
            alt={titulo[currentSlide]} />
        </div>
      </div>
      <img 
        src={back} 
        alt="Anterior"
        id="back" 
        onClick={handleBack}/>
      <img 
        src={next}
        alt="Siguiente" 
        id="next"
        onClick={handleNext}/>
    </main>
  );
}

export default Banner;
