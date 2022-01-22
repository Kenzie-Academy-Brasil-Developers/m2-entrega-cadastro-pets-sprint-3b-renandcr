const request = require('supertest') 
const app = require('../app')

const mockAnimal = {
    "name": "teste"
}

const mockDb = []


describe('Teste rota GET /animals', () => {
    test('Se retorna o status correto', async () => {
        const res = await request(app).get('/animals')
        expect(res.statusCode).toBe(200)
    })

    test('Se retorna um array vazio quando nao possui animais cadastrados', async () => {
        const res = await request(app).get('/animals')
        expect(res.body).toEqual([])
    })

    
    test('Se retorna todos os animais cadastrados', async () => {
        for(let i = 0; i < 7; i++) {
            const data = await request(app).post("/animals").send(mockAnimal) 
            mockDb.push(data.body)
        }
        const res = await request(app).get("/animals")

        expect(res.body).toEqual(mockDb)
    })
    
    test('Se os dados possuem todas as chaves', async () => {
        const res = await request(app).get("/animals")

        const keys = ["id","name","animal","weigth","color","breed","createdAt"]

        res.body.forEach(ele => {
            expect(Object.keys(ele).sort()).toEqual(keys.sort())
        })
    })
})