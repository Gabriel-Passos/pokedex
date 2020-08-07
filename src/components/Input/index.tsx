import React, { InputHTMLAttributes } from 'react';

import pokeIcon from '../../assets/pokemon-icon.svg';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const Input: React.FC<InputProps> = ({  placeholder, ...rest }) => {
  return (
    <div id="input-block">
      <input placeholder={placeholder} type="text" {...rest} />

      <button type="submit">
        <img src={pokeIcon} alt="Botão pokemon"/>
      </button>
    </div>
  );
}

export default Input;