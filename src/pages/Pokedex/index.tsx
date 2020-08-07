import React, { useState, FormEvent } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import PokeScreen from '../../components/PokeScreen';
import PokeStats from '../../components/PokeStats';

import api from '../../services/api';

import './styles.css';

interface PokemonProps {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  }
  stats: [{
    base_stat: number;
    stat: {
      name: string;
    }
  }]
}

const Pokedex: React.FC = () => {
  const [pokemon, setPokemon] = useState('');
  const [pokemons, setPokemons] = useState<PokemonProps | null>(null);

  async function handlePokemon(event: FormEvent){
    event.preventDefault();

    const response = await api.get(`/${pokemon}`);

    setPokemons(response.data);
  }

  return (
    <>
      <Header />
      <div id="pokedex">
        <form onSubmit={handlePokemon}>
          <Input 
            placeholder="Pesquisar pokemon" 
            value={pokemon} 
            onChange={event => setPokemon(event.target.value)} 
          />
        </form>
        <PokeScreen screenName={pokemons?.name} image={pokemons?.sprites.front_default} />
        <aside className="poke-screen">
          <PokeScreen screenName="Status">
            {pokemons && pokemons.stats.map((poke, index) => (
              <PokeStats key={index} statsName={poke.stat.name} statusValue={poke.base_stat} />
            ))}
          </PokeScreen>
        </aside>
      </div>
    </>
  );
}

export default Pokedex;