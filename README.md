# Projeto de Testes em React

Este projeto foi criado para demonstrar a implementação de testes em React utilizando as bibliotecas [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) e [Jest](https://jestjs.io/).

## Como executar os testes

1. Clone este repositório
2. Instale as dependências executando o comando `npm install` ou `yarn install`
3. Execute os testes com o comando `npm test` ou `yarn test`

## Estrutura de arquivos

- A pasta `src` contém os componentes React utilizados neste projeto.
- A pasta `tests` contém os arquivos de teste correspondentes aos componentes da pasta `src`.

## Princípios utilizados

- **Testar o comportamento, não a implementação**: Os testes devem se preocupar em verificar se o componente se comporta corretamente, e não se ele foi implementado de uma forma específica.
- **Isolar os componentes**: Cada componente deve ser testado isoladamente, sem depender de estado ou dados externos.
- **Evitar o uso de selectores de classe ou ID**: O React Testing Library incentiva o uso de selectores baseados em rótulos (labels) ao invés de selectores baseados em atributos (como classe ou ID). Isso ajuda a evitar problemas quando a estrutura do componente é modificada.

## Recursos adicionais

- [Documentação do React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Documentação do Jest](https://jestjs.io/docs/en/getting-started)
- [Guia de testes do React](https://reactjs.org/docs/testing.html)
