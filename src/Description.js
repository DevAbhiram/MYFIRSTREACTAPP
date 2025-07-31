// Description.js
import React from 'react';

function Description({ text, image }) {
  return (
    <section>
      <h2>About the Temple</h2>
      <p>{text}</p>
      <img src={image} alt="Jagannath Temple" width="100%" />
    </section>
  );
}

export default Description;
