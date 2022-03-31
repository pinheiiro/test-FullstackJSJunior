# Teste para Vaga de Full Stack

> **API que realiza operações referente ao usuário**

## Sistema Operacional
- **Linux** foi o sistema operacional utilizado para desenvolvimento
- Distribuição utilizada foi o **Ubuntu 20.04**

## Ferramentas Utilizadas
- **Express** ( Construção da API )
- **Knex** ( Interação com Banco de Dados )
- **Swagger** ( Documentação da API )
- **Joi** ( Validações )
- **Dotenv** ( Variáveis de Ambiente )
- **Bcrypt** ( Criptografia de Senhas )
- **Docker** ( Container )
- **Docker Compose** ( Definição de Serviços )

## Serviços
- [x] Listar Usuários
- [x] Listar Usuário
- [x] Criar Novo Usuário
- [x] Deletar Usuário
- [x] Deletar Usuários

## Rotas Disponíveis
**Corpo da Requisição** | **Rotas** | **Métodos** | **Serviços**
---- | ---- | ---- | ----
-- | /api/v1/users | GET | Lista os Usuários
-- | /api/v1/users/:user_id | GET | Lista um Usuário
JSON(email, senha) | /api/v1/users | POST | Cria um Usuário
JSON(email, senha) | /api/v1/users/:user_id | PUT | Atualiza um Usuário
-- | /api/v1/users/:user_id | DELETE | Remove um Usuário
-- | /api/v1/users | DELETE | Remove os Usuários

## Informações Adicionais
- Prezando pela segurança a API não retorna a senha do usuário para o cliente
- Prezando pela segurança do usuário a API realiza criptografia da senha antes de salvar no banco
- O ID não foi colocado como UUID para facilitar a utilização e interação com a API, mas isso seria posto numa situação real
- Rotas de remoção não retorna dados apenas status de sucesso
- O arquivo **.env** foi comitado para facilitar o processo de utilização e gerar menos trabalho no momento da execução

## Documentação
#### A Documentação se encontra na rota: */documentation*
![Documentação com Swagger](https://github.com/pinheiiro/test-FullstackJSJunior/blob/main/assets/Documenta%C3%A7%C3%A3o.png)

## Exemplos
- #### Listagem de Usuários

![Listagem completa](https://github.com/pinheiiro/test-FullstackJSJunior/blob/main/assets/Listar%20Usu%C3%A1rios.png)

- #### Listagem de Usuário

![Listagem única](https://github.com/pinheiiro/test-FullstackJSJunior/blob/main/assets/Listar%20Usu%C3%A1rio.png)

- #### Criação de Usuário

![Criação](https://github.com/pinheiiro/test-FullstackJSJunior/blob/main/assets/Criar%20Usu%C3%A1rio.png)

- #### Atualização de Usuário

![Atualização](https://github.com/pinheiiro/test-FullstackJSJunior/blob/main/assets/Atualizar%20Usu%C3%A1rio.png)

- #### Remoção de Usuário

![Remoção](https://github.com/pinheiiro/test-FullstackJSJunior/blob/main/assets/Deletar%20Usu%C3%A1rio.png)

- #### Remoção de Usuários

![Remoções](https://github.com/pinheiiro/test-FullstackJSJunior/blob/main/assets/Deletar%20Usu%C3%A1rios.png)


## Sobre Mim
#### [Portifólio Pessoal](https://pinheiro.vercel.app/)
