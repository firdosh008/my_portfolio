import React, { useState } from "react";

export default function Project() {
  const [currentSlide, setCurrentSlide] = useState(1);
  let name = ["SRA Hotel", "Tour Blog", "DevBhomi", "Simon Game", "Tasty.", "To-do-list","Any-mart","PathFinding"];
  let preview=["https://firdosh008.github.io/hotle-/","https://avsfffgsfgwt43.my.canva.site/","https://devbhomi.onrender.com/","https://firdosh008.github.io/simon-game/","https://yumy.onrender.com/","https://t0-do-list.onrender.com/","https://anymart.onrender.com/","https://firdosh008.github.io/path_vizualization/"]
  let source=["https://github.com/firdosh008/hotle-","","https://github.com/firdosh008/devbomi","https://github.com/firdosh008/simon-game","https://github.com/firdosh008/yumy","https://github.com/firdosh008/to_do_list","https://github.com/firdosh008/anymartBackend","https://github.com/firdosh008/path_vizualization"]
  const handleSlideChange = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <div id="projects" className="p-24 full_Projects">
      <h1 className="text-5xl h-fit ml-12 pl-12">
        <span className="deco">Rece</span>nt Projects
      </h1>
      <div className="span w-fit"></div>
      <div className="container">
        <div className="carousel">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((slideNumber) => (
            <input
              key={slideNumber}
              type="radio"
              name="slides"
              id={`slide-${slideNumber}`}
              checked={currentSlide === slideNumber}
              onChange={() => handleSlideChange(slideNumber)}
            />
          ))}
          <ul className="carousel__slides">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((slideNumber) => (
              <li key={slideNumber} className="carousel__slide">
                <figure>
                  <div>
                    <img
                      src={require(`../assets/project${slideNumber}.png`)}
                      alt={`Project ${slideNumber}`}
                    />
                  </div>
                  <div className="slide-content">
                    <h1 className="text-3xl font-bold m-4 text-center">{name[slideNumber - 1]}</h1>
                    <div className="slide-links">
                      <a href={preview[slideNumber-1]}><p className="text-lg font-bold">Preview</p></a>
                      <a href={source[slideNumber-1]}><p className="text-lg font-bold">Source Code</p></a>
                    </div>
                  </div>
                </figure>
              </li>
            ))}
          </ul>
          <ul className="carousel__thumbnails">
            {[1, 2, 3, 4, 5, 6,7,8].map((slideNumber) => (
              <li style={{ margin: 8 }} key={slideNumber}>
                <label htmlFor={`slide-${slideNumber}`}>
                  <img
                    src={require(`../assets/project${slideNumber}.png`)}
                    alt={`Thumbnail ${slideNumber}`}
                    style={{ width: 150 }}
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
