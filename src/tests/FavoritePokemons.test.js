// npx stryker run ./stryker/nomeDoArquivo.conf.json
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helper/renderWithRouter';
import { FavoritePokemons } from '../components';
import App from '../App';

describe('Testes do componente Favorite Pokémons', () => {
  test('Testa se "No favorite pokemon found" aparece, caso não exista pokémons favoritos',
    () => {
      // Acessando elementos na tela
      renderWithRouter(<FavoritePokemons />);
      // Fazendo os testes
      const noFav = screen.getByText('No favorite pokemon found');
      expect(noFav).toBeInTheDocument();
    });

  test('Testa se são exibidos todos os cards de pokémons favoritados',
    () => {
      // Acessando elementos na tela e já iniciando testes na rota / (App)
      const { history } = renderWithRouter(<App />);
      expect(history.location.pathname).toBe('/');

      const CardDetails = screen.getByRole('link', { name: /more details/i });
      userEvent.click(CardDetails);

      const favoritePokemon = screen.getByRole(
        'checkbox', { name: /Pokémon favoritado/i },
      );
      userEvent.click(favoritePokemon);

      history.push('/favorites'); // caminhando para a rota favorites agora

      const favoritedPokemon = screen.getByText(/Pikachu/i);
      expect(favoritedPokemon).toBeInTheDocument();
    });
});
