// npx stryker run ./stryker/nomeDoArquivo.conf.json
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helper/renderWithRouter';
import { About } from '../components';

describe('Testes do componente About', () => {
  test('Testa se a página contém as informações sobre a Pokédex',
    () => {
      // Acessando elementos na tela
      renderWithRouter(<About />);
      // Fazendo os testes
      const pokedexInfos = screen.getByRole(
        'heading', { name: 'About Pokédex', level: 2 },
      );
      expect(pokedexInfos).toBeInTheDocument();
    });

  test('Testa se a página contém um heading h2 com o texto About Pokédex',
    () => {
      // Acessando elementos na tela
      renderWithRouter(<About />);
      // Fazendo os testes
      const pokedexAbout = screen.getByRole(
        'heading', { name: 'About Pokédex', level: 2 },
      );
      expect(pokedexAbout).toBeInTheDocument();
    });

  test('Testa se a página contém dois parágrafos com texto sobre a Pokédex.',
    () => {
      // Acessando elementos na tela
      renderWithRouter(<About />);
      // Fazendo os testes
      const paragraphsAboutPokedex = screen.getAllByText(/pokémons/i); // Aqui precisou cancelar o case sensitive
      expect(paragraphsAboutPokedex).toHaveLength(2);
    });

  test('Testa se a página contém a imagem de uma Pokédex',
    () => {
    //   // Acessando elementos na tela
      renderWithRouter(<About />);
      //   // Fazendo os testes
      const pokedexImgAlt = screen.getByRole('img', { name: /pokédex/i }); // Aqui precisou cancelar o case sensitive
      const pokedexImg = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
      expect(pokedexImgAlt).toBeInTheDocument();
      expect(pokedexImgAlt.src).toBe(pokedexImg);
    });
});
