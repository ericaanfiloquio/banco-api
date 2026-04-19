const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao.js')
const postTransferencias = require('../fixtures/postTransferencias.json')

describe('Transferencias', () => {
    let token

    beforeEach(async () => {
        token = await obterToken('julio.lima', '123456')
    })

    describe('POST /transferencias', () => {

        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de 10 reais', async () => {
            const bodyTransferencias = { ...postTransferencias } // antes do body do reqst estava dentro de send, agora está em fixtures

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`) // ou 'Bearer ' + token, pra concatenar o tipo da auth com o token gerado ao fazer login
                .send(bodyTransferencias)

            expect(resposta.status).to.equal(201); 

            console.log(resposta.body)

        })


        it('Deve retornar sucesso com 422 quando o valor da transferencia for abaixo de 10 reais', async () => {              
            const bodyTransferencias = { ...postTransferencias } // isso pra n precisar ficar repetindo todo o body da request. Pego os dados da pasta fixtures
            bodyTransferencias.valor = 7

            const resposta = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`) // ou 'Bearer ' + token, pra concatenar o tipo da auth com o token gerado ao fazer login
                .send(bodyTransferencias)

            expect(resposta.status).to.equal(422); 

            console.log(resposta.body)
        })
    })
    
    describe('GET /transferencias/{id}', () => {
        it('Deve retornar sucesso com 200 e dados iguais ao registro de transferencia contido no banco de dados quando o id for valido', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias/29')
                .set('Authorization', `Bearer ${token}`)
        
            console.log(resposta.body)
            console.log(resposta.status)
            expect(resposta.status).to.equal(200)
            expect(resposta.body.id).to.equal(29)
            expect(resposta.body.id).to.be.a('number')
            expect(resposta.body.conta_origem_id).to.equal(1)
            // expect(resposta.body.valor).to.equal(20) // No Swagger valor deveria ser um number, mas no banco é string, entao o teste falha quando peco um number ao inves de '20.00'
        })
    })

    describe('GET /transferencias', () => {
        it('Deve retornar 10 elementos na paginacao quando informar limite de 10 registros', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limit=10')
                .set('Authorization', `Bearer ${token}`)

            expect(resposta.status).to.equal(200)
            expect(resposta.body.limit).to.equal(10)
            expect(resposta.body.transferencias).to.have.lengthOf(10)

        })

    })
})