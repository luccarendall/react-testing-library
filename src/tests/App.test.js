// npx stryker run ./stryker/nomeDoArquivo.conf.json
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './aux/renderWithRouter';

describe('Testes do componente <App.js />', () => {
  test('Testa se o topo da aplicação contém um conjunto fixo de links de navegação',
    () => {
      // Acessando elementos na tela
      // Dica: Usar  {name: /exemplo/i} para cancelar o case sensitive. Se o avaliador der problema eu coloco.
      render(<App />);
      const home = screen.getByRole('link', { name: 'Home' });
      const about = screen.getByRole('link', { name: 'About' });
      const favoritePokemons = screen.getByRole('link', { name: 'Favorite Pokémons' });

      // Fazendo os testes
      expect(home).toBeInTheDocument();
      expect(about).toBeInTheDocument();
      expect(favoritePokemons).toBeInTheDocument();
    });

  test('Testa se a aplicação redireciona para a página inicial ao clicar no link Home',
    () => {
      const { history } = renderWithRouter(<App />);
      const home = screen.getByRole('link', { name: 'Home' });
      userEvent.click(home);
      expect(history.location.pathname).toBe('/');
    });
});

// test('', () => {});

// test('', () => {});

// test('', () => {});
