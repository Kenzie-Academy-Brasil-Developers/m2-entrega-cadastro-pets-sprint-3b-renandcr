const request = require('supertest') 
const app = require('../app')

const mockAnimal = {
    "name": "teste"
}


describe('Teste rota POST /animals', () => {
    test('Se retorna o status correto', async () => {
        const res = await request(app).post('/animals').send(mockAnimal)
        expect(res.statusCode).toBe(201)
    })

    test('Se os dados possuem todas as chaves', async () => {
        const res = await request(app).post("/animals").send(mockAnimal)

        const keys = ["id","name","animal","weigth","color","breed","createdAt"]

        expect(Object.keys(res.body).sort()).toEqual(keys.sort())
    })

    test('Se nao for enviado "name" deve retornar status 404', async () => {
        const res = await request(app).post("/animals").send({"breed": "teste"})
        expect(res.statusCode).toBe(400)
    })


    test('Se nao for enviado "name" deve retornar alguma mensagem de erro', async () => {
        const res = await request(app).post("/animals").send({"breed": "teste"})
        expect(Object.keys(res.body).length).not.toBe(0)
    })

    test('Se o "id" esta sendo incrementado da forma correta', async () => {
        const res = await (await request(app).post("/animals").send(mockAnimal))
        expect(res.body.id).toBe(3)
    })

})
