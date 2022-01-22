# Entrega: Cadastro pets
Você irá criar uma api para realizar o cadastro de pets para isso teremos apenas um endpoint /animals que recebera os métodos POST e GET.

### Aviso!
Todos os testes para essa entrega já foram implementados, clone esse repositório para começar o desenvolvimento do projeto..

## Rotas
### POST /animals
Os dados deverão ser salvos em alguma variavel para que possamos fazer a busca no metodo GET depois.

#### Requisição:
```json
{
    "name": "Bob",
    "animal": "dog",
    "weigth": 2.45,
    "color": "black",
    "breed": "yorkshire"
}
```
#### Resposta: Status 201
```json
{
    "id": 1,
    "name": "Bob",
    "animal": "dog",
    "weigth": 2.45,
    "color": "black",
    "breed": "yorkshire",
    "createdAt": "Mon, 08 Nov 2021 14:07:10 GMT"
}
```
**Regras**:
- name: Campo obrigatório. Caso não seja enviado, deve ser retornado o status code 400 e uma mensagem de erro personalizada.
- createdAt: Deve ser criado automaticamente no momento de cadastro e salvo com o formato UTC. De uma olhada na documentação. Caso seja enviado algum valor no momento da criacao, deve ser ignorado e criado automaticamente baseado na hora atual.
- Os demais campos são todos opcionais e deve ser retornado a chave do objeto mesmo que não seja enviado nada para elas. Podendo ser null ou uma string vazia "".


### GET /animals
Deve retornar todos os pets cadastrados no metodo POST.

#### Requisição:
Não possui corpo de requisição.

#### Resposta: Status 200
```json
[
    {
        "id": 1,
        "name": "Bob",
        "animal": "dog",
        "weigth": 2.45,
        "color": "black",
        "breed": "yorkshire",
        "createdAt": "Mon, 08 Nov 2021 14:07:10 GMT"
    },
    {
        "id": 2,
        "name": "Miu",
        "animal": "cat",
        "weigth": 2.10,
        "color": "gray",
        "breed": "ocicat",
        "createdAt": "Mon, 09 Nov 2021 09:23:45 GMT"
    },
    {
        "id": 3,
        "name": "Hamtaro",
        "animal": "hamster",
        "weigth": 0.30,
        "color": "white and orange",
        "breed": "golden",
        "createdAt": "Mon, 09 Nov 2021 10:17:31 GMT"
    }
]
```

**Regras**:
- Caso não exista nenhum valor cadastrado deve retornar um array vazio [] mantendo o status 200.
