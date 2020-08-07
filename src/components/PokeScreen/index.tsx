import React from 'react';

import './styles.css';

interface PokeScreenProps {
  screenName?: string;
  image?: string;
  pokeName?: string;
}

const PokeScreen: React.FC<PokeScreenProps | null> = ({ screenName, image, pokeName, children }) => {
  return (
    <div id="poke-screen">
      <div className="poke-screen-content">
        <fieldset>
          <legend>{screenName}</legend>

          {children}

          <img src={image} alt={pokeName}/>
        </fieldset>
      </div>
    </div>
  );
}

export default PokeScreen;