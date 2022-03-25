// // npx stryker run ./stryker/nomeDoArquivo.conf.json
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helper/renderWithRouter';
import { FavoritePokemons } from '../components';
import App from '../App';

describe('Testes do componente Pokemon', () => {
  test('Testa se é renderizado um card com as informações de determinado pokémon',
    () => {
    });
  test('Testa se o card indicado na Pokédex contém um link que exibe detalhes',
    () => {
    });
  test('Testa se ao clicar no link do Pokémon, sou redirecionado p/ a página de detalhes',
    () => {
    });
  test('Testa se a URL exibida no navegador muda para /pokemon/<id>',
    () => {
    });
  test('Testa se existe um ícone de estrela nos Pokémons favoritados',
    () => {
    });
});
