import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [value, setValue] = useState(0);
  function getReviews() {
    setLoading(false);
    setReviews(data);
  }

  useEffect(() => {
    getReviews();
  });
  console.log(reviews);

  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    const { id, image, name, quote, title } = reviews[value];
    function slideControl(slideAction) {
      if (slideAction === 'next') {
        console.log(value, reviews.length, 'check this');

        if (value >= reviews.length - 1) {
          setValue(0);
        } else {
          setValue(value + 1);
        }
      } else {
        if (value <= 0) {
          setValue(reviews.length - 1);
        } else {
          setValue(value - 1);
        }
      }
    }
    return (
      <>
        <section className="section">
          <div className="title">
            <h2>
              <span>/</span>reviews
            </h2>
          </div>
          <div className="section-center">
            {/* {reviews.map((review) => {
              console.log(review);
              const { id, image, name, quote, title } = review;
              return (
                <article className="nextSlide" key={id}>
                  <img
                    src={image}
                    alt="maria ferguson"
                    className="person-img"
                  />
                  <h4>{name}</h4>
                  <p className="title">{title}</p>
                  <p className="text">{quote}</p>
                  <FaQuoteRight className="icon" />
                </article>
              );
            })} */}

            {
              <article className="nextSlide" key={id}>
                <img src={image} alt="maria ferguson" className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            }
            <button className="prev" onClick={() => slideControl('prev')}>
              <FiChevronLeft />
            </button>
            <button className="next" onClick={() => slideControl('next')}>
              <FiChevronRight />
            </button>
          </div>
        </section>
      </>
    );
  }
}

export default App;
