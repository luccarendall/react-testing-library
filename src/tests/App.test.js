// npx stryker run ./stryker/nomeDoArquivo.conf.json
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './..App';

describe('Testes do requisito 1', () => {
  test('01. Testa se o topo da aplicação contém um conjunto fixo de links de navegação',
    () => {
      // Acessando elementos na tela
      render(<App />);
      const home = screen.getByText('Home');
      const about = screen.getByText('About');
      const favoritePokemons = screen.getByText('Favorite Pokémons');

      // Fazendo os testes
      expect(home).toBeInTheDocument();
      expect(about).toBeInTheDocument();
      expect(favoritePokemons).toBeInTheDocument();
    });
});

// test('Testa se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação.', () => {});

// test('', () => {});

// test('', () => {});

// test('', () => {});
