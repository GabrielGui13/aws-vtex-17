
<br />

> # Hiring Coders - Grupo 17 - AWS<br>
Hiring Coders FASE#3- Desafio Final (Gama Academy, Vtex. AWS)<br>
<br>
<br>

> # Índice
<details open="open">
  <ol>
    <li><a href="#desafio">Desafio</a></li>
    <li><a href="#objetivos">Objetivos</a></li>
    <li><a href="#equipe">Equipe do Projeto</a></li>
    <li><a href="#planejamento">Planejamento</a></li>
    <li><a href="#ferramentas">Ferramentas e Linguagens</a></li>
    <li><a href="#arquitetura">Arquitetura</a></li>
    <li><a href="#referencias">Referências</a></li>
  </ol>
</details>

<!-- DESAFIO -->
> # Desafio:
<br>

O desafio final se trava de usar uma temática  que deve estar relacionada com a loja de alguns dos patrocinadores abaixo<br>
Os patrocinadores são: AWS + ACCT + Corebiz<br>
Vtex - <https://vtex.com><br>
ACCT - <https://acct.global><br>
AWS - <https://aws.amazon.com><br>
Corebiz - <https://www.corebiz.ag><br>
Gama Academy - <https://www.gama.academy><br>
<br>
Nosso Grupo foi batizado com o número 17(um belo número primo), ficamos com o tema do patrocinador Amazon Web Serviços.<br>
Criamos nosso logotipo para representar nossa equipe:<br>
<br>
![logo](frontend/assets/logogrupo17.png)
<br>
<br>

Tema modelo foi da Amazon Web Services onde deveriamos usar cores e padronização de estilo do site original para nos inspirarmos.<br>
<br>
<br>

<!-- OBJETIVOS -->
>## Objetivos:
<br>

-Desenvolver um projeto com o uso de API para servir a integração de Leads, Clientes e os pedidos vendidos no e-commerce da AWS, utilizando as API´s VTEX.
API deverá gerenciar os clientes que se cadastrarem como lead, ou clientes que já compraram no e-commerce, permitindo o setor de Pós-venda promover campanhas de marketing, envio de news letters.<br>
-Ao concluir uma compra, verificar se o usuário que finalizou o carrinho de compra é o mesmo usuário cadastrado na base de dados lead da API AWS, identificar e marcar este usuário que era somente um prospecto na Base de Dados agora como cliente.<br>
-Listar os produtos e serviços oferecidos pela AWS.<br>
-Listar cadastro de Leads e Clientes pelo Admin da Vtex.<br>
No modulo Admin Vtex, implementar Consultas, informando a evolução da conversão de Lead e Cliente.<br>
<br>
<br>
<br>
<br>
<br>

<!-- EQUIPE DO PROJETO -->
>## Equipe do Projeto (GRUPO17):<br>
<br>
Composta por dez participantes:<br>

| NOME                                 | ATRIBUIÇÃO                    |
|--------------------------------------|-------------------------------|
| Débora Goulart                       | Representante e Dev Front End |
| Alessandro de Albuquerque Apolinário | Dev Back End                  |
| Cássio Alves                         | Dev Back End                  |
| Daniel Campos Soares                 | Dev Front End                 |
| Gabriel Guilherme                    | Dev Back End                  |
| João Paulo Muner Lenat               | Dev Back End                  |
| Josana Klagenberg                    | Dev Front End                 |
| Karine Freitas Maciel Momose         | Dev Front End                 |
| Luiz Jorge Mir Filho                 | Dev Front End                 |
| Rubens Ciambarella                   | Dev Front End                 |

<br>
<br>

<!-- PLANEJAMENTO -->
># Planejamento:
<br>
Iniciamos com a análise do desafio, entendemos as premissas, riscos, vulnerabilidades e principalmente as oportunidades, listamos todos os tópicos importantes para atender os requisitos do projeto, bem como a solicitação do nosso Cliente. Cada colaborador, enumerou as suas forças, aptidões, habilidades e experiência técnica, para definir se seria frontend ou backend.<br>
Definimos utilizar as técnicas e a cultura Scrum Master para a gestão do Projetos, em combinação utilizamos o método Kanbam para controlar as tarefas.<br>

O Grupo definiou como meta o primeiro MVP (minimum value product) com ajuda da ferramenta figma. Onde ficou mais claro quais missões cada integrante iria possuir.<br>
Utilizamos a ferramenta Trello, para registrar todas as funcionalidades do MVP, transformando cada missão em uma task a desenvolver. Cada Colaborador recebeu sua meta e objetivos;

Diariamente, antes de cada mentoria o grupo se reunia, debatia as dificuldades, explorava a Mentoria compartilhando as necessidades para destravar alguma tarefa. Os Mentores  ajudavam, sugerindo dicas e compartilhando experiências. Com as orientações dos Mentores, buscamos aprimorar o desenvolvimento dos desafios, facilitando assim o processo.

Utilizamos as ferramentas Gather e Discord para realizar as reuniões, detalhar, debater as evoluções e dificuldades. Sendo que no discord realizamos um diario de atividades, onde cada membro escrevia oque havia sido feito durante o dia respectivo.
<br>
<br>

<!-- ARQUITETURA -->
>## Arquitetura:
<br>

![arquitetura](frontend/assets/arquitetura.png)
<br>
<br>

<!-- FERRAMENTAS -->
>## Ferramentas e linguagens:

Utilizamos a plataforma de desenvolvimento **Vtex IO**, aplicamos o uso das linguagens de programação Type Script, Python, mesclamos o desenvolvimento de componentes de integração com react e Node.

Para estilizar e tornar a experência de usuário mais produtiva, ágil e dinâmica. Utilizou as melhores práticas com as **linguagens de tipação CSS, Tackyons e Markdown.** <br>

Utilizamos os serviços da **Amazon Web Services**,<br>

**API Gateway**:<br>
O Amazon API Gateway é um serviço da AWS para criação, publicação, manutenção, monitoramento e proteção de APIs REST e WebSocket em qualquer escala. Os desenvolvedores de API podem criar APIs que acessem a AWS ou outros web services, bem como dados armazenados na Nuvem AWS.<br>

 **AWS Lambda**:<br> 
 O AWS Lambda é um serviço de computação sem servidor que permite executar código sem provisionar ou gerenciar servidores, criando lógica de dimensionamento de cluster com reconhecimento de workloads, mantendo integrações de eventos ou gerenciando tempos de execução. <bt>

 **DynamoDB**:<br>
 O Amazon DynamoDB é um banco de dados de valores-chave e documentos que oferece desempenho em milissegundos de um dígito em qualquer escala. É um banco de dados totalmente gerenciado, multirregional, multiativo e durável com segurança, backup e restauração integrados e armazenamento em cache na memória para aplicativos em escala de Internet. <Br>
  
 **SES (Simple Email Service)**:<br>
O Amazon Simple Email Service (SES) é um serviço em nuvem de e-mail eficaz, flexível e dimensionável. Com ele, os desenvolvedores podem enviar e-mails de qualquer aplicação. É possível configurar rapidamente a compatibilidade do Amazon SES com vários casos de uso de e-mails, como comunicações transacionais, de marketing ou de e-mails em massa.<br>
<br>

<!-- IMPLEMENTAÇÕES -->
># Implementações:<br>
Utilizamos o bloco básico do Store Framework para criar a loja, foi o **tema Minimum-boilerplate-theme**:<br>

># Referências:
<br>

* [Treinamento Apps VTEX e Templates - Gama Academy](https://drive.google.com/drive/folders/1ENlJP6QgeVd1dACZgLlad0OstpOLHTLD)
* [Treinamento de Desenvolvimento VTEX IO](https://learn.vtex.com)
* [Documentação de Desenvolvimento VTEX IO](https://developers.vtex.com)
* [Documentação API Gateway - AWS](https://aws.amazon.com/pt/api-gateway/)
* [Documentação Lambda - AWS](https://aws.amazon.com/pt/lambda/)
* [Documentação DynamoDB - AWS](https://aws.amazon.com/pt/dynamodb/)
* [Temática - AWS](https://aws.amazon.com)

