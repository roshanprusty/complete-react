import  { useState } from "react";

function ImageSlider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [
    "https://via.placeholder.com/400x300",
    "https://openaicom.imgix.net/ed21faee-ce44-4d91-a70f-26538ad66d5b/dall-e.jpg?fm=auto&auto=compress,format&fit=min&rect=0,0,4080,4080&w=1919&h=1919",
    "https://via.placeholder.com/400x300",
    "https://via.placeholder.com/400x300",
  ];

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
      <img src={images[slideIndex]} alt="" style={{height : '400px', width : '400px'}}/>
      <div>
        <button onClick={previousSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}

export default ImageSlider;
