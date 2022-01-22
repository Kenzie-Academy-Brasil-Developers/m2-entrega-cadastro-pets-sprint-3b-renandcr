const request = require('supertest') 
const app = require('../app')

describe('Teste rota POST /animals', () => {


    test('Se o campo createdAt esta salvando como UTC', async () => {
        const now = new Date().toUTCString()
        const res = await request(app).post('/animals').send({"name": "teste"})
        expect(res.body.createdAt.slice(0, -6)).toMatch(now.slice(0, -6))
    })


    test('Se o campo createdAt for enviado na requisicao, deve ser ignorado.', async () => {
        const now = new Date().toUTCString()
        const res = await request(app).post('/animals').send({"name": "teste", "createdAt": "teste"})
        expect(res.body.createdAt.slice(0, -6)).toMatch(now.slice(0, -6))
    })

})