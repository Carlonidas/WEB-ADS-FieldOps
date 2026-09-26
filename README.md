# Field Ops — Painel do Supervisor

Protótipo web responsivo do **Painel do Supervisor** do sistema **Field Ops**, uma solução para gestão de inspeções em campo.

O painel é voltado para o **supervisor**, profissional responsável por organizar os cadastros, planejar inspeções, atribuí-las aos técnicos e revisar os resultados enviados após a execução em campo.

> ⚠️ Este projeto é **apenas um protótipo visual**. Não há banco de dados, API, autenticação real nem implementação de regras de negócio. Todos os dados exibidos são fictícios e ficam diretamente no HTML.

---

## 👤 Integrante

| Nome | GitHub |
| --- | --- |
| Carlos Henrique Mendes da Silva |  |

> Projeto desenvolvido individualmente.

---

## 🖥️ Telas do protótipo

| Tela | Descrição |
| --- | --- |
| **Dashboard** | Menu de navegação, cards de indicadores (pendentes, em andamento, concluídas e com não conformidades), tabela de inspeções recentes, gráfico/elemento visual de andamento e alertas de inspeções prioritárias. |
| **Clientes** | Lista de clientes com busca, filtros e botões visuais de cadastrar, editar, visualizar e excluir. |
| **Locais** | Lista de locais de inspeção com busca, filtros e botões visuais de ação. |
| **Equipamentos** | Lista de equipamentos com busca, filtros e botões visuais de ação. |
| **Modelos de Checklist** | Modelos com nome, descrição, quantidade de itens, versão e status (rascunho/publicado), com botões de criar, editar, duplicar e publicar. |
| **Planejamento de Inspeção** | Formulário para nova inspeção: cliente, local, equipamento, modelo de checklist, técnico responsável, data, prioridade e observações. |
| **Acompanhamento de Inspeções** | Tabela com código, cliente, equipamento, técnico, data, prioridade e status, com filtros visuais por status, cliente, técnico e período. |
| **Revisão de Inspeção** | Detalhes de uma inspeção concluída: informações gerais, respostas do checklist, fotos/evidências fictícias, não conformidades, observações do técnico, histórico de status e botões de aprovar/reprovar. |

### Status de inspeção utilizados

`Planejada` · `Em andamento` · `Aguardando revisão` · `Aprovada` · `Reprovada` · `Cancelada`

---

## 🛠️ Tecnologias utilizadas

* **HTML5**

* **CSS3** (arquivo CSS próprio para a identidade visual do painel)

* **Bootstrap 5**

* **Bootstrap Icons**

Componentes Bootstrap utilizados: Navbar, Grid, Cards, Tabelas, Formulários, Botões, Badges, Alerts, Dropdowns e Modais.

---

## 📁 Estrutura do projeto

```
fieldops/
├── index.html              # Dashboard
├── clientes.html           # Lista de clientes
├── locais.html             # Lista de locais de inspeção
├── equipamentos.html       # Lista de equipamentos
├── checklists.html         # Modelos de checklist
├── planejamento.html       # Planejamento de nova inspeção
├── inspecoes.html          # Acompanhamento das inspeções
├── revisao.html            # Revisão de uma inspeção
├── css/
│   └── style.css           # Estilos personalizados
├── img/                    # Imagens e evidências fictícias
└── README.md
```

---

## 🌿 Organização no GitHub

* Branches: `main` e `dev`

* Desenvolvimento realizado na branch `dev`

* Pull Request da `dev` para a `main`, com merge após revisão

* GitHub Project com as colunas: **Backlog**, **A fazer**, **Em andamento**, **Em revisão** e **Concluído**

---

## 🔗 Links da entrega

| Item | Link |
| --- | --- |
| Repositório |  |
| GitHub Project |  |
| Pull Request |  |
| GitHub Pages |  |

---

## 🚫 Fora do escopo

Aplicativo/telas do técnico em campo, leitura de QR Code, funcionamento offline, sincronização de dados, login real, backend, banco de dados, API e JavaScript próprio para regras de negócio.#
