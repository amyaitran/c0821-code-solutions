import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function ListItem(props) {
  return <li>{props.value}</li>;
}

function PokeDexList(props) {
  const pokedex = props.pokedex;
  return (
    <ul>
      {pokedex.map(pokemon =>
        <ListItem key={pokemon.number}
                  value={pokemon.name} />
      )}
    </ul>
  );
}

ReactDOM.render(
  <PokeDexList pokedex={pokedex} />,
  document.querySelector('#root')
);
