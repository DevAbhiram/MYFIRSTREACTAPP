import React from 'react';
import Header from './Header';
import Description from './Description';
import Dharshans from './Dharshans';
import Login from './Login';

function App() {
  return (
    <div className="app-container">
      <Header title="Jagannath Temple - Puri" />
      <Description
        text="The Jagannath Temple in Puri is one of the Char Dham pilgrimage sites. It is an architectural marvel."
        image="https://wallpaperaccess.com/full/8888810.jpg"
      />
      <Dharshans />
      <Login />
    </div>
  );
}

export default App;
