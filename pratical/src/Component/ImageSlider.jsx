import { useState, useEffect } from "react";

function ImageSlider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [images, setImages] = useState([]);

// api--once--json--mapped-images-error
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=4")
      .then((response) => response.json())
      .then((data) => {
        const urls = data.map((item) => item.thumbnailUrl);
        setImages(urls);
      })
      .catch((error) => console.error(error));
  }, []);

 
  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousSlide = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex + images.length - 1) % images.length
    );
  };

  return (
    <div>
      {images.length > 0 ? (
        <img src={images[slideIndex]} alt="" />
      ) : (
        <p>Loading...</p>
      )}
      <div>
        <button onClick={previousSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}

export default ImageSlider;
