import "./HomePage.css";
import { useState, useEffect } from "react";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = [
    {
      title: "Our Expertise",
      text: "We specialize in staffing, IT solutions, and customizations. Our recruitment services ensure top talent aligns with a company's culture and objectives.",
    },
    {
      title: "Our Strategy",
      text: "We create unique strategies catering to our clients' strengths and opportunities, keeping businesses successful, competitive, and growth-oriented.",
    },
    {
      title: "Driving Growth",
      text: "Driving sales growth by leveraging the power of connections and meaningful engagement. Simplify your processes to multiply your business growth.",
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sections.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(goToNext, 3000);
    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="home-page">
      <h1 className="home-title">Welcome to RiGaMi Consultancy</h1>
      <div className="carousel-container">
        <div className="carousel-content">
          <div
            className="carousel-wrapper"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {sections.map((section, index) => (
              <div key={index} className="slide">
                <h2 className="section-title">{section.title}</h2>
                <p className="section-text">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="dots-container">
        {sections.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Home;
