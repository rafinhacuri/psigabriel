# AGENTS.md

## Projeto

Este projeto se chama **psicologo**.

Site do Psicólogo clínico Gabriel Curi

## Stack

### Frontend

- Nuxt
- Vue
- Tailwind CSS
- Nuxt UI
- TypeScript
- Bun

### Backend

- Go
- Gin

### Bancos e serviços

- MongoDB como banco de dados da aplicação
- LDAP como banco de usuários
- Redis como cache

## Arquitetura

O frontend Nuxt usa `useApiUrl()` para montar a URL base das chamadas para o backend em Go.

Exemplo padrão:

```ts
const apiUrl = useApiUrl()
const { data, error } = await useFetch<GoRes>(`${apiUrl}/rota`)
```

## Regras gerais

- Mantenha a estrutura atual de organização do projeto.
- Não altere a organização de pastas sem necessidade.
- Não crie novas variáveis de ambiente sem permissão.
- Não instale novas dependências, módulos do Nuxt ou pacotes sem permissão.
- Ignore o erro do websiteId do umami, esse ID fica no .env
- Ao atualizar o i18n as chaves devem estar na mesma linha em cada arquivo de cada idioma
- Sempre adicione o umEvent em funções ou botões interessantes
- Nunca altere:
  - `package.json`
  - `.oxfmtrc.json`
  - `.oxlintrc.json`
  - `.golangci-lint`

## Frontend

### Vue / Nuxt

- Sempre use `<script setup lang="ts">`.
- Sempre coloque o `<script setup lang="ts">` acima do `<template>`.
- Não crie tags `<style>`.
- Use sempre Tailwind CSS para estilização.
- O Nuxt tem auto imports habilitado.
- Não adicione imports manuais do Vue, como:
  - `ref`
  - `computed`
  - `watch`
  - `onMounted`
- Não adicione imports manuais de composables ou utils auto-importados pelo Nuxt.

### TypeScript

- Use tipagem explícita sempre que fizer sentido.
- Todo `useFetch` deve usar por padrão a tipagem `<GoRes>`.
- `GoRes` é:

```ts
type GoRes = {
  message: string
}
```

Exemplo:

```ts
const apiUrl = useApiUrl()
const { data, error } = await useFetch<GoRes>(`${apiUrl}/rota`)
```

Use outra tipagem apenas quando a resposta exigir, geralmente com tipos gerados ou compatíveis com o backend Go.

### Validação do frontend

Sempre rode antes de finalizar alterações no frontend:

```sh
bun fmt:fix
bun lint:fix
bun typecheck
```

## Backend

### Go / Gin

- Use Go com Gin.
- Tente criar funções pequenas e separadas.
- Sempre que possível, mantenha no máximo uma função principal por arquivo.
- Mantenha funções com o mínimo de linhas possível.
- Controllers devem apenas orquestrar chamadas para funções menores.
- Nunca coloque fuções que não serão usadas pelo routes no controller, elas devem estar em outro pacote

Exemplo de fluxo esperado em um controller:

1. Validar entrada
2. Verificar se usuário já existe
3. Validar CPF
4. Criptografar senha
5. Criar usuário
6. Retornar resposta final

Cada etapa deve preferencialmente estar em uma função separada.

### Controllers

- Nunca retorne o erro real da função no `c.JSON`.
- Para erros enviados ao usuário, retorne mensagens genéricas.
- Se for erro interno do servidor, chame `util.Sentry(c, err)`.
- Erros do usuário, como senha errada ou dados inválidos, não precisam chamar `util.Sentry`.
- Sempre retorne `c.JSON(200, ...)` no fim da função quando a operação der certo.
- Sempre use números diretamente no `c.JSON`, não constantes do pacote `http`.
- Quando a resposta não for `200`, use sempre `c.AbortWithStatusJSON(...)`.
- Não use `c.JSON(...)` para respostas de erro.

### Exemplo de resposta correta

```go
c.JSON(200, gin.H{
	"message": "Usuário criado com sucesso",
})
```

### Exemplo de erro correto

```go
c.AbortWithStatusJSON(400, gin.H{
	"message": "Dados inválidos",
})
```

### Exemplo de erro interno

```go
util.Sentry(c, err)

c.AbortWithStatusJSON(500, gin.H{
	"message": "Erro interno do servidor",
})
```

## Organização de funções Go

Ao criar funções no Go, seja direto e mantenha responsabilidade única.

Exemplo:

Arquivo:

```txt
delete-user.go
```

Função:

```go
func DeleteUser(...) error {
	// somente deleta o usuário
}
```

Se houver validação, coloque em outro arquivo/função.

Exemplo:

```txt
validate-user-id.go
delete-user.go
```

## Validação do backend

Sempre rode antes de finalizar alterações no backend:

```sh
bun golint:fix
```

## Estilo esperado

- Prefira código simples, direto e fácil de manter.
- Evite funções grandes.
- Evite misturar validação, regra de negócio e resposta HTTP na mesma função.
- Preserve o padrão já existente no projeto.
- Não faça refactors grandes sem necessidade.
