const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config()


describe('Login', () => { // função anônima: não coloca nada no parênteses
    describe('POST /login', () => {
        it('Deve retornar 200 com um token quando usar credenciais validas', async () => {
            // console.log(process.env.BASE_URL)
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json') //set é para colocar o header
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                 })
            
            console.log(resposta.body)
            console.log(resposta.status)

            expect(resposta.body.token).to.be.a('string');
            expect(resposta.status).to.equal(200); //para ter acesso a um elemento dentro da resposta, usa essa sintax
        })
     })
})