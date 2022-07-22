import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  return (
    <>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>reviews
          </h2>
        </div>
        <div className="section-center">
          <article className="nextSlide">
            <img
              src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
              alt="maria ferguson"
              className="person-img"
            />
            <h4>maria ferguson</h4>
            <p className="title">office manager</p>
            <p className="text">
              Fingerstache umami squid, kinfolk subway tile selvage tumblr man
              braid viral kombucha gentrify fanny pack raclette pok pok
              mustache.
            </p>
            <FaQuoteRight className="icon" />
          </article>
          <button className="prev">
            <FiChevronLeft />
          </button>
          <button className="next">
            <FiChevronRight />
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
