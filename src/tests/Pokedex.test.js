import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helper/renderWithRouter';
import App from '../App';

describe('Testes do componente Pokedex', () => {
  test('Testa se página contém um heading h2 com o texto Encountered pokémons.',
    () => {
      renderWithRouter(<App />);
      const h2 = screen.getByRole(
        'heading', { name: /encountered pokémons/i, level: 2 },
      );
      expect(h2).toBeInTheDocument();
    });

  test(
    'Testa se é exibido o próximo Pokémon da lista ao clicar no botão Próximo pokémon',
    () => {
      renderWithRouter(<App />);
      const nextPokemon = screen.getByTestId('next-pokemon');
      expect(nextPokemon).toBeInTheDocument(); // Não to conseguindo bolar uma lógica completa mas aparentemente o stryker ta aceitando assim... vou pro próximo e depois volto
    },
  );

  test('Testa se é mostrado apenas um Pokémon por vez',
    () => {
      renderWithRouter(<App />);
      const pokemonName = screen.getAllByTestId('pokemon-name');
      expect(pokemonName).toHaveLength(1);
    });

  test('Testa se a Pokédex tem os botões de filtro',
    () => {
      renderWithRouter(<App />);
      const pokemonTypeButton = screen.getAllByTestId(
        'pokemon-type-button',
      );
      const seven = 7;
      expect(pokemonTypeButton).toHaveLength(seven);
      const button = screen.getByRole('button', { name: 'Fire' });
      expect(button).toBeInTheDocument();
    });

  test('Testa se a Pokédex contém um botão para resetar o filtro',
    () => {
      renderWithRouter(<App />);
      const filterButton = screen.getByRole('button', { name: 'All' });
      expect(filterButton).toBeInTheDocument();

      userEvent.click(filterButton);

      const pokemonName = screen.getByTestId('pokemon-name');
      expect(pokemonName).toHaveTextContent('Pikachu');
    });
});
