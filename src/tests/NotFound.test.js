import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helper/renderWithRouter';
import { NotFound } from '../components';

describe('Testes do componente Not Found', () => {
  test('Testa se se página contém um heading h2 com o texto Page requested not found',
    () => {
      // Acessando elementos na tela
      renderWithRouter(<NotFound />); // tem uma forma de colocar isso fora no escopo global pra não precisar ficar colocando em todos os testes. Acho que usa o beforeEach. Lembrar de procurar.
      // Fazendo os testes
      const h2 = screen.getByRole(
        'heading', { name: /Page requested not found/i, level: 2 },
      );
      expect(h2).toBeInTheDocument();
    });

  test('se página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
    () => {
      // Acessando elementos na tela
      renderWithRouter(<NotFound />);
      // Fazendo os testes
      const notFoundImgAlt = screen.getByRole(
        'img', { name: /Pikachu crying because the page requested was not found/i },
      ); // Aqui precisou cancelar o case sensitive
      const notFoundImg = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
      expect(notFoundImgAlt).toBeInTheDocument();
      expect(notFoundImgAlt.src).toBe(notFoundImg);
    });
});
