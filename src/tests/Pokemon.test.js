// // npx stryker run ./stryker/nomeDoArquivo.conf.json
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helper/renderWithRouter';
// import { Pokemon } from '../components';
import App from '../App';

describe('Testes do componente Pokemon', () => {
  test('Testa se é renderizado um card com as informações de determinado pokémon',
    () => {
      renderWithRouter(<App />);
      const pokemoName = screen.getByTestId('pokemon-name');
      const pokemonType = screen.getByTestId('pokemon-type');
      const PokemonWeight = screen.getByTestId('pokemon-weight');
      const PokemonCardImg = screen.getByAltText('Pikachu sprite');

      expect(pokemoName).toBeInTheDocument('Pikachu');
      expect(pokemonType).toBeInTheDocument('Electric');
      expect(PokemonWeight).toBeInTheDocument('Average weight: 6.0 kg');
      expect(PokemonCardImg.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    });

  test('Testa se o card indicado na Pokédex contém um link que exibe detalhes',
    () => {
      const { history } = renderWithRouter(<App />);
      const moreDetailsLink = screen.getByRole('link', { name: /more details/i });

      expect(moreDetailsLink).toBeInTheDocument();
      userEvent.click(moreDetailsLink);
      expect(history.location.pathname).toEqual('/pokemons/25');
    });

  test('Testa se ao clicar no link do Pokémon, sou redirecionado p/ a página de detalhes',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/pokemons/25');
      const favoritedPokemon = screen.getByRole('checkbox', {
        name: /Pokémon favoritado?/i,
      });
      userEvent.click(favoritedPokemon);
      const favoriteStar = screen.getByAltText(/Pikachu is marked as favorite/i);

      expect(favoriteStar).toBeInTheDocument();
      expect(favoriteStar.src).toContain('/star-icon.svg');
    });

  //   test('Testa se a URL exibida no navegador muda para /pokemon/<id>',
  //     () => {
  //     });
  //   test('Testa se existe um ícone de estrela nos Pokémons favoritados',
  //     () => {
  //     });
});
