# Basic Git Repo fetcher
Carrega informações primárias de algum determinado repositório do github via Angular-Cli.

Este projeto foi feito com [Angular CLI](https://github.com/angular/angular-cli) versão 13.3.5.

## O que é?

Single page aplication que exibe resultados primários de repositórios do Github, próprios ou relativos, de acordo com o nome do usuário. Os resultados podem ser filtrados de duas formas:
- Se você clica no checkbox "Apenas repositórios privados?" os resultados mostrarão os repositórios privados criados pelo usuário.
- Caso contrário, os resultados mostrados serão os repositórios alheios marcados como estrela pelo usuário, os relativos

## Como instalar e utilizar?

Primeiramente, faça um git clone de https://github.com/Bcsilva/gitrep-react

> git clone https://github.com/Bcsilva/gitrep-angular.git

Depois, instale as dependências:

> npm install

Vá ao diretório

> cd gitrep-angular

E execute o projeto

> ng serve

Se tudo der certo, ele rodará no seguinte link `http://localhost:4200/`

Para compilar o projeto, rode o comando `ng build`. O material compilado estará localizado no diretório `dist/`.

## Como funciona?

A aplicação utiliza os conceitos básicos de Angular, focada em um componente e módulos singulares, biblioteca padrão de formulários e dependências externas: Bootstrap e Axios.

Todo a parte lógica se encontra em app.component.ts, com as funções utilizadas pelo formulário.

Em app.component.html, temos o formulário em HTML com campos mapeados em ngModel e também os repetidores de informações para mostrar os resultados de busca.