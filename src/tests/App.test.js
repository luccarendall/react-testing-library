// npx stryker run ./stryker/nomeDoArquivo.conf.json
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './aux/renderWithRouter';

describe('Testes do componente App', () => {
  test('Testa se o topo da aplicação contém um conjunto fixo de links de navegação',
    () => {
      // Acessando elementos na tela
      // Dica: Usar  {name: /exemplo/i} para cancelar o case sensitive. Se o avaliador der problema eu coloco.
      renderWithRouter(<App />);
      const home = screen.getByRole('link', { name: 'Home' });
      const about = screen.getByRole('link', { name: 'About' });
      const favoritePokemons = screen.getByRole('link', { name: 'Favorite Pokémons' });

      // Fazendo os testes
      expect(home).toBeInTheDocument();
      expect(about).toBeInTheDocument();
      expect(favoritePokemons).toBeInTheDocument();
    });

  test('Testa se a aplicação redireciona p/ a página inicial ao clicar no link Home',
    () => {
      const { history } = renderWithRouter(<App />);
      const home = screen.getByRole('link', { name: 'Home' });
      userEvent.click(home);
      expect(history.location.pathname).toBe('/');
    });

  test('Testa se a aplicação redireciona p/ a página About ao clicar no link About',
    () => {
      const { history } = renderWithRouter(<App />);
      const about = screen.getByRole('link', { name: 'About' });
      userEvent.click(about);
      expect(history.location.pathname).toBe('/about');
    });

  test('Testa se a aplicação redireciona p/ Poke Favoritados ao clicar no link favorites',
    () => {
      const { history } = renderWithRouter(<App />);
      const favorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
      userEvent.click(favorite);
      expect(history.location.pathname).toBe('/favorites');
    });

  test('Testa se a aplicação redireciona p/ Not Found ao entrar em uma URL desconhecida.',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/notFound');
      const notfound = screen.getByText('Page requested not found');
      expect(notfound).toBeDefined();
    });
});
